import type { TestimonialData } from "./types";

interface GoogleReviewAuthor {
  displayName: string;
}

interface GoogleReview {
  rating: number;
  text?: { text: string };
  authorAttribution: GoogleReviewAuthor;
}

interface GooglePlaceResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
}

export interface GoogleReviewsResult {
  reviews: TestimonialData[];
  overallRating: number;
  totalReviewCount: number;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export async function getGoogleReviews(): Promise<GoogleReviewsResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "reviews,rating,userRatingCount",
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      console.error("Google Places API error:", res.status);
      return null;
    }

    const data: GooglePlaceResponse = await res.json();

    if (!data.reviews?.length) {
      return null;
    }

    const reviews: TestimonialData[] = data.reviews
      .filter((r) => r.text?.text)
      .map((r) => ({
        quote: r.text!.text,
        name: r.authorAttribution.displayName,
        role: "",
        initials: getInitials(r.authorAttribution.displayName),
        rating: r.rating,
      }));

    return {
      reviews,
      overallRating: data.rating ?? 5,
      totalReviewCount: data.userRatingCount ?? reviews.length,
    };
  } catch (err) {
    console.error("Failed to fetch Google reviews:", err);
    return null;
  }
}
