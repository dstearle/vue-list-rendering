<template>

  <div class="container">

    <h2 class="py-5">InGen Contact List</h2>
    <p>Feel free to sort the list however you like with the blocks on the right</p>

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

<style>

  .form-label {
    display: block;
    color: #606f7b;
    font-weight: 600;
  }

</style>
