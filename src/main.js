import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import "./style.css";
import App from "./App.vue";
import "./index.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);

/* add icons to the library */
library.add(faUserSecret, faChevronDown);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(MotionPlugin);
app.mount("#app");
