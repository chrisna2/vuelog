import Vue from 'vue';
import Router from 'vue-router';

//컴포넌트 목록
import Home from './components/Home.vue';
import PostList from './components/PostList.vue';
import Detail from './components/Detail.vue';

Vue.use(Router);

export default new Router({

    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },        
        {
            path: "/PostList",
            name: "PostList",
            component: PostList
        },
        {
            path: "/Detail/:id",
            name: "Detail",
            component: Detail
        }
    ]

});