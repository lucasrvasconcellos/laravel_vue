<template>
  <LayoutDefault title="Cadastro de Usuários">
    <CrudForm
      :fields="fields"
      endpoint="/users"
      :onSaved="loadUsers"
    />
    <CrudList
      :columns="['id', 'name', 'email']"
      :items="users"
    />
  </LayoutDefault>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LayoutDefault from '../components/LayoutDefault.vue'
import CrudForm from '../components/CrudForm.vue'
import CrudList from '../components/CrudList.vue'
import api from '../services/api'

const users = ref([])

const fields = [
  { name: 'name', label: 'Nome' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Senha', type: 'password' }
]

const loadUsers = async () => {
  const res = await api.get('/users')
  users.value = res.data
}

onMounted(loadUsers)
</script>