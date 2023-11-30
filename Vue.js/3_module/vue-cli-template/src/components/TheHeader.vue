<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <a class="navbar-logo" href="/">{{title}}</a>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.alias">
              <a class="navbar-link" :href="link.url">{{
                link.title
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {app, links_array} from '@/_config'
export default {
  data () {
    return {
      title: app.title,
      links: links_array,
    };
  },
};
</script>