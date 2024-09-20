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
                            <RouterLink to="/Media/photo" class="nav-link" active-class="active">
                                <i class="ti-xs ti ti-user-check me-1"></i> Photos
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Media/video" class="nav-link" active-class="active">
                                <i class="ti-xs ti ti-users me-1"></i> Videos
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <div v-for="(image, index) in images" :key="index" class="image-container">
                    <img class="toZoom" :src="image.thumbnail" :alt="image.alt" @click="openModal(index)" />

                    <!-- Modal -->
                    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-if="modalOpen" class="modal" @click.self="closeModal">
                            <span class="close" @click="closeModal">&times;</span>
                            <div class="modal-content">
                                <button class="nav-button prev" @click="prevImage">❮</button>
                                <img :src="images[currentImageIndex].src" :alt="images[currentImageIndex].alt"
                                    class="full-image" />
                                <button class="nav-button next" @click="nextImage">❯</button>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modalOpen: false,
            currentImageIndex: 0,
            images: [
                { src: 'https://www.abc.net.au/health/minutes/img/300x150_th_m1425243.jpg', thumbnail: 'https://www.abc.net.au/health/minutes/img/300x150_th_m1425243.jpg', alt: 'Photo 1' },
                { src: 'https://www.abc.net.au/health/minutes/img/300x150_th_m1425243.jpg', thumbnail: 'https://www.abc.net.au/health/minutes/img/300x150_th_m1425243.jpg', alt: 'Photo 2' },
                { src: 'https://cas17.fr/wp-content/uploads/2020/02/CieLEtabli%C2%A9ElisabettaSpaggiari2-300x150.jpg', thumbnail: 'https://cas17.fr/wp-content/uploads/2020/02/CieLEtabli%C2%A9ElisabettaSpaggiari2-300x150.jpg', alt: 'Photo 3' },
                // Add more images as needed
            ]
        };
    },
    methods: {
        openModal(index) {
            this.currentImageIndex = index;
            this.modalOpen = true;
        },
        closeModal() {
            this.modalOpen = false;
        },
        prevImage() {
            if (this.currentImageIndex > 0) {
                this.currentImageIndex--;
            } else {
                this.currentImageIndex = this.images.length - 1;
            }
        },
        nextImage() {
            if (this.currentImageIndex < this.images.length - 1) {
                this.currentImageIndex++;
            } else {
                this.currentImageIndex = 0;
            }
        },
        beforeEnter(el) {
            el.style.opacity = 0;
            el.style.transform = 'scale(0.9)';
        },
        enter(el, done) {
            el.offsetHeight; // Trigger reflow
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = 1;
            el.style.transform = 'scale(1)';
            done();
        },
        leave(el, done) {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = 0;
            el.style.transform = 'scale(0.9)';
            done();
        }
    }
}
</script>

<style scoped>
.toZoom {
    border-radius: 5px;
    cursor: pointer;
    transition: opacity 0.3s ease;
}

.toZoom:hover {
    opacity: 0.7;
}

.modal {
    position: fixed;
    /* Fixed position for overlay */
    z-index: 1000;
    /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgba(0, 0, 0, 0.304);
    /* Black w/ opacity */
    display: flex;
    /* Center modal content */
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: scale(0.9);
}

.modal-content {
    position: relative;
    width: 80%;
    max-width: 800px;
}

.full-image {
    width: 100%;
    height: auto;
}

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close:hover,
.close:focus {
    color: #bbb;
}

.nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

/* Transition styles */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
    transform: scale(0.9);
}
</style>