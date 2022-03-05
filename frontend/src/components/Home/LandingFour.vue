
<script>
export default {
  props: {
    title: String,
  },
  setup(props) {
    console.log(props.title);
  },
};
</script>


<template>
  <div
    class="md:flex flex justify-center mx-auto space-x-16 mt-20 md:mr-0 mr-10"
  >
    <div class="md:flex items-center pl-16">
      <div class="mr-6 ml-3">
        <p class="mt-4 mb-2 text-gray-400 text-xl uppercase font-normal">
          ESERİNİ satabİleceğİn bİr
        </p>
        <div class="flex">
          <h class="lg:text-5xl font-bold leading-tight text-3xl"
            >NFT mağazası</h
          >
        </div>
        <div class="container right_text">
          <p class="leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            tempor amet neque rhoncus vel. Ultricies ultrices vitae a at fames
            varius tincidunt id nunc. Sagittis mauris, adipiscing risus aliquam
            pharetra.
          </p>
        </div>
        <div>
          <a
            href="#"
            class="
              inline-flex
              items-center
              justify-center
              mt-3
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
              duration-300
              hover:bg-green-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-green-800
            "
          >
            Aramıza Katıl
          </a>
          <a
            href="#"
            class="
              inline-flex
              items-center
              justify-center
              mt-3
              ml-3
              px-4
              py-2
              text-base
              font-medium
              leading-6
              text-black
              whitespace-no-wrap
              cyan
              rounded-md
              shadow-sm
              hease-in-out
              delay-150
              duration-300
              hover:bg-green-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-green-800
            "
          >
            HEDEFİMİZ
          </a>
        </div>
      </div>
    </div>
    <!-- Box right -->
    <div class="content">
      <img class="landingImage" src="@/assets/store.svg" alt="" />
    </div>
  </div>
</template>


<style scoped>
.vector {
  width: 13rem;
}
.right_text {
  width: 400px;
}
.green {
  background-color: #96ffd6;
}
.cyan {
  background-color: #96fff9;
}
.landingImage {
  object-fit: contain;
  width: 750px;
}
</style>