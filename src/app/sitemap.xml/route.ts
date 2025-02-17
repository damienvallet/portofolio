function getSitemap() {
  const map = [
    {
      url: "https://damienvallet.github.io/portofolio",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];

  return `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${map
          .map(
            (item) => `
            <url>
                <loc>${item.url}</loc>
                <lastmod>${item.lastModified.toISOString()}</lastmod>
                <changefreq>${item.changeFrequency}</changefreq>
                <priority>${item.priority}</priority>
            </url>
        `
          )
          .join("")}
            </urlset>`;
}

export async function GET() {
  return new Response(getSitemap(), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}