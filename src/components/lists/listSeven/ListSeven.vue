<template>
    <div class="container">

      <h2 class="py-5">InGen Contact List</h2>
      <p>Feel free to sort the list however you like with the blocks on the right</p>

      <div class="card">

        <h1 class="card-header bg-dark text-white p-3">InGen Contacts</h1>

        <div class="card-body">

          <sortable-list v-model="contacts">

            <div class="contact-list" slot-scope="{ items: contacts }">
              
              <!-- Grabs each list item for the contact list -->
              <sortable-item v-for="contact in contacts" :key="contact.id">

                <div class="contact-list-item">

                  <!-- Contact -->
                  <div class="contact-list-contact">
                    <!-- Contact's profile image -->
                    <img :src="contact.avatar" class="contact-list-avatar" alt="">
                    <div>
                      <!-- Contact's name -->
                      <div class="font-weight-bold">
                        {{ contact.name }}
                      </div>
                      <!-- Contact's email  -->
                      <div class="text-muted">
                        {{ contact.email }}
                      </div>
                    </div>
                  </div>
                  
                  <!-- Favicon that allows user to move contact -->
                  <sortable-handle class="pointer">
                    <div>this</div>
                  </sortable-handle>

                </div>

              </sortable-item>

            </div>

          </sortable-list>

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
          name: "John Hammond",
          email: "slammin.hammond@ingen.com",
          avatar: require("./../avatars/John_Hammond.jpg")
        },
        {
          id: 2,
          name: "Robert Muldoon",
          email: "muldoon.safaris@ingen.com",
          avatar: require("./../avatars/muldoonicon.jpg")
        },
        {
          id: 3,
          name: "Henry Wu",
          email: "wu.tang.clan@ingen.com",
          avatar: "https://randomuser.me/api/portraits/med/women/2.jpg"
        },
        {
          id: 4,
          name: "Denis Nedry",
          email: "mr.goodbytes@ingen.com",
          avatar: "https://randomuser.me/api/portraits/med/women/62.jpg"
        },
        {
          id: 5,
          name: "Ray Arnold",
          email: "big.ray@ingen.com",
          avatar: "https://randomuser.me/api/portraits/med/men/4.jpg"
        }
      ]
    }
  },
}

</script>

<style>

.pointer {
  cursor: grab;
}
.contact-list {
  border-top-width: 1px;
  border-color: #f1f5f8;
}
.contact-list-item {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom-width: 1px;
  border-color: #f1f5f8;
}
.contact-list-item.draggable-source--is-dragging {
  background-color: #f1f5f8;
}
.contact-list-item.draggable-source--is-dragging > * {
  opacity: 0;
}
.contact-list-contact {
  display: flex;
  align-items: center;
}
.contact-list-avatar {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  display: block;
  margin-right: 0.5rem;
}

</style>