<script setup>

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
          <router-view></router-view>

          <!-- / Content -->

          <!-- Footer -->
          <footar/>
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
import sidebar from "../frontend/include/sidebar.vue";
import Header from "../frontend/include/topbar.vue";
import footar from '../frontend/include/footer.vue';


export default {
  components:{
    sidebar,
    Header,
    footar,
  },
  mounted() {
    import("../../assets/frontend/assets/js/dashboards-analytics.js"),
      import("../../assets/frontend/assets/js/main.js"),
      import("../../assets/frontend/assets/js/extended-ui-media-player.js");
  },
};
</script>
