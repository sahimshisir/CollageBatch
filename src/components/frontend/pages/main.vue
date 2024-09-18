<template>
  <div class="container-xxl flex-grow-1 container-p-y no-scrollbar">
    <!-- <h4 class="py-3 mb-4">
      <span class="text-muted fw-light">Extended UI /</span> Plyr
    </h4> -->

    <div class="row">
      <!-- Video Player -->
      <div class="col-12 col-lg-8 mb-4">
        <div class="card">
          <div class="card-header">
            <div class="d-flex">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div>
                <h5>Alex leman</h5>
                <span class="timer">10h ago</span>
              </div>
            </div>
            <p class="mt-2 p-0">
              lorem ipsum for caption Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Sapiente fugit incidunt inventore dolores
              pariatur aut iusto aspernatur assumenda architecto consequatur
              ratione earum id, sint labore officiis quo aperiam vero eligendi!
            </p>
          </div>

          <div class="card-body">
            <video
              class="w-100 rounded"
              poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
              id="plyr-video-player"
              playsinline
              controls>
              <source
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                type="video/mp4" />
            </video>
          </div>
          <div class="card-footer">
            <div class="d-flex" style="justify-content: space-around">
              <button class="btn border-0">
                <i class="fa-regular fa-heart me-1 fs-4"></i>
                <span style="font-size: 12px">12k</span>
              </button>
              <button
                class="btn border-0"
                data-bs-toggle="modal"
                data-bs-target="#comment">
                <i class="fa-regular fa-comment me-1 fs-4"></i>
                <span style="font-size: 12px">12k</span>
              </button>
              <button class="btn border-0">
                <i class="fa-solid fa-share me-1 fs-4"></i>
                <span style="font-size: 12px">12k</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4 mb-4">
        <div class="row">
           <div id="my-card" class="card position-fixed">
          <div class="card-body">
            <h4>Categories</h4>
            <div class="border-bottom"></div>
            <p>Web Development</p>
            <p>Web Development</p>
            <p>Web Development</p>
            <p>Web Development</p>
            <p>Web Development</p>
          </div>
        </div>
        </div>
       
        <div class="row">
           <div id="my-card" class="card position-fixed">
          <div class="card-body">
            <h4>Categories</h4>
            <div class="border-bottom"></div>
            <p>Web Development</p>
            <p>Web Development</p>
            <p>Web Development</p>
            <p>Web Development</p>
            <p>Web Development</p>
          </div>
        </div>
        </div>
       
        
      </div>

      <div class="col-12 col-lg-8 mb-4">
        <div class="card">
          <h5 class="card-header">Video</h5>
          <div class="card-body">
            <img
              class="w-100"
              src="../../../assets/frontend/assets/img/backgrounds/6.jpg"
              alt=""/>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-8 mb-4">
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

      <div class="col-12 col-lg-8 mb-4">
        <div class="card">
          <h5 class="card-header">Video</h5>
          <div class="card-body">
            <img
              class="h-50 w-100"
              src="../../../assets/frontend/assets/img/elements/1.jpg"
              alt=""/>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-8 mb-5">
        <div class="card">
          <h5 class="card-header">Video</h5>
          <div class="card-body">
            <img
              class="h-50 w-100"
              src="../../../assets/frontend/assets/img/ecommerce-images/product-10.png"
              alt=""/>
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

    <div class="modal fade" id="comment" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header border-bottom">
                        <!-- comment title -->
                        <h5 class="modal-title mb-2" id="modalScrollableTitle">Comments</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Repeated comment elements here -->
                        <div class="comment-body ">
                            <div class="card-header">
                                <div class="d-flex">
                                    <div class="avatar me-3">
                                        <img src="../../../assets/frontend/assets/img/avatars/1.png"
                                            class="h-auto rounded-circle" />
                                    </div>
                                    <div>
                                        <h5>Alex leman</h5>
                                        <span class="timer">10h ago</span>
                                    </div>
                                </div>
                                <p class="mt-2 p-0">
                                    lorem ipsum for caption Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Sapiente fugit incidunt inventore dolores
                                    pariatur aut iusto aspernatur assumenda architecto consequatur
                                    ratione earum id, sint labore officiis quo aperiam vero eligendi!
                                </p>
                            </div>

                            <div class="card-body">
                                <video class="w-100 rounded"
                                    poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                                    id="plyr-video-player" playsinline controls>
                                    <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                                        type="video/mp4" />
                                </video>
                            </div>
                            <div class="card-footer border-bottom mb-5">
                                <div class="d-flex" style="justify-content: space-around">
                                    <button class="btn border-0">
                                        <i class="fa-regular fa-heart me-1 fs-4"></i>
                                        <span style="font-size: 12px">12k</span>
                                    </button>
                                    <button class="btn border-0" data-bs-toggle="modal" data-bs-target="#comment">
                                        <i class="fa-regular fa-comment me-1 fs-4"></i>
                                        <span style="font-size: 12px">12k</span>
                                    </button>
                                    <button class="btn border-0">
                                        <i class="fa-solid fa-share me-1 fs-4"></i>
                                        <span style="font-size: 12px">12k</span>
                                    </button>
                                </div>
                            </div>
                            <!-- comment -->
                            <div class="d-flex">
                                    <div class="avatar me-3">
                                        <img src="../../../assets/frontend/assets/img/avatars/1.png"
                                            class="rounded-circle cmt-img" />
                                    </div>
                                    <div>
                                        <p class="card p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat ad sapiente modi ullam architecto, praesentium odit reiciendis labore ratione!</p>
                                    </div>
                                </div>
                                <div class="d-flex like" style="justify-content: space-around">
                                    
                                    <button class="btn border-0">
                                        <span style="font-size: 12px">12d</span>
                                    </button>
                                    <button class="btn border-0">
                                        <i class="fa-regular fa-heart me-1 fs-6"></i>
                                        <span style="font-size: 12px">12k</span>
                                    </button>
                                    <button class="btn border-0" data-bs-toggle="modal" data-bs-target="#comment">
                                        <i class="fa-regular fa-comment me-1 fs-6"></i>
                                        <span style="font-size: 12px">Reply</span>
                                    </button>
                                </div>
                            <!-- comment -->
                        </div>
                    </div>
                    <div class="modal-cmt-footer border-top d-flex align-items-center justify-content-around">
                        <div class="avatar me-1">
                                        <img src="../../../assets/frontend/assets/img/avatars/1.png"
                                            class="h-auto rounded-circle" />
                                    </div>
                        <input class="form-control mt-2 rounded-pill w-75" placeholder="Coment as ashraful" type="text">
                        <button type="submit" class="btn"><i class="fa-solid fa-paper-plane me-1"></i>Send</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<style scoped>
.modal-cmt-footer{
    padding: 0.25rem 1.5rem 1.25rem;
}

.like{
    margin-top: -10px !important;
}
.cmt-img{
    width: 45px !important;
    height: 45px !important;
}
.timer {
  display: block;
  margin-top: -15px;
  font-size: 10px;
}

.comment {
  display: block;
  margin-top: -10px;
}

.comment_reaction {
  display: block;
  margin-top: -4px;
}

#my-card {
  width: 24%;
}

.list-menu {
  list-style-type: none;
  line-height: 30px;
}

/* CSS to hide scrollbar */
.no-scrollbar {
  overflow: hidden; /* Prevents scrollbars */
}

/* Optional: If you still need scrollable content but hidden scrollbar */
.no-scrollbar {
  overflow: auto; /* Enables scrolling but hides the scrollbar */
  -ms-overflow-style: none; /* For IE and Edge */
  scrollbar-width: none; /* For Firefox */
}

.no-scrollbar::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and other WebKit browsers */
}
</style>
