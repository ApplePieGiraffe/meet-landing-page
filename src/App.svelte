<script>
  import { onMount } from 'svelte'
  // import Scrollbar from 'smooth-scrollbar'

  import Scroll from './components/Scroll.svelte'
  import Hero from './containers/Hero.svelte'
  import Divider from './components/Divider.svelte'
  import Feature from './containers/Feature.svelte'
  import Footer from './containers/Footer.svelte'
  
  // onMount(() => {
  //   gsap.registerPlugin(ScrollTrigger)

  //   const smoothScroll = Scrollbar.init(document.querySelector('body'))

  //   ScrollTrigger.scrollerProxy('body', {
  //     scrollTop(value) {
  //       if (arguments.length) {
  //         smoothScroll.scrollTop = value;
  //       }
  //       return smoothScroll.scrollTop
  //     }
  //   })
  // })

  let showScroll = true

  window.addEventListener('scroll', (e) => {
    showScroll = window.scrollY === 0 ? true : false
  })
</script>

{#if showScroll}
  <Scroll/>
{/if}
<Hero/>
<Divider id="1"/>
<Feature/>
<Divider id="2"/>
<Footer/>