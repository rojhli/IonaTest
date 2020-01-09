<template>
  <div>
    <Header></Header>
    <div class="row">
      <div class="col-md-3 col-sm-6 col-12">
        <form>
          <div class="form-group">
            <label for="breed" class="form-label">Breed</label>
            <select
              name="breed"
              id="breed"
              class="form-control"
              v-model="selectedBreed"
              @change="
                $store.dispatch('cat/getById', {
                  id: selectedBreed
                })
              "
            >
              <option value="">Select Breed</option>
              <option
                v-for="breed in breeds"
                :value="breed.id"
                :key="breed.id"
                >{{ breed.name }}</option
              >
            </select>
          </div>
        </form>
      </div>
    </div>

    <div class="row" v-if="catCount > 0">
      <Card
        v-for="cat in cats"
        :key="cat.id"
        :id="cat.id"
        :img-url="cat.url"
      ></Card>
    </div>

    <p v-else>No cats available</p>

    <button
      class="btn btn-success mt-2"
      v-if="currentPageCount != pageCount && pageCount > 1"
      @click.prevent="
        $store.dispatch('cat/getById', {
          id: selectedBreed,
          isPagination: true
        })
      "
    >
      Load More
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Card from "@/components/Card";
import Header from "@/components/partials/Header";

export default {
  name: "home",

  components: {
    Card,
    Header
  },

  computed: {
    selectedBreed: {
      get() {
        return this.$store.state.breed.selected;
      },

      set(value) {
        this.$store.commit("breed/setSelectedBreed", value);
      }
    },

    ...mapState({
      breeds: state => state.breed.all,
      cats: state => state.cat.list,
      catCount: state => state.cat.count,
      pageCount: state => state.cat.pageCount,
      currentPageCount: state => state.cat.currentPageCount
    })
  },

  mounted() {
    this.$store.dispatch("breed/getAll");
  }
};
</script>
