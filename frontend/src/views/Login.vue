<script>
export default {
  data() {
    return {
      userData: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$appAxios
        .post("/api/user/login", {
          email: this.userData.email,
          password: this.userData.password,
        })
        .then((login_response) => {
          console.log(login_response.data.success);
          if (login_response.data.success) {
            this.$store.commit("setUser", this.userData.email);
            this.$router.push("/dashboard");
          } else {
            alert("Bilgilerinizi kontrol ediniz");
          }
        });
    },
  },
};
</script>

<template>
  <img src="@/assets/background.svg" id="bg" alt="" />
  <div data-aos="fade-right" data-aos-duration="2000">
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
            <div class="flex relative">
              <span
                class="
                  rounded-l-md
                  inline-flex
                  items-center
                  px-3
                  border-t
                  bg-white
                  border-l border-b border-gray-300
                  custom-text
                  shadow-sm
                  text-sm
                "
              >
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                v-model="userData.email"
                class="
                  rounded-r-lg
                  flex-1
                  appearance-none
                  border border-gray-300
                  w-full
                  py-2
                  px-4
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
                placeholder="Email"
              />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <div class="flex relative">
              <span
                class="
                  rounded-l-md
                  inline-flex
                  items-center
                  px-3
                  border-t
                  bg-white
                  border-l border-b border-gray-300
                  custom-text
                  shadow-sm
                  text-sm
                "
              >
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"
                  ></path>
                </svg>
              </span>
              <input
                type="password"
                v-model="userData.password"
                class="
                  rounded-r-lg
                  flex-1
                  appearance-none
                  border border-gray-300
                  w-full
                  py-2
                  px-4
                  bg-white
                  text-gray-700
                  placeholder-gray-400
                  shadow-sm
                  text-base
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-300
                  focus:border-transparent
                "
                placeholder="Şifre"
              />
            </div>
          </div>
          <div class="flex justify-between mb-6 -mt-4">
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
                id="flexCheckDefault"
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
            >
              Giris yap
            </button>
          </div>
        </div>
        <div class="flex items-center justify-center mt-6">
          <router-link
            to="/register"
            class="
              inline-flex
              items-center
              text-xs
              font-medium
              text-center text-gray-500
              hover:text-gray-700
              dark:text-gray-100 dark:hover:text-white
            "
          >
            <span class="ml-2">Herhangi bir hesabınız yok mu?</span>
          </router-link>
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
</style>

