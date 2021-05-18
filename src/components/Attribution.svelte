<script>
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  import { attributionAnimation } from '../scripts/animations'

  let animation
  let pop = new Audio('/assets/audio/pop.mp3')
  let whoosh = new Audio('/assets/audio/whoosh.mp3')
  
  onMount(() => {
    animation = attributionAnimation()
  })

  function toggleAnimation() {
    if (animation.reversed()) {
      animation.timeScale(1).play()
      setTimeout(() => {
        pop.play()
      }, 350)
    } else {
      animation.timeScale(1.5).reverse()
      setTimeout(() => {
        whoosh.play()
      }, 300)
    }
  }
</script>

<div 
  class="attribution" 
  in:fly="{{ duration: 250, y: 100 }}" 
  out:fade="{{ duration: 150 }}">
  <img class="apple" src="/assets/images/shared/attribution/apple.png" alt="">
  <img class="pie" src="/assets/images/shared/attribution/pie.png" alt="">
  <button 
    class="attribution-btn" 
    aria-label="toggle attribution" 
    on:click={toggleAnimation}
  >
    <img class="giraffe" src="/assets/images/shared/attribution/giraffe.png" alt="">
  </button>
  <div class="bubble-wrapper">
    <img class="bubble" src="/assets/images/shared/attribution/bubble.png" alt="">
    <div class="attribution-text">
      <span>Challenge by</span>
      <a 
        href="https://www.frontendmentor.io/solutions/meet-landing-page-svelte-gsap-3r4x3DG5v" 
        target="_blank"
      >
        Frontend Mentor
      </a>
      <span>Coded by</span>
      <a 
        href="https://www.frontendmentor.io/profile/ApplePieGiraffe" 
        target="_blank">
        ApplePieGiraffe
      </a> 
    </div>
  </div>
</div>

<style>
  .attribution {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  .apple {
    position: absolute;
    bottom: 14.5rem;
    left: 1.25rem;
    width: 3rem;
    transform-origin: center;
  }

  .pie {
    position: absolute;
    bottom: 1.5rem;
    left: 8rem;
    width: 4.5rem;
    transform-origin: center;
  }

  button {
    position: absolute;
    right: -7rem;
    bottom: -5rem;
    z-index: 1;
    border: none;
    background: none;
    cursor: pointer;
  }

  .bubble-wrapper {
    position: absolute;
    bottom: 11rem;
    left: 5rem;
    width: 15rem;
  }

  .bubble {
    width: 100%;
  }

  .attribution-text {
    position: absolute;
    top: 48%;
    left: 48%;
    transform: translate(-50%, -50%);
    color: hsl(45, 4%, 20%);
    font-family: 'Caveat Brush', cursive;
    font-size: 1.125rem;
    text-align: center;
  }

  .attribution a {
    display: block;
    margin-top: -5px;
    color: hsl(60, 92%, 90%);
    font-size: 1.375rem;
    text-decoration: none;
    white-space: nowrap;
  }

  .attribution a:hover {
    text-decoration: underline;
  }
</style>