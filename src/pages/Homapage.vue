<script>

export default {
  data() {
    return {
      image: { backgroundImage: "url('/11.jpg')" },
    };
  },

};



</script>

<template>

  <section class="w-full h-screen bg-cover bg-no-repeat bg-center" id="/" :style="image">
    <div class="w-full h-full flex flex-col backdrop-brightness-[0.65] items-center justify-between">
      <div class="flex flex-col gap-y-5 container mx-auto text-center justify-center h-full items-center text-white">

        <h1 v-motion-slide-top :delay="200"
          class="text-5xl sm:text-5xl md:text-6xl lg:text-8xl drop-shadow-md font-bold tracking-tighter">
          Aliminarium
        </h1>


        <p v-motion-slide-bottom :delay="200"
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-md font-thin tracking-tighter">
          Always here for the best quality.
        </p>
        <div class="flex sm:hidden">
          <a href="#second">
            <font-awesome-icon class="text-3xl p-5 text-white flex animate-bounce ease-in-out transition-all"
              icon="fa-solid fa-chevron-down" />
          </a>
        </div>

      </div>
      <div class="hidden sm:flex">
        <a href="#second">
          <font-awesome-icon class="text-3xl p-5 text-white flex animate-bounce ease-in-out transition-all"
            icon="fa-solid fa-chevron-down" />
        </a>
      </div>

    </div>
  </section>

</template>

<style>

</style>
