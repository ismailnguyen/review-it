import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './views/Home.vue'
import Review from './views/Review.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home
        },
        {
            name: 'ReviewPage',
            path: '/r/:id',
            component: Review,
            props: (route) => ({ id: route.params.id })
        },
		{
            name: 'NamedReviewPage',
            path: '/r/:id/:name',
            component: Review,
            props: (route) => ({ id: route.params.id })
        }
    ]
})

export default router