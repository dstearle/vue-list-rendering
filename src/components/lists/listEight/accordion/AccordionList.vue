<template>

  <div class="accordion-list">

    <!-- Slot for the entire list -->
    <slot></slot>

  </div>

</template>

<script>

  export default {

    // Allows you to provide an item without using props
    provide() {

      return {

        // Grabs the data object to be provided to the list
        accordionListState: this.sharedState

      }

    },

    data() {

      return {

        // Allows us to make the activeItem reactive
        sharedState: {

          // The current active list item
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
