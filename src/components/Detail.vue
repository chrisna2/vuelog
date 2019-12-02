<template>
    <b-container style="margin:10px">
        <b-row>
            <b-col cols="3" style="padding-right:0px;padding-left:0px;">
                <ul class="list-group">
                    <li class="list-group-item" v-for="post in posts" :key="post">
                        <p style="font-size:12px">{{post.title}}</p>
                        <p style="font-size:10px">{{post.date}}</p>
                    </li>
                </ul>
            </b-col>
            <b-col cols="9">
                <h4>{{posts[$route.params.id].title}}</h4>
                <hr>
                <h5>{{posts[$route.params.id].date}}</h5>
                <hr>
                <p>{{posts[$route.params.id].content}}</p>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    name: 'detail',
    props: {
        posts : Array
    }
}
</script>

<style>
hr {
    margin : 20px;
}
</style>