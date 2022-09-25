<script setup>
import Homapage from "./pages/Homapage.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Seconpage from "./pages/Seconpage.vue";
import Thirpage from "./pages/Thirpage.vue";
import Fourthpage from "./pages/Fourthpage.vue";
import Footer from "./components/Footer/Footer.vue";





</script>

<template>
  <div class="container_">
    <Navbar></Navbar>
    <section>
      <Homapage></Homapage>
    </section>
    <section>
      <Seconpage></Seconpage>
    </section>
    <section>
      <Thirpage></Thirpage>
    </section>
    <section>
      <Fourthpage></Fourthpage>
    </section>
    <Footer></Footer>




  </div>

</template>

<style>
section {
  height: 100vh;
  display: flex;
  scroll-snap-align: start;

  width: 100%;
}

.container_ {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  z-index: -1;





}


.container_::-webkit-scrollbar {
  display: none;
}
</style>
