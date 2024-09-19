<template>
    <div>
      <!-- Loader shows based on the `isLoading` flag -->
      <loader v-if="isLoading"></loader>
  
      <!-- Content -->
      <div v-if="!isLoading">
        hello world about
      </div>
    </div>
  </template>
  
  <script>
  import loader from '../../../../components/include/Loader.vue';
  
  export default {
    components: {
      loader
    },
    data() {
      return {
        isLoading: true,  // Initialize with loader visible
      };
    },
    mounted() {
      // Simulating content loading
      setTimeout(() => {
        this.isLoading = false;  // Hide loader after content is "loaded"
      }, 2000);  // Replace with real data loading logic (e.g., API call)
    },
  };
  </script>
 