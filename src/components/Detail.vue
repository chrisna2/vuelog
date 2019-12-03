<template>
    <b-container>
        <b-row>
            <b-col cols="2" style="background-color: #eee;padding:10px">
                <b-nav vertical>
                    <b-nav-item>
                        <router-link v-if="$route.params.id+2 <= posts.length-1" :to="{ name: 'Detail', params: { id: posts[$route.params.id+2].number }}">
                            <p style="font-size:12px">{{posts[$route.params.id+2].title}}</p>
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link v-if="$route.params.id+1 <= posts.length-1" :to="{ name: 'Detail', params: { id: posts[$route.params.id+1].number }}">
                            <p style="font-size:12px">{{posts[$route.params.id+1].title}}</p>
                        </router-link>
                    </b-nav-item>

                        <b-nav-item>
                            <p style="font-size:12px;color:blue">{{posts[$route.params.id].title}}</p>
                        </b-nav-item>

                    <b-nav-item>
                        <router-link v-if="$route.params.id-1 >= 0" :to="{ name: 'Detail', params: { id: posts[$route.params.id-1].number }}">
                            <p style="font-size:12px">{{posts[$route.params.id-1].title}}</p>
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link v-if="$route.params.id-2 >= 0" :to="{ name: 'Detail', params: { id: posts[$route.params.id-2].number }}">
                            <p style="font-size:12px">{{posts[$route.params.id-2].title}}</p>
                        </router-link>
                    </b-nav-item>
                </b-nav>
            </b-col>
            <b-col cols="10">
                <div style="padding:20px">
                    <h4 style="text-align:left">{{posts[$route.params.id].title}}</h4>
                    <p style="text-align:right">{{posts[$route.params.id].date}}</p>
                    <hr>
                    <p style="text-align:left">{{posts[$route.params.id].content}}</p>
                    <hr>
                    <div style="width:100%;text-align:right">
                        <router-link v-if="$route.params.id-1 >= 0" :to="{ name: 'Detail', params: { id: posts[$route.params.id-1].number }}">
                            <button class="dtlbtn">이전</button>
                        </router-link>
                        <router-link v-if="$route.params.id+1 <= posts.length-1" :to="{ name: 'Detail', params: { id: posts[$route.params.id+1].number }}">
                            <button class="dtlbtn">이후</button>
                        </router-link>
                    </div>
                </div>
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
.container {
    width: 100%;
    margin-right: 0px; 
    margin-left: 0px; 
}
</style>