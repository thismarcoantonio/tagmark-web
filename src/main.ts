import { createApp } from 'vue';
import '@fontsource/nunito';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
