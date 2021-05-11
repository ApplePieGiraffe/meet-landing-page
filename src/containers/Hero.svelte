<script>
  import { onMount } from 'svelte'

  import Logo from '../components/Logo.svelte'
  import Heading from '../components/Heading.svelte'
  import Link from '../components/Link.svelte'

  // animations

  import { 
    heroContentAnimation, 
    heroAvatarsAnimation 
  } from '../scripts/timelines'

  // onMount(() => {
  //   heroContentAnimation()
  //   heroAvatarsAnimation()
  // })
</script>

<section class="hero">
  <Logo/>
  <div class="hero-content">
    <Heading/>
    <p class="paragraph hero-description">Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
    <div class="links">
      <Link href="/" color="green">Download <span>v1.3</span></Link>
      <Link href="/" color="purple">What is it?</Link>
    </div>
  </div>
  <div class="hero-side hero-side-left">
    <img src="/assets/images/shared/avatar-left-1.png" alt="">
    <img src="/assets/images/shared/avatar-left-2.png" alt="">
    <img src="/assets/images/shared/avatar-left-3.png" alt="">
    <img src="/assets/images/shared/avatar-left-4.png" alt="">
    <img src="/assets/images/shared/avatar-left-5.png" alt="">
    <img src="/assets/images/shared/avatar-left-6.png" alt="">
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content;
    grid-gap: 4rem 1rem;
    padding: 3rem 0;
  }

  :global(.logo-link) {
    grid-column: 1 / -1;
    justify-self: center;
  }

  .hero-content {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  :global(.hero-heading) {
    margin-bottom: 2rem;
  }

  .paragraph {
    max-width: 30rem;
    margin-bottom: 2rem;
    padding: 0 1.5rem;
    text-align: center;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  /* sides */

  .hero-side {
    grid-row: 3 / 4;
    display: grid;
    grid-template-columns: repeat(3, 55px);
    gap: .875rem 1rem;
    align-content: start;
    min-width: 0;
    height: 100%;
    overflow: hidden;
  }

  .hero-side img {
    width: 55px;
  }

  .hero-side-left {
    justify-content: end;
    padding-top: 1.5rem;
  }

  .hero-side-left img:nth-child(2),
  .hero-side-left img:nth-child(5) {
    margin-top: -1.5rem;
  }

  .hero-side-right {
    padding-top: 1.5rem;
  }

  .hero-side-right img:nth-child(1),
  .hero-side-right img:nth-child(3),
  .hero-side-right img:nth-child(4),
  .hero-side-right img:nth-child(6) {
    margin-top: -1.25rem;
  }

  @media only screen and (min-width: 26rem) {
    .hero {
      grid-gap: 4rem 2rem;
    }

    .links {
      flex-direction: row;
    }

    /* sides */

    .hero-side {
      grid-template-columns: repeat(3, 90px);
    }

    .hero-side img {
      width: 90px;
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
      padding-top: 3.75rem;
    }

    .hero-side-right img:nth-child(1),
    .hero-side-right img:nth-child(3),
    .hero-side-right img:nth-child(4),
    .hero-side-right img:nth-child(6) {
      margin-top: -3.25rem;
    }
  }

  @media only screen and (min-width: 48rem) {
    .hero {
      grid-template-columns: 1fr 36rem 1fr;
      grid-gap: 2.5rem 3.5rem;
      padding: 5rem 0;
    }

    .hero-content {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      padding-top: 1.5rem;
    }

    .paragraph {
      max-width: 36rem;
    }

    /* sides */

    .hero-side {
      grid-row: 2 / 3;
      grid-template-columns: repeat(3, 110px);
      gap: 1.75rem;
    }

    .hero-side-right {
      padding-top: 7rem;
    }

    .hero-side img {
      width: 110px;
    }
  }

  @media only screen and (min-width: 64rem) {
    .hero {
      grid-gap: 3.5rem 4.25rem;
      padding: 5rem 0 6.75rem;
    }

    .hero-content {
      padding-top: 3rem;
    }
  }
</style>