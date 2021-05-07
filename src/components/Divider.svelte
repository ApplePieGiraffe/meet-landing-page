<script>
  import { onMount } from 'svelte'

  gsap.registerPlugin(ScrollTrigger)

  onMount(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.divider',
        start: 'top 70%',
        toggleActions: 'play none none reset'
      }
    })
    timeline
      .from('.divider-line', { duration: .7, opacity: .5, scaleY: 0 })
      .from('.divider-circle', { duration: .7, scale: 0 }, '-=.5')
      .from('.divider-text', { duration: 1, opacity: 0 }, '-=.1')
  })

  export let text
</script>

<div class="divider">
  <div class="divider-line"></div>
  <div class="divider-circle">
    <span class="divider-text">{text}</span>
  </div>
</div>

<style>
  .divider {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 8.75rem;
  }

  .divider-line {
    width: 1px;
    height: 100%;
    transform-origin: top center;
    background: hsl(240, 10%, 57%, .25);
  }

  .divider-circle {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border: 1px solid hsl(240, 10%, 57%, .25);
    border-radius: 50%;
  }

  .divider-text {
    color: var(--color-grey);
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.625;
  }
</style>