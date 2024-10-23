<script>
  import { onMount, onDestroy } from "svelte";

  let observer;

  onMount(() => {
    const elements = document.querySelectorAll(
      'img[data-fadeIn="true"], video[data-fadeIn="true"]'
    );

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // entry.target.style.transition = ".6s ease-in-out";
          entry.target.style.filter = "blur(0px)";
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    // onDestroy(() => {
    //   if (observer) {
    //     observer.disconnect();
    //   }
    // });
  });
</script>
