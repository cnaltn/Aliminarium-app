<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      image: { backgroundImage: "url('/pic3.jpg')" },
    };
  },
  setup() {
    const open = ref(true)
    return {
      open,
    }
  },
};



</script>

<template>

  <section class="w-full h-screen bg-cover bg-no-repeat bg-center" id="/" :style="image">
    <div class="w-full h-full flex flex-col backdrop-brightness-50 items-center justify-between">
      <div class="flex flex-col gap-y-5 container mx-auto text-center justify-center h-full items-center text-white">
        <transition name="fade">
          <h1 v-if="open" class="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
            GSP Trade
          </h1>
        </transition>

        <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin tracking-tighter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
        </p>
      </div>

      <div class="">
        <a href="#second">
          <font-awesome-icon class="text-3xl p-5 text-white flex animate-bounce ease-in-out transition-all"
            icon="fa-solid fa-chevron-down" />
        </a>
      </div>
    </div>
  </section>

</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
