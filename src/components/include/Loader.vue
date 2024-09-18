<template>
  <div class="col" id="global-loader">
    <!-- Wave -->
    <div class="sk-wave sk-primary">
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
    </div>
  </div>
</template>

<script>
export default{
    mounted(){
        import('../../assets/frontend/assets/vendor/libs/spinkit/spinkit.css');
    }
}
</script>


