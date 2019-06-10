<template>
    <div class="container">

        <h2 class="py-5">InGen Contact List</h2>
        <p>Feel free to sort the list however you like with the blocks on the right</p>

        <div class="min-h-screen bg-grey-darker p-8">
            <div class="max-w-sm mx-auto">
                <div class="card">
                    <h1 class="text-2xl font-bold mb-6">InGen Contacts</h1>

                    <sortable-list v-model="contacts">
                    <div class="contact-list" slot-scope="{ items: contacts }">
                        <sortable-item v-for="contact in contacts" :key="contact.id">
                        <div class="contact-list-item">
                            <div class="contact-list-contact">
                            <img :src="contact.avatar" class="contact-list-avatar" alt="">
                            <div>
                                <div class="contact-list-name">
                                {{ contact.name }}
                                </div>
                                <div class="contact-list-email">
                                {{ contact.email }}
                                </div>
                            </div>
                            </div>
                            <sortable-handle>
                            </sortable-handle>
                        </div>
                        </sortable-item>
                    </div>
                    </sortable-list>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import SortableList from "./sortables/SortableList.vue"
import SortableItem from "./sortables/SortableItem.vue"
import SortableHandle from "./sortables/SortableHandle.vue"

export default {
  components: {
    SortableList,
    SortableItem,
    SortableHandle
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "Alfreda Ferreira",
          email: "alfreda.ferreira@example.com",
          avatar: "https://randomuser.me/api/portraits/med/women/6.jpg"
        },
        {
          id: 2,
          name: "Leevi Wirtanen",
          email: "leevi.wirtanen@example.com",
          avatar: "https://randomuser.me/api/portraits/med/men/19.jpg"
        },
        {
          id: 3,
          name: "Kaitlin Sutton",
          email: "kaitlin.sutton@example.com",
          avatar: "https://randomuser.me/api/portraits/med/women/2.jpg"
        },
        {
          id: 4,
          name: "Alice Wilson",
          email: "alice.wilson@example.com",
          avatar: "https://randomuser.me/api/portraits/med/women/62.jpg"
        },
        {
          id: 5,
          name: "Etienne Roy",
          email: "etienne.roy@example.com",
          avatar: "https://randomuser.me/api/portraits/med/men/4.jpg"
        }
      ]
    }
  }
}

</script>

<style>

</style>