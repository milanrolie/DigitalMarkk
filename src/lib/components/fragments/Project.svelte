<script>
  export let project;
</script>

<a href={`/projects/${project.slug}`}>
  <div class="project-wrapper">
    {#if project.projectTitle !== "Stern Films"}
      <img src={project.featuredImage.url} alt="" />
    {/if}
    <video playsinline loop muted autoplay src={project.verticalVideo.url}
    ></video>
    <div class="overlay-animation"></div>
  </div>
</a>

<p class="subscript">
  <span class="project__title">{project.projectTitle}</span>
  {project.projectLabel}
</p>

<style>
  .project-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    clip-path: inset(0% 0% 0% 0% round 0rem);
    transition: 0.2s ease-out;
  }

  .project-wrapper:hover {
    clip-path: inset(1% 1% 0% 0% round 0rem);
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.4s ease-in-out;
    z-index: 5;
  }

  .project-wrapper:hover img {
    opacity: 0;
  }

  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: none;
    transition: 0.3s;
    z-index: 3;
  }

  .subscript {
    position: absolute;
    bottom: -2.5rem;
    left: 0;
    color: var(--light);
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 200;
    margin: 0.5rem 0;
  }

  .project__title {
    margin-right: 3rem;
  }

  .ball {
    transform: scale(0.7) translateY(5.5px);
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  @media (max-width: 768px) {
    .project-wrapper {
      width: 100%;
      height: 100%;
    }

    .subscript {
      position: absolute;
      bottom: -2rem;
      left: 0;
      color: var(--light);
      text-transform: uppercase;
      font-size: 0.7rem;
      font-weight: 200;
    }

    video {
      aspect-ratio: 1;
      height: 100%;
    }
  }
</style>
