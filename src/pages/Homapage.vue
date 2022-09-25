<script>
export default {
  data() {
    return {
      image: { backgroundImage: "url('src/components/images/pic3.jpg')" },
    };
  },
};
</script>

<template>
  <div>
    <div
      class="w-full h-screen bg-cover bg-no-repeat bg-center"
      id="/"
      :style="image"
    >
      <div
        class="w-full h-full flex flex-col backdrop-brightness-50 items-center justify-between"
      >
        <div
          class="flex flex-col gap-y-5 container mx-auto text-center justify-center h-full items-center text-white"
        >
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter"
          >
            GSP Trade
          </h1>
          <p
            class="text-2xl sm:text-3xl md:text-4xl font-thin tracking-tighter"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
        </div>

        <div class="">
          <font-awesome-icon
            class="text-3xl p-5 text-white flex animate-bounce ease-in-out transition-all"
            icon="fa-solid fa-chevron-down"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
