import Vue from 'vue';
import Router from 'vue-router';

//컴포넌트 목록
import Home from './components/Home.vue';
import PostList from './components/PostList.vue';

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
        }
    ]

});