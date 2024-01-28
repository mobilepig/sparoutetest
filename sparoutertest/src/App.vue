<template>
  <div class="container">
    <h5>hello app vue</h5>
    <router-view></router-view>

    <button class="btn btn-primary" v-on:click="$router.push('/')">
      main 컴포넌트 가즈아
    </button>
    <button class="btn btn-primary" v-on:click="$router.push('muzzi')">
      muzzi 컴포넌트 가즈아
    </button>
    <button class="btn btn-primary" v-on:click="$router.push('dori')">
      dori 컴포넌트 가즈아
    </button>
    <button class="btn btn-danger" v-on:click="redirectToHiUrl">
      personal 컴포넌트 가즈아
    </button>
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
  methods: {
    redirectToHiUrl() {
      // /hiurl로 이동
      window.location.href = "/hiurl";
    },
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
