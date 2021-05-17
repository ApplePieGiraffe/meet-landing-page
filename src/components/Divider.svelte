<script>  
  export let id
</script>

<div class="divider divider-{id}">
  <div class="divider-line"></div>
  <div class="divider-circle">
    <span class="divider-text">0{id}</span>
  </div>
</div>

<style>
  .divider {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 8.75rem;
  }

  .divider-line {
    width: 1px;
    height: 100%;
    transform-origin: top center;
    background: hsl(240, 10%, 57%, .5);
  }

  .divider-circle {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border: 1px solid hsl(240, 10%, 57%, .5);
    border-radius: 50%;
    background: white;
  }

  .divider-text {
    color: var(--color-grey);
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.625;
  }
</style>