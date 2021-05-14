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
  <div class="feature-content">
    <h4 class="subheading feature-subheading">Built for modern use</h4>
    <h2 class="heading feature-heading">Smarter meetings, all in one place</h2>
    <p class="paragraph feature-description">Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
  </div>
</section>

<style>
  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 1.5rem;
  }

  .feature-imgs {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 16rem));
    gap: 1.5rem;
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

  /* content */

  .feature-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
    text-align: center;
  }

  .feature-subheading {
    margin-bottom: 1.5rem;
  }

  .feature-heading {
    max-width: 20rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    line-height: 1.125;
  }

  .feature-description {
    max-width: 35rem;
  }

  @media (min-width: 48rem) {
    .feature-imgs {
      grid-template-columns: repeat(4, minmax(0, 16rem));
    }

    .feature-subheading {
      margin-bottom: 1rem;
    }

    .feature-heading {
      max-width: 28rem;
      font-size: 2.5rem;
      line-height: 1.1;
    }
  }
</style>