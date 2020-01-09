<template>
  <div id="app">
    <div class="container">
      <Header></Header>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "./components/partials/Header";

export default {
  components: {
    Header
  }
};
</script>

<style>
#app {
  padding: 20px 0;
}
</style>