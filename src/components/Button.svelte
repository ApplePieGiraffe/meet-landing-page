<script>
  export let color
</script>

<button class="btn {color}">
  <slot></slot>
</button>

<style>
  .btn {
    border: none;
    border-radius: 100rem;
    padding: 1rem 2rem;
    color: white;
    line-height: 1.625rem;
    font-size: 1rem;
    font-weight: 900;
    cursor: pointer;
    transition: opacity .3s;
  }

  .btn:hover {
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

