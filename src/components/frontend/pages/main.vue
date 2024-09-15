<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <!-- <h4 class="py-3 mb-4">
      <span class="text-muted fw-light">Extended UI /</span> Plyr
    </h4> -->

    <div class="row">
      <!-- Video Player -->
      <div class="col-8 mb-4">
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
          <div class="card-footer">
            <div class="d-flex" style="justify-content:space-evenly;">
              <button class="btn border-0">
                <i class="fa-regular fa-thumbs-up me-1"></i> Like
              </button>
              <button
                class="btn border-0"
                data-bs-toggle="modal"
                data-bs-target="#comment">
                <i class="fa-regular fa-comment me-1"></i> Comment
              </button>
              <button class="btn border-0">
                <i class="fa-regular fa-share-from-square me-1"></i>Share
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 mb-4">
        <div id="my-card" style="position: fixed" class="card">
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
      <div class="col-8 mb-4">
        <div class="card">
          <h5 class="card-header">Video</h5>
          <div class="card-body">
            <img
              class="w-100"
              src="../../../assets/frontend/assets/img/backgrounds/6.jpg"
              alt=""
              srcset="" />
          </div>
        </div>
      </div>
      <div class="col-8 mb-4">
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
      <div class="col-8 mb-4">
        <div class="card">
          <h5 class="card-header">Video</h5>
          <div class="card-body">
            <img
              class="h-50 w-100"
              src="../../../assets/frontend/assets/img/elements/1.jpg"
              alt=""
              srcset="" />
          </div>
        </div>
      </div>
      <div class="col-8 mb-4">
        <div class="card">
          <h5 class="card-header">Video</h5>
          <div class="card-body">
            <img
              class="h-50 w-100"
              src="../../../assets/frontend/assets/img/ecommerce-images/product-10.png"
              alt=""
              srcset="" />
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
          <div class="modal-header">
            <h5 class="modal-title" id="modalScrollableTitle">Comments</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="d-flex mb-4">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div class="">
                <h6>Alex leman</h6>
                <div class="bg-primary p-3 comment  text-white rounded">
                  <span>very nice and nice comment</span>
                </div>
                <div class="comment_reaction">
                  <button class="btn border-0" style="cursor:text;">1h</button>
                  <button class="btn border-0">Like</button>
                  <button class="btn border-0">Reply</button>
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div class="">
                <h6>Alex leman</h6>
                <div class="bg-primary p-3 comment  text-white rounded">
                  <span>very nice and nice comment</span>
                </div>
                <div class="comment_reaction">
                  <button class="btn border-0" style="cursor:text;">1h</button>
                  <button class="btn border-0">Like</button>
                  <button class="btn border-0">Reply</button>
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div class="">
                <h6>Alex leman</h6>
                <div class="bg-primary p-3 comment  text-white rounded">
                  <span>very nice and nice comment</span>
                </div>
                <div class="comment_reaction">
                  <button class="btn border-0" style="cursor:text;">1h</button>
                  <button class="btn border-0">Like</button>
                  <button class="btn border-0">Reply</button>
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div class="">
                <h6>Alex leman</h6>
                <div class="bg-primary p-3 comment  text-white rounded">
                  <span>very nice and nice comment</span>
                </div>
                <div class="comment_reaction">
                  <button class="btn border-0" style="cursor:text;">1h</button>
                  <button class="btn border-0">Like</button>
                  <button class="btn border-0">Reply</button>
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div class="">
                <h6>Alex leman</h6>
                <div class="bg-primary p-3 comment  text-white rounded">
                  <span>very nice and nice comment</span>
                </div>
                <div class="comment_reaction">
                  <button class="btn border-0" style="cursor:text;">1h</button>
                  <button class="btn border-0">Like</button>
                  <button class="btn border-0">Reply</button>
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div class="">
                <h6>Alex leman</h6>
                <div class="bg-primary p-3 comment  text-white rounded">
                  <span>very nice and nice comment</span>
                </div>
                <div class="comment_reaction">
                  <button class="btn border-0" style="cursor:text;">1h</button>
                  <button class="btn border-0">Like</button>
                  <button class="btn border-0">Reply</button>
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div class="">
                <h6>Alex leman</h6>
                <div class="bg-primary p-3 comment  text-white rounded">
                  <span>very nice and nice comment</span>
                </div>
                <div class="comment_reaction">
                  <button class="btn border-0" style="cursor:text;">1h</button>
                  <button class="btn border-0">Like</button>
                  <button class="btn border-0">Reply</button>
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div class="">
                <h6>Alex leman</h6>
                <div class="bg-primary p-3 comment  text-white rounded">
                  <span>very nice and nice comment</span>
                </div>
                <div class="comment_reaction">
                  <button class="btn border-0" style="cursor:text;">1h</button>
                  <button class="btn border-0">Like</button>
                  <button class="btn border-0">Reply</button>
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div class="">
                <h6>Alex leman</h6>
                <div class="bg-primary p-3 comment  text-white rounded">
                  <span>very nice and nice comment</span>
                </div>
                <div class="comment_reaction">
                  <button class="btn border-0" style="cursor:text;">1h</button>
                  <button class="btn border-0">Like</button>
                  <button class="btn border-0">Reply</button>
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div class="">
                <h6>Alex leman</h6>
                <div class="bg-primary p-3 comment  text-white rounded">
                  <span>very nice and nice comment</span>
                </div>
                <div class="comment_reaction">
                  <button class="btn border-0" style="cursor:text;">1h</button>
                  <button class="btn border-0">Like</button>
                  <button class="btn border-0">Reply</button>
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div class="">
                <h6>Alex leman</h6>
                <div class="bg-primary p-3 comment  text-white rounded">
                  <span>very nice and nice comment</span>
                </div>
                <div class="comment_reaction">
                  <button class="btn border-0" style="cursor:text;">1h</button>
                  <button class="btn border-0">Like</button>
                  <button class="btn border-0">Reply</button>
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="avatar me-3">
                <img
                  src="../../../assets/frontend/assets/img/avatars/1.png"
                  class="h-auto rounded-circle" />
              </div>
              <div class="">
                <h6>Alex leman</h6>
                <div class="bg-primary p-3 comment  text-white rounded">
                  <span>very nice and nice comment</span>
                </div>
                <div class="comment_reaction">
                  <button class="btn border-0" style="cursor:text;">1h</button>
                  <button class="btn border-0">Like</button>
                  <button class="btn border-0">Reply</button>
                </div>
              </div>
            </div>
           
           
            
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timer {
  display: block;
  margin-top: -15px;
  font-size: 10px;
}
.comment {
  display: block;
  margin-top: -10px;
 
}
.comment_reaction{
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
</style>
