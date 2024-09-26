<template>
  <!-- Header -->
  <div class="row">
    <div class="col-12">
      <div class="card mb-4">
        <!-- Cover Photo Section -->
        <div
          class="user-profile-header-banner position-relative"
          @mousedown="startDrag"
          @mouseup="stopDrag"
          @mousemove="onDrag"
          @mouseleave="stopDrag"
        >
          <img
            v-if="showCoverImage"
            :src="coverPhoto"
            alt="Cover image"
            class="rounded-top"
            :style="coverImageStyle"
          />
          <button
            v-if="!isPositionFixed" 
            class="btn btn-light position-absolute"
            style="top: 10px; right: 10px"
            @click="triggerCoverPhotoInput"
          >
            Change Cover Photo
          </button>
          <input
            ref="coverPhotoInput"
            type="file"
            class="d-none"
            @change="onCoverPhotoSelected"
          />
          <!-- Save button appears after image is selected -->
          <button
            v-if="showSaveButton"
            class="btn btn-primary position-absolute"
            style="top: 10px; right: 80px"
            @click="saveCoverPosition"
          >
            Save
          </button>
        </div>

        <!-- Profile Picture Section (unchanged) -->
        <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
          <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
            <img
              v-if="croppedProfilePhoto"
              :src="croppedProfilePhoto"
              class="d-block h-auto ms-0 ms-sm-4 rounded-3 user-profile-img mt-lg-5"
            />
            <img
              v-else
              :src="profilePhoto"
              class="d-block h-auto ms-0 ms-sm-4 rounded-3 user-profile-img mt-lg-5"
              ref="profileImage"
              style="display: none;"
            />
            <button
              class="btn btn-light"
              style="bottom: 10px; right: 10px"
              @click="triggerProfilePhotoInput"
            >
              Change Profile Photo
            </button>
            <input
              ref="profilePhotoInput"
              type="file"
              class="d-none"
              @change="onProfilePhotoSelected"
            />
          </div>

          <!-- User Info Section (unchanged) -->
          <div class="flex-grow-1 mt-3 mt-sm-5">
            <div class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
              <div class="user-profile-info">
                <h4>SHISHIR</h4>
                <ul class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                  <li class="list-inline-item d-flex gap-1 badge bg-primary bg-glow">Developer</li>
                  <li class="list-inline-item d-flex gap-1"><i class="ti ti-map-pin"></i> Vatican City</li>
                  <li class="list-inline-item d-flex gap-1"><i class="ti ti-calendar"></i> Joined April 2021</li>
                </ul>
              </div>
              <a
                href="#"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#ProfileEdit"
              >
                <i class="fa-regular fa-pen-to-square me-2"></i> Edit Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <ul class="nav nav-pills flex-row mb-4">
        <li class="nav-item">
          <RouterLink to="/Post" class="nav-link" active-class="active">
            <i class="ti-xs ti ti-user-check me-1"></i> Posts
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/About" class="nav-link" active-class="active">
            <i class="ti-xs ti ti-users me-1"></i> About
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/Member" class="nav-link" active-class="active">
            <i class="ti-xs ti ti-layout-grid me-1"></i> Members
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/Media" class="nav-link" active-class="active">
            <i class="ti-xs ti ti-link me-1"></i> Media
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/Content" class="nav-link" active-class="active">
            <i class="ti-xs ti ti-link me-1"></i> My content
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import profilePhoto from "../../../../../assets/frontend/assets/img/avatars/1.png";
import coverPhoto from "../../../../../assets/frontend/assets/img/pages/profile-banner.png";

export default {
  data() {
    return {
      profilePhoto,
      coverPhoto,
      croppedProfilePhoto: null,
      showCoverImage: false,
      showSaveButton: false,
      coverImagePosition: { x: 0, y: 0 },
      isDragging: false,
      isPositionFixed: false,
      startX: 0,
      startY: 0,
    };
  },
  computed: {
    coverImageStyle() {
      return {
        position: "absolute",
        top: `${this.coverImagePosition.y}px`, // Only Y-axis movement
        left: "0px", // Fixed X-axis
        width: "100%", // Fill the container width
        height: "auto", // Maintain aspect ratio
        minHeight: "300px", // Minimum height of the cover area
      };
    },
  },
  methods: {
    startDrag(event) {
      if (this.isPositionFixed) return; // Prevent dragging after position is saved
      this.isDragging = true;
      this.startY = event.clientY - this.coverImagePosition.y;
      event.preventDefault(); // Prevent text selection while dragging
    },
    stopDrag() {
      if (this.isPositionFixed) return; // Prevent dragging after position is saved
      this.isDragging = false;
    },
    onDrag(event) {
      if (this.isDragging && !this.isPositionFixed) {
        this.coverImagePosition.y = event.clientY - this.startY; // Y-axis movement only
      }
    },
    triggerCoverPhotoInput() {
      this.$refs.coverPhotoInput.click();
    },
    onCoverPhotoSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.coverPhoto = URL.createObjectURL(file);
        this.showCoverImage = true; // Show the uploaded cover photo
        this.coverImagePosition = { x: 0, y: 0 }; // Reset position
        this.showSaveButton = true; // Show the save button after image selection
        this.isPositionFixed = false; // Allow repositioning
      }
    },
    saveCoverPosition() {
      this.isPositionFixed = true; // Fix the position of the cover image
      this.showSaveButton = false; // Hide the save button after saving
    },
  },
};
</script>

<style>
.user-profile-img {
  width: 150px !important;
  height: 150px !important;
  background-position: cover;
}
.user-profile-header-banner {
  position: relative;
  height: 300px; /* Adjust as needed */
  overflow: hidden; /* Prevent overflow of images */
}
.nav-link.active {
  background-color: #007bff;
  color: white;
}
.user-profile-header-banner {
  position: relative;
  height: 300px;
  overflow: hidden;
  cursor: default;
}
.user-profile-header-banner:active {
  cursor: move;
}
</style>
