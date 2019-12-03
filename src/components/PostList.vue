<template>
    <div>
        <b-card no-body class="overflow-hidden" style="max-width: 100%; margin:10px; height:200px;" v-for="post in posts" :key="post" >
            <router-link :to="{ name: 'Detail', params: { id: post.number }}">
            <b-row no-gutters>
                <b-col md="3">
                    <b-card-img src="https://www.freeiconspng.com/uploads/no-image-icon-11.PNG" style="height:200px;width:200px" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="9">
                    <b-card-body v-bind:title="post.title" style="text-align:left">
                        <b-card-text>
                            {{post.date}}
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
            </router-link>
        </b-card>
    </div>
<!--
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
-->
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
.col-md-3 {
    -webkit-box-flex: 0;
    flex: 0;
    max-width: 25%;
}
</style>