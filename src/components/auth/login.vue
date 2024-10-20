<template>
  <div class="authentication-inner row">
    <!-- /Left Text -->
    <div class="d-none d-lg-flex col-lg-7 p-0">
      <div class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
        <img src="../../../src/assets/frontend/assets/img/illustrations/auth-login-illustration-dark.png"
          alt="auth-login-cover" class="img-fluid my-5 auth-illustration" />
        <img src="../../../src/assets/frontend/assets/img/illustrations/bg-shape-image-light.png" alt="auth-login-cover"
          class="platform-bg" />
      </div>
    </div>
    <!-- /Left Text -->

    <!-- Login -->
    <div class="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
      <div class="w-px-400 mx-auto">
        <!-- Logo -->
        <div class="app-brand mb-4">
          <a href="index.html" class="app-brand-link gap-2">
            <span class="app-brand-logo demo"></span>
          </a>
        </div>
        <!-- /Logo -->
        <h1 class="mb-1 fs-2 fw-bold">Welcome To Sync<span class="text-primary">Xss</span>👋</h1>
        <p class="mb-4">Please sign in to your account</p>

        <form id="formAuthentication" @submit.prevent="validateForm" class="mb-3">
          <!-- Email or Username -->
          <div class="mb-3">
            <label for="credential" class="form-label">Email or Username</label>
            <input type="text" class="form-control" :class="{ 'is-invalid': errors.credential }" id="credential"
              v-model="form.credential" @input="clearError('credential')" name="credential"
              placeholder="Enter your email or username" />
            <div class="invalid-feedback">{{ errors.credential }}</div>
          </div>

          <!-- Password with Toggle -->
          <div class="mb-3 form-password-toggle">
            <div class="d-flex justify-content-between">
              <label class="form-label" for="password">Password</label>
              <a href="auth-forgot-password-cover.html"><small>Forgot Password?</small></a>
            </div>
            <div class="input-group input-group-merge">
              <input :type="passwordFieldType" id="password" class="form-control"
                :class="{ 'is-invalid': errors.password }" v-model="form.password" @input="clearError('password')"
                name="password"
                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
              <span class="input-group-text cursor-pointer" @click="togglePasswordVisibility">
                <i :class="passwordFieldType === 'password' ? 'ti ti-eye-off' : 'ti ti-eye'"></i>
              </span>
            </div>
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>

          <!-- Remember Me -->
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="remember-me" />
              <label class="form-check-label" for="remember-me"> Remember Me </label>
            </div>
          </div>

          <button class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
        </form>

        <p class="text-center">
          <span>New on our platform?</span>
          <a href="/register"><span class="ms-2">Create an account</span></a>
        </p>

        <div class="divider my-4">
          <div class="divider-text">or</div>
        </div>

        <!-- Social Buttons -->
        <div class="d-flex justify-content-center">
          <a href="javascript:;" class="btn btn-icon btn-label-facebook me-3"><i
              class="tf-icons fa-brands fa-facebook-f fs-5"></i></a>
          <a href="javascript:;" class="btn btn-icon btn-label-google-plus me-3"><i
              class="tf-icons fa-brands fa-google fs-5"></i></a>
          <a href="javascript:;" class="btn btn-icon btn-label-twitter"><i
              class="tf-icons fa-brands fa-twitter fs-5"></i></a>
        </div>
      </div>
    </div>
    <!-- /Login -->
  </div>
</template>

<script>
import axios from 'axios';
import { inject } from "vue";

export default {
  setup() {
    const globalVariables = inject("globalVariables");
    return { globalVariables };
  },
  data() {
    return {
      form: {
        credential: '', 
        password: '',
      },
      errors: {
        credential: '', 
        password: ''
      },
      passwordFieldType: 'password'
    };
  },
  methods: {
    validateForm() {
      // Reset errors
      this.errors.credential = '';
      this.errors.password = '';

      if (!this.form.credential) {
        this.errors.credential = 'Please enter email address or username';
      }

      if (!this.form.password) {
        this.errors.password = 'Please enter password';
      }

      if (!this.errors.credential && !this.errors.password) {
        this.submitForm();
      }
    },
    clearError(field) {
      if (this.form[field]) {
        this.errors[field] = '';
      }
    },
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    async submitForm() {
  this.errors.credential = '';
  this.errors.password = '';

  let data = {
    credential: this.form.credential,
    password: this.form.password
  };

  try {
    const response = await axios.post(this.globalVariables.apiUrl + "/login", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    localStorage.setItem("token", response.data.token);
    this.$router.push("/home");
  } catch (error) {
    console.error("Error during login:", error);
    if (error.response) {
      if (error.response.status === 401) {
        // Password incorrect
        this.errors.password = error.response.data.error;
      } else if (error.response.status === 404) {
        this.errors.credential = error.response.data.error; 
      } else if (error.response.status === 400) {
        this.errors.credential = 'Invalid input';
      } else if (error.response.status === 401) {
        this.errors.password;
      } else if (error.response.status === 500) {
        this.errors.credential = 'Server error, please try again later';
      } else {
        console.error("Unexpected error:", error);
      }
    }
  }
}



  }
};
</script>

<style>
.invalid-feedback {
  display: inline-block !important;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.8125rem;
  color: var(--bs-form-invalid-color);
}
</style>
