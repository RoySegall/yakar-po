<template>
  <div class="row">
    <div class="offset-2 col-8 justify-content-center">
      <section class="header">
        <div class="form-group">
          <input
            type="text"
            class="form-control product-search"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search for product"
            v-model="productSearch"
          />
          <div class="search"><i class="fal fa-search"></i></div>
        </div>

        <i class="fas fa-spinner fa-spin" v-if="searching"></i>

        <div class="search-results" v-if="items.length > 0">
          <h3>Search results</h3>

          <div class="row">
            <div class="col-4" v-for="(item, i) in items" v-bind:key="i">
              <div class="row">
                <div class="col-4">
                  <img class="img-fluid" v-bind:src="item['image']" />
                </div>
                <div class="col-8">
                  <span
                    ><b>{{ item["name"] }}</b></span
                  >
                  <ul>
                    <li>Average cost: {{ item["average_price"] }}</li>
                    <li>
                      Hi price: {{ item["hi_price"]["amount"] }} at
                      <b>{{ item["hi_price"]["location"] }}</b>
                    </li>
                    <li>
                      Low price: {{ item["low_price"]["amount"] }} at
                      <b>{{ item["low_price"]["location"] }}</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="trending">
        <h2>Trending</h2>
        <hr />

        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Number of searches</th>
              <th scope="col">Trending since</th>
              <th scope="col">Average price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(trend, i) in trends" v-bind:key="i">
              <th>{{ trend["product"] }}</th>
              <td>{{ trend["number_of_searches"] }}</td>
              <td>{{ trend["trend_since"] }}</td>
              <td>{{ trend["average_price"] }}</td>
            </tr>
            <tr>
              <td colspan="4" class="text-center load-more">
                <i class="fal fa-layer-plus"></i> Load more
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  data() {
    return {
      trends: [
        {
          product: "Milk",
          number_of_searches: 1000,
          trend_since: "Last week",
          average_price: "5 Nis"
        },
        {
          product: "Butter",
          number_of_searches: 900,
          trend_since: "Yesterday",
          average_price: "5 Nis"
        },
        {
          product: "Olive oil",
          number_of_searches: 500,
          trend_since: "Two weeks ago",
          average_price: "5 Nis"
        },
        {
          product: "Trash can bags",
          number_of_searches: 496,
          trend_since: "Two months ago",
          average_price: "5 Nis"
        },
        {
          product: "Sugar",
          number_of_searches: 300,
          trend_since: "This morning",
          average_price: "5 Nis"
        }
      ],
      productSearch: "",
      searching: false,
      items: []
    };
  }

  @Watch("productSearch")
  public pingSearch() {
    this.searching = true;
    this.items = [];

    setTimeout(() => {
      this.items.push({
        image: "http://www.office-exp.co.il/ProductsImages/L357934.jpg",
        name: "Milk",
        hi_price: { amount: "5 nis", location: "Rami levy" },
        low_price: { amount: "3 nis", location: "Shufersal" }
      });

      this.items.push({
        image:
          "https://www.market-p.co.il/wp-content/uploads/2018/03/Geemaps.co_.il-36-4.jpg",
        name: "Butter",
        hi_price: { amount: "3 nis", location: "Rami levy" },
        low_price: { amount: "2 nis", location: "Shufersal" }
      });

      this.items.push({
        image:
          "https://www.market-p.co.il/wp-content/uploads/2017/07/coca-cola.jpg",
        name: "Coca cola",
        hi_price: { amount: "6 nis", location: "Rami levy" },
        low_price: { amount: "9 nis", location: "Shufersal" }
      });

      this.items.push({
        image:
          "https://www.market-p.co.il/wp-content/uploads/2018/03/Geemaps.co_.il-36-4.jpg",
        name: "Butter",
        hi_price: { amount: "3 nis", location: "Rami levy" },
        low_price: { amount: "2 nis", location: "Shufersal" }
      });

      this.items.push({
        image: "http://www.office-exp.co.il/ProductsImages/L357934.jpg",
        name: "Milk",
        hi_price: { amount: "5 nis", location: "Rami levy" },
        low_price: { amount: "3 nis", location: "Shufersal" }
      });

      this.items.push({
        image:
          "https://www.market-p.co.il/wp-content/uploads/2017/07/coca-cola.jpg",
        name: "Coca cola",
        hi_price: { amount: "6 nis", location: "Rami levy" },
        low_price: { amount: "9 nis", location: "Shufersal" }
      });

      this.searching = false;
    }, 1000);
  }
}
</script>

<style lang="scss">
.header {
  .form-group {
    position: relative;

    .search {
      position: absolute;
      bottom: 0.25em;
      right: 1.5em;
      font-size: 1.5em;
      color: white;
    }

    .product-search {
      border: #0067cd solid 1px;
      height: 3em;
      width: 100%;
      background: #b6d9ff;
      color: black;

      &::placeholder {
        color: #0095ff;
      }
    }
  }

  .fa-spinner {
    font-size: 3em;
  }

  .search-results {
    padding-top: 2em;
    text-align: left;

    ul {
      padding: 0;

      li {
        margin: 0;
        list-style: none;
      }
    }
  }
}

.trending {
  padding-top: 5em;
  text-align: left;

  hr {
    width: 100%;
    background: #0095ff;
  }

  table {
    .load-more {
      font-size: 1.5em;
    }
  }
}
</style>
