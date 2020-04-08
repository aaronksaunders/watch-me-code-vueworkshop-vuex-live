<template>
  <div >
    <ion-card>
      <ion-card-content>
        <ion-item lines="none">
          <ion-label>Display</ion-label>
          <!-- changed after video -->
          <ion-select-vue v-model="selectedStatus">
            <ion-select-option value="ALL">ALL</ion-select-option>
            <ion-select-option value="true">ON</ion-select-option>
            <ion-select-option value="false">OFF</ion-select-option>
          </ion-select-vue>
        </ion-item>
      </ion-card-content>
    </ion-card>
    <ion-list>
      <span v-for="item in itemsByStatus" :key="item.id">
        <ItemEntry :item="item" :key="item.id" />
      </span>
      <ion-button @click="updateStore">SAVE DATA</ion-button>
    </ion-list>
  </div>
</template>

<script>
import ItemEntry from "./ItemEntry";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ItemsList",
  components: { ItemEntry },
  computed: {
    ...mapGetters({
      getItemsByStatus: "getItemsByStatus"
    }),
    itemsByStatus: function() {
      return this.getItemsByStatus(this.selectedStatus);
    }
  },
  methods: {
    ...mapActions(["updateStore"]),
    saveData: async function() {
      let result = await this.updateStore();
      if (result) {
        alert("Data Saved Successfully...");
      }

      // with promise-then
      // this.updateStore().then(()=>{
      //   alert("Data Saved Successfully...")
      // })
    }
  },
  data() {
    return {
      selectedStatus: "ALL"
    };
  }
};
</script>

<style>
.list-items {
  background-color: lightblue;
  padding: 20px;
  margin: 16px;
}
</style>
