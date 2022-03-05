
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
    <div class="content">
      <img class="landingImage" src="@/assets/goals.svg" alt="" />
    </div>
    <div class="md:flex items-center pl-16">
      <div class="mr-6 ml-3">
        <p class="mt-4 mb-2 text-gray-400 uppercase text-xl font-normal">
          Geleceğİ şekillendİren
        </p>
        <div class="flex">
          <h class="lg:text-5xl font-bold leading-tight text-3xl">HEDEFİMİZ</h>
        </div>
        <div class="container right_text">
          <p class="leading-tight">
            Yaşanılabilir bir dünya için sende küresel ısınmaya çözüm üret save
            the world eğitim plaformuna katıl eğitimleri tamamla eğitimlerin
            sonunda orange coin ve bir fidan sahibi olma hakkı kazan. Daha iyi
            bir evren daha iyi bir geleceğin kapılarını açar .Hadi sende bize
            katıl! Yaşamaya ve yaşatmaya devam !
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
        </div>
      </div>
    </div>
    <!-- Box right -->
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
.right_text {
  width: 400px;
}
.landingImage {
  object-fit: contain;
  width: 600px;
}
</style>