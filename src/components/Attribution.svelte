<script>
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'

  let timeline

  onMount(() => {
    timeline = gsap.timeline({ paused: true })
    timeline
      .to('.attribution-btn', { duration: .5, x: 20, y: -65 })
      .from('.bubble-wrapper', { 
        duration: .5, 
        scale: .6, 
        x: -60, 
        y: 120, 
        opacity: 0 
      }, 0)
      .from('.apple', { 
        duration: .7, 
        ease: 'power2.out',
        scale: .6, 
        rotate: 120, 
        x: -60, 
        y: -10,
        opacity: 0
      }, 0)
      .from('.pie', { 
        duration: .7, 
        ease: 'power2.out',
        scale: .6, 
        rotate: -120, 
        x: -60, 
        y: 120,
        opacity: 0 
      }, 0)
  })
</script>

<div 
  class="attribution" 
  in:fly="{{ duration: 250, y: 100 }}" 
  out:fade="{{ duration: 150 }}">
  <img class="apple" src="/assets/images/shared/apple.png" alt="">
  <img class="pie" src="/assets/images/shared/pie.png" alt="">
  <button class="attribution-btn" on:click={() => timeline.play()}>
    <img class="giraffe" src="/assets/images/shared/giraffe.png" alt="">
  </button>
  <div class="bubble-wrapper">
    <img class="bubble" src="/assets/images/shared/bubble.png" alt="">
    <div class="attribution-text">
      <span>Challenge by</span>
      <a href="/" target="_blank">Frontend Mentor</a>
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
  }

  .pie {
    position: absolute;
    bottom: 1.5rem;
    left: 8rem;
    width: 4.5rem;
  }

  .attribution-btn {
    position: absolute;
    right: -7rem;
    bottom: -5rem;
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