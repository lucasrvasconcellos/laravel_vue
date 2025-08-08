<template>
  <LayoutDefault title="Cadastro de Usuários">
    <CrudForm
      ref="crudForm"
      :fields="fields"
      endpoint="http://localhost:8000/api/users"
      @saved="loadList"
    />
    <CrudList
      ref="crudList"
      :columns="['id', 'name', 'email']"
      endpoint="http://localhost:8000/api/users"
      @edit="editRecord"
    />
  </LayoutDefault>
</template>

<script>
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import CrudForm from "@/components/CrudForm.vue";
import CrudList from "@/components/CrudList.vue";

export default {
  components: { LayoutDefault, CrudForm, CrudList },
  data() {
    return {
      fields: [
        { name: "name", label: "Nome", type: "text", placeholder: "Digite o nome" },
        { name: "email", label: "E-mail", type: "text", placeholder: "Digite o e-mail" },
        { name: "password", label: "Senha", type: "text", placeholder: "Digite a senha" }
      ]
    };
  },
  methods: {
    loadList() {
      this.$refs.crudList.load();
    },
    editRecord(record) {
      this.$refs.crudForm.edit(record);
    }
  }
};
</script>