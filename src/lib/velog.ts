import Parser from "rss-parser";

export async function getVelogPosts() {
  const parser = new Parser();
  try {
    const feed = await parser.parseURL('https://v2.velog.io/rss/@ykyk3125');
    return feed.items.map(item => {
      let descriptionText = '';
      if (item.contentSnippet) {
         descriptionText = item.contentSnippet.slice(0, 150) + '...';
      } else if (item.content) {
         descriptionText = item.content.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...';
      }
      
      const date = item.pubDate ? new Date(item.pubDate).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\. /g, '.').replace(/\.$/, '') : '';

      return {
        title: item.title || '',
        link: item.link || '',
        description: descriptionText,
        tags: ['Velog'],
        date: date,
        readTime: '3 min read'
      };
    });
  } catch (error) {
    console.error('Error fetching Velog RSS:', error);
    return [];
  }
}
