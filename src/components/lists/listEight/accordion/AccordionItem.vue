<template>

  <div class="accordion-item">

    <div @click="toggle" role="button" class="accordion-item-header">

      <!-- Slot for accordion header -->
      <slot name="header"></slot>

      <!-- Accordion drop icon area -->
      <div>+</div>

    </div>

    <div class="accordion-item-body" v-show="active">

      <!-- Slot for accordino content -->
      <slot name="content"></slot>

    </div>

  </div>

</template>

<script>

  export default {

    // Injects the provided item from AccordionList
    inject: ["accordionListState"],

    props: ["itemId"],

    computed: {

      // Controls which accordion item is open
      active() {

        return this.accordionListState.activeItem === this.itemId

      }

    },

    methods: {

      // Sets active item to match the current item id. Also closes the previous item
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
