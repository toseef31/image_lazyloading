import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload';


import 'bootstrap/dist/css/bootstrap.css';


import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone);
library.add(faAngleDoubleRight);

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(VueLazyload)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')


