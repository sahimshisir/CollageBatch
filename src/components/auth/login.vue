<template>
  <div class="authentication-inner row">
    <!-- /Left Text -->
    <div class="d-none d-lg-flex col-lg-7 p-0">
      <div class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
        <img
          src="../../../src/assets/frontend/assets/img/illustrations/auth-login-illustration-dark.png"
          alt="auth-login-cover"
          class="img-fluid my-5 auth-illustration"
          data-app-light-img="illustrations/auth-login-illustration-dark.png"
          data-app-dark-img="../../../src/assets/frontend/assets/img/illustrations/auth-login-illustration-dark.png" />

        <img
          src="../../../src/assets/frontend/assets/img/illustrations/bg-shape-image-light.png"
          alt="auth-login-cover"
          class="platform-bg"
          data-app-light-img="illustrations/bg-shape-image-light.png"
          data-app-dark-img="illustrations/bg-shape-image-dark.png" />
      </div>
    </div>
    <!-- /Left Text -->

    <!-- Login -->
    <div class="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
      <div class="w-px-400 mx-auto">
        <!-- Logo -->
        <div class="app-brand mb-4">
          <a href="index.html" class="app-brand-link gap-2">
            <span class="app-brand-logo demo">
              <!-- SVG Logo Here -->
            </span>
          </a>
        </div>
        <!-- /Logo -->
        <h3 class="mb-1">Welcome to Vuexy! 👋</h3>
        <p class="mb-4">Please sign-in to your account and start the adventure</p>

        <form id="formAuthentication" @submit.prevent="validateForm" class="mb-3">
          <!-- Email or Username -->
          <div class="mb-3">
            <label for="email" class="form-label">Email or Username</label>
            <input
              type="text"
              class="form-control"
              :class="{'is-invalid': errors.emailUsername}"
              id="email"
              v-model="form.emailUsername"
              @input="clearError('emailUsername')"
              name="email-username"
              placeholder="Enter your email or username"
              autofocus />
            <div class="invalid-feedback">{{ errors.emailUsername }}</div>
          </div>

          <!-- Password with Toggle -->
          <div class="mb-3 form-password-toggle">
    <div class="d-flex justify-content-between">
      <label class="form-label" for="password">Password</label>
      <a href="auth-forgot-password-cover.html">
        <small>Forgot Password?</small>
      </a>
    </div>
    <div class="input-group input-group-merge">
      <input
        :type="passwordFieldType"
        id="password"
        class="form-control"
        :class="{'is-invalid': errors.password}"
        v-model="form.password"
        @input="clearError('password')"
        name="password"
        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
        aria-describedby="password" />
      <span class="input-group-text cursor-pointer" @click="togglePasswordVisibility">
        <i :class="passwordFieldType === 'password' ? 'ti ti-eye-off' : 'ti ti-eye'"></i>
      </span>
    </div>
    <div class="invalid-feedback">{{ errors.password }}</div> <!-- Ensure this is included -->
  </div>

          <!-- Remember Me -->
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="remember-me" />
              <label class="form-check-label" for="remember-me"> Remember Me </label>
            </div>
          </div>

          <button class="btn btn-primary d-grid w-100">Sign in</button>
        </form>

        <p class="text-center">
          <span>New on our platform?</span>
          <a href="/register"><span>Create an account</span></a>
        </p>

        <div class="divider my-4">
          <div class="divider-text">or</div>
        </div>

        <!-- Social Buttons -->
        <div class="d-flex justify-content-center">
          <a href="javascript:;" class="btn btn-icon btn-label-facebook me-3">
            <i class="tf-icons fa-brands fa-facebook-f fs-5"></i>
          </a>
          <a href="javascript:;" class="btn btn-icon btn-label-google-plus me-3">
            <i class="tf-icons fa-brands fa-google fs-5"></i>
          </a>
          <a href="javascript:;" class="btn btn-icon btn-label-twitter">
            <i class="tf-icons fa-brands fa-twitter fs-5"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- /Login -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        emailUsername: '',
        password: '',
      },
      errors: {
        emailUsername: '',
        password: ''
      },
      passwordFieldType: 'password'  // To control password visibility
    };
  },
  methods: {
    validateForm() {
      // Reset errors
      this.errors.emailUsername = '';
      this.errors.password = '';

      // Validate email or username
      if (!this.form.emailUsername) {
        this.errors.emailUsername = 'Please enter email address or username';
      }

      // Validate password
      if (!this.form.password) {
        this.errors.password = 'Please enter password'; // This should trigger
      }

      // If no errors, submit the form
      if (!this.errors.emailUsername && !this.errors.password) {
        this.submitForm();
      }
    },
    clearError(field) {
      // Clears the error when the input is valid
      if (this.form[field]) {
        this.errors[field] = '';
      }
    },
    togglePasswordVisibility() {
      // Toggles password visibility
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    submitForm() {
      console.log('Form submitted successfully', this.form);
    }
  }
};
</script>
<style>
.invalid-feedback {
    display:inline-block !important;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.8125rem;
    color: var(--bs-form-invalid-color);
}
</style>