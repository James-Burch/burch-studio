import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-bg">
      <div className="animate-pulse">
        <Image
          src="/logos/icon-white-accent.svg"
          alt="Loading"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
}
