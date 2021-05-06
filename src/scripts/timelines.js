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
    .from('.heading', { duration: 1.5, opacity: 0 }, 0.5)
    .from('.paragraph', { duration: 1, opacity: 0, y: 25 }, 1)
    .from('.link', { duration: 1, stagger: 0.2, opacity: 0, y: 25 }, 1.5)
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