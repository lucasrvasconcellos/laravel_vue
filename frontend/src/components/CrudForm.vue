<template>
  <div class="border p-4 rounded bg-gray-50">
    <h2 class="text-lg font-bold mb-4">
      {{ formData.id ? 'Editar Registro' : 'Novo Registro' }}
    </h2>

    <form @submit.prevent="save">
      <div v-for="field in fields" :key="field.name" class="mb-4">
        <label class="block mb-1 font-medium">{{ field.label }}</label>
        <input
          v-if="field.type === 'text' || field.type === 'number'"
          :type="field.type"
          v-model="formData[field.name]"
          :placeholder="field.placeholder || ''"
          class="border p-2 w-full rounded"
        />

        <textarea
          v-else-if="field.type === 'textarea'"
          v-model="formData[field.name]"
          :placeholder="field.placeholder || ''"
          class="border p-2 w-full rounded"
        ></textarea>
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
        {{ formData.id ? 'Atualizar' : 'Salvar' }}
      </button>

      <button v-if="formData.id" type="button" @click="reset" class="ml-2 bg-gray-400 text-white px-4 py-2 rounded">
        Cancelar
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CrudForm",
  props: {
    fields: { type: Array, required: true },
    endpoint: { type: String, required: true }
  },
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    save() {
      const method = this.formData.id ? "put" : "post";
      const url = this.formData.id
        ? `${this.endpoint}/${this.formData.id}`
        : this.endpoint;

      axios[method](url, this.formData).then(() => {
        this.$emit("saved");
        this.reset();
      });
    },
    edit(record) {
      this.formData = { ...record };
    },
    reset() {
      this.formData = {};
    }
  }
};
</script>