<script>

// Renders the handle that allows you to move each list item

export default {
  inject: ["sortableListHandleClass"],
  mounted() {
    this.$el.classList.add(this.sortableListHandleClass)
  },
  render() {
    return this.$slots.default[0]
  }
}

</script>