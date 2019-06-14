<template>
  <div class="row">
    <div class="offset-2 col-8 justify-content-center">
      {{ product.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import products from "@/mockups/products.js";

@Component({
  components: {}
})
export default class ProductView extends Vue {
  public data() {
    return {
      product: products[this.$route.params.id]
    };
  }
}
</script>

<style lang="scss"></style>
