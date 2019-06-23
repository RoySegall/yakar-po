<template>
  <div class="row cart">
    <div class="col-12">

      <PagesHeader mode="innerPage"></PagesHeader>

      <div class="row">
        <div class="offset-2 col-8">
          <h1 class="text-left"><i class="fal fa-shopping-cart"></i> Cart</h1>
          <hr />

          <p class="intro h4">
            The price of the items, and the total estimations of the cart are based on average samples. If you would like to
            be aware of the prices for a specific supermarket, you can do that by selecting a supermarket from the the
            context switcher.
          </p>

          <table class="table table-bordered table-striped">
            <thead>
            <tr>
              <th scope="col" colspan="2">Product</th>
              <th scope="col">price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in getCartItems()" v-bind:key="item.id">
              <td width="5%"><img class="img-fluid" v-bind:src="item['image']" /></td>
              <td>{{ item["name"] }}</td>
              <td>{{ item["average_price"] }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--{{this.$store.state.cart.items}}-->

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PagesHeader from "@/components/PagesHeader";

@Component({
  components: {PagesHeader, }
})
export default class Cart extends Vue {

  public getCartItems() {
    return this.$store.state.cart.items;
  }
}
</script>

<style lang="scss">
  .cart {

    h1 {
      padding-top: 1em;
    }

    .intro {
      padding-top: 1em;
      padding-bottom: 1em;
    }

    table {
      padding-top: 2.5em;
    }
  }
</style>
