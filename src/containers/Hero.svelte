<script>
  import Logo from '../components/Logo.svelte'
  import Heading from '../components/Heading.svelte'
  import Button from '../components/Button.svelte'
</script>

<section class="hero">
  <Logo/>
  <div class="hero-side hero-side-left">
    <img src="/assets/images/shared/avatar-left-1.png" alt="">
    <img src="/assets/images/shared/avatar-left-2.png" alt="">
    <img src="/assets/images/shared/avatar-left-3.png" alt="">
    <img src="/assets/images/shared/avatar-left-4.png" alt="">
    <img src="/assets/images/shared/avatar-left-5.png" alt="">
    <img src="/assets/images/shared/avatar-left-6.png" alt="">
  </div>
  <div class="hero-content">
    <Heading/>
    <p class="paragraph">Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
    <div class="buttons">
      <Button color="green">Download <span>v1.3</span></Button>
      <Button color="purple">What is it?</Button>
    </div>
  </div>
  <div class="hero-side hero-side-right">
    <img src="/assets/images/shared/avatar-right-1.png" alt="">
    <img src="/assets/images/shared/avatar-right-2.png" alt="">
    <img src="/assets/images/shared/avatar-right-3.png" alt="">
    <img src="/assets/images/shared/avatar-right-4.png" alt="">
    <img src="/assets/images/shared/avatar-right-5.png" alt="">
    <img src="/assets/images/shared/avatar-right-6.png" alt="">
  </div>
</section>

<style>
  .hero {
    display: grid;
    grid-template-columns: 1fr minmax(0, 30rem) 1fr;
    grid-template-rows: min-content min-content;
    grid-row-gap: 3rem;
    min-height: 100vh;
    padding: 3rem 0;
  }

  :global(.logo-link) {
    grid-column: 1 / -1;
    justify-self: center;
  }

  .hero-content {
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  :global(.heading) {
    margin-bottom: 2rem;
  }

  .paragraph {
    max-width: 30rem;
    margin-bottom: 2rem;
    padding: 0 1.5rem;
    text-align: center;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .hero-side {
    display: grid;
    grid-template-columns: repeat(3, 110px);
    grid-column-gap: 2rem;
    grid-row-gap: 1.75rem;
    align-content: start;
    min-width: 0;
    height: 100%;
    /* background: papayawhip; */
    overflow: hidden;
  }

  .hero-side-left {
    justify-content: end;
    padding-top: 3.75rem;
  }

  .hero-side-left img:nth-child(2),
  .hero-side-left img:nth-child(5) {
    margin-top: -3.75rem;
  }

  .hero-side-right {
    padding-top: 7rem;
  }

  .hero-side-right img:nth-child(1),
  .hero-side-right img:nth-child(3),
  .hero-side-right img:nth-child(4),
  .hero-side-right img:nth-child(6) {
    margin-top: -3.25rem;
  }

  @media only screen and (min-width: 26rem) {
    .hero {
      grid-template-columns: 1fr minmax(0, 32rem) 1fr;
    }

    .buttons {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 48rem) {
    .hero {
      grid-template-columns: 1fr 36rem 1fr;
      grid-gap: 3.5rem 4.25rem;
      padding: 5rem 0;
    }

    .hero-content {
      padding-top: 3rem;
    }

    .paragraph {
      max-width: 36rem;
    }
  }
</style>