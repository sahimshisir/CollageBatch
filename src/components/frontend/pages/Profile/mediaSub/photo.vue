<template>
  <div class="col-xl-12 col-lg-12 col-md-12">
    <div class="card">
      <div class="card-body">
        <div class="media-title border-bottom">
          <h4>Media</h4>
        </div>
        <!-- photo videos button -->
        <div class="ph-vi mt-3">
          <ul class="nav nav-pills flex-row mb-4">
            <li class="nav-item">
              <RouterLink
                to="/media_profile_photo"
                class="nav-link"
                active-class="active">
                <i class="ti-xs ti ti-user-check me-1"></i> Photos
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                to="/media_profile_video"
                class="nav-link"
                active-class="active">
                <i class="ti-xs ti ti-users me-1"></i> Videos
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <div class="gallery">
            <!-- Thumbnail View -->
            <div class="thumbnails">
              <img
                v-for="(photo, index) in photos"
                :key="index"
                :src="photo.src"
                @click="openModal(index)"
                class="thumbnail" />
            </div>

            <!-- Modal View -->
            <div v-if="isModalOpen" class="modal">
              <span class="close" @click="closeModal">&times;</span>
              <img class="modal-content" :src="photos[currentPhotoIndex].src" />
              <!-- <div class="caption">{{ photos[currentPhotoIndex].caption }}</div> -->

              <button class="btn" @click="prevPhoto">Previous</button>
              <button class="btn" @click="nextPhoto">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
      {
          src: "../../../../../src/assets/frontend/assets/img/backgrounds/1.jpg",
          caption: "Photo 1",
        },
        {
          src: "../../../../../src/assets/frontend/assets/img/avatars/10.png",
          caption: "Photo 2",
        },
        {
          src: "../../../../../src/assets/frontend/assets/img/backgrounds/3.jpg",
          caption: "Photo 3",
        },
        {
          src: "../../../../../src/assets/frontend/assets/img/backgrounds/4.jpg",
          caption: "Photo 4",
        },
       
      ],
      isModalOpen: false,
      currentPhotoIndex: 0,
    };
  },
  methods: {
    openModal(index) {
      this.currentPhotoIndex = index;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    prevPhoto() {
      if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--;
      }
    },
    nextPhoto() {
      if (this.currentPhotoIndex < this.photos.length - 1) {
        this.currentPhotoIndex++;
      }
    },
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
}
.thumbnail {
  width: 150px;
  height: 130px;
  margin: 5px;
  cursor: pointer;
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
