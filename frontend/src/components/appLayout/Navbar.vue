<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>
<template>
  <section
    class="
      w-full
      px-8
      text-gray-700
      backdrop-blur-sm
      sticky
      top-0
      z-10
      bg-white
      body-font
    "
  >
    <div
      class="
        container
        flex flex-col flex-wrap
        items-center
        justify-between
        py-5
        mx-auto
        md:flex-row
        max-w-7xl
      "
    >
      <a
        href="#_"
        class="
          relative
          z-10
          flex
          items-center
          w-auto
          text-2xl
          font-extrabold
          leading-none
          text-
          select-none
        "
        >SaveTheWorld</a
      >

      <div
        class="
          relative
          z-10
          inline-flex
          items-center
          space-x-3
          md:ml-5
          lg:justify-end
        "
      >
        <router-link
          to="/login"
          class="
            inline-flex
            items-center
            justify-center
            px-4
            py-2
            text-base
            font-medium
            leading-6
            text-gray-600
            whitespace-no-wrap
            bg-white
            hease-in-out
            delay-150
            decoration-green-300
            hover:underline
            duration-300
            focus:outline-none focus:shadow-none
          "
        >
          Giriş Yap
        </router-link>
        <span class="inline-flex rounded-md shadow-sm">
          <router-link
            to="/register"
            class="
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              text-base
              font-medium
              leading-6
              text-black
              whitespace-no-wrap
              green
              rounded-md
              shadow-sm
              hease-in-out
              delay-150
              hover:-translate-y-1
              duration-300
              hover:bg-green-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-green-800
            "
          >
            Üye Ol
          </router-link>
        </span>
      </div>
    </div>
  </section>
</template>



<style scoped>
.green {
  background-color: #96ffd6;
}
</style>