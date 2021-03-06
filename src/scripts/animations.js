// hero

export function heroContentAnimation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '200%',
        scrub: true,
        pin: true,
        anticipatePin: 1
    }
  })
  timeline
    .from('.logo-link', { duration: 1.5, opacity: 0 })
    .from('.hero-heading', { duration: 1.5, opacity: 0 }, 0.5)
    .from('.hero-description', { duration: 1, opacity: 0, y: 25 }, 1)
    .from('.hero .link', { duration: 1, stagger: 0.2, opacity: 0, y: 25 }, 1.5)
  return timeline
}

export function heroAvatarsAnimation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '200%',
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  })
  timeline
    .from('.hero-side-left img:nth-child(2)', { duration: 1.5, scale: 0 }, 1.5)
    .from('.hero-side-right img:nth-child(4)', { duration: 1.5, scale: 0 }, '-=1')
    .from('.hero-side-left img:nth-child(4)', { duration: 1.5, scale: 0 }, '-=1')
    .from('.hero-side-right img:nth-child(2)', { duration: 1.5, scale: 0 }, '-=.75')
    .from('.hero-side-left img:nth-child(6)', { duration: 1.5, scale: 0 }, '-=1')
    .from('.hero-side-right img:nth-child(6)', { duration: 1.5, scale: 0 }, '-=1.5')
    .from('.hero-side-left img:nth-child(3)', { duration: 1.5, scale: 0 }, '-=1')
    .from('.hero-side-right img:nth-child(5)', { duration: 1.5, scale: 0 }, '-=1.25')
    .from('.hero-side-left img:nth-child(5)', { duration: 1.5, scale: 0 }, '-=.75')
    .from('.hero-side-right img:nth-child(1)', { duration: 1.5, scale: 0 }, '-=1.5')
    .from('.hero-side-left img:nth-child(1)', { duration: 1.5, scale: 0 }, '-=1.5')
    .from('.hero-side-right img:nth-child(3)', { duration: 1.5, scale: 0 }, '-=1')
  return timeline
}

// feature

export function featureImgsAnimation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.feature',
      start: 'top 55%',
      scrub: true
    }
  })
  timeline
    .from('.feature-imgs', { 
      duration: 1.5
    }, 0)
    .from('.feature-img-container:nth-child(1)', { 
      duration: .5,
      maxWidth: 0
    },  0)
    .from('.feature-img-container:nth-child(2)', { 
      duration: .5,
      maxHeight: 0
    },0)
    .from('.feature-img-container:nth-child(3)', { 
      duration: .5,
      maxWidth: 0
    }, 0)
    .from('.feature-img-container:nth-child(4)', { 
      duration: .5,
      maxHeight: 0
    }, 0)
    .from('.feature-imgs img', { 
      duration: .5,
      scale: 1.5,
      opacity: 0
    }, 0)
  return timeline
}

export function featureContentAnimation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.feature-content',
      start: 'top 50%',
      toggleActions: 'play none none reverse',
    }
  })
  timeline
    .from('.feature-subheading', { duration: 2, opacity: 0 }, 0)
    .from('.feature-heading', { duration: 2, opacity: 0 }, .3)
    .from('.feature-description', { duration: 1, opacity: 0, y: 15 }, .5)
  return timeline
}

// footer

export function footerAnimation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer',
      start: '35% bottom',
      toggleActions: 'play none none reset'
    }
  })
  timeline
    .from('.footer-content > *', { delay: .5, duration: 1, opacity: 0, stagger: .5 })
  return timeline
}

// dividers

export function dividerAnimation(id) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: `.divider-${id}`,
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  })
  timeline
    .from(`.divider-${id} .divider-line`, { duration: .7, opacity: .5, scaleY: 0 })
    .from(`.divider-${id} .divider-circle`, { duration: .7, scale: 0 }, '-=.5')
    .from(`.divider-${id} .divider-text`, { duration: 1, opacity: 0 }, '-=.1')
  return timeline
}

// main

export function initAnimations() {
  heroContentAnimation()
  heroAvatarsAnimation()
  dividerAnimation(1)
  featureImgsAnimation()
  featureContentAnimation()
  dividerAnimation(2)
  footerAnimation()
}

// attribution

export function attributionAnimation() {
  const timeline = gsap.timeline({ paused: true, reversed: true })
  timeline
    .to('.attribution button', { duration: .3, x: 20, y: -65 })
    .from('.bubble-wrapper', { 
      duration: .3, 
      scale: .6, 
      x: -60, 
      y: 120, 
      opacity: 0 
    }, 0)
    .from('.apple', { 
      duration: .6, 
      ease: 'power2.out',
      scale: .6, 
      rotate: 120, 
      y: 300
    }, 0)
    .from('.pie', { 
      duration: .6, 
      ease: 'power2.out',
      scale: .6, 
      rotate: -120, 
      x: -140, 
      y: 80
    }, 0)
  return timeline
}