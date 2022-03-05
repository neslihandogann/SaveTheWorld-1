
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
        <p class="mt-4 mb-2 text-gray-400 text-xl font-normal">
          SENiN DE YARDIMINLA
        </p>
        <div class="flex">
          <h class="lg:text-5xl font-bold leading-tight text-3xl">Dünyayı</h>
          <div class="inline flex-col">
            <h1 class="flex lg:text-5xl font-bold ml-3 leading-tight text-3xl">
              daha iyi bir
            </h1>
            <img class="mt-2 mr-3 vector" src="@/assets/vector.svg" alt="" />
          </div>
        </div>
        <h class="lg:text-5xl font-bold leading-tight text-3xl"
          >yer yapıyoruz.
        </h>
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
            Neden Katılmayayım?
          </a>
        </div>
      </div>
    </div>
    <!-- Box right -->
    <div class="content">
      <img class="landingImage" src="@/assets/nature.svg" alt="" />
      <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.vector {
  width: 13rem;
}
.green {
  background-color: #96ffd6;
}
.cyan {
  background-color: #96fff9;
}
.landingImage {
  object-fit: contain;
  width: 600px;
}
.scroll-downs {
  position: absolute;
  top: 600px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  width: 34px;
  height: 55px;
}
.mousey {
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #000;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #000;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}
</style>