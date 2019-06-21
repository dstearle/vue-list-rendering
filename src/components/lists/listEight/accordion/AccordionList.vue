<template>
  <div class="accordion-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      accordionListState: this.sharedState
    }
  },
  data() {
    return {
      sharedState: {
        activeItem: 1
      }
    }
  }
}
</script>

<style>

    .accordion-list {
    border-width: 1px;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    background-color: #fff;
    }

    *,
    :after,
    :before {
    border: 0 solid #dae1e7;
    }

</style>
