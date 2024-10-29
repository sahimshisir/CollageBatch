import { createApp, nextTick } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import { globalVariables } from './globalVariables';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import axios from 'axios';

const options = { 
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 1,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false,
    toastClassName: "toserBgClass",
};

// Function to get a specific cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Create the Vue app instance
const app = createApp(App);

// Check for the remember_token cookie and use it for authentication if found
const rememberToken = getCookie('remember_token');
if (rememberToken) {
    // Set token as default Authorization header
    axios.defaults.headers.common['Authorization'] = `Bearer ${rememberToken}`;

    // Verify the token by making an API request
    axios.get(`${globalVariables.apiUrl}/check-auth`)
        .then(response => {
            if (response.data.user) {
                // Store the token in localStorage for continued session management
                localStorage.setItem('token', rememberToken);

                // Redirect to home after mounting the app
                nextTick(() => {
                    router.push('/home');
                });
            }
        })
        .catch(() => {
            console.error("Token verification failed");
        });
} 
// else {
//     console.warn("Remember token not found in cookies.");
// }

// Set up Vue plugins
app.use(router);
app.use(Toast, options); 
app.provide('globalVariables', globalVariables);

// Mount the Vue app
app.mount('#app');