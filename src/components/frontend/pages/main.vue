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
                  class="h-auto rounded-circle"
                />
              </div>
              <div>
                <h5>Alex leman</h5>
                <span class="timer">10h ago</span>
              </div>
            </div>
            <p class="mt-2 p-0">
              lorem ipsum for caption Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Sapiente fugit incidunt inventore dolores pariatur aut iusto
              aspernatur assumenda architecto consequatur ratione earum id, sint labore
              officiis quo aperiam vero eligendi!
            </p>
          </div>

          <div class="card-body">
            <video
              class="w-100 rounded"
              poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
              id="plyr-video-player"
              playsinline
              controls
            >
              <source
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                type="video/mp4"
              />
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
                data-bs-target="#comment"
              >
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

        <div class="row" style="margin-top: 19rem">
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
              alt=""
            />
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
              controls
            >
              <source
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                type="video/mp4"
              />
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
              alt=""
            />
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
              alt=""
            />
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
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- Repeated comment elements here -->
            <div class="comment-body">
              <div class="card-header">
                <div class="d-flex">
                  <div class="avatar me-3">
                    <img
                      src="../../../assets/frontend/assets/img/avatars/1.png"
                      class="h-auto rounded-circle"
                    />
                  </div>
                  <div>
                    <h5>Alex leman</h5>
                    <span class="timer">10h ago</span>
                  </div>
                </div>
                <p class="mt-2 p-0">
                  lorem ipsum for caption Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Sapiente fugit incidunt inventore dolores pariatur aut
                  iusto aspernatur assumenda architecto consequatur ratione earum id, sint
                  labore officiis quo aperiam vero eligendi!
                </p>
              </div>

              <div class="card-body">
                <video
                  class="w-100 rounded"
                  poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                  id="plyr-video-player"
                  playsinline
                  controls
                >
                  <source
                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                    type="video/mp4"
                  />
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
                    data-bs-target="#comment"
                  >
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
                    src="../../../assets/frontend/assets/img/avatars/1.png"
                    class="rounded-circle cmt-img"
                  />
                </div>
                <div>
                  <p class="card p-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                    repellat ad sapiente modi ullam architecto, praesentium odit
                    reiciendis labore ratione!
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
                  data-bs-target="#comment"
                >
                  <i class="fa-regular fa-comment me-1 fs-6"></i>
                  <span style="font-size: 12px">Reply</span>
                </button>
              </div>
              <!-- comment -->
            </div>
          </div>
          <div
            class="modal-cmt-footer border-top d-flex align-items-center justify-content-around"
          >
            <div class="avatar me-1">
              <img
                src="../../../assets/frontend/assets/img/avatars/1.png"
                class="h-auto rounded-circle"
              />
            </div>
            <input
              class="form-control mt-2 rounded-pill w-75"
              placeholder="Coment as ashraful"
              type="text"
            />
            <button type="submit" class="btn">
              <i class="fa-solid fa-paper-plane me-1"></i>Send
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="NewPost" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom">
            <!-- comment title -->
            <h5 class="modal-title mb-2 mx-auto fs-4 fw-bold" id="modalScrollableTitle">
              Create Post
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card-header border-bottom">
              <div class="d-flex">
                <div class="avatar me-3">
                  <img
                    src="../../../assets/frontend/assets/img/avatars/1.png"
                    class="h-auto rounded-circle"
                  />
                </div>
                <!-- post name -->
                <span class="fw-bold fs-6">Ashraful Islam Sahim</span>
              </div>
              <!-- post area -->
              <div>
                <textarea
                  v-model="text"
                  class="form-control border-none post-area shadow-none"
                  placeholder="What's new?"
                ></textarea>
                <!-- <button @click="toggleEmojiPicker" class="emoji-btn">
                  <i class="fa-solid fa-face-smile text-dark"></i>
                </button>
                <div v-if="showEmojiPicker" class="emoji-picker">
                  <emoji-picker @emoji-click="addEmoji"></emoji-picker>
                </div> -->
              </div>

              <div v-if="images.length" class="">
                <!-- Swiper Slider -->
                <swiper
                  ref="mySwiper"
                  :slides-per-view="slidesPerView"
                  :space-between="10"
                  :loop="true"
                  :autoplay="{ delay: 3000, disableOnInteraction: false }"
                  class="mySwiper mb-3"
                >
                  <!-- Swiper Slide -->
                  <swiper-slide v-for="(image, index) in images" :key="index">
                    <div class="slide-content">
                      <img :src="image" alt="Uploaded Image" class="slider-image" />
                      <!-- Remove Button -->
                      <span @click="removeImage(index)" class="remove-btn text-gray"
                        ><i class="fa-solid fa-circle-xmark"></i
                      ></span>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
              <!-- dropdown modal -->
              <!-- <div class="col-md-6 mb-4">
                <label for="selectpickerIcons" class="form-label">Icons</label>
                <select class="selectpicker w-100 show-tick" id="selectpickerIcons" data-icon-base="ti"
                  data-tick-icon="ti-check" data-style="btn-default">
                  <option data-icon="ti ti-brand-instagram">Instagram</option>
                  <option data-icon="ti ti-brand-pinterest">Pinterest</option>
                  <option data-icon="ti ti-brand-twitch">Twitch</option>
                </select>
              </div> -->
            </div>
            <!-- body -->
            <div class="card-body">
              <div>
                <!-- Multiple Image Upload -->
                <input
                  type="file"
                  multiple
                  @change="handleFilesUpload"
                  class="d-none"
                  id="file-upload"
                />
                <!-- Hidden file input -->
                <label for="file-upload" class="custom-file-label mt-2">
                  <span class="fs-6 badge rounded-pill bg-dark"
                    ><i class="fa-regular fa-circle-plus me-2 fw-bold rounded-3"></i>Add
                    Image</span
                  >
                </label>

                <!-- Upload Button -->
                <!-- <button @click="submitImages" :disabled="!files.length">Upload Images</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="post-button-container">
    <button
      class="post-button btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#NewPost"
    >
      <i class="fa-solid fa-feather-pointed"></i>
    </button>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script> -->

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "emoji-picker-element";
// import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [],
      files: [],
      slidesPerView: 2,
      text: "",
      showEmojiPicker: false,
    };
  },

  computed: {
    // Computed property to check if the text has an emoji
    hasEmoji() {
      // Check if the text contains emojis (you could use regex for more complex checks)
      const emojiRegex = /[\u{1F600}-\u{1F64F}]/u;
      return emojiRegex.test(this.text);
    },
  },

  mounted() {
    this.updateSlidesPerView();
    window.addEventListener("resize", this.updateSlidesPerView);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateSlidesPerView);
  },
  methods: {
    handleFilesUpload(event) {
      const selectedFiles = event.target.files;

      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        this.files.push(file);

        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage(index) {
      this.images.splice(index, 1);
      this.files.splice(index, 1);
      this.resetFileInput();
    },
    resetFileInput() {
      this.$refs.fileInput.value = null;
    },
    submitImages() {
      const formData = new FormData();
      this.files.forEach((file) => {
        formData.append("images[]", file);
      });

      this.$axios
        .post("/upload", formData)
        .then((response) => {
          console.log("Images uploaded successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error uploading images:", error);
        });
    },
    updateSlidesPerView() {
      this.slidesPerView = window.innerWidth < 575 ? 1 : 2; // Adjust the breakpoint as needed
    },
    addEmoji(event) {
      const emoji = event.detail.unicode;
      this.text += emoji;
    },
    toggleEmojiPicker() {
      this.showEmojiPicker = !this.showEmojiPicker;
    },
  },
};
</script>

<style scoped>
/* emoji css start */
.emoji-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
}

/* Style the emoji picker */
.emoji-picker {
  position: absolute;
  z-index: 100;
  top: 45%;
  right: -10%;
}

/* Adjust textarea style if needed */
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
}

/* emoji css end */
.mySwiper {
  display: flex;
  max-width: 100%;
}

.slider-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 20px;
}

.slide-content {
  position: relative;
}

.remove-btn[data-v-09e7ced7] {
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 20px;
}

img {
  border: 1px solid #ccc;
  border-radius: 5px;
}

span {
  font-weight: bold;
  font-size: 18px;
}

.post-area {
  resize: none;
  margin-left: 40px;
  background: transparent;
  width: 90%;
  height: 120px;
  margin-bottom: 20px;
}

textarea::-webkit-scrollbar {
  width: 5px !important;
}

.post-area::placeholder {
  font-size: 20px !important;
  padding-top: 0 !important;
}

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

.post-button-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
}

.post-button {
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.8s ease;
}

.post-button:hover {
  transform: rotate(360deg);
}

#my-strictly-unique-vue-upload-multiple-image {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
