<script>
  import Logo from './Logo.svelte'
  import Heading from './Heading.svelte'
  import Button from './Button.svelte'
</script>

<section class="hero">
  <Logo/>
  <Heading/>
  <p class="paragraph">Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
  <div class="buttons">
    <Button color="green">Download <span>v1.3</span></Button>
    <Button color="purple">What is it?</Button>
  </div>
</section>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 3rem 0;
  }

  :global(.logo-link) {
    margin-bottom: 3rem;
  }

  :global(.heading) {
    margin-bottom: 1.5rem;
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

  @media only screen and (min-width: 26rem) {
    .buttons {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 48rem) {
    :global(.logo-link) {
      margin-bottom: 6.75rem;
    }
  }
</style>