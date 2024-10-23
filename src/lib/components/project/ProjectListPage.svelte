<script>
  export let data;
</script>

<section class="project-list">
  <ul class="project-list__list">
    <div class="list__data">
      <h4 class="data__item">Project</h4>
      <h4 class="data__item">Klant</h4>
      <h4 class="data__item hide-mobile">Jaar</h4>
      <h4 class="data__item align-right hide-mobile">Branche</h4>
    </div>
    {#each data.allProjectsData.data.allProjects as project, index}
      <a href={`/projects/${project.slug}`} class="project__link" key={index}>
        <li class="list__project">
          <h3 class="project__title project__info">{project.projectTitle}</h3>
          <p class="project__info">{project.projectLabel}</p>
          <p class="project__info hide-mobile">{project.dateProject}</p>
          <p class="align-right project__info hide-mobile">
            {project.projectBranche}
          </p>
          <video muted autoplay playsinline loop>
            <source src={project.verticalVideo.url} type="video/webm" />
          </video>
        </li>
      </a>
    {/each}
  </ul>
</section>

<style>
  .project-list {
    position: relative;
    width: 100%;
    background-color: var(--light);
    padding: var(--padding-large);
    z-index: 2;
    padding-bottom: 15svh;
    z-index: 150;
  }

  .list__data {
    display: grid;
    grid-template-columns: 50.5% 25% 10% 14%;
    padding: var(--padding);
    padding-bottom: 0.2rem;
  }

  .data__item {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 400;
  }

  .align-right {
    text-align: right;
  }

  .project-list__list {
    position: relative;
    gap: 1rem;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    border-bottom: 1px solid var(--dark);
  }

  .project__link {
    width: 100%;
  }

  .list__project {
    display: grid;
    grid-template-columns: 50.5% 25% 10% 14%;
    align-items: center;
    padding: var(--padding-small);
    border-top: 1px solid var(--dark);
    overflow: visible;
  }

  .list__project:hover {
    background-color: #f0f0f0;
  }

  .list__project:hover .project__info {
    filter: blur(1px);
  }

  .project__title {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--main-bright);
  }

  .project__info {
    transition: 0.6s;
  }

  .list__project:hover video {
    opacity: 1;
  }
  video {
    position: absolute;
    top: 13%;
    right: 51%;
    width: 30vw;
    height: 100%;
    height: autp;
    /* aspect-ratio: 4/3; */
    opacity: 0;
    object-fit: cover;
    z-index: 3;
    transition: 0.4s;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    video {
      display: none;
    }

    .project-list {
      padding: var(--padding-small);
      padding-bottom: 15svh;
    }

    .list__data {
      display: grid;
      grid-template-columns: 40% 60%;
      padding: var(--padding-small);
      padding-bottom: 0.2rem;
    }

    .list__project {
      grid-template-columns: 40% 60%;
      padding: var(--padding-small);
    }

    .project__title {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 400;
      color: var(--main-bright);
    }

    .project__info {
      transition: 0.6s;
      font-size: 0.8rem;
    }

    .hide-mobile {
      display: none;
    }
  }
</style>
