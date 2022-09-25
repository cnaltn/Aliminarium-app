<script>
export default {
  data() {
    return {
      image: { backgroundImage: "url('/pic5.jpg')" },
    };
  },
};
</script>
<template>

  <section class="w-full h-screen bg-cover bg-no-repeat bg-center" id="third" :style="image">
    <div class="w-full h-full flex flex-col justify-center items-center backdrop-brightness-[0.45]">
      <div class="flex flex-col gap-y-5 container mx-auto text-center justify-center h-full items-center text-white">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
          We are here to best solution for you!
        </h1>
        <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin tracking-tighter">
          We have been operating in Kayseri since 2018. Together with its many
          stakeholders, we work solution oriented in line with the needs of
          our customers.
        </p>
      </div>
      <div class="">
        <a href="#fourth">
          <font-awesome-icon class="text-3xl p-5 text-white flex animate-bounce ease-in-out transition-all"
            icon="fa-solid fa-chevron-down" />
        </a>
      </div>
    </div>
  </section>

</template>

<style>

</style>
