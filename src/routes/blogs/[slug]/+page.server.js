import { PUBLIC_DATOCMS_TOKEN } from "$env/static/public";

export async function load({ fetch, params }) {
  const { slug } = params;

  const blogQuery = `
  query Blog($slug: String) {
    blog(filter: { slug: { eq: $slug } }) {
          blogText(markdown: true)
          date
          featuredImage {
            url
          }
          slug
          readingTime
          title
        }
      }
  `;

  const allBlogsQuery = `
  query Allblogs {
    allBlogs {
      blogText(markdown: true)
      date
      featuredImage {
        url
      }
      slug
      title
      readingTime
    }
  }
  `;

  const blogResponse = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PUBLIC_DATOCMS_TOKEN}`, // Ensure correct Authorization header format
      "Content-Type": "application/json", // Set content type
    },
    body: JSON.stringify({
      query: blogQuery,
      variables: { slug },
    }),
  });

  const allBlogsResponse = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PUBLIC_DATOCMS_TOKEN}`, // Ensure correct Authorization header format
      "Content-Type": "application/json", // Set content type
    },
    body: JSON.stringify({
      query: allBlogsQuery,
    }),
  });

  const blogData = await blogResponse.json();
  const allBlogsData = await allBlogsResponse.json();

  return { blogData, allBlogsData };
}
