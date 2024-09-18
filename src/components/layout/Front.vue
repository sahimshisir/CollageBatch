<script setup>
import sidebar from "../frontend/include/sidebar.vue";
import Header from "../frontend/include/topbar.vue";
import Content from "../frontend/pages/main.vue";
<<<<<<< HEAD
// import footar from './components/frontend/include/footer.vue'
=======
import footar from '../frontend/include/footer.vue'
>>>>>>> 072c1e6a211a3d18afbed51d9f222a01bb214c67
</script>

<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <!-- Menu -->
      <sidebar/>
      <!-- / Menu -->

      <!-- Layout container -->
      <div class="layout-page">
        <!-- Navbar -->

        <Header/>

        <!-- / Navbar -->

        <!-- Content wrapper -->
        <div class="content-wrapper">
          <!-- Content -->
          <Content/>

          <!-- / Content -->

          <!-- Footer -->
<<<<<<< HEAD
          <!-- <footar/> -->
=======
          <footar/>
>>>>>>> 072c1e6a211a3d18afbed51d9f222a01bb214c67
          <!-- / Footer -->

          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
     
    </div>

    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>

    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    import("../../assets/frontend/assets/js/dashboards-analytics.js"),
      import("../../assets/frontend/assets/js/main.js"),
      import("../../assets/frontend/assets/js/extended-ui-media-player.js");
  },
};
</script>
