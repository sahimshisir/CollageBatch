<template>
  <div id="frontend-loader">
    <div class="load_style">
      <h1>SyncXss</h1>
      <div class="box_style"></div>
    </div>
  </div>
</template>

<style scoped>
#frontend-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index:11;
  background-color:rgba(0, 0, 0, 0.732);
  /* opacity: 0.6; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.load_style h1 {
  display: inline-block;
  font-size: 3em;
  font-weight: bold;
  color:transparent;
  background: linear-gradient(90deg, #e879f9, #7367f0, #e879f9);
  background-size: 200% 100%;
  background-clip: text;
  animation: signatureEffect 2s ease-in-out infinite;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5), 6px 6px 12px rgba(0, 0, 0, 0.3);
}
.box_style {
  display: flex;
  gap: 10px;
  position: relative;
  top: -15px;
  justify-content: center;
  width: 100%;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(90deg, #e879f9, #7367f0, #e879f9);
  animation: box 2s linear infinite;
  background-size: 200% 100%;
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), inset 4px 4px 10px rgba(255, 255, 255, 0.2),
    inset -4px -4px 10px rgba(0, 0, 0, 0.3);
}

@keyframes signatureEffect {
  0% {
    background-position: 0% 100%;
    /* opacity: 0; */
    transform: rotateY(20deg);
  }
  30% {
    /* opacity: 1; */
    transform: rotateY(0deg);
  }
  70% {
    background-position: 100% 0%;
    /* opacity: 1; */
    transform: rotateY(0deg);
  }
  100% {
    background-position: 0% 100%;
    /* opacity: 0; */
    transform: rotateY(-20deg);
  }
}
@keyframes box {
  0% {
    background-position: 0% 100%;
    /* opacity: 0; */
    transform: rotateY(20deg) translateY(2px);
  }
  30% {
    /* opacity: 1; */
    transform: rotateY(0deg) translateY(-2px);
  }
  70% {
    background-position: 100% 0%;
    /* opacity: 1; */
    transform: rotateY(0deg) translateY(2px);
  }
  100% {
    background-position: 0% 100%;
    /* opacity: 0; */
    transform: rotateY(-20deg) translateY(2px);
  }
}
</style>
