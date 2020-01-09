<template>
  <div class="row">
    <div class="col-md-3 col-sm-6 col-12">
      <form>
        <div class="form-group">
          <label for="breed" class="form-label">Breed</label>
          <select name="breed" id="breed" class="form-control" v-model="selectedBreed" @change="$store.dispatch('breed/getById', selectedBreed)">
            <option value="">Select Breed</option>
            <option v-for="breed in breeds" :value="breed.name" :key="breed.id">{{ breed.name }}</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "home",

  computed: {
    ...mapState({
      breeds: state => state.breed.all
    }),

    ...mapGetters("breed", ["count"])
  },

  data() {
    return {
      selectedBreed: ""
    };
  },

  mounted() {
    this.$store.dispatch("breed/getAll");
  }
};
</script>
