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
                            <RouterLink to="/media/profile/photo" class="nav-link" active-class="active">
                                <i class="ti-xs ti ti-user-check me-1"></i> Photos
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/media/profile/video" class="nav-link" active-class="active">
                                <i class="ti-xs ti ti-users me-1"></i> Videos
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <div>
                    nice & Attractive
                </div>
            </div>
        </div>
    </div>
</template>