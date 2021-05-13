<script>
  import { fade } from 'svelte/transition'
</script>

<div class="scroll" transition:fade="{{ duration: 150 }}">
  <h4 class="scroll-text"><span>Scroll</span> to see stuff.</h4>
  <div class="mouse">
    <div class="mouse-wheel"></div>
  </div>
</div>

<style>
  .scroll {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .scroll-text {
    margin-bottom: 1rem;
    color: var(--color-sea-green);
    font-size: 1.5rem;
    font-weight: 400;
  }

  .scroll span {
    color: var(--color-dark-purple);
  }

  .mouse {
    position: relative;
    width: 2rem;
    height: 3.5rem;
    border: 3px solid var(--color-sea-green);
    border-radius: 10rem;
  }

  .mouse-wheel {
    position: absolute;
    top: 20%;
    left: 39%;
    transform-origin: top center;
    width: 4px;
    height: 6px;
    border-radius: 10rem;
    background: var(--color-dark-purple);
    animation: scroll 1.5s ease-in-out infinite;
  }

  @keyframes scroll {
    0% {
      height: 6px;
      transform: translate(0);
      opacity: 0;
    }
    15% {
      opacity: 0;
    }
    50% {
      height: 12px;
      opacity: 1;
    }
    100% {
      transform: translateY(8px);
      opacity: 0;
    }
  }
</style>