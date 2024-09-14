<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <!-- <h4 class="py-3 mb-4">
      <span class="text-muted fw-light">Extended UI /</span> Plyr
    </h4> -->

    <div class="row">
      <!-- Video Player -->
      <div class="col-12 mb-4">
        <div class="card">
          <div class="card-header d-flex">
            <div class="avatar  me-3 ">
                      <img src="../../../assets/frontend/assets/img/avatars/1.png"  class="h-auto rounded-circle" />
                     
                    </div>
                    <div>
                       <p class="mt-1">
                      Alex leman
                    </p>
                    <span>10h ago</span>
                    </div>
                   
                    
          </div>
          
          <div class="card-body">
            <video
              class="w-100"
              poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
              id="plyr-video-player"
              playsinline
              controls>
              <source
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div class="col-12 mb-4">
        <div class="card">
          <h5 class="card-header">Video</h5>
          <div class="card-body">
            <img class="w-100" src="../../../assets/frontend/assets/img/backgrounds/6.jpg" alt="" srcset="">
           
          </div>
        </div>
      </div>
      <div class="col-12 mb-4">
        <div class="card">
          <h5 class="card-header">Video</h5>
          <div class="card-body">
            <video
              class="w-100"
              poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
              id="plyr-video-player"
              playsinline
              controls>
              <source
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div class="col-12 mb-4">
        <div class="card">
          <h5 class="card-header">Video</h5>
          <div class="card-body">
            <img class="h-50 w-100" src="../../../assets/frontend/assets/img/elements/1.jpg" alt="" srcset="">
          </div>
        </div>
      </div>
      <div class="col-12 mb-4">
        <div class="card">
          <h5 class="card-header">Video</h5>
          <div class="card-body">
            <img class="h-50 w-100" src="../../../assets/frontend/assets/img/ecommerce-images/product-10.png" alt="" srcset="">
          </div>
        </div>
      </div>
      <!-- /Video Player -->

      <!-- Audio Player -->
      <!-- <div class="col-12">
        <div class="card">
          <h5 class="card-header">Audio</h5>
          <div class="card-body">
            <audio class="w-100" id="plyr-audio-player" controls>
              <source
                
                src="../../../assets/frontend/assets/audio/Water_Lily.mp3"
                type="audio/mp3" />
            </audio>
          </div>
        </div>
      </div> -->
      <!-- /Audio Player -->
    </div>
  </div>
</template>
