import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/styles.css'

import PrimeVue from 'primevue/config';
import Image from 'primevue/image';

/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

createApp(App)
    .use(router)
    .use(PrimeVue)
    .component('Image', Image)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
