<template>
  <footer
    class="z-5 bottom-0 start-0 w-100 bg-navbar-theme rounded-bottom rounded-3 d-block position-fixed d-lg-none border-top border-primary">
    <div class="container-xxl">
      <div
        class="footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-row"
        style="justify-content: space-around !important">
        <div class="d-flex">
          <button class="btn btn-sm btn-primary active"><i class="fa-solid fa-house"></i></button>
         
        </div>
        <div>
          <button
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#NewPost">
            <i class="fa-solid fa-plus fs-4"></i>
          </button>
        </div>
        <div>
          <button
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#searchModal">
            <i class="ti ti-search ti-md "></i>
          </button>
        </div>
      </div>
    </div>
  </footer>

  <div class="modal fade" id="NewPost" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom">
            <!-- comment title -->
            <h5 class="modal-title mb-2 mx-auto fs-4 fw-bold" id="modalScrollableTitle">
              Create Post
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card-header border-bottom">
              <div class="d-flex">
                <div class="avatar me-3">
                  <img src="../../../assets/frontend/assets/img/avatars/1.png" class="h-auto rounded-circle" />
                </div>
                <!-- post name -->
                <span class="fw-bold fs-6">Ashraful Islam Sahim</span>
              </div>
              <!-- post area -->
              <div>
                <textarea v-model="text" class="form-control border-none post-area shadow-none"
                  placeholder="What's new?"></textarea>
                <!-- <button @click="toggleEmojiPicker" class="emoji-btn">
                  <i class="fa-solid fa-face-smile text-dark"></i>
                </button>
                <div v-if="showEmojiPicker" class="emoji-picker">
                  <emoji-picker @emoji-click="addEmoji"></emoji-picker>
                </div> -->
              </div>

              <div v-if="images.length" class="">
                <!-- Swiper Slider -->
                <swiper ref="mySwiper" :slides-per-view="slidesPerView" :space-between="10" :loop="true"
                  :autoplay="{ delay: 3000, disableOnInteraction: false }" class="mySwiper mb-3">
                  <!-- Swiper Slide -->
                  <swiper-slide v-for="(image, index) in images" :key="index">
                    <div class="slide-content">
                      <img :src="image" alt="Uploaded Image" class="slider-image" />
                      <!-- Remove Button -->
                      <span @click="removeImage(index)" class="remove-btn text-gray"><i
                          class="fa-solid fa-circle-xmark"></i></span>
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
              <div class="d-flex justify-content-between">
                <!-- Multiple Image Upload -->
                <input type="file" multiple @change="handleFilesUpload" class="d-none" id="file-upload" />
                <!-- Hidden file input -->
                <label for="file-upload" class="custom-file-label mt-2">
                  <span class="fs-6 badge rounded-pill bg-dark"><i
                      class="fa-regular fa-circle-plus me-2 fw-bold rounded-3"></i>Add
                    Image</span>
                </label>
                <!-- post button -->
                <button :disabled="isPostDisabled" type="submit"
                  class=" badge btn mt-2 text-black fw-bold rounded-pill bg-dark fs-6 badge">Post</button>
                <!-- Upload Button -->
                <!-- <button @click="submitImages" :disabled="!files.length">Upload Images</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  <div class="modal fade" id="searchModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
         <div>
          <input type="text" class="form-control form-control-lg py-2" placeholder="Search!!">
         </div>
         <div class="text-center mt-3 text-muted">No data found</div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  computed: {
    isPostDisabled() {
      return this.text.trim().length === 0;
    }
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


