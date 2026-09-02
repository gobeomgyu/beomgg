export async function getVelogPosts() {
  try {
    const query = `
      query Posts($username: String!) {
        posts(username: $username) {
          id
          title
          short_description
          url_slug
          released_at
          tags
        }
      }
    `;

    const response = await fetch('https://v2.velog.io/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operationName: 'Posts',
        variables: { username: 'ykyk3125' },
        query,
      }),
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch Velog posts: ${response.status}`);
    }
    
    const result = await response.json();
    const itemsArray = result.data?.posts || [];
    
    return itemsArray.map((item: any) => {
      let descriptionText = '';
      if (item.short_description) {
         descriptionText = item.short_description.replace(/<[^>]*>?/gm, '').trim().slice(0, 150) + '...';
      }
      
      const date = item.released_at ? new Date(item.released_at).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\. /g, '.').replace(/\.$/, '') : '';

      return {
        title: item.title || '',
        link: `https://velog.io/@ykyk3125/${item.url_slug}`,
        description: descriptionText,
        tags: item.tags && item.tags.length > 0 ? item.tags : ['Velog'],
        date: date,
        readTime: '3 min read'
      };
    });
  } catch (error) {
    console.error('Error fetching Velog posts:', error);
    return [];
  }
}
