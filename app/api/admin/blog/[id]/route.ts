import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }

  return NextResponse.json(data);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  // Set published_at when publishing for the first time
  if (body.published && !body.published_at) {
    // Check if it was previously unpublished
    const { data: existing } = await supabase
      .from("blog_posts")
      .select("published_at")
      .eq("id", id)
      .single();

    if (!existing?.published_at) {
      body.published_at = new Date().toISOString();
    }
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .update(body)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${data.slug}`);

  return NextResponse.json(data);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Clean up featured image from storage
  const { data: post } = await supabase
    .from("blog_posts")
    .select("featured_image_url")
    .eq("id", id)
    .single();

  if (post?.featured_image_url?.includes("supabase.co")) {
    const path = post.featured_image_url.split("/blog-images/")[1];
    if (path) {
      await supabase.storage.from("blog-images").remove([path]);
    }
  }

  const { error } = await supabase.from("blog_posts").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  revalidatePath("/blog");

  return NextResponse.json({ success: true });
}
