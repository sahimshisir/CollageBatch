<template>
  <div class="authentication-wrapper authentication-cover authentication-bg">
    <div class="authentication-inner row">
      <!-- /Left Text -->
      <div class="d-none d-lg-flex col-lg-7 p-0">
        <div
          class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
          <img
            src="../../assets/frontend/assets/img/illustrations/auth-reset-password-illustration-light.png"
            alt="auth-reset-password-cover"
            class="img-fluid my-5 auth-illustration"
            data-app-light-img="illustrations/auth-reset-password-illustration-light.png"
            data-app-dark-img="illustrations/auth-reset-password-illustration-dark.png" />
          <img
            src="../../assets/frontend/assets/img/illustrations/bg-shape-image-light.png"
            alt="auth-reset-password-cover"
            class="platform-bg"
            data-app-light-img="illustrations/bg-shape-image-light.png"
            data-app-dark-img="illustrations/bg-shape-image-dark.png" />
        </div>
      </div>
      <!-- /Left Text -->

      <!-- Reset Password -->
      <div class="d-flex col-12 col-lg-5 align-items-center p-4 p-sm-5">
        <div class="w-px-400 mx-auto">
          <!-- Logo -->
          <div class="app-brand mb-4">
            <a href="index.html" class="app-brand-link gap-2">
              <span class="app-brand-logo demo">
                <svg
                  width="32"
                  height="22"
                  viewBox="0 0 32 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <!-- SVG path here -->
                </svg>
              </span>
            </a>
          </div>
          <!-- /Logo -->
          <h4 class="mb-1">Reset Password 🔒</h4>
          <p class="mb-4">
            for <span class="fw-medium">{{ userEmail }}</span>
          </p>
          <form @submit.prevent="resetPassword">
            <div class="mb-3 form-password-toggle">
              <label class="form-label" for="password">New Password</label>
              <div class="input-group input-group-merge">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  class="form-control"
                  :class="{ 'is-invalid': passwordError }"
                  v-model="password"
                  @input="validatePassword"
                  placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  required />
                <span
                  class="input-group-text cursor-pointer"
                  @click="togglePasswordVisibility">
                  <i :class="showPassword ? 'ti ti-eye' : 'ti ti-eye-off'"></i>
                </span>
              </div>
              <div v-if="passwordError" class="text-danger">
                Please enter a valid password.
              </div>
            </div>
            <div class="mb-3 form-password-toggle">
              <label class="form-label" for="confirm-password"
                >Confirm Password</label
              >
              <div class="input-group input-group-merge">
                <input
                  :type="showConfirmPassword ? 'text' : 'password'"
                  id="confirm-password"
                  class="form-control"
                  :class="{ 'is-invalid': confirmPasswordError }"
                  v-model="password_confirmation"
                  @input="validateConfirmPassword"
                  placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  required />
                <span
                  class="input-group-text cursor-pointer"
                  @click="toggleConfirmPasswordVisibility">
                  <i
                    :class="
                      showConfirmPassword ? 'ti ti-eye' : 'ti ti-eye-off'
                    "></i>
                </span>
              </div>
              <div v-if="confirmPasswordError" class="text-danger">
                Passwords do not match!
              </div>
            </div>
            <button
              class="btn btn-primary d-grid w-100 mb-3"
              type="submit"
              :disabled="!isFormValid">
              Set new password
            </button>
            <div class="text-center">
              <a href="/">
                <i class="ti ti-chevron-left scaleX-n1-rtl"></i>
                Back to login
              </a>
            </div>
          </form>
        </div>
      </div>
      <!-- /Reset Password -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { inject } from "vue";
import { useToast } from "vue-toastification";
import Loader from "../include/Loader.vue";

export default {
  components: {
    Loader,
  },
  setup() {
    const globalVariables = inject("globalVariables");
    const toast = useToast();
    return { globalVariables, toast };
  },
  data() {
    return {
      email: "", // Pass the email via route state or Vuex to keep it accessible
      password: "",
      password_confirmation: "",
      showPassword: false,
      showConfirmPassword: false,
      passwordError: false,
      confirmPasswordError: false,
    };
  },
  mounted() {
    // Check if the email is still valid
    const savedEmail = localStorage.getItem("forgot_password_email");
    const expirationTime = localStorage.getItem("forgot_password_email_expiry");

    if (savedEmail && expirationTime) {
      const currentTime = new Date().getTime();

      // If the current time exceeds the expiration time, remove the entries
      if (currentTime > expirationTime) {
        localStorage.removeItem("forgot_password_email");
        localStorage.removeItem("forgot_password_email_expiry");
      }
    }
  },
  computed: {
    isFormValid() {
      return (
        this.password.length > 0 &&
        this.password_confirmation.length > 0 &&
        !this.passwordError &&
        !this.confirmPasswordError
      );
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    validatePassword() {
      // Add your password validation logic here
      this.passwordError = this.password.length < 8; // Example: password must be at least 6 characters
    },
    validateConfirmPassword() {
      // Add your confirm password validation logic here
      this.confirmPasswordError = this.password !== this.password_confirmation;
    },

    async resetPassword() {
      const forgot_password_email = localStorage.getItem( "forgot_password_email");
      const expirationTime = localStorage.getItem(
        "forgot_password_email_expiry"
      );

      if (expirationTime) {
        const currentTime = new Date().getTime();

        // If the current time exceeds the expiration time, remove the entries
        if (currentTime > expirationTime) {
          // localStorage.removeItem("forgot_password_email_expiry");
          this.toast.error("Session Expired");
          return;
        }
      }
      try {
        const response = await axios.post(
          `${this.globalVariables.apiUrl}/reset-password`,
          {
            email: forgot_password_email,
            password: this.password,
            password_confirmation: this.password_confirmation,
          }
        );
        this.toast.success(response.data.message);
        this.$router.push("/");
      } catch (error) {
        this.toast.warning(
          error.response?.data?.message ||
            "An error occurred. Please try again."
        );
      }
    },
  },
};
</script>

<style scoped>
.is-invalid {
  color: #ea5455 !important;
  font-size: 0.875em;
}
</style>
