import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Importa la configuración de Auth0
import { domain, clientId } from '../auth_config.json';

// Importa el plugin de Auth0 aquí
import { Auth0Plugin } from './auth';

// Instala el plugin de autenticación aquí
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

