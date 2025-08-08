<template>
  <div>
    <h1>Cadastro de Usuário</h1>
    <form @submit.prevent="cadastrarUsuario">
      <input v-model="name" placeholder="Nome" />
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Senha" />
      <button type="submit">Cadastrar</button>
    </form>

    <h2>Usuários Cadastrados</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const password = ref('')
const users = ref([])

const cadastrarUsuario = async () => {
  try {
    await axios.post('http://localhost:8000/api/users', {
      name: name.value,
      email: email.value,
      password: password.value
    })

    name.value = ''
    email.value = ''
    password.value = ''

    await carregarUsuarios()
  } catch (err) {
    console.error('Erro ao cadastrar:', err.response?.data ?? err.message)
  }
}

const carregarUsuarios = async () => {
  const res = await axios.get('http://localhost:8000/api/users')
  users.value = res.data
}

onMounted(() => {
  carregarUsuarios()
})
</script>
