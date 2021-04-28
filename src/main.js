import App from "./App.svelte"

const app = new App({
  target: document.body
})

export default app

// scroll to top on page load
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}
