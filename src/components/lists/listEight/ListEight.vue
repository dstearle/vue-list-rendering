<template>

  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">

      <h2 class="py-5">Jurassic World Tours</h2>
      <p>Feel free to click below to see available types of tours!</p>
      <accordion-list>
        <accordion-item :item-id="1">
          <template slot="header">
            Gyrosphere Tour
          </template>
          <template slot="content">
            Roll around with our dinosaurs in our glass-encased Gyrospheres. Be on the lookout for Apatosaurus, Parasaurolophus, Stegosaurus, Triceratops, and many more! Your in-sphere monitor will help you identify these relatively docile dinosaurs. Our advanced invisible fence technology assures the animals will stay in designated zones without unnecessary bars or cages. And if you venture too close. our automated system will roll your Gyrosphere back to a safe distance. suitable for older children and adults.
          </template>
        </accordion-item>
        <accordion-item :item-id="2">
          <template slot="header">
            Safari Truck Tour
          </template>
          <template slot="content">
            Vestibulum nec urna non nisi viverra vehicula ut sed metus. Cras scelerisque condimentum nunc ut mattis. Curabitur euismod sagittis efficitur. Cras vel orci consectetur, ullamcorper magna vitae, sodales mauris. Aliquam tempus volutpat mi. Nunc vitae molestie ante. In sed varius tortor.
          </template>
        </accordion-item>
        <accordion-item :item-id="3">
          <template slot="header">
            Helicopter Tour
          </template>
          <template slot="content">
            Sed porttitor mattis egestas. Duis nec rhoncus ligula. Etiam pellentesque mattis mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas vel dapibus nulla. Phasellus lobortis nibh et faucibus tincidunt. Phasellus non iaculis turpis, vitae gravida lacus.
          </template>
        </accordion-item>
      </accordion-list>
    </div>
  </div>
</template>

<script>
import AccordionList from "./accordion/AccordionList.vue"
import AccordionItem from "./accordion/AccordionItem.vue"

export default {
  components: {
    AccordionList,
    AccordionItem
  },
  data() {
    return {}
  }
}
</script>