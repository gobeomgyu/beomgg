import { XMLParser } from 'fast-xml-parser';

export async function getVelogPosts() {
  try {
    const response = await fetch('https://v2.velog.io/rss/@ykyk3125', {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.status}`);
    }
    
    const xmlData = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
    });
    const parsedData = parser.parse(xmlData);
    
    const items = parsedData?.rss?.channel?.item || [];
    const itemsArray = Array.isArray(items) ? items : [items];
    
    return itemsArray.map((item: any) => {
      let descriptionText = '';
      if (item.description) {
         descriptionText = item.description.replace(/<[^>]*>?/gm, '').trim().slice(0, 150) + '...';
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
