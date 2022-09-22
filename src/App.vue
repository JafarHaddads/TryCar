<template>
  <nav>
    <router-link to="/">Home Page</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
body {
  background-color: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #553192;
    }
  }
}
</style>
