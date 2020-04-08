<template>
  <ion-item>
    <!-- changed after video -->
    <ion-toggle-vue slot="end" v-model="displayItem.on" @ionChange="toggleItem(displayItem)"></ion-toggle-vue>
    <ion-button slot="end" @click="deleteItem(item.id)">DELETE</ion-button>
    <ion-label class="ion-text-wrap">
      <ion-item lines="none">
        <ion-label position="fixed">User Name</ion-label>
        {{ displayItem.name }}
      </ion-item>
      <ion-item lines="none">
        <ion-label position="fixed">ID / Code</ion-label>
        {{ displayItem.id }} {{ displayItem.zip }}
      </ion-item>
    </ion-label>
  </ion-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ItemEntry",
  props: ["item"],
  computed: {
    displayItem() {
      return { ...this.item };
    }
  },
  methods: {
    ...mapActions(["toggleItem", "removeItem", "updateStore"]),
    deleteItem: function(_itemId) {
      this.removeItem(_itemId);
      this.updateStore();
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
input {
  width: 60%;
}
</style>
