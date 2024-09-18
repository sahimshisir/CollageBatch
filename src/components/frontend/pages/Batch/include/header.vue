<template>
     <!-- Header -->
     <div class="row">
            <div class="col-12">
                <div class="card mb-4">
                    <div class="user-profile-header-banner">
                        <img src="../../../../../assets/frontend/assets/img/pages/profile-banner.png" alt="Banner image"
                            class="rounded-top" />
                    </div>
                    <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                        <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                            <img src="../../../../../assets/frontend/assets/img/avatars/14.png" alt="user image"
                                class="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img mt-lg-5" />
                        </div>
                        <div class="flex-grow-1 mt-3 mt-sm-5">
                            <div
                                class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                <div class="user-profile-info">
                                    <h4>Ashraful Islam</h4>
                                    <ul
                                        class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                        <li class="list-inline-item d-flex gap-1 badge bg-primary bg-glow">Batch-03
                                        </li>
                                        <li class="list-inline-item d-flex gap-1"><i class="ti ti-map-pin"></i> Vatican
                                            City</li>
                                        <li class="list-inline-item d-flex gap-1">
                                            <i class="ti ti-calendar"></i> Joined April 2021
                                        </li>
                                    </ul>
                                </div>
                                <a href="javascript:void(0)" class="btn btn-primary">
                                    <i class="ti ti-check me-1"></i>Connected
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ Header -->

        <!-- Navbar pills -->
        <div class="row">
            <div class="col-md-12">
                <ul class="nav nav-pills flex-column flex-sm-row mb-4">
                    <li class="nav-item">
                        <a class="nav-link active"><i
                                class="ti-xs ti ti-user-check me-1"></i>
                                <RouterLink to="/Post" class="text-white">Posts</RouterLink> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link "><i class="ti-xs ti ti-users me-1"></i>
                            <RouterLink to="/BatchAbout" class="text-white">About</RouterLink>
                            </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><i
                                class="ti-xs ti ti-layout-grid me-1"></i>
                                <RouterLink to="/BatchMember" class="text-white">Members</RouterLink></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><i class="ti-xs ti ti-link me-1"></i>
                            <RouterLink to="/BatchMedia" class="text-white">Media</RouterLink> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><i class="ti-xs ti ti-link me-1"></i>
                            <RouterLink to="/BatchContent" class="text-white"> My content</RouterLink></a>
                    </li>
                </ul>
            </div>
        </div>
        <!--/ Navbar pills -->
</template>