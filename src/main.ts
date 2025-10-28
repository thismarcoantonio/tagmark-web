import { createApp } from 'vue';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import './style.css';
import router from '@/router';
import pinia from '@/stores';
import { setupFirebase } from '@/services';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(pinia);

setupFirebase();

app.mount('#app');
