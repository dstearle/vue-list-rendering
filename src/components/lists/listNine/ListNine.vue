<template>

  <div class="container" style="width: 450px">

    <!-- Title -->
    <h2 class="py-5">InGen Embryo List</h2>
    <p>Search for and select a dinosaur embryo below</p>

    <div class="card">
      
      <div class="card-body">

        <div class="mb-4">

          <!-- Label For Card -->
          <label class="form-label mb-2">Complete Embryos</label>

          <!-- Search Select Input -->
          <search-select 
            v-model="selectedEmbryo" 
            :options="embryos"
            :filter-function="applySearchFilter"
          ></search-select>
          
        </div>

        <div class="text-right">

          <!-- Save Button (Not Currently In Use) -->
          <button type="button" class="btn btn-primary">Save Changes</button>

        </div>

      </div>
      
    </div>

  </div>

</template>

<script>

  import SearchSelect from './searchFilter/SearchSelect.vue'

  export default {

    components: {

      SearchSelect

    },

    data() {

      return {

        selectedEmbryo: null,
        embryos: [

            "Apatosaurus",
            "Suchomimus",
            "Dryosaurus",
            "Kentrosaurus",
            "Velociraptor",
            "Pachyrhinosaurus",
            "Brachiosaurus",
            "Iguanodon",
            "T-Rex",
            "Proceratosaurus",
            "Dracorex",
            "Carnotaurus",
            "Mamenchisaurus"

          ]

      }

    },

    methods: {

      // Filters the list with user input
      applySearchFilter(search, options) {

        return options.filter(option => {
          return option.toLowerCase().startsWith(search.toLowerCase())

        })

      }

    }
    
  }

</script>

<style>

  .form-label {
    display: block;
    color: #606f7b;
    font-weight: 600;
  }

</style>
