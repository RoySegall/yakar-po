<template>
  <div class="row">
    <div class="col-12">

      <PagesHeader></PagesHeader>
      <BreadCrumbs></BreadCrumbs>

      {{ product.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import products from "@/mockups/products.js";
import PagesHeader from "@/components/PagesHeader";
import BreadCrumbs from "@/components/BreadCrumbs";

@Component({
  components: {PagesHeader, BreadCrumbs}
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
