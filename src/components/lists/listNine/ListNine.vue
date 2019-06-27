<template>

  <div class="card">
    
    <div class="card-body">

      <div class="mb-4">

        <label class="form-label mb-2">Favorite Thrash Band</label>
        <search-select></search-select>
        
      </div>

      <div class="text-right">

        <button type="button" class="btn btn-primary">Save Changes</button>

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
    return {}
  }
}
</script>