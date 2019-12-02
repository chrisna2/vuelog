<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"><img src="./assets/logo.png" width="40px">uelog</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/PostList">Post</router-link></b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <!-- 라우터 뷰 페이지 위치 설정 -->
      <router-view v-bind:posts="posts"></router-view>

      <!-- footer -->
      <footer :class="['bd-footer', 'text-muted', { 'docs-border': isDocs }]">
        <b-container>
          <b-row class="justify-content-center">
            <b-col cols="12" sm order-sm="3" class="text-center text-sm-right">
            </b-col>

            <b-col cols="auto" md="4" class="text-left">
              <h5 class="bd-text-purple-bright mb-1">Documentation</h5>
              <ul class="list-unstyled ml-3">
                <li><b-link to="/" exact>Home</b-link></li>
                <li><b-link to="/docs" exact>Getting started</b-link></li>
                <li><b-link to="/docs/components" exact>Components</b-link></li>
                <li><b-link to="/docs/directives" exact>Directives</b-link></li>
                <li><b-link to="/docs/reference" exact>Reference</b-link></li>
                <li><b-link to="/docs/misc" exact>Miscellaneous</b-link></li>
                <li><b-link to="/play" exact>Playground</b-link></li>
              </ul>
            </b-col>

            <b-col cols="auto" class="text-left">
              <h5 class="bd-text-purple-bright mb-1">Community</h5>
              <ul class="list-unstyled ml-3">
                <li><a href="https://github.com/bootstrap-vue/bootstrap-vue" target="_blank">GitHub</a></li>
                <li><a href="https://discord.gg/j2Mtcny" target="_blank">Discord chat</a></li>
                <li><a href="https://twitter.com/BootstrapVue" target="_blank">Twitter</a></li>
                <li><a href="https://opencollective.com/bootstrap-vue/" target="_blank">Open Collective</a></li>
              </ul>
            </b-col>
          </b-row>

          <hr>

          <p class="mb-2">
            Designed and built with all the love in the world. Maintained by the
            <a href="https://github.com/orgs/bootstrap-vue/people" target="_blank">core team</a>
            with the help of
            <a href="https://github.com/bootstrap-vue/bootstrap-vue/graphs/contributors" target="_blank">our contributors</a>.
          </p>

          <p>
            Code licensed
            <a href="https://github.com/bootstrap-vue/bootstrap-vue/blob/master/LICENSE" target="_blank">MIT</a>.
            Docs generated with <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>
          </p>
        </b-container>
      </footer>
    </div>
  </div>
</template>

<script>
import POSTS from './json/posts.js';

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      posts : POSTS
    }
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.docs-border {
  border-top: 3px solid #dee2e6;
}
.bd-footer {
    padding: 4rem 0;
    text-align: center;
    background-color: #eee;
}
@media (min-width: 1200px) {
  .bd-footer > .container {
    max-width: 960px;
  }
}
</style>
