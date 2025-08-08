<template>
  <div class="border p-4 rounded bg-white mt-4">
    <h2 class="text-lg font-bold mb-4">Lista</h2>

    <table class="w-full border">
      <thead>
        <tr class="bg-gray-200">
          <th v-for="col in columns" :key="col" class="p-2 border">{{ col }}</th>
          <th class="p-2 border">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in records" :key="item.id" class="border-t">
          <td v-for="col in columns" :key="col" class="p-2 border">{{ item[col] }}</td>
          <td class="p-2 border">
            <button @click="$emit('edit', item)" class="bg-yellow-400 px-2 py-1 rounded mr-2">Editar</button>
            <button @click="remove(item.id)" class="bg-red-500 text-white px-2 py-1 rounded">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CrudList",
  props: {
    columns: { type: Array, required: true },
    endpoint: { type: String, required: true }
  },
  data() {
    return {
      records: []
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios.get(this.endpoint).then(res => {
        this.records = res.data;
      });
    },
    remove(id) {
      if (confirm("Tem certeza que deseja excluir?")) {
        axios.delete(`${this.endpoint}/${id}`).then(() => {
          this.load();
        });
      }
    }
  }
};
</script>