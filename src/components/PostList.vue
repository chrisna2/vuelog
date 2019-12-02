<template>
    <b-card-group deck>
        <b-card
            v-for="post in posts"
            :key="post"
            v-bind:title="post.title"
            img-src="https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">

            <b-card-text>
                {{post.date}}
                <br>{{post.content}}
            </b-card-text>
            <router-link :to="{ name: 'Detail', params: { id: post.number }}">
                Go Detail
            </router-link>
        </b-card>
    </b-card-group>
</template>

<script>
export default {
    name: 'post',
    props: {
        posts : Array
    },
    methods: {

    }
    
}
</script>

<style>
.mb-2 {
    margin : 5px
}
.card-deck {
    padding : 20px
}
</style>