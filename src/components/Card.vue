<template>
  <div class="col-md-3 col-sm-6 col-12">
    <div class="card mt-2">
      <img :src="imgUrl" width="" class="card-img-top" />
      <div class="card-body">
        <router-link
          :to="{ name: 'cat', params: { catId: id } }"
          class="btn btn-primary btn-block"
          >View Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "imgUrl"]
};
</script>
