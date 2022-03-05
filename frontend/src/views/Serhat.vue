<template>
  <div class="grid place-items-center h-screen">
    <input type="text" v-model="this.userData.name" />
    <input type="text" v-model="this.userData.surname" />
    <input type="text" v-model="this.userData.email" />
    <input type="password" v-model="this.userData.password" />
    <button @click="onSubmit">gonder</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: null,
        surname: null,
        email: null,
        password: null,
      },
    };
  },

  methods: {
    onSubmit() {
      const user = [];
      user.push(this.email);
      user.push(this.password);
      this.$appAxios
        .post("api/user/register", {
          name: this.userData.name,
          surname: this.userData.surname,
          email: this.userData.email,
          password: this.userData.password,
        })
        .then((register_response) => {
          console.log(register_response);
          this.$store.commit("setUser", user);
          this.$router.push("/dashboard");
        })
        .catch(function (error) {
          console.log("error");
        });
    },
  },
};
</script>

<style>
</style>