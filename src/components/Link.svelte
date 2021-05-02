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

  .green {
    background: var(--color-sea-green);
  }

  .green:hover {
    background: hsl(192, 37%, 48%, .6);
  }

  :global(.green span) {
    color: var(--color-cyan);
  }

  .purple {
    background: var(--color-dark-purple);
  }

  .purple:hover {
    background: hsl(258, 34%, 53%, .6);
  }

  :global(.purple span) {
    color: var(--color-light-purple);
  }
</style>

