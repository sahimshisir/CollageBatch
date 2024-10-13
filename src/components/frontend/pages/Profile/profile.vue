<template>
  <!-- User Profile Content -->
  <div class="row">
    <div class="col-xl-4 col-lg-5 col-md-5">
      <!-- About User -->
      <div class="card mb-4">
        <div class="card-body">
          <small class="card-text text-uppercase fw-bold">Inro</small>
          <ul class="list-unstyled mb-4 mt-3">
            <li class="text-center">
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis consectetur ratione dolore excepturi nemo nisi soluta
                optio odit amet, eligendi dolorem recusandae nulla perspiciatis
                architecto sequi facere suscipit in id!
              </span>
              <p class="text-center text-uppercase fw-bold mt-1 mb-2 border p-2 border-2 text-heading">
                <i class="ti ti-user text-heading"></i>
                Bio
              </p>
            </li>
            <li class="d-flex align-items-center mb-3 mt-4">
              <i class="ti ti-user text-heading"></i
              ><span class="fw-medium mx-2 text-heading">Full Name:</span>
              <span>John Doe</span>
            </li>
            <li class="d-flex align-items-center mb-3 mt-4">
              <i class="ti ti-user text-heading"></i
              ><span class="fw-medium mx-2 ">Studied at</span>
              <span class="fw-bold text-heading">John Doe</span>
            </li>
            <li class="d-flex align-items-center mb-3 mt-4">
              <i class="ti ti-user text-heading"></i
              ><span class="fw-medium mx-2 text-heading">Full Name:</span>
              <span>John Doe</span>
            </li>
            <li class="d-flex align-items-center mb-3 mt-4">
              <i class="ti ti-user text-heading"></i
              ><span class="fw-medium mx-2 text-heading">Full Name:</span>
              <span>John Doe</span>
            </li>
            <li class="d-flex align-items-center mb-3">
              <i class="ti ti-check text-heading"></i
              ><span class="fw-medium mx-2 text-heading">Status:</span>
              <span>Active</span>
            </li>
            <li class="d-flex align-items-center mb-3">
              <i class="ti ti-crown text-heading"></i
              ><span class="fw-medium mx-2 text-heading">Role:</span>
              <span>Developer</span>
            </li>
            <li class="d-flex align-items-center mb-3">
              <i class="ti ti-flag text-heading"></i
              ><span class="fw-medium mx-2 text-heading">Country:</span>
              <span>USA</span>
            </li>
            <li class="d-flex align-items-center mb-3">
              <i class="ti ti-file-description text-heading"></i
              ><span class="fw-medium mx-2 text-heading">Languages:</span>
              <span>English</span>
            </li>
          </ul>
          <small class="card-text text-uppercase">Contacts</small>
          <ul class="list-unstyled mb-4 mt-3">
            <li class="d-flex align-items-center mb-3">
              <i class="ti ti-phone-call"></i
              ><span class="fw-medium mx-2 text-heading">Contact:</span>
              <span>(123) 456-7890</span>
            </li>
            <li class="d-flex align-items-center mb-3">
              <i class="ti ti-brand-skype"></i
              ><span class="fw-medium mx-2 text-heading">Skype:</span>
              <span>john.doe</span>
            </li>
            <li class="d-flex align-items-center mb-3">
              <i class="ti ti-mail"></i
              ><span class="fw-medium mx-2 text-heading">Email:</span>
              <span>john.doe@example.com</span>
            </li>
          </ul>
          <small class="card-text text-uppercase">Teams</small>
          <ul class="list-unstyled mb-0 mt-3">
            <li class="d-flex align-items-center mb-3">
              <i class="ti ti-brand-angular text-danger me-2"></i>
              <div class="d-flex flex-wrap">
                <span class="fw-medium me-2 text-heading"
                  >Backend Developer</span
                ><span>(126 Members)</span>
              </div>
            </li>
            <li class="d-flex align-items-center">
              <i class="ti ti-brand-react-native text-info me-2"></i>
              <div class="d-flex flex-wrap">
                <span class="fw-medium me-2 text-heading">React Developer</span
                ><span>(98 Members)</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--/ About User -->
      <!-- Profile Overview -->
      <div class="card mb-4">
        <div class="card-body">
          <p class="card-text text-uppercase">Overview</p>
          <ul class="list-unstyled mb-0">
            <li class="d-flex align-items-center mb-3">
              <i class="ti ti-check"></i
              ><span class="fw-medium mx-2">Task Compiled:</span>
              <span>13.5k</span>
            </li>
            <li class="d-flex align-items-center mb-3">
              <i class="ti ti-layout-grid"></i
              ><span class="fw-medium mx-2">Projects Compiled:</span>
              <span>146</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="ti ti-users"></i
              ><span class="fw-medium mx-2">Connections:</span>
              <span>897</span>
            </li>
          </ul>
        </div>
      </div>
      <!--/ Profile Overview -->
    </div>

    <div class="col-xl-8 col-lg-7 col-md-7">
      <div class="card">
        <div class="card-header">
          <div class="d-flex">
            <div class="avatar me-3">
              <img
                src="../../../../assets/frontend/assets/img/avatars/1.png"
                class="h-auto rounded-circle" />
            </div>
            <div>
              <h5>Alex leman</h5>
              <span class="timer">10h ago</span>
            </div>
          </div>
          <p class="mt-2 p-0">
            lorem ipsum for caption Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sapiente fugit incidunt inventore dolores pariatur
            aut iusto aspernatur assumenda architecto consequatur ratione earum
            id, sint labore officiis quo aperiam vero eligendi!
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
  </div>
  <!--/ User Profile Content -->
  <div class="modal fade" id="comment" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header border-bottom">
          <!-- comment title -->
          <h5 class="modal-title mb-2" id="modalScrollableTitle">Comments</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Repeated comment elements here -->
          <div class="comment-body">
            <div class="card-header">
              <div class="d-flex">
                <div class="avatar me-3">
                  <img
                    src="../../../../assets/frontend/assets/img/avatars/1.png"
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
                ratione earum id, sint labore officiis quo aperiam vero
                eligendi!
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
            <div class="card-footer border-bottom mb-5">
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
            <!-- comment -->
            <div class="d-flex">
              <div class="avatar me-3">
                <img
                  src="../../../../assets/frontend/assets/img/avatars/1.png"
                  class="rounded-circle cmt-img" />
              </div>
              <div>
                <p class="card p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi repellat ad sapiente modi ullam architecto,
                  praesentium odit reiciendis labore ratione!
                </p>
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
              <button
                class="btn border-0"
                data-bs-toggle="modal"
                data-bs-target="#comment">
                <i class="fa-regular fa-comment me-1 fs-6"></i>
                <span style="font-size: 12px">Reply</span>
              </button>
            </div>
            <!-- comment -->
          </div>
        </div>
        <div
          class="modal-cmt-footer border-top d-flex align-items-center justify-content-around">
          <div class="avatar me-1">
            <img
              src="../../../../assets/frontend/assets/img/avatars/1.png"
              class="h-auto rounded-circle" />
          </div>
          <input
            class="form-control mt-2 rounded-pill w-75"
            placeholder="Coment as ashraful"
            type="text" />
          <button type="submit" class="btn">
            <i class="fa-solid fa-paper-plane me-1"></i>Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-cmt-footer {
  padding: 0.25rem 1.5rem 1.25rem;
}

.like {
  margin-top: -10px !important;
}
.cmt-img {
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
  overflow: hidden;
  /* Prevents scrollbars */
}

/* Optional: If you still need scrollable content but hidden scrollbar */
.no-scrollbar {
  overflow: auto;
  /* Enables scrolling but hides the scrollbar */
  -ms-overflow-style: none;
  /* For IE and Edge */
  scrollbar-width: none;
  /* For Firefox */
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
  /* For Chrome, Safari, and other WebKit browsers */
}
</style>

<script>
import("../../../../assets/frontend/assets/vendor/css/pages/page-profile.css");
// import('../../../../assets/frontend/assets/js/pages-profile')
</script>
