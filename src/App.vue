<template>
  <ion-app>
    <ion-page>
      <ion-content class="ion-padding">
        <InputForm />

        <ion-card>
          <ion-card-header>
            <ion-card-title>State Information On List</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-item>List Count: {{listSize}}</ion-item>
            <ion-item>List Items On: {{listChecked}}</ion-item>
          </ion-card-content>
        </ion-card>
        <ItemsList />
      </ion-content>
    </ion-page>
  </ion-app>
</template>
<style src='@ionic/core/css/core.css'></style>
<style src='@ionic/core/css/ionic.bundle.css'></style>
<script>
import InputForm from "./components/InputForm";
import ItemsList from "./components/ItemsList";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    InputForm,
    ItemsList
  },
  computed: {
    ...mapGetters(["itemsWithCheckAs", "isLoading"]),
    listChecked: function() {
      return this.itemsWithCheckAs(true).length;
    },
    listSize: function() {
      return this.$store.state.items.length;
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["initializeStore"])
  },
  created() {
    this.initializeStore();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
