<script>
  import { onMount } from 'svelte'
  import Scrollbar from 'smooth-scrollbar'

  import Scroll from './components/Scroll.svelte'
  import Hero from './containers/Hero.svelte'
  import Divider from './components/Divider.svelte'
  import Feature from './containers/Feature.svelte'
  import Footer from './containers/Footer.svelte'

  import { 
    heroContentAnimation, 
    heroAvatarsAnimation,
    featureImgsAnimation,
    featureContentAnimation,
    footerAnimation,
    dividerAnimation
  } from './scripts/timelines'

  let showScroll
  
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scroller = document.body

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
    })

    ScrollTrigger.defaults({ 
			scroller: scroller,
			pinType: 'transform'
		})

    heroContentAnimation()
    heroAvatarsAnimation()
    dividerAnimation(1)
    featureImgsAnimation()
    featureContentAnimation()
    dividerAnimation(2)
    footerAnimation()
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