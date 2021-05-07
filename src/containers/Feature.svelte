<script>
  import { onMount } from 'svelte'

  onMount(() => {
    const timeline = gsap.timeline()

    timeline
      .from('.feature-img-container:nth-child(1)', { 
        duration: 1,
        maxWidth: 0
      }, .5)
      .from('.feature-img-container:nth-child(2)', { 
        duration: 1,
        maxHeight: 0
      }, .5)
      .from('.feature-img-container:nth-child(3)', { 
        duration: 1,
        maxWidth: 0
      }, .5)
      .from('.feature-img-container:nth-child(4)', { 
        duration: 1,
        maxHeight: 0
      }, .5)
      .from('.feature-imgs img', { 
        duration: 1,
        scale: 1.5,
        // opacity: 0, 
        // stagger: .3
      }, .5)
  })
</script>

<section class="feature">
  <div class="feature-imgs">
    <div class="feature-img-container">
      <img 
        src="/assets/images/shared/image-woman-in-videocall.jpg" 
        alt="woman in videocall"
      >
    </div>
    <div class="feature-img-container">
      <img 
        src="/assets/images/shared/image-women-videochatting.jpg" 
        alt="women chatting in videocall"
      >
    </div>
    <div class="feature-img-container">
      <img 
        src="/assets/images/shared/image-men-in-meeting.jpg" 
        alt="men in videocall meeting"
      >
    </div>
    <div class="feature-img-container">
      <img 
        src="/assets/images/shared/image-man-texting.jpg" 
        alt="man texting"
      >
    </div>
  </div>
</section>

<style>
  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 4rem 1.5rem;
  }

  .feature-imgs {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 16rem));
    gap: 1.5rem;
    min-height: 15.5rem;
  }

  .feature-img-container {
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: .5rem;
    overflow: hidden;
  }

  .feature-img-container:nth-child(3) {
    justify-self: end;
  }

  .feature-img-container:nth-child(4) {
    align-self: end;
  }

  .feature-imgs img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 48rem) {
    .feature-imgs {
      grid-template-columns: repeat(4, minmax(0, 16rem));
    }
  }
</style>