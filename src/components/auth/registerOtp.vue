<template>
  <div class="authentication-wrapper authentication-cover authentication-bg">
    <div class="authentication-inner row">
      <!-- Left Image and Background -->
      <div class="d-none d-lg-flex col-lg-7 p-0">
        <div class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
          <img src="../../assets/frontend/assets/img/illustrations/auth-two-step-illustration-light.png" alt="auth-two-steps-cover" class="img-fluid my-5 auth-illustration" />
          <img src="../../assets/frontend/assets/img/illustrations/bg-shape-image-light.png" alt="background-shape" class="platform-bg" />
        </div>
      </div>

      <!-- Right: Two Steps Verification Form -->
      <div class="d-flex col-12 col-lg-5 align-items-center p-4 p-sm-5">
        <div class="w-px-400 mx-auto">
          <div class="app-brand mb-4">
            <a href="#" class="app-brand-link gap-2">
              <!-- SVG Logo (Optional) -->
            </a>
          </div>

          <h4 class="mb-1">Email Verification 💬</h4>
          <p class="text-start mb-4">
            We sent a verification code to your email.
            <span class="fw-medium d-block mt-2">******@gmail.com</span>
          </p>
          <p class="mb-0 fw-medium">Type your 6-digit security code</p>
          
          <form id="twoStepsForm" @submit.prevent="submitForm">
            <div class="mb-3">
              <div class="auth-input-wrapper d-flex align-items-center justify-content-sm-between numeral-mask-wrapper">
                <input
                  v-for="(digit, index) in otp"
                  :key="index"
                  type="text"
                  maxlength="1"
                  class="form-control auth-input h-px-50 text-center mx-1 my-2"
                  v-model="otp[index]"
                  ref="otpInput"
                  @input="moveFocus($event, index)"
                />
              </div>
              <input type="hidden" name="otp" :value="otp.join('')" />
            </div>
            
            <button class="btn btn-primary d-grid w-100 mb-3" :disabled="isLoading">Verify my account</button>
            <div class="text-center">
              Didn't get the code?
              <a href="javascript:void(0);" @click="resendOtp"> Resend </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { inject } from "vue";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const globalVariables = inject("globalVariables");
    const toast = useToast();
    return { globalVariables, toast };
  },
  data() {
    return {
      otp: Array(6).fill(""), // Initialize an array to store OTP digits
      isLoading: false,
      userEmail: "ruhebalaj@mailinator.com", // Set a default email, update if dynamic email required
    };
  },
  methods: {
    async submitForm() {
      this.isLoading = true;
      const otpValue = this.otp.join(""); // Combine OTP digits
      const email = this.userEmail.trim(); // Trim email to avoid whitespace issues

      console.log("Submitting OTP Verification with payload:", { otp: otpValue, email });

      try {
        const response = await axios.post(
          `${this.globalVariables.apiUrl}/verify-otp`,
          { otp: otpValue, email }, // Send email in the payload
          { headers: { "Content-Type": "application/json" } }
        );

        this.toast.success(response.data.message, { position: "top-right", timeout: 3000 });
        this.$router.push("/"); // Redirect after successful verification
      } catch (error) {
        console.error("Error during OTP verification:", error);

        if (error.response && error.response.data) {
          this.toast.error(error.response.data.message || "Verification failed", {
            position: "top-right",
            timeout: 5000,
          });
        } else {
          this.toast.error("Something went wrong. Please try again.", {
            position: "top-right",
            timeout: 3000,
          });
        }
      } finally {
        this.isLoading = false;
      }
    },

    async resendOtp() {
      try {
        const response = await axios.post(
          `${this.globalVariables.apiUrl}/resend-otp`,
          { email: this.userEmail.trim() }, // Trim email
          { headers: { "Content-Type": "application/json" } }
        );

        this.toast.success(response.data.message, { position: "top-right", timeout: 3000 });
      } catch (error) {
        console.error("Error during OTP resend:", error);
        this.toast.error("Failed to resend OTP. Please try again.", {
          position: "top-right",
          timeout: 3000,
        });
      }
    },

    moveFocus(event, index) {
      if (event.target.value.length === 1 && index < 5) {
        this.$refs.otpInput[index + 1]?.focus();
      } else if (event.target.value.length === 0 && index > 0) {
        this.$refs.otpInput[index - 1]?.focus();
      }
    },
  },
};
</script>

<style scoped>
.auth-input {
  width: 50px;
}
</style>
