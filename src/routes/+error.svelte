<script>
  import { onMount } from "svelte";

  let circleX = 0;
  let circleY = 0;

  // Function to update circle position

  onMount(() => {
    window.addEventListener("mousemove", moveCircle);
  });
  function moveCircle(event) {
    circleX = event.clientX - 150; // Adjust based on circle size for centering
    circleY = event.clientY - 150; // Adjust based on circle size for centering
  }
</script>

<section class="error" on:mousemove={moveCircle}>
  <h1>404</h1>
  <div
    class="circle"
    style="transform: translate({circleX}px, {circleY}px);"
  ></div>
</section>

<style>
  .error {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .error::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: 1;
  }

  .circle {
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    pointer-events: none;
    mix-blend-mode: difference;
    background: #fff;
    z-index: 2;
    clip-path: circle(50%);
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: #000;
  }
</style>
