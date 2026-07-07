const API_URL = "http://localhost/wp-headless/server/wp-json/wp/v2";

// All posts
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


// single post 
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

// all slills
export async function getSkills() {
  const res = await fetch(
    `${API_URL}/skill`,
    {
      next: {
        revalidate: 60,
      }
    }
  );
  return res.json()
}

// all missons
export async function getMissions() {
  const res = await fetch(
    `${API_URL}/mission?_embed`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return res.json();
}


// all mission categories
export async function getMissionCategories() {
  const res = await fetch(
    `${API_URL}/mission-categorie`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return res.json();
}


// get missions by category
export async function getMissionsByCategory(categoryId: number) {
  const res = await fetch(
    `${API_URL}/mission?mission_category=${categoryId}&_embed`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return res.json();
}