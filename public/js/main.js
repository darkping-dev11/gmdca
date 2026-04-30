import routes from './routes.js';

export const store = Vue.reactive({
    dark: JSON.parse(localStorage.getItem('dark')) || false,

    toggleDark() {
        this.dark = !this.dark;
        localStorage.setItem('dark', JSON.stringify(this.dark));
    }
});

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    let title = "TPL | The Piss List";

    if (to.path === '/') title = "Canada Demon List";
    else if (to.path === '/leaderboard') title = "Leaderboard";
    else if (to.path === '/roulette') title = "Roulette";
    else if (to.path === '/admin') title = "Admin Panel";
    else if (to.path === '/manage') title = "Management Panel";
    else if (to.path === '/packs') title = "Packs";

    document.title = title;
    next();
});

const app = Vue.createApp({
    data: () => ({ store })
});

app.use(router);
app.mount('#app');
