<template>
  <aside id="layout-menu" class="layout-menu menu-vertical menu">
      <!-- Dashboards -->
      <div class="col-md-12 mb-4">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between pb-2 mb-1">
            <div class="card-title mb-1">
            <router-link to="/">
                 <a
            class="nav-link dropdown-toggle hide-arrow"
            
            data-bs-toggle="dropdown">
            <div class="avatar avatar-online d-flex">
              <img
                src="../../../../../assets/frontend/assets/img/avatars/1.png"
                class="h-auto rounded-circle" />
                <h5 class="mt-2 ms-3">SHISHIR</h5>
            </div>
            
          </a>
            </router-link>
             
              
              
            </div>
            <!-- <div class="dropdown">
              <button
                class="btn p-0"
                type="button"
                id="salesByCountryTabs"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i class="ti ti-dots-vertical ti-sm text-muted"></i>
              </button>
              <div
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="salesByCountryTabs">
                <a class="dropdown-item" href="javascript:void(0);">Download</a>
                <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                <a class="dropdown-item" href="javascript:void(0);">Share</a>
              </div>
            </div> -->
          </div>
          <div class="card-body">
            <div class="nav-align-top">
              <ul class="nav nav-tabs nav-fill" role="tablist">
                <li class="nav-item">
                  <button
                    type="button"
                    class="nav-link active"
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#navs-justified-new"
                    aria-controls="navs-justified-new"
                    aria-selected="true">
                    Details
                  </button>
                </li>
                <li class="nav-item">
                  <button
                    type="button"
                    class="nav-link"
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#navs-justified-link-preparing"
                    aria-controls="navs-justified-link-preparing"
                    aria-selected="false">
                    Notification
                  </button>
                </li>
               
              </ul>
              <div class="tab-content p-0 pt-4 pb-0">
                <div
                  class="tab-pane fade show active"
                  id="navs-justified-new"
                  role="tabpanel">
                  <ul class="timeline mb-2 pb-1 ">
                    <li class="timeline-item ps-4 border-left-dashed">
                      <span
                        class="timeline-indicator-advanced timeline-indicator-success">
                        <i class="ti ti-circle-check"></i>
                      </span>
                      <div class="timeline-event ps-0 pb-0">
                        <div class="timeline-header">
                          <small class="text-success text-uppercase fw-medium"
                            >sender</small
                          >
                        </div>
                        <h6 class="mb-0">Myrtle Ullrich</h6>
                        <p class="text-muted mb-0">
                          101 Boulder, California(CA), 95959
                        </p>
                      </div>
                    </li>
                    <li class="timeline-item ps-4 border-transparent">
                      <span
                        class="timeline-indicator-advanced timeline-indicator-primary">
                        <i class="ti ti-map-pin"></i>
                      </span>
                      <div class="timeline-event ps-0 pb-0">
                        <div class="timeline-header">
                          <small class="text-primary text-uppercase fw-medium"
                            >Receiver</small
                          >
                        </div>
                        <h6 class="mb-0">Barry Schowalter</h6>
                        <p class="text-muted mb-0">
                          939 Orange, California(CA),92118
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div
                    class="border-bottom border-bottom-dashed mt-0 mb-4"></div>
                  <ul class="timeline mb-5">
                    <li class="timeline-item ps-4 border-left-dashed">
                      <span
                        class="timeline-indicator-advanced timeline-indicator-success">
                        <i class="ti ti-circle-check"></i>
                      </span>
                      <div class="timeline-event ps-0 pb-0">
                        <div class="timeline-header">
                          <small class="text-success text-uppercase fw-medium"
                            >sender</small
                          >
                        </div>
                        <h6 class="mb-0">Veronica Herman</h6>
                        <p class="text-muted mb-0">
                          162 Windsor, California(CA), 95492
                        </p>
                      </div>
                    </li>
                    <li class="timeline-item ps-4 border-transparent">
                      <span
                        class="timeline-indicator-advanced timeline-indicator-primary">
                        <i class="ti ti-map-pin"></i>
                      </span>
                      <div class="timeline-event ps-0 pb-0">
                        <div class="timeline-header">
                          <small class="text-primary text-uppercase fw-medium"
                            >Receiver</small
                          >
                        </div>
                        <h6 class="mb-0">Helen Jacobs</h6>
                        <p class="text-muted mb-0">
                          487 Sunset, California(CA), 94043
                        </p>
                      </div>
                    </li>
                    <li class="timeline-item ps-4 border-left-dashed">
                      <span
                        class="timeline-indicator-advanced timeline-indicator-success">
                        <i class="ti ti-circle-check"></i>
                      </span>
                      <div class="timeline-event ps-0 pb-0">
                        <div class="timeline-header">
                          <small class="text-success text-uppercase fw-medium"
                            >sender</small
                          >
                        </div>
                        <h6 class="mb-0">Veronica Herman</h6>
                        <p class="text-muted mb-0">
                          162 Windsor, California(CA), 95492
                        </p>
                      </div>
                    </li>
                    
                  </ul>
                </div>

                <div
                  class="tab-pane fade"
                  id="navs-justified-link-preparing"
                  role="tabpanel">
                  <ul class="timeline mb-2 pb-1">
                    <li class="timeline-item ps-4 border-left-dashed">
                      <span
                        class="timeline-indicator-advanced timeline-indicator-success">
                        <i class="ti ti-circle-check"></i>
                      </span>
                      <div class="timeline-event ps-0 pb-0">
                        <div class="timeline-header">
                          <small class="text-success text-uppercase fw-medium"
                            >sender</small
                          >
                        </div>
                        <h6 class="mb-0">Barry Schowalter</h6>
                        <p class="text-muted mb-0">
                          939 Orange, California(CA),92118
                        </p>
                      </div>
                    </li>
                    <li class="timeline-item ps-4 border-transparent">
                      <span
                        class="timeline-indicator-advanced timeline-indicator-primary">
                        <i class="ti ti-map-pin"></i>
                      </span>
                      <div class="timeline-event ps-0 pb-0">
                        <div class="timeline-header">
                          <small class="text-primary text-uppercase fw-medium"
                            >Receiver</small
                          >
                        </div>
                        <h6 class="mb-0">Myrtle Ullrich</h6>
                        <p class="text-muted mb-0">
                          101 Boulder, California(CA), 95959
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div
                    class="border-bottom border-bottom-dashed mt-0 mb-4"></div>
                  <ul class="timeline mb-0">
                    <li class="timeline-item ps-4 border-left-dashed">
                      <span
                        class="timeline-indicator-advanced timeline-indicator-success">
                        <i class="ti ti-circle-check"></i>
                      </span>
                      <div class="timeline-event ps-0 pb-0">
                        <div class="timeline-header">
                          <small class="text-success text-uppercase fw-medium"
                            >sender</small
                          >
                        </div>
                        <h6 class="mb-0">Veronica Herman</h6>
                        <p class="text-muted mb-0">
                          162 Windsor, California(CA), 95492
                        </p>
                      </div>
                    </li>
                    <li class="timeline-item ps-4 border-transparent">
                      <span
                        class="timeline-indicator-advanced timeline-indicator-primary">
                        <i class="ti ti-map-pin"></i>
                      </span>
                      <div class="timeline-event ps-0 pb-0">
                        <div class="timeline-header">
                          <small class="text-primary text-uppercase fw-medium"
                            >Receiver</small
                          >
                        </div>
                        <h6 class="mb-0">Helen Jacobs</h6>
                        <p class="text-muted mb-0">
                          487 Sunset, California(CA), 94043
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
   
  </aside>
</template>
