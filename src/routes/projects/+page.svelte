<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import Nav from "$lib/components/structures/Navigation.svelte";
  import Projects from "$lib/components/structures/Projects.svelte";
  import Footer from "$lib/components/structures/Footer.svelte";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import Menu from "$lib/components/Menu.svelte";

  export let data;

  onMount(() => {
    gsap.from("#gsapLoadIn", {
      delay: 0,
      duration: 4,
      ease: "power4.inOut",
      y: 1000,
    });
  });
</script>

<PageTransition />
<Nav color="var(----dark)" />
<Menu />
<div id="gsapLoadIn">
  <Projects {data} />
</div>
<Footer />
