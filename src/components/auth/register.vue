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
                    <label class="form-label" for="username">Username</label>
                    <input
                      type="text"
                      v-model="register.username"
                      id="multiStepsUsername"
                      class="form-control"
                      placeholder="Name" />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="email">Email</label>
                    <input
                      type="email"
                      v-model="register.email"
                      id="multiStepsEmail"
                      class="form-control"
                      placeholder="Email"
                      aria-label="john.doe" />
                  </div>
                  <div class="col-sm-6 form-password-toggle">
                    <label class="form-label" for="password">Password</label>
                    <div class="input-group input-group-merge">
                      <input
                        :type="isPasswordVisible ? 'text' : 'password'"
                        id="multiStepsPass"
                        v-model="register.password"
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
                    <label class="form-label" for="first_name"
                      >First Name</label
                    >
                    <input
                      type="text"
                      id="multiStepsFirstName"
                      v-model="register.first_name"
                      class="form-control"
                      placeholder="John" />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="last_name">Last Name</label>
                    <input
                      type="text"
                      id="multiStepsLastName"
                      v-model="register.last_name"
                      class="form-control"
                      placeholder="Doe" />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="phone">Mobile</label>
                    <div class="input-group">
                      <span class="input-group-text">BD (+880)</span>
                      <input
                        type="text"
                        id="multiStepsMobile"
                        v-model="register.phone"
                        class="form-control multi-steps-mobile"
                        placeholder="1*********" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="birthdate">Birth Date</label>
                    <input
                      type="date"
                      id="formtabs-birthdate"
                      v-model="register.birthdate"
                      class="form-control dob-picker flatpickr-input active"
                      placeholder="DD-MM-YYYY"
                      readonly="readonly" />
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
                          <span class="custom-option-title fs-5 mb-1"
                            >Computer Technology</span
                          >
                        </span>
                        <input
                          v-model="register.department"
                          class="form-check-input"
                          type="radio"
                          value="computer"
                          id="basicOption" />
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
                          v-model="register.department"
                          class="form-check-input"
                          type="radio"
                          value="civil"
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
                          v-model="register.department"
                          class="form-check-input"
                          type="radio"
                          value="electrical"
                          id="standardOption" />
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
                          v-model="register.department"
                          class="form-check-input"
                          type="radio"
                          value="mechanical"
                          id="enterpriseOption" />
                      </label>
                    </div>
                  </div>
                </div>
                <!--/ Custom plan options -->
                <div class="content-header mb-2">
                  <h5 class="mb-1">Batch Information</h5>
                </div>
                <!-- Batch Information -->
                <div class="row g-3">
                  <div class="col-md-4">
                    <label class="form-label" for="semister"
                      >Your Semester</label
                    >
                    <select
                      id="semister"
                      class="form-select"
                      v-model="register.semister">
                      <option value="">Select Semester</option>
                      <option value="1st">1st semester</option>
                      <option value="2nd">2nd semester</option>
                      <option value="3rd">3rd semester</option>
                      <option value="4th">4th semester</option>
                      <option value="5th">5th semester</option>
                      <option value="6th">6th semester</option>
                      <option value="7th">7th semester</option>
                      <option value="8th">8th semester</option>
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
                      v-model="register.btebroll"
                      placeholder="roll" />
                  </div>
                  <div class="col-6 col-md-4">
                    <label class="form-label" for="session">Your Session</label>
                    <input
                      type="text"
                      id="session"
                      class="form-control"
                      v-model="register.session"
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
                      @click="registerAction"
                      type="submit"
                      class="btn btn-success">
                      Submit
                    </button>
                  </div>
                </div>
                <!--/ Batch Information -->
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
import { readonly } from "vue";
import axios from "axios";
import { inject } from "vue";
// import flatpickr from "flatpickr"; // Ensure you import flatpickr if it's used

export default {
  setup() {
    const globalVariables = inject("globalVariables");
    return { globalVariables };
  },

  data() {
    return {
      register: {
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        phone: "",
        birthdate: "",
        department: "", // Make sure to initialize department here
        semister: "",
        btebroll: "",
        session: "",
      },
      validationErrors: {}, // To store validation errors
      currentStep: 1,
      isPasswordVisible: false,
      isConfirmPasswordVisible: false,
      isLoading: true,
    };
  },

  methods: {
    // Function to convert date format from DD-MM-YYYY to YYYY-MM-DD
    formatDate(dateString) {
      const parts = dateString.split("-");
      return `${parts[2]}-${parts[1]}-${parts[0]}`; // Converts to YYYY-MM-DD
    },

    registerAction() {
      // Validate that a department is selected
      if (!this.register.department) {
        alert("Please select a department before submitting.");
        return; // Stop further execution
      }
      if (!this.register.semister) {
        alert("Please select a semester before submitting.");
        return; // Stop further execution
      }

      // Convert birthdate before sending
      if (this.register.birthdate) {
        this.register.birthdate = this.formatDate(this.register.birthdate);
      }

      axios
        .post(this.globalVariables.apiUrl + "/register", this.register, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error during registration:", error);
          // Handle error (e.g., set validationErrors if necessary)
        });
    },

    togglePasswordVisibility(field) {
      this[field] = !this[field];
    },

    goToNextStep() {
      this.currentStep++;
    },

    goToPreviousStep() {
      this.currentStep--;
    },
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    flatpickr("#formtabs-birthdate", {
      dateFormat: "d-m-Y",
      altInput: true,
      altFormat: "j F,Y",
      onChange: (selectedDates, dateStr) => {
        // Update birthdate whenever the date is selected
        this.register.birthdate = dateStr; // Store selected date in DD-MM-YYYY format
      },
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
