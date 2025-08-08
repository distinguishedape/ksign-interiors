import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function getYouTubeIdFromUrl(input: string): string | null {
  if (!input) return null;
  // If an ID is provided directly
  const idLike = /^[A-Za-z0-9_-]{11}$/;
  if (idLike.test(input)) return input;

  try {
    const url = new URL(input);
    const host = url.hostname.replace("www.", "");

    if (host.includes("youtu.be")) {
      const parts = url.pathname.split("/").filter(Boolean);
      const id = parts[0];
      return idLike.test(id) ? id : null;
    }

    if (host.includes("youtube.com")) {
      if (url.pathname.startsWith("/watch")) {
        const v = url.searchParams.get("v");
        return v && idLike.test(v) ? v : null;
      }
      if (url.pathname.startsWith("/embed/")) {
        const id = url.pathname.split("/")[2];
        return id && idLike.test(id) ? id : null;
      }
      if (url.pathname.startsWith("/shorts/")) {
        const id = url.pathname.split("/")[2];
        return id && idLike.test(id) ? id : null;
      }
    }
  } catch (e) {
    // Not a valid URL, fall through
  }

  const match = input.match(/(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match?.[1] ?? null;
}

interface YouTubeEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url, title = "YouTube video", className }) => {
  const id = getYouTubeIdFromUrl(url);
  if (!id) return null;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&autohide=1&showinfo=0`;

  return (
    <AspectRatio ratio={16 / 9} className={className}>
      <iframe
        src={embedUrl}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full rounded-md border border-border"
      />
    </AspectRatio>
  );
};

export default YouTubeEmbed;
