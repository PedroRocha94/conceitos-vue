<template>
  <div class="form-with-vuex" style="display: flex; flex-direction: column; gap: 3rem;">
    <div class="container m-100" style="max-width: 509px">
      <h1>Formulário com Vuex</h1>
      <label>Nome: </label>
      <input 
        class="form-control"
        type="text"
        v-model="name"
      >
      <label>Idade: </label>
      <input 
        class="form-control"
        type="number"
        v-model="age"
      >
      <label>Email: </label>
      <input 
        class="form-control"
        type="text"
        v-model="email"
      >
      <button
        class="btn btn-primary"
        @click="save"
      >
        Salvar
      </button>
    </div>

    <div class="container mt-10 card" style="width: 18rem;">
      <div class="card-body" style="display: flex; flex-direction: column; gap: 2rem;">
        <h2>Store do Vuex</h2>
        <span> <strong>Nome:</strong> {{ name }}</span>
        <span> <strong>Idade:</strong> {{ age }}</span>
        <span> <strong>Email:</strong> {{ email }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      user: {
        name: '',
        age: 0,
        email: ''
      }
    }
  },
  computed: {
    name: {
      get() {
        //Buscando valor no Vuex;
        return this.$store.state.user.first_name;
      },
      set(value) {
        //Para usar o Vuex de forma sincrona utiliza-se as Mutations;
        this.$store.commit('saveFirstName', value);
      }
    },
    age: {
      get() {
        //Buscando valor no Vuex;
        return this.$store.state.user.age;
      },
      set(value) {
        //Para usar o Vuex de forma sincrona utiliza-se as Mutations;
        this.$store.commit('saveAge', value);
      }
    },
    email: {
      get() {
        //Buscando valor no Vuex;
        return this.$store.state.user.email;
      },
      set(value) {
        //Para usar o Vuex de forma sincrona utiliza-se as Mutations;
        this.$store.commit('saveEmail', value);
      }
    }
  },
  methods: {
    save() {
      //Para usar o Vuex assincronamente utiliza os Actions;
      //Para utiliar essa forma, precisa alterar os valores do v-model
      //passando as propriedades do objeto;
      this.$store.dispatch('saveFirstName', this.user.name);
      this.$store.dispatch('saveAge', this.user.age);
      this.$store.dispatch('saveEmail', this.user.email);
    }
  }
}
</script>