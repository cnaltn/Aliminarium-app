<script>
export default {
  data() {
    return {
      image: { backgroundImage: "url('src/assets/pic6.jpg')" },
    };
  },
};
</script>

<template>
  <div>
    <div
      class="w-full h-screen bg-cover bg-no-repeat bg-center"
      id="fourth"
      :style="image"
    >
      <div
        class="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50"
      >
        <div
          class="flex flex-col gap-y-5 container mx-auto text-center justify-center h-full items-center text-white"
        >
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter"
          >
            We are care Mechanical Process a lot!
          </h1>
          <p
            class="text-2xl sm:text-3xl md:text-4xl font-thin tracking-tighter"
          >
            We serve with double head and single head angle cutting saws, CNC
            processing centers, eccentric presses, drilling machines and
            mounting track in accordance with customer requests.
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
