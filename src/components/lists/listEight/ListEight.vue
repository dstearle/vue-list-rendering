<template>


  <div class="max-w-sm mx-auto">

    <h2 class="py-5">Jurassic World Tours</h2>
    <p>Feel free to click below to see our available types of tours!</p>
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
          Explore the entire island on one of our safari tours. From prehistoric swamps and grassy lowlands to sandy lagoons and rocky hills you will be able to experience the many unique environments built to house over 30 species! A tour guide will also provide in depth details of what you see and treats to feed the dinosaurs (The friendly ones of course!).
        </template>
      </accordion-item>
      <accordion-item :item-id="3">
        <template slot="header">
          Helicopter Tour
        </template>
        <template slot="content">
          Our most premium tour for our most distinguished guests! The helicopter tour will give you a birds eye view of the park and special access to otherwise inaccessible regions. The highlight of the tour will be a picnic by waterfalls and chance to swim in a jungle lagoon!
        </template>
      </accordion-item>
    </accordion-list>
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