import { getAllPosts } from "@/lib/keystatic";

const SITE_URL = 'https://crimson-gravity.netlify.app'; // Placeholder, user should update
const SITE_TITLE = 'Подбрано от Дани';
const SITE_DESCRIPTION = 'Книги, продукти и идеи, които вдъхновяват.';

export async function GET() {
    const posts = await getAllPosts();

    // Sort posts by date descending (assuming date is YYYY-MM-DD or similar text)
    // Note: Keystatic date field is text, ideally needs parsing if not sortable string
    // But for now we just map.

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
        <title>${SITE_TITLE}</title>
        <link>${SITE_URL}</link>
        <description>${SITE_DESCRIPTION}</description>
        <language>bg</language>
        ${posts.map((post) => `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${SITE_URL}/blog/${post.slug}</link>
            <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
            <description><![CDATA[${post.subtitle || ''}]]></description>
            <pubDate>${new Date().toUTCString() /* Ideally use post.date */}</pubDate>
            ${post.image ? `<enclosure url="${SITE_URL}${post.image}" length="0" type="image/jpeg" />` : ''}
        </item>
        `).join('')}
    </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
