<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template class="test">
  <div class="container-fluid min-vh-100 d-flex flex-column">
    <div class="row px-0">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/tree">Tree Designer</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/taxonomy">Taxonomy</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="row flex-grow-1">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
@import 'assets/bs-overrides.scss';

.nav-link {
  @extend .rounded, .text-light, .fw-light;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}

nav a.router-link-exact-active {
  & {
    // @extend .active, .bg-secondary, .bg-gradient, .border-primary, .text-dark;
    @extend .fw-bold;
  }
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
