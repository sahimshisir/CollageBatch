<template>
  <footer
    class="position-fixed bottom-0 start-0 w-100 bg-navbar-theme rounded-bottom rounded-3 d-block d-lg-none border-top border-primary">
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
            data-bs-target="#postModal">
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
  <div class="modal fade" id="postModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-muted" id="exampleModalLabel1">Whats your mind!</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Text write now !"></textarea>
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
