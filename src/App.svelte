<script>
  import { onMount } from 'svelte'
  import Scrollbar from 'smooth-scrollbar'

  import Scroll from './components/Scroll.svelte'
  import Attribution from './components/Attribution.svelte'
  import Hero from './containers/Hero.svelte'
  import Divider from './components/Divider.svelte'
  import Feature from './containers/Feature.svelte'
  import Footer from './containers/Footer.svelte'

  import { initAnimations } from './scripts/animations'

  let showScroll = true
  
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scroller = document.querySelector('.scroll-container')

    const smoothScroll = Scrollbar.init(
      scroller,
      { damping: 0.1, delegateTo: document, alwaysShowTracks: true }
    )

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          smoothScroll.scrollTop = value
        }
        return smoothScroll.scrollTop
      }
    })

    smoothScroll.addListener(() => {
      ScrollTrigger.update()
      showScroll = smoothScroll.scrollTop === 0 ? true : false
    })

    ScrollTrigger.defaults({ scroller: scroller })

    initAnimations()
  })
</script>

{#if showScroll}
  <Scroll/>
  <Attribution/>
{/if}
<div class="scroll-container">
  <Hero/>
  <Divider id="1"/>
  <Feature/>
  <Divider id="2"/>
  <Footer/>
</div>