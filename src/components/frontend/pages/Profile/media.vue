<template>
     <div class="media-title border-bottom">
                    <h4>Media</h4>
                </div>
                <!-- photo videos button -->
                <div class="ph-vi mt-3">
                    <ul class="nav nav-pills flex-row mb-4">
                        <li class="nav-item">
                            <RouterLink to="/media_profile_photo" class="nav-link" active-class="active">
                                <i class="ti-xs ti ti-user-check me-1"></i> Photos
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/media_profile_video" class="nav-link" active-class="active">
                                <i class="ti-xs ti ti-users me-1"></i> Videos
                            </RouterLink>
                        </li>
                    </ul>
                </div>


                <div>
                    
                </div>
  <div class="gallery d-flex flex-row">
    <!-- Thumbnail View -->
    <div class="media-grid">
      <!-- Loop through photos and videos -->
      <div
        v-for="(media, index) in mediaItems"
        :key="index"
        class="media-item"
        @click="openModal(index)">
        <!-- Display image or video thumbnail based on type -->
        <img
          v-if="isImage(media.src)"
          :src="media.src"
          alt="media caption"
          class="media-thumbnail" />
        <video
          v-if="isVideo(media.src)"
          :src="media.src"
          controls
          class="media-thumbnail"></video>
      </div>
    </div>

    <!-- Modal View -->
    <div v-if="isModalOpen" class="modal">
      <span class="close" @click="closeModal">&times;</span>
      <!-- Display large image or video -->
      <img
        v-if="isImage(mediaItems[currentMediaIndex].src)"
        :src="mediaItems[currentMediaIndex].src"
        class="modal-content" />
      <video
        v-if="isVideo(mediaItems[currentMediaIndex].src)"
        ref="modalVideo"
        :src="mediaItems[currentMediaIndex].src"
        controls
        autoplay
        class="modal-content"
        @ended="nextMedia"></video>
      <!-- <div class="caption">{{ mediaItems[currentMediaIndex].caption }}</div> -->
      <button @click="prevMedia">Previous</button>
      <button @click="nextMedia">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mediaItems: [
        {
          src: "../../../../../src/assets/frontend/assets/img/backgrounds/1.jpg",
          alt: "Photo 1",
        },
        {
          src: "../../../../../src/assets/frontend/assets/img/avatars/10.png",
          alt: "Photo 2",
        },
        {
          src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        },
        {
          src: "../../../../../src/assets/frontend/assets/img/backgrounds/1.jpg",
          alt: "Photo 3",
        },
        {
          src: "../../../../../src/assets/frontend/assets/img/avatars/10.png",
          alt: "Photo 4",
        },
        {
          src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        },
      ],
      isModalOpen: false,
      currentMediaIndex: 0,
      autoPlayInterval: null, // For automatically looping
    };
  },
  methods: {
    isImage(src) {
      return src.endsWith(".jpg") || src.endsWith(".png");
    },
    isVideo(src) {
      return src.endsWith(".mp4");
    },
    openModal(index) {
      this.currentMediaIndex = index;
      this.isModalOpen = true;
      this.startAutoPlay();
    },
    closeModal() {
      this.isModalOpen = false;
      this.stopAutoPlay();
    },
    prevMedia() {
      if (this.currentMediaIndex > 0) {
        this.currentMediaIndex--;
      } else {
        this.currentMediaIndex = this.mediaItems.length - 1;
      }
    },
    nextMedia() {
      if (this.currentMediaIndex < this.mediaItems.length - 1) {
        this.currentMediaIndex++;
      } else {
        this.currentMediaIndex = 0;
      }
    },
    startAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
      }

      // Automatically switch between media items every 5 seconds for images
      // For videos, switch after they end
      if (this.isImage(this.mediaItems[this.currentMediaIndex].src)) {
        this.autoPlayInterval = setInterval(this.nextMedia, 5000); // 5 seconds for images
      } else if (this.isVideo(this.mediaItems[this.currentMediaIndex].src)) {
        const video = this.$refs.modalVideo;
        video.addEventListener("ended", this.nextMedia); // Move to the next media after video ends
      }
    },
    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
      }
    },
  },
  watch: {
    currentMediaIndex(newIndex) {
      this.startAutoPlay();
    },
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.media-item {
  cursor: pointer;
}

.media-thumbnail {
  width: 100%;
  height: 150px;
  object-fit: cover; /* Ensures uniform sizing while maintaining aspect ratio */
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
  color: white;
}

.caption {
  text-align: center;
  color: white;
  margin-top: 10px;
}
</style>
