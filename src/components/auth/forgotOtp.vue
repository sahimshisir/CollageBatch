<template>
    <div class="authentication-wrapper authentication-cover authentication-bg">
        <div class="authentication-inner row">
            <div class="d-none d-lg-flex col-lg-7 p-0">
                <div class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
                    <img src="../../assets/frontend/assets/img/illustrations/auth-two-step-illustration-light.png"
                        alt="auth-two-steps-cover" class="img-fluid my-5 auth-illustration" />
                </div>
            </div>

            <div class="d-flex col-12 col-lg-5 align-items-center p-4 p-sm-5">
                <div class="w-px-400 mx-auto">
                    <h4 class="mb-1">Email Verification 💬</h4>
                    <p class="text-start mb-4">
                        We sent a verification code to your mobile. Enter the code below.
                        <span class="fw-medium d-block mt-2">{{ email }}</span>
                    </p>
                    <p class="mb-0 fw-medium">Type your 6-digit security code</p>
                    <form @submit.prevent="verifyOtp">
                        <div class="mb-3">
                            <div
                                class="auth-input-wrapper d-flex align-items-center justify-content-sm-between numeral-mask-wrapper">
                                <input v-for="(digit, index) in 6" :key="index" type="tel"
                                    class="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                                    maxlength="1" v-model="otpDigits[index]" @input="focusNextInput(index)" required
                                    :ref="`otpInput${index}`" />
                            </div>
                        </div>
                        <button class="btn btn-primary d-grid w-100 mb-3" :disabled="isLoading">
                            Verify my account
                        </button>
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
import axios from 'axios';
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
            otpDigits: Array(6).fill(''), // Six empty strings for each OTP input
            email: localStorage.getItem("registeredEmail") || 'sahim@gmail.com', // Use stored email
            isLoading: false,
        };
    },
    computed: {
        otp() {
            // Combine otpDigits into a single OTP string
            return this.otpDigits.join('');
        },
    },
    methods: {
        async verifyOtp() {
            this.isLoading = true;
            const payload = {
                email: this.email,
                otp: parseInt(this.otp), // Ensure OTP is sent as an integer
            };
            console.log('Sending OTP payload:', payload); // Log payload for debugging
            try {
                const response = await axios.post(
                    `${this.globalVariables.apiUrl}/verify-otp`, payload
                );
                console.log('Verification response:', response.data); // Log the response
                alert(response.data.message);
                this.$router.push('/reset-password'); // Navigate to reset password page on success
            } catch (error) {
                console.error('Error during OTP verification:', error); // Log the error
                if (error.response) {
                    console.error('Server response data:', error.response.data); // Log response data
                    alert(error.response.data.message); // Show server error message
                } else {
                    alert('An unexpected error occurred: ' + error.message);
                }
            } finally {
                this.isLoading = false;
            }
        }


        ,
        async resendOtp() {
            this.isLoading = true; // Set loading state
            try {
                const response = await axios.post(
                    `${this.globalVariables.apiUrl}/forgot-password`, { email: this.email }
                );
                console.log('Resend OTP response:', response.data); // Log response for debugging
                alert('A new OTP has been sent to your mobile.');
                this.otpDigits = Array(6).fill(''); // Clear the current OTP input
            } catch (error) {
                console.error('Error during OTP resend:', error); // Log the error
                if (error.response) {
                    console.error('Server response data:', error.response.data); // Log response data
                    alert(error.response.data.message); // Show server error message
                } else {
                    alert('An unexpected error occurred: ' + error.message);
                }
            } finally {
                this.isLoading = false; // Reset loading state
            }
        },
        focusNextInput(index) {
            // Move to the next input field if the current one is filled
            if (this.otpDigits[index].length === 1 && index < this.otpDigits.length - 1) {
                this.$refs[`otpInput${index + 1}`].focus(); // Focus next input
            } else if (this.otpDigits[index].length === 0 && index > 0) {
                this.$refs[`otpInput${index - 1}`].focus(); // Focus previous input if current is cleared
            }
        },
    },
};
</script>

<style scoped>
.auth-input {
    width: 50px;
    /* Adjust width as needed */
}
</style>
