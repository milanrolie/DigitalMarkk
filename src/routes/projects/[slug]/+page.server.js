import { PUBLIC_DATOCMS_TOKEN } from "$env/static/public";

export async function load({ fetch, params }) {
  const { slug } = params;

  const projectQuery = `
  query Project($slug: String) {
    project(filter: { slug: { eq: $slug } }) {
              conceptText(markdown: true)
              contextText(markdown: true)
              dateProject
              projectTitle
              featuredImage {
                url
              }
              linkName
              projectImages {
                url
              }
              projectIntroduction(markdown: true)
              projectLabel
              projectTitle
              resultText(markdown: true)
              slug
              verticalVideo {
                url
              }
              generalProjectText(markdown: true)
            }
          }
  `;

  const allProjectsQuery = `
  query Allprojects {
    allProjects {
      featuredImage {
        url
      }
      conceptText(markdown: true)
      contextText(markdown: true)
      dateProject
      websiteLink
      resultText(markdown: true)
      projectLabel
      projectIntroduction(markdown: true)
      projectTitle
      projectBranche
      projectImages {
        url
      }
      verticalVideo {
        url
      }
      linkName
      slug
      generalProjectText(markdown: true)
    }
  }
  `;

  const projectResponse = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PUBLIC_DATOCMS_TOKEN}`, // Ensure correct Authorization header format
      "Content-Type": "application/json", // Set content type
    },
    body: JSON.stringify({
      query: projectQuery,
      variables: { slug },
    }),
  });

  const allProjectsResponse = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PUBLIC_DATOCMS_TOKEN}`, // Ensure correct Authorization header format
      "Content-Type": "application/json", // Set content type
    },
    body: JSON.stringify({
      query: allProjectsQuery,
    }),
  });

  const projectData = await projectResponse.json();
  const allProjectsData = await allProjectsResponse.json();

  return { projectData, allProjectsData };
}
