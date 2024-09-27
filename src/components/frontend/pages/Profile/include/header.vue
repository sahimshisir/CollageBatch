<template>
  <!-- Header -->
  <div class="row">
    <div class="col-12">
      <div class="card mb-4">
        <div class="user-profile-header-banner">
          <img
            src="../../../../../assets/frontend/assets/img/pages/profile-banner.png"
            alt="Banner image"
            class="rounded-top" />
        </div>
        <div
          class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
          <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
            <img
              src="../../../../../assets/frontend/assets/img/avatars/14.png"
              alt="user image"
              class="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img mt-3" />
          </div>
          <div class="flex-grow-1 mt-3 mt-sm-5">
            <div
              class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
              <div class="user-profile-info">
                <h4>SHISHIR</h4>
                <ul
                  class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                  <li
                    class="list-inline-item d-flex gap-1 badge bg-primary bg-glow">
                    Developer
                  </li>
                  <li class="list-inline-item d-flex gap-1">
                    <i class="ti ti-map-pin"></i> Vatican City
                  </li>
                  <li class="list-inline-item d-flex gap-1">
                    <i class="ti ti-calendar"></i> Joined April 2021
                  </li>
                </ul>
              </div>
              <a href="#" class="btn btn-primary" data-bs-toggle="modal"
              data-bs-target="#ProfileEdit">
                <i class="fa-regular fa-pen-to-square me-2" ></i> Edit Profile
              </a>
            </div>
            <!-- <div class="d-flex align-items-center pt-1 mx-4 mt-2">
              <div class="d-flex align-items-center">
                <ul
                  class="list-unstyled d-flex align-items-center avatar-group mb-0 z-2 mt-1">
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Vinnie Mostowy"
                    class="avatar avatar-sm pull-up">
                    <img
                      class="rounded-circle"
                      src="../../../../../assets/frontend/assets/img/avatars/5.png"
                      alt="Avatar" />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Vinnie Mostowy"
                    class="avatar avatar-sm pull-up">
                    <img
                      class="rounded-circle"
                      src="../../../../../assets/frontend/assets/img/avatars/5.png"
                      alt="Avatar" />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Vinnie Mostowy"
                    class="avatar avatar-sm pull-up">
                    <img
                      class="rounded-circle"
                      src="../../../../../assets/frontend/assets/img/avatars/5.png"
                      alt="Avatar" />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Allen Rieske"
                    class="avatar avatar-sm pull-up">
                    <img
                      class="rounded-circle"
                      src="../../../../../assets/frontend/assets/img/avatars/12.png"
                      alt="Avatar" />
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Julee Rossignol"
                    class="avatar avatar-sm pull-up me-2">
                    <img
                      class="rounded-circle"
                      src="../../../../../assets/frontend/assets/img/avatars/6.png"
                      alt="Avatar" />
                  </li>
                  <li><small class="text-muted">280 Members</small></li>
                </ul>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="ProfileEdit" tabindex="-1" aria-hidden="true">
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
                    src="../../../.././../assets/frontend/assets/img/avatars/1.png"
                    class="h-auto rounded-circle" />
                </div>
              </div>
            </div>

            <div class="card-body"></div>
            <div class="card-footer border-bottom mb-5"></div>
            <!-- comment -->

            <!-- comment -->
          </div>
        </div>
        <div
          class="modal-cmt-footer border-top d-flex align-items-center justify-content-around">
          <div class="avatar me-1">
            <img
              src="../../../../../assets/frontend/assets/img/avatars/1.png"
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
  <!--/ Header -->

  <!-- Navbar pills -->
  <div class="row">
    <div class="col-md-12">
      <ul class="nav nav-pills flex-row flex-sm-row mb-4 ">
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
            <i class="ti-xs ti ti-layout-grid me-1"></i> Friends
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
  <!--/ Navbar pills -->
</template>

<style>
.nav-link.active {
  background-color: #007bff;
  color: white;
}
</style>
