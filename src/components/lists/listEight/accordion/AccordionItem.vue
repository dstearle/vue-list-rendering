<template>
  <div class="accordion-item">
    <div @click="toggle" role="button" class="accordion-item-header">
      <slot name="header"></slot>
      <svg class="icon" :class="{ 'rotate-90': active }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
    </div>
    <div class="accordion-item-body" v-show="active">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["accordionListState"],
  props: ["itemId"],
  computed: {
    active() {
      return this.accordionListState.activeItem === this.itemId
    }
  },
  methods: {
    toggle() {
      this.accordionListState.activeItem = this.active ? null : this.itemId
    }
  }
}
</script>

<style>

    .accordion-item {
    border-bottom-width: 1px;
    }

    .accordion-item:last-child {
    border-bottom-width: 0;
    }

    .accordion-item-header {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 600;
    padding: 1rem 1.5rem;
    }

    .accordion-item-body {
    color: #606f7b;
    font-size: 0.875rem;
    line-height: 1.5;
    border-top-width: 1px;
    padding: 1rem 1.5rem;
    }

    [role="button"],
    button {
    cursor: pointer;
    }

</style>
