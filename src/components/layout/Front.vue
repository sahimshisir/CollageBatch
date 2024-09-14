<script setup>
import sidebar from '../frontend/include/sidebar.vue'
import Header from '../frontend/include/topbar.vue'
import Content from '../frontend/pages/main.vue'
// import footar from './components/frontend/include/footer.vue'
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
           <!-- <footar/> -->
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
    // Dynamically import the script when the component is mounted
    import('../../assets/frontend/assets/js/dashboards-analytics.js'),
    // import('./assets/frontend/assets/vendor/js/template-customizer.js'),
    // import('./assets/frontend/assets/vendor/js/helpers.js'),
    // import('./assets/frontend/assets/vendor/js/menu.js'),
    import('../../assets/frontend/assets/js/main.js'),
    import('../../assets/frontend/assets/js/extended-ui-media-player.js')

     
  },
};
</script>


