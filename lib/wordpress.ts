const API_URL = "http://localhost/wp-headless/server/wp-json/wp/v2";


export async function getPosts() {

  const res = await fetch(
    `${API_URL}/posts`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return res.json();
}



export async function getPost(slug: string) {

  const res = await fetch(
    `${API_URL}/posts?slug=${slug}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );


  const data = await res.json();

  return data.length > 0 ? data[0] : null;
}