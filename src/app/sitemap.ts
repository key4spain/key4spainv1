import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://key4spain.com",
      lastModified: new Date("2026-05-10"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://key4spain.com/privacy",
      lastModified: new Date("2026-05-10"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://key4spain.com/terms",
      lastModified: new Date("2026-05-10"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
