<script>

import { Sortable } from "@shopify/draggable"

function move(items, oldIndex, newIndex) {
  const itemRemovedArray = [
    ...items.slice(0, oldIndex),
    ...items.slice(oldIndex + 1, items.length)
  ]

  // Keeps track of list item position
  return [
    // All of the items before the lit item
    ...itemRemovedArray.slice(0, newIndex),
    // The old position of said list item
    items[oldIndex],
    // All of the items after the list item
    ...itemRemovedArray.slice(newIndex, itemRemovedArray.length)
  ]
}

export default {
  props: {
    value: {
      required: true
    },
    itemClass: {
      default: "sortable-list-item"
    },
    handleClass: {
      default: "sortable-list-handle"
    }
  },
  provide() {
    return {
      sortableListItemClass: this.itemClass,
      sortableListHandleClass: this.handleClass
    }
  },
  mounted() {

    // Allows for sorting of list items
    new Sortable(this.$el, {
      draggable: `.${this.itemClass}`,
      handle: `.${this.handleClass}`,
      mirror: {
        constrainDimensions: true
      }
    }).on("sortable:stop", ({ oldIndex, newIndex }) => {
      // Updates the new position of a list item
      this.$emit("input", move(this.value, oldIndex, newIndex))
    })
  },
  render() {
    return this.$scopedSlots.default({
      items: this.value
    })
  }
}

</script>