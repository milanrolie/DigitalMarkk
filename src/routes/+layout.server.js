import { PUBLIC_DATOCMS_TOKEN } from "$env/static/public";

export async function load({ fetch }) {
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `${PUBLIC_DATOCMS_TOKEN}`,
    },
    body: JSON.stringify({
      query: QUERY,
    }),
  });

  const { data } = await response.json(QUERY);

  return data;
}

const QUERY = `
query AllProjects {
  allProjects {
    featuredImage {
      url
    }
    projectDate
    projectBranche
    conceptText(markdown: true)
    contextText(markdown: true)
    dateProject
    websiteLink
    resultText(markdown: true)
    projectLabel
    projectIntroduction(markdown: true)
    projectTitle
    projectImages {
      url
    }
    verticalVideo {
      url
    }
    verticalVideoMp4 {
      url
    }
    linkName
    slug
    generalProjectText(markdown: true)
  }
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
