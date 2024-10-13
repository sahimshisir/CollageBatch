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
                to="/Media/photo"
                class="nav-link"
                active-class="active">
                <i class="ti-xs ti ti-user-check me-1"></i> Photos
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                to="/Media/video"
                class="nav-link"
                active-class="active">
                <i class="ti-xs ti ti-users me-1"></i> Videos
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Gallery Thumbnail (Photo Column Layout) -->
        <div class="gallery-thumbnail">
          <div class="row">
            <div class="col-md-2" v-for="(image, index) in images" :key="index">
              <img
                :src="image.src"
                :alt="image.alt"
                @click="openImage(index)"
                class="img-thumbnail thumbnail-photo" />
            </div>
          </div>
        </div>

        <!-- Horizontal Slider Modal -->
        <div
          class="modal-onboarding modal fade animate__animated"
          id="onboardingHorizontalSlideModal"
          tabindex="-1"
          aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content text-center">
              <div class="modal-header border-0">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div
                id="modalHorizontalCarouselControls"
                class="carousel slide pb-4 mb-2"
                data-bs-interval="false">
                <div class="carousel-inner">
                  <div
                    v-for="(image, index) in images"
                    :class="[
                      'carousel-item',
                      { active: index === currentImageIndex },
                    ]"
                    :key="index">
                    <div
                      class="onboarding-horizontal d-flex justify-content-center">
                      <div class="onboarding-media">
                        <img
                          :src="image.src"
                          :alt="image.alt"
                          class="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Previous Button -->
                <a
                  class="carousel-control-prev"
                  href="#"
                  role="button"
                  @click.prevent="prevImage">
                  <i class="ti ti-chevrons-left me-2"></i><span>Previous</span>
                </a>

                <!-- Next Button -->
                <a
                  class="carousel-control-next"
                  href="#"
                  role="button"
                  @click.prevent="nextImage">
                  <span>Next</span><i class="ti ti-chevrons-right ms-2"></i>
                </a>
              </div>
              <!--/ Horizontal Slider Modal -->
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
      images: [
        {
          src: "../../../../../src/assets/frontend/assets/img/backgrounds/1.jpg",
          alt: "Photo 1",
        },
        {
          src: "../../../../../src/assets/frontend/assets/img/avatars/10.png",
          alt: "Photo 2",
        },
        {
          src: "../../../../../src/assets/frontend/assets/img/backgrounds/3.jpg",
          alt: "Photo 3",
        },
        {
          src: "../../../../../src/assets/frontend/assets/img/backgrounds/4.jpg",
          alt: "Photo 4",
        },
      ],
      currentImageIndex: 0,
    };
  },
  methods: {
    openImage(index) {
      this.currentImageIndex = index;
      const modal = new bootstrap.Modal(
        document.getElementById("onboardingHorizontalSlideModal")
      );
      modal.show();
    },
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    },
  },
};
</script>

<style scoped>
.gallery-thumbnail .row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.thumbnail-photo {
  width: 100%;
  cursor: pointer;
  margin-bottom: 15px;
}
</style>
