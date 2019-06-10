<template>
    <div class="container">

        <h2 class="py-5">InGen Contact List</h2>
        <p>Feel free to sort the list however you like with the blocks on the right</p>

        <div class="min-h-screen bg-grey-darker p-8">
            <div class="max-w-sm mx-auto">
                <div class="card">
                    <h1 class="bg-dark text-white p-3">InGen Contacts</h1>

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
                              <div>this</div>
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
          name: "John Hammond",
          email: "slammin.hammond@ingen.com",
          avatar: "https://randomuser.me/api/portraits/med/women/6.jpg"
        },
        {
          id: 2,
          name: "Robert Muldoon",
          email: "muldoon.safaris@ingen.com",
          avatar: "https://randomuser.me/api/portraits/med/men/19.jpg"
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
  }
}

</script>

<style>

.contact-list {
  border-top-width: 1px;
  border-color: #f1f5f8;
}
.contact-list-item {
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
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