<template>
    <div class="row bread-crumbs">
        <div class="col-10">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: {}
    })

    export default class BreadCrumbs extends Vue {
    }
</script>

<style lang="scss">

    .bread-crumbs {
        padding-top: 1em;
    }
</style>
