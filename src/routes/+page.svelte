<script>
  import About from "$lib/components/structures/About.svelte";
  import Menu from "$lib/components/fragments/Menu.svelte";
  import Navigation from "$lib/components/structures/Navigation.svelte";
  import Footer from "$lib/components/structures/Footer.svelte";
  import Blogs from "$lib/components/structures/Blogs.svelte";
  import SiteHeader from "$lib/components/structures/SiteHeader.svelte";
  import PageTransition from "$lib/components/fragments/PageTransition.svelte";
  import FeaturedProjects from "$lib/components/structures/FeaturedProjects.svelte";
  import Strategy from "$lib/components/structures/Strategy.svelte";
  import Services from "$lib/components/structures/Services.svelte";
  import BigText from "$lib/components/fragments/BigText.svelte";

  export let data;
</script>

<PageTransition />
<Navigation color="var(--light)" />
<SiteHeader />
<About />
<Services />
<BigText />
<FeaturedProjects {data} />
<Strategy />
<Blogs {data} />
<Footer />
