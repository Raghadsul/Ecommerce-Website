<template>
    <!-- Header -->
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <p class="brand"> AMONDA </p>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="/furniture"> Furniture </b-navbar-item>
            <b-navbar-item href="#"> Living </b-navbar-item>
            <b-navbar-item href="#"> Bedroom </b-navbar-item>
            <b-navbar-item href="#"> Decor </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="/about"> About </b-navbar-item>
                <b-navbar-item href="#"> Contact </b-navbar-item>
            </b-navbar-dropdown>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" herf="#"> <strong>Sign up</strong> </a>
                    <a class="button is-light" href="#">Log in</a>
                </div>
            </b-navbar-item>
        </template>     
    </b-navbar>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped lang="scss">
.brand { 
    font-size: 20px;
}
</style>
