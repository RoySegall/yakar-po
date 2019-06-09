<template>

  <div class="row">
    <div class="home">

      <div class="form-group">
        <input type="text" class="form-control product-search" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search for product">
        <button type="button" class="btn btn-danger search"><i class="fal fa-search"></i></button>
      </div>

    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
  .home {

    .form-group {
      position: relative;

      button.search {
        position: absolute;
        bottom: 0;
        right: -3em;
        height: 3em;
        width: 4em;
      }

      .product-search {
        border: #cd6d00 solid 1px;
        height: 3em;
        width: 50vw;
        background: #ffb6b6;
        color: black;

        &::placeholder {
          color: gray;
        }
      }
    }
  }
</style>
