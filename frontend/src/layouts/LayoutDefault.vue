<template>
  <div>
    <header style="background: #222; color: white; padding: 1rem;">
      <h1>{{ title }}</h1>
      <nav style="margin-top: 10px;">
        <router-link to="/users" style="margin-right: 10px; color: white;">Usuários</router-link>
      </nav>
    </header>
    <main style="padding: 1rem;">
      <slot />
    </main>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>
