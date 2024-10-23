<script>
  export let blog;
</script>

<a href={`/blogs/${blog.slug}`} class="blog-link">
  <div class="blog__width">
    <figure class="blog__figure">
      <div class="dark-overlay"></div>
      <img src={blog.featuredImage.url} alt={blog.title} class="blog__image" />
      <h3 class="blog__title">{blog.title}</h3>
    </figure>
  </div>
</a>

<style>
  .blog__width {
    width: 100%;
    scroll-snap-align: start;
  }

  .blog__figure {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    aspect-ratio: 1;
    z-index: 1;
  }

  .dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    z-index: 1;
    pointer-events: none;
  }

  .blog__image {
    position: relative;

    height: 100%;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1;
    transition: transform 0.3s;
  }

  .blog__image:hover {
    transform: scale(1.05);
  }

  .blog__title {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 0.6rem;
    margin-bottom: 0.3rem;
    color: var(--light);
    z-index: 2;
  }

  .blog-link {
    text-decoration: none;
    color: currentColor;
  }

  @media (max-width: 768px) {
    .blog__width {
      width: 100%;
    }

    .blog__image {
      filter: grayscale(0);
      height: 100%;
    }

    .blog__title {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 400;
      margin: 0.5rem 0;
    }

    .blog:first-of-type {
      margin-left: 2rem;
    }
  }
</style>
