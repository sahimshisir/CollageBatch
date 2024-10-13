<template>
    <div class="authentication-wrapper authentication-cover authentication-bg">
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Dynamically import JavaScript files
      // import("../../assets/frontend/assets/vendor/libs/flatpickr/flatpickr.js");
      // import("../../assets/frontend/assets/vendor/libs/flatpickr/flatpickr.css");
      // import("../../assets/frontend/assets/vendor/libs/moment/moment.js");
    }
  };
  </script>
  