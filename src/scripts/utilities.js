export function replaceImages(selector, paths) {
  const images = document.querySelectorAll(selector)
  for (let i = 0; i < images.length; i++) {
    images[i].src = paths[i]
  }
}