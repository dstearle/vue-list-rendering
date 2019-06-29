<template>

  <div class="search-select" :class="{ 'is-active': isOpen }">

    <!-- Button that controls search list -->
    <button @click="open" type="button" class="search-select-input">

      <!-- Displays selected value -->
      <span v-if="value !== null">{{ value }}</span>

      <!-- Default value if nothing has been selected -->
      <span v-else class="search-select-placeholder">Select a band...</span>

    </button>

    <!-- Shows the dropdown list when activated -->
    <div v-show="isOpen" class="search-select-dropdown">

      <!-- Input for user -->
      <input class="search-select-search" v-model="search">

      <!-- List of items to be shown -->
      <ul class="search-select-options">

        <!-- Generates each item in the search list -->
        <!-- @click="select(option)" allows us to select an option from the list -->
        <li class="search-select-option"
          v-for="option in filteredOptions"
          :key="option"
          @click="select(option)"
        >{{ option }}</li>

      </ul>

      <div v-show="filteredOptions.length === 0" class="search-select-empty">No results found for "{{ search }}"</div>

    </div>

  </div>
  
</template>

<script>

  export default {

    data() {
      return {
        isOpen: false,
        value: null,
        search: '',
        options: [
          "Anthrax",
          "Dark Angel",
          "Death Angel",
          "Destruction",
          "Exodus",
          "Flotsam and Jetsam",
          "Kreator",
          "Megadeth",
          "Metallica",
          "Overkill",
          "Sepultura",
          "Slayer",
          "Testament"
        ]
      }
    },

    computed: {

      // Filters the list with user input
      filteredOptions() {

        return this.options.filter(option => {

          return option.toLowerCase().startsWith(this.search.toLowerCase())

        })

      }

    },

    methods: {
      // Opens the search list when clicked by user
      open() {
        this.isOpen = true
      },
      // Closes the search list when an option is selected
      close() {
        this.isOpen = false
      },
      // Selects the item from the list
      select(option) {
        // Sets value to match the selected option
        this.value = option
        // Resets the search to empty
        this.search = ''
        // Closes the search when doneg
        this.close()
      }
    }

  }

</script>

<style>

  .search-select {
    position: relative;
  }
  .search-select-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-align: left;
    display: block;
    width: 100%;
    border-width: 1px;
    padding: 0.5rem 0.75rem;
    background-color: #fff;
    border-radius: 0.25rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .search-select-input:focus {
    outline: 0;
    -webkit-box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
    box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
  }
  .search-select-placeholder {
    color: #8795a1;
  }
  .search-select.is-active .search-select-input {
    -webkit-box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
    box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
  }
  .search-select-dropdown {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    position: absolute;
    right: 0;
    left: 0;
    background-color: #3d4852;
    padding: 0.5rem;
    border-radius: 0.25rem;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    z-index: 50;
  }
  .search-select-search {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
    padding: 0.5rem 0.75rem;
    background-color: #606f7b;
    color: #fff;
    border-radius: 0.25rem;
  }
  .search-select-search:focus {
    outline: 0;
  }
  .search-select-options {
    list-style: none;
    padding: 0;
    position: relative;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    max-height: 14rem;
  }
  .search-select-option {
    padding: 0.5rem 0.75rem;
    color: #fff;
    cursor: pointer;
    border-radius: 0.25rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .search-select-option:hover {
    background-color: #606f7b;
  }
  .search-select-option.is-active,
  .search-select-option.is-active:hover {
    background-color: #3490dc;
  }
  .search-select-empty {
    padding: 0.5rem 0.75rem;
    color: #b8c2cc;
  }

</style>
