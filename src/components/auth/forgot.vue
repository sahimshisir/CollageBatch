<template>
    <loader v-if="isLoading"></loader>
    <div class="authentication-wrapper authentication-cover authentication-bg">
      <div class="authentication-inner row">
        <!-- /Left Text -->
        <div class="d-none d-lg-flex col-lg-7 p-0">
          <div
            class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center"
          >
            <img
              src="../../assets/frontend/assets/img/illustrations/auth-forgot-password-illustration-light.png"
              alt="auth-forgot-password-cover"
              class="img-fluid my-5 auth-illustration"
              data-app-light-img="illustrations/auth-forgot-password-illustration-light.png"
              data-app-dark-img="illustrations/auth-forgot-password-illustration-dark.png"
            />
            <img
              src="../../assets/frontend/assets/img/illustrations/bg-shape-image-light.png"
              alt="auth-forgot-password-cover"
              class="platform-bg"
              data-app-light-img="illustrations/bg-shape-image-light.png"
              data-app-dark-img="illustrations/bg-shape-image-dark.png"
            />
          </div>
        </div>
        <!-- /Left Text -->
  
        <!-- Forgot Password -->
        <div class="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
          <div class="w-px-400 mx-auto">
            <!-- Logo -->
            <div class="app-brand mb-4">
              <a class="app-brand-link gap-2">
                <span class="app-brand-logo demo">
                  <svg
                    width="32"
                    height="22"
                    viewBox="0 0 32 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                      fill="#7367F0"
                    />
                    <path
                      opacity="0.06"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                      fill="#161616"
                    />
                    <path
                      opacity="0.06"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                      fill="#161616"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                      fill="#7367F0"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <!-- /Logo -->
            <h3 class="mb-1">Forgot Password? 🔒</h3>
            <p class="mb-4">
              Enter your email and we'll send you instructions to reset your
              password
            </p>
            <form @submit.prevent="sendOtp" id="formAuthentication" class="mb-3">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  placeholder="Enter your email"
                  autofocus
                  :class="{ 'is-invalid': emailError }"
                  @input="handleInput"
                  required
                />
                <div v-if="emailError" class="text-danger">
                  {{ emailErrorMessage }}
                </div>
              </div>
              <button type="submit" class="btn btn-primary d-grid w-100">
                Send OTP
              </button>
            </form>
            <div class="text-center">
              <a href="/" class="d-flex align-items-center justify-content-center">
                <i class="ti ti-chevron-left scaleX-n1-rtl"></i>
                Back to login
              </a>
            </div>
          </div>
        </div>
        <!-- /Forgot Password -->
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
        email: "",
        isLoading: false,
        emailError: false,
        emailErrorMessage: "",
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
    methods: {
      handleInput() {
        // Reset email error state when user types
        this.emailError = false;
        this.emailErrorMessage = "";
      },
      async sendOtp() {
        this.isLoading = true;
        this.email = this.email.trim();
  
        // Email validation regex (basic check)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        try {
          if (!this.email) {
            this.emailError = true;
            this.emailErrorMessage = "Email is required.";
            return;
          }
  
          if (!emailRegex.test(this.email)) {
            this.emailError = true;
            this.emailErrorMessage = "Please enter a valid email address.";
            return;
          }
  
          // Send OTP request
          const response = await axios.post(
            `${this.globalVariables.apiUrl}/forgot-password`,
            { email: this.email }
          );
  
          // Save email and expiration time (5 minutes from now) to localStorage
          const expirationTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes in milliseconds
          localStorage.setItem("forgot_password_email", this.email);
          localStorage.setItem("forgot_password_email_expiry", expirationTime);
  
          // Notify user and redirect
          this.toast.success(response.data.message);
          this.$router.push({ path: "/forgotOtp", query: { email: this.email } });
        } catch (error) {
          if (error.response) {
            this.toast.error(error.response.data.message);
          } else {
            this.toast.error("An error occurred. Please try again.");
          }
        } finally {
          this.isLoading = false;
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