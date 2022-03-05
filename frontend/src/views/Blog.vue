<template>
  <CustomHeader />
  <div class="container flex justify-between">
    <div class="profile w-3/12 mt-2 items-center flex flex-col">
      <img src="@/assets/avatar.svg" alt="" />
      <h1 class="font-bold text-xl mt-1">Berkesu</h1>
      <div class="flex mt-2">
        <img src="@/assets/eye.svg" class="mr-4" alt="" />
        <h1>1002</h1>
      </div>
      <button
        class="
          bg-green-300
          text-gray-800
          w-20
          text-center
          rounded-md
          hover:bg-green-400
          py-2
          mt-3
          font-semibold
        "
      >
        Follow
      </button>
    </div>
    <div class="w-9/12 bg-gray-100 p-3 mr-4 rounded-md">
      <h1 class="font-semibold text-xl text-bold p-4">Küresel Isınma</h1>
      <p class="p-3 font-medium text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        nulla officiis cumque modi odio voluptatum eos adipisci dolores, quos
        fugit. Quae alias aperiam ad rerum facilis voluptas, commodi quaerat
        ipsa.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Reprehenderit nulla officiis cumque modi odio voluptatum eos adipisci
        dolores, quos fugit. Quae alias aperiam ad rerum facilis voluptas,
        commodi quaerat ipsa.Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Reprehenderit nulla officiis cumque modi odio voluptatum eos
        adipisci dolores, quos fugit. Quae alias aperiam ad rerum facilis
        voluptas, commodi quaerat ipsa.Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Reprehenderit nulla officiis cumque modi odio
        voluptatum eos adipisci dolores, quos fugit. Quae alias aperiam ad rerum
        facilis voluptas, commodi quaerat ipsa.Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Reprehenderit nulla officiis cumque modi
        odio voluptatum eos adipisci dolores, quos fugit. Quae alias aperiam ad
        rerum facilis voluptas, commodi quaerat ipsa.
      </p>
      <div class="flex justify-center p-5">
        <img src="@/assets/blog_photo.svg" alt="" />
      </div>
      <p class="p-3 font-medium text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        nulla officiis cumque modi odio voluptatum eos adipisci dolores, quos
        fugit. Quae alias aperiam ad rerum facilis voluptas, commodi quaerat
        ipsa.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Reprehenderit nulla officiis cumque modi odio voluptatum eos adipisci
        dolores, quos fugit. Quae alias aperiam ad rerum facilis voluptas,
        commodi quaerat ipsa.Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Reprehenderit nulla officiis cumque modi odio voluptatum eos
        adipisci dolores, quos fugit. Quae alias aperiam ad rerum facilis
        voluptas, commodi quaerat ipsa.Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Reprehenderit nulla officiis cumque modi odio
        voluptatum eos adipisci dolores, quos fugit. Quae alias aperiam ad rerum
        facilis voluptas, commodi quaerat ipsa.Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Reprehenderit nulla officiis cumque modi
        odio voluptatum eos adipisci dolores, quos fugit. Quae alias aperiam ad
        rerum facilis voluptas, commodi quaerat ipsa.
      </p>
    </div>
    <div class="w-3/12 text-center">
      <a
        v-for="i in 5"
        class="
          block
          transition
          ease-in-out
          delay-150
          duration-300
          hover:-translate-y-1
        "
        href=""
      >
        <img
          class="object-cover w-full h-36 shadow-xl rounded-xl"
          src="https://images.unsplash.com/photo-1643101808513-0552e31e4d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />

        <div class="p-4">
          <h5 class="text-xl font-bold text-gray-900">
            Finding the Journey to Mordor
          </h5>
          <p class="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["_currentUser"]),
  },
};
</script>

<style>
</style>