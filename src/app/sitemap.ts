
import type { MetadataRoute } from "next";

const baseUrl = "https://salahayash.vercel.app";

const paths = [
  "",
  "/projects/aws",
  "/projects/cctv",
  "/projects/iot",
  "/projects/iqra",
  "/projects/rental",
  "/projects/wanderlust",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    (["en", "ar"] as const).map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,

      alternates: {
        languages: {
          en: `${baseUrl}/en${path}`,
          ar: `${baseUrl}/ar${path}`,
        },
      },
    }))
  );
}
