<script>
  import { onMount } from 'svelte'
  import Link from '../components/Link.svelte'
  import { footerAnimation } from '../scripts/timelines'

  onMount(() => {
    footerAnimation()
  })
</script>

<footer class="footer">
  <div class="footer-content">
    <h2 class="heading footer-heading">Experience more together</h2>
    <p class="paragraph footer-description">Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
    <Link href="/" color="purple">Download <span>v1.3</span></Link>
  </div>
</footer>

<style>
  .footer {
    margin-top: -2rem;
    background: 
      linear-gradient(hsl(192, 37%, 48%, .8), hsl(192, 37%, 48%, .8)), 
      url('/assets/images/mobile/image-footer.jpg');
    background-size: cover;
  }

  .footer-content {
    max-width: 70rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5.75rem 1.5rem 4.75rem;
    color: var(--color-white);
    text-align: center;
  }

  .footer-heading {
    max-width: 15rem;
    margin-bottom: 1.5rem;
    color: inherit;
    font-size: 2rem;
    line-height: 1.125;
  }

  .footer-description {
    max-width: 35rem;
    margin-bottom: 2rem;
    color: inherit;
  }

  @media (min-width: 48rem) {
    .footer {
      background: 
      linear-gradient(hsl(192, 37%, 48%, .8), hsl(192, 37%, 48%, .8)), 
      url('/assets/images/tablet/image-footer.jpg');
      background-size: cover;
    }

    .footer-content {
      padding-bottom: 4rem;
    }

    .footer-heading {
      max-width: 22rem;
      font-size: 2.5rem;
      line-height: 1.1;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 64rem) {
    .footer {
      background: 
      linear-gradient(hsl(192, 37%, 48%, .8), hsl(192, 37%, 48%, .8)), 
      url('/assets/images/desktop/image-footer.jpg');
      background-size: cover;
      background-position: center;
    }

    .footer-content {
      flex-direction: row;
      justify-content: space-between;
      text-align: start;
      padding: 7.25rem 2rem 6.5rem;
    }

    .footer-heading {
      margin-bottom: 0;
    }

    .footer-description {
      max-width: 22rem;
      margin-bottom: 0;
    }
  }
</style>