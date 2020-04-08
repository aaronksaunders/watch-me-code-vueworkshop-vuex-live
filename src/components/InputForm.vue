<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Enter User Information</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label>User Name</ion-label>
        <ion-input-vue v-model="inputData.name" placeholder="Enter User Name"></ion-input-vue>
      </ion-item>
      <ion-item>
        <ion-label>User Code</ion-label>
        <ion-input-vue v-model="inputData.zip" placeholder="Enter User Code"></ion-input-vue>
      </ion-item>
      <ion-button @click="handleAddItemClicked">ADD ITEM</ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "InputForm",
  data() {
    return {
      inputData: {
        name: "",
        zip: ""
      }
    };
  },
  methods: {
    ...mapActions(["addItem"]),
    handleAddItemClicked: function() {
      let eventData = { ...this.inputData };
      this.addItem({
        name: eventData.name,
        zip: eventData.zip
      });
      this.inputData = { name: "", zip: "" };
    }
  }
};
</script>

<style scoped>
.input-form {
  background-color: yellow;
  padding: 20px;
  margin: 16px;
}
</style>
