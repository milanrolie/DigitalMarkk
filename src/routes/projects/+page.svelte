<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import Navigation from "$lib/components/structures/Navigation.svelte";
  import Projects from "$lib/components/structures/Projects.svelte";
  import Footer from "$lib/components/structures/Footer.svelte";
  import PageTransition from "$lib/components/fragments/PageTransition.svelte";

  export let data;

  onMount(() => {
    gsap.from("#gsapLoadIn", {
      delay: 0,
      duration: 4,
      ease: "power4.out",
      opacity: 0,
    });
  });
</script>

<PageTransition />
<Navigation color="var(--dark)" />
<div id="gsapLoadIn">
  <Projects {data} />
</div>
<Footer />
