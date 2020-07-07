import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './views/Home.vue'
import ButtonsPanel from './views/ButtonsPanel.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home
        },
        {
            name: 'ButtonsPanel',
            path: '/r/:id',
            component: ButtonsPanel,
            props: (route) => ({ id: route.params.id })
        },
		{
            name: 'NamedButtonsPanel',
            path: '/r/:id/:name',
            component: ButtonsPanel,
            props: (route) => ({ id: route.params.id })
        }
    ]
})

export default router