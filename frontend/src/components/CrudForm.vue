<template>
  <div>
    <h2>Cadastro</h2>
    <form @submit.prevent="save">
      <div v-for="field in fields" :key="field.name" style="margin-bottom: 10px;">
        <label>{{ field.label }}</label><br />
        <input
          v-model="form[field.name]"
          :type="field.type || 'text'"
          :placeholder="field.placeholder || ''"
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import api from '../services/api'

const props = defineProps({
  fields: Array, // [{ name, label, type }]
  endpoint: String,
  onSaved: Function
})

const form = reactive({})

const save = async () => {
  await api.post(props.endpoint, form)
  if (props.onSaved) props.onSaved()
  Object.keys(form).forEach(k => form[k] = '') // limpar campos
}
</script>