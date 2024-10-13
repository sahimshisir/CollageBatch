<template>
  <!-- <loader v-if="isLoading"></loader> -->
  <div class="authentication-inner row bg_position">
    <!-- Left Text -->
    <div
      class="d-none d-lg-flex col-lg-4 align-items-center justify-content-center p-5 auth-cover-bg-color position-relative auth-multisteps-bg-height">
      <img
        src="../../assets/frontend/assets/img/illustrations/auth-register-illustration-dark.png"
        alt="auth-register-multisteps"
        class="img-fluid"
        width="280" />

      <img
        src="../../assets/frontend/assets/img/illustrations/bg-shape-image-light.png"
        alt="auth-register-multisteps"
        class="platform-bg"
        data-app-light-img="illustrations/bg-shape-image-light.png"
        data-app-dark-img="illustrations/bg-shape-image-dark.png" />
    </div>
    <!-- /Left Text -->

    <!--  Multi Steps Registration -->
    <div
      class="d-flex col-lg-8 align-items-center justify-content-center p-sm-5 p-3">
      <div class="w-px-700">
        <div id="multiStepsValidation" class="bs-stepper shadow-none">
          <div class="bs-stepper-header border-bottom-0">
            <div class="step" data-target="#accountDetailsValidation">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle"
                  ><i class="ti ti-smart-home ti-sm"></i
                ></span>
                <span class="bs-stepper-label">
                  <span class="bs-stepper-title">Account</span>
                  <span class="bs-stepper-subtitle">Account Details</span>
                </span>
              </button>
            </div>
            <div class="line">
              <i class="ti ti-chevron-right"></i>
            </div>
            <div class="step" data-target="#personalInfoValidation">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle"
                  ><i class="ti ti-users ti-sm"></i
                ></span>
                <span class="bs-stepper-label">
                  <span class="bs-stepper-title">Personal</span>
                  <span class="bs-stepper-subtitle">Enter Information</span>
                </span>
              </button>
            </div>
            <div class="line">
              <i class="ti ti-chevron-right"></i>
            </div>
            <div class="step" data-target="#billingLinksValidation">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle"
                  ><i class="ti ti-file-text ti-sm"></i
                ></span>
                <span class="bs-stepper-label">
                  <span class="bs-stepper-title">Another Info</span>
                  <span class="bs-stepper-subtitle">Account Details</span>
                </span>
              </button>
            </div>
          </div>
          <div class="bs-stepper-content">
            <form id="multiStepsForm">
              <!-- Account Details -->
              <div id="accountDetailsValidation" class="content">
                <div class="content-header mb-4">
                  <h3 class="mb-1">Account Information</h3>
                  <p>Enter Your Account Details</p>
                </div>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsUsername"
                      >Username</label
                    >
                    <input
                      type="text"
                      name="multiStepsUsername"
                      id="multiStepsUsername"
                      class="form-control"
                      placeholder="Name" />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsEmail"
                      >Email</label
                    >
                    <input
                      type="email"
                      name="multiStepsEmail"
                      id="multiStepsEmail"
                      class="form-control"
                      placeholder="Email"
                      aria-label="john.doe" />
                  </div>
                  <div class="col-sm-6 form-password-toggle">
                    <label class="form-label" for="multiStepsPass"
                      >Password</label
                    >
                    <div class="input-group input-group-merge">
                      <input
                        :type="isPasswordVisible ? 'text' : 'password'"
                        id="multiStepsPass"
                        name="multiStepsPass"
                        class="form-control"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="multiStepsPass2" />
                      <span
                        class="input-group-text cursor-pointer"
                        id="multiStepsPass2"
                        @click="togglePasswordVisibility('isPasswordVisible')">
                        <i
                          :class="
                            isPasswordVisible ? 'ti ti-eye' : 'ti ti-eye-off'
                          "></i>
                      </span>
                    </div>
                  </div>

                  <div class="col-sm-6 form-password-toggle">
                    <label class="form-label" for="multiStepsConfirmPass"
                      >Confirm Password</label
                    >
                    <div class="input-group input-group-merge">
                      <input
                        :type="isConfirmPasswordVisible ? 'text' : 'password'"
                        id="multiStepsConfirmPass"
                        name="multiStepsConfirmPass"
                        class="form-control"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="multiStepsConfirmPass2" />
                      <span
                        class="input-group-text cursor-pointer"
                        id="multiStepsConfirmPass2"
                        @click="
                          togglePasswordVisibility('isConfirmPasswordVisible')
                        ">
                        <i
                          :class="
                            isConfirmPasswordVisible
                              ? 'ti ti-eye'
                              : 'ti ti-eye-off'
                          "></i>
                      </span>
                    </div>
                  </div>

                  <div class="col-12 d-flex justify-content-between mt-4">
                    <button class="btn btn-label-secondary btn-prev" disabled>
                      <i class="ti ti-arrow-left ti-xs me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none"
                        >Previous</span
                      >
                    </button>
                    <button
                      class="btn btn-primary btn-next"
                      @click.prevent="goToNextStep">
                      <span
                        class="align-middle d-sm-inline-block d-none me-sm-1 me-0"
                        >Next</span
                      >
                      <i class="ti ti-arrow-right ti-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Personal Info -->
              <div id="personalInfoValidation" class="content">
                <div class="content-header mb-4">
                  <h3 class="mb-1">Personal Information</h3>
                  <p>Enter Your Personal Information</p>
                </div>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsFirstName"
                      >First Name</label
                    >
                    <input
                      type="text"
                      id="multiStepsFirstName"
                      name="multiStepsFirstName"
                      class="form-control"
                      placeholder="John" />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsLastName"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      id="multiStepsLastName"
                      name="multiStepsLastName"
                      class="form-control"
                      placeholder="Doe" />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="multiStepsMobile"
                      >Mobile</label
                    >
                    <div class="input-group">
                      <span class="input-group-text">BD (+880)</span>
                      <input
                        type="text"
                        id="multiStepsMobile"
                        name="multiStepsMobile"
                        class="form-control multi-steps-mobile"
                        placeholder="1*********" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="formtabs-birthdate"
                      >Birth Date</label
                    >
                    <input
                      type="date"
                      id="formtabs-birthdate"
                      name="birthdate"
                      class="form-control dob-picker flatpickr-input active"
                      placeholder="DD-MM-YYYY"
                      readonly="readonly"/>
                  </div>

                  <div class="col-12 d-flex justify-content-between mt-4">
                    <button
                      class="btn btn-label-secondary btn-prev"
                      @click.prevent="goToPreviousStep">
                      <i class="ti ti-arrow-left ti-xs me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none"
                        >Previous</span
                      >
                    </button>
                    <button
                      class="btn btn-primary btn-next"
                      @click.prevent="goToNextStep">
                      <span
                        class="align-middle d-sm-inline-block d-none me-sm-1 me-0"
                        >Next</span
                      >
                      <i class="ti ti-arrow-right ti-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Billing Links -->
              <div id="billingLinksValidation" class="content">
                <div class="content-header con_heder">
                  <h5 class="">Select Department</h5>
                </div>
                <!-- Custom plan options -->
                <div class="row gap-md-0 gap-3 my-4">
                  <div class="col-md-6">
                    <div
                      class="form-check custom-option custom-option-icon mb-4">
                      <label
                        class="form-check-label custom-option-content"
                        for="basicOption">
                        <span class="custom-option-body">
                          <i class="fa-solid fa-computer"></i>
                          <span class="custom-option-title fs-5 mb-1">
                            Computer Technology</span
                          >
                        </span>
                        <input
                          name="customRadioIcon"
                          class="form-check-input"
                          type="radio"
                          value=""
                          id="basicOption" checked  />
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="form-check custom-option custom-option-icon mb-4">
                      <label
                        class="form-check-label custom-option-content"
                        for="Option">
                        <span class="custom-option-body">
                          <i class="fa-solid fa-compass-drafting"></i>
                          <span class="custom-option-title fs-5 mb-1"
                            >Civil Technology</span
                          >
                        </span>
                        <input
                          name="customRadioIcon"
                          class="form-check-input"
                          type="radio"
                          value=""
                          id="Option" />
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-check custom-option custom-option-icon">
                      <label
                        class="form-check-label custom-option-content"
                        for="standardOption">
                        <span class="custom-option-body">
                          <i class="fa-solid fa-bolt-lightning"></i>
                          <span class="custom-option-title fs-5 mb-1"
                            >Electrical Technology</span
                          >
                        </span>
                        <input
                          name="customRadioIcon"
                          class="form-check-input"
                          type="radio"
                          value=""
                          id="standardOption"
                          />
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-check custom-option custom-option-icon">
                      <label
                        class="form-check-label custom-option-content"
                        for="enterpriseOption">
                        <span class="custom-option-body">
                          <i class="fa-solid fa-gears"></i>
                          <span class="custom-option-title fs-5 mb-1"
                            >Mechanical Technology</span
                          >
                        </span>
                        <input
                          name="customRadioIcon"
                          class="form-check-input"
                          type="radio"
                          value=""
                          id="enterpriseOption" />
                      </label>
                    </div>
                  </div>
                </div>
                <!--/ Custom plan options -->
                <div class="content-header mb-2">
                  <h5 class="mb-1">Batch Information</h5>
                </div>
                <!-- Credit Card Details -->
                <div class="row g-3">
                  <div class="col-md-4">
                    <label class="form-label" for="collapsible-state"
                      >Your Semister</label
                    >
                    <select
                      id="collapsible-state"
                      class="select2 form-select"
                      name="semister"
                      data-allow-clear="true">
                      <option value="">Select Semister</option>
                      <option value="1">1st semister</option>
                      <option value="2">2nd semister</option>
                      <option value="3">3rd semister</option>
                      <option value="4">4th semister</option>
                      <option value="5">5th semister</option>
                      <option value="6">6th semister</option>
                      <option value="7">7th semister</option>
                      <option value="8">8th semister</option>
                     
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label" for="multiStepsName"
                      >BTEB Roll</label
                    >
                    <input
                      type="number"
                      id="multiStepsName"
                      class="form-control"
                      name="btebroll"
                      placeholder="roll" />
                  </div>
                  <div class="col-6 col-md-4">
                    <label class="form-label" for="session">Your Session</label>
                    <input
                      type="text"
                      id="session"
                      class="form-control"
                      name="session"
                      placeholder="2020-2021" />
                  </div>

                  <div
                    class="col-12 d-flex justify-content-between mt-4"
                    @click.prevent="goToPreviousStep">
                    <button class="btn btn-label-secondary btn-prev">
                      <i class="ti ti-arrow-left ti-xs me-sm-1 me-0"></i>
                      <span class="align-middle d-sm-inline-block d-none"
                        >Previous</span
                      >
                    </button>
                    <button
                      type="submit"
                      class="btn btn-success btn-next btn-submit">
                      Submit
                    </button>
                  </div>
                </div>
                <!--/ Credit Card Details -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- / Multi Steps Registration -->
  </div>
</template>
<script>
import { readonly } from 'vue';

//  import loader from '../../components/include/Loader.vue';
export default {
  // components: {
  //   loader
  // },

  data() {
    return {
      currentStep: 1,
      isPasswordVisible: false,
      isConfirmPasswordVisible: false,
      // isLoading: true, // Uncomment if needed
    };
  },
  methods: {
    togglePasswordVisibility(field) {
      // Toggle password visibility
      this[field] = !this[field];
    },
    goToNextStep() {
      // Logic to go to the next step without refreshing the page
      this.currentStep++;
    },
    goToPreviousStep() {
      // Logic to go to the previous step
      this.currentStep--;
    },
  },
  mounted() {
    // Hide loader after content is "loaded"
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    // Initialize Flatpickr after component is mounted
    flatpickr("#formtabs-birthdate", {
      dateFormat: "d-m-Y",
      altInput: true,
      // altFormat: "Y-m-d",
      altFormat: "j F,Y",
      
    });
  },
};
</script>

<style>
.form-control.dob-picker:focus {
  border-color: #0569d4;
  outline: none;
}

.flatpickr-input[readonly] {
  background-color: #fff;
  cursor: pointer;
}

.flatpickr-calendar {
  background-color: #333;
  color: white;
  border-radius: 8px;
}

.flatpickr-day.selected,
.flatpickr-day.today {
  background-color: #0469d6;
  color: white;
}

.flatpickr-day:hover {
  background-color: #0056b3;
  color: white;
}
.con_heder {
  font-size: 20px !important;
}
</style>
