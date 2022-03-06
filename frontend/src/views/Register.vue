<script>
import Navbar from "@/components/appLayout/Navbar.vue";
import { defineComponent } from "@vue/runtime-core";
import { mapGetters } from "vuex";
export default defineComponent({
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
      user.push(this.name);
      user.push(this.surname);
      this.$appAxios
        .post("api/user/register", {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password,
        })
        .then((register_response) => {
          if (register_response.data.success) {
            console.log(register_response);
            this.$store.commit("setUser", user);
            this.$router.push("/dashboard");
          } else {
            alert("Lütfen tüm bilgileri doldurunuz");
          }
        })
        .catch(function (error) {
          console.log("error");
        });
    },
  },
});
</script>

<template>
  <img src="@/assets/background.svg" id="bg" alt="" />
  <div data-aos="fade-right" data-aos-duration="1000">
    <div class="grid place-items-center h-screen">
      <div
        class="
          flex flex-col
          w-full
          max-w-md
          px-4
          py-8
          bg-white
          rounded-lg
          shadow
          dark:bg-gray-800
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        <div
          class="
            self-center
            mb-6
            text-xl
            font-bold
            custom-text
            sm:text-2xl
            dark:text-white
          "
        >
          SAVE THE WORLD
        </div>
        <div class="mt-8">
          <div class="flex flex-col mb-2">
            <div class="flex">
              <label for="" class="px-6 py-4 text-gray-800 font-bold">Ad</label>
              <input
                required
                v-model="this.userData.name"
                type="text"
                class="
                  rounded-r-lg
                  flex-1
                  appearance-none
                  border border-gray-300
                  py-2
                  px-4
                  rounded-md
                  bg-white
                  custom-text
                  placeholder-gray-400
                  shadow-sm
                  text-base
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-300
                  focus:border-transparent
                "
                placeholder="Futter"
              />
            </div>
          </div>
          <div class="flex flex-col mb-2">
            <div class="flex">
              <label for="" class="px-6 py-4 -ml-7 text-gray-800 font-bold"
                >Soyad</label
              >
              <input
                required
                type="text"
                v-model="this.userData.surname"
                class="
                  rounded-r-lg
                  flex-1
                  appearance-none
                  border border-gray-300
                  py-2
                  px-4
                  rounded-md
                  bg-white
                  custom-text
                  placeholder-gray-400
                  shadow-sm
                  text-base
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-300
                  focus:border-transparent
                "
                placeholder="Firebase"
              />
            </div>
          </div>
          <div class="flex flex-col mb-2">
            <div class="flex">
              <label for="" class="px-6 py-4 -ml-5 text-gray-800 font-bold"
                >Email</label
              >
              <input
                required
                type="email"
                v-model="this.userData.email"
                class="
                  rounded-r-lg
                  flex-1
                  appearance-none
                  border border-gray-300
                  py-2
                  px-4
                  rounded-md
                  bg-white
                  custom-text
                  placeholder-gray-400
                  shadow-sm
                  text-base
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-300
                  focus:border-transparent
                "
                placeholder="google>all@gmail.com"
              />
            </div>
          </div>
          <div class="flex flex-col mb-2">
            <div class="flex">
              <label
                for=""
                class="px-6 py-4 -ml-12 -mr-2 text-gray-800 font-bold"
                >Password</label
              >
              <input
                required
                type="password"
                v-model="this.userData.password"
                class="
                  rounded-r-lg
                  flex-1
                  appearance-none
                  border border-gray-300
                  py-2
                  px-4
                  rounded-md
                  bg-white
                  custom-text
                  placeholder-gray-400
                  shadow-sm
                  text-base
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-300
                  focus:border-transparent
                "
              />
            </div>
          </div>
          <div class="flex justify-between mb-6">
            <div class="form-check">
              <input
                class="
                  form-check-input
                  appearance-none
                  h-4
                  w-4
                  border border-gray-800
                  rounded-sm
                  text-green-500
                  bg-white
                  checked:bg-green-600
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="checkbox"
                value=""
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                Beni Hatırla
              </label>
            </div>
            <div class="flex">
              <a
                href="#"
                class="
                  inline-flex
                  text-xs
                  font-medium
                  text-red-600
                  sm:text-sm
                  dark:text-gray-100
                  hover:underline
                  dark:hover:text-white
                "
              >
                Şifremi unuttum
              </a>
            </div>
          </div>
          <div class="flex w-full">
            <img src="@/assets/line.svg" class="mb-3" alt="" />
          </div>
          <div class="flex w-ful">
            <button
              @click="onSubmit"
              class="
                w-full
                px-12
                py-3
                green
                hover:bg-green-700
                focus:ring-green-500 focus:ring-offset-green-200
                custom-text
                transition
                ease-in
                duration-200
                text-center text-base
                font-semibold
                shadow-md
                focus:outline-none focus:ring-2 focus:ring-offset-2
                rounded-lg
              "
              to="/"
            >
              Üye Ol
            </button>
          </div>
          <div class="flex w-ful mt-3">
            <router-link
              class="
                w-full
                px-12
                py-3
                custom-bg
                hover:bg-gray-200
                focus:ring-green-500 focus:ring-offset-green-200
                text-green-300
                transition
                ease-in
                duration-200
                text-center text-base
                font-semibold
                shadow-md
                focus:outline-none focus:ring-2 focus:ring-offset-2
                rounded-lg
              "
              to="/login"
              >Giriş Yap</router-link
            >
          </div>
        </div>
        <div class="flex">
          <button
            class="
              w-full
              px-12
              py-3
              mt-4
              font-semibold
              text-gray-900
              bg-white
              border-2 border-gray-300
              rounded-md
              shadow
              outline-none
              hover:bg-blue-50
              focus:border-green-400 focus:outline-none
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-4 h-4 mr-3 text-gray-900 fill-current"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path></svg
            >Google ile giriş yap
          </button>
        </div>
        <div class="flex text-xs"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
.green {
  background-color: #96ffd6;
}
.custom-text {
  color: #3f3d56;
}
.custom-bg {
  background-color: #3f3d56;
}
</style>

