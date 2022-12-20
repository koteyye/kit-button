import { createApp } from 'vue'
import App from './App.vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import './assets/styles/main.scss';

library.add(fas)
const init = async () => {
    const app = createApp(App)
        .component('fa', FontAwesomeIcon)
    app.mount('#app')

}



init()
