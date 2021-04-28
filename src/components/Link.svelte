<script>
  export let href
  export let color
</script>

<a href={href} class="link {color}">
  <slot></slot>
</a>

<style>
  .link {
    border: none;
    border-radius: 100rem;
    padding: 1rem 2rem;
    color: white;
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.625rem;
    text-decoration: none;
    transition: opacity .3s;
  }

  .link:hover {
    opacity: .6;
  }

  .green {
    background: var(--color-sea-green);
  }

  :global(.green span) {
    color: var(--color-cyan);
  }

  .purple {
    background: var(--color-dark-purple);
  }

  :global(.purple span) {
    color: var(--color-light-purple);
  }
</style>

