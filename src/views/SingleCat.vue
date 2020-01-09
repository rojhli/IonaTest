<template>
  <div v-if="cat" class="card">
    <div class="card-header">
      <a
        href="javascript:void(0);"
        @click.prevent="$router.back()"
        class="btn btn-primary"
        >Back</a
      >
    </div>
    <img :src="cat.url" alt="" class="card-img" />
    <div v-if="cat.breeds" class="card-body">
      <h4>{{ cat.breeds[0].name }}</h4>
      <h5>Origin: {{ cat.breeds[0].origin }}</h5>
      <h6>{{ cat.breeds[0].temperament }}</h6>
      <p v-html="cat.breeds[0].description"></p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      cat: state => state.cat.data
    })
  },

  beforeCreate() {
    this.$store.dispatch("cat/findCatById", this.$route.params.catId);
  }
};
</script>
