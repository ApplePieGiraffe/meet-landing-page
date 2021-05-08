<script>
  import Hero from './containers/Hero.svelte'
  import Divider from './components/Divider.svelte'
  import Feature from './containers/Feature.svelte'
  import Footer from './containers/Footer.svelte'

  gsap.registerPlugin(ScrollTrigger)
</script>

  <Hero/>
  <Divider id="1"/>
  <Feature/>
  <Divider id="2"/>
  <Footer/>