<template>
  <div class="container">
    <h1>hello app vue</h1>
    <router-view></router-view>
    <router-link to="/">main</router-link>
    <router-link to="/muzzi">muzzi</router-link>
    <router-link to="/dori">dori</router-link>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const data = reactive({});

    return {
      data,
    };
  },
};
</script>

<style lang="scss">
#app {
  width: 100vw;
}
body {
  margin: 0;
}
.container {
}
</style>
