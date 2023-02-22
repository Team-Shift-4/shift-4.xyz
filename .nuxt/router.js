import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d223e9c = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _4a021f68 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _1464b756 = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _6d04ac80 = () => interopDefault(import('../pages/wiki.vue' /* webpackChunkName: "pages/wiki" */))
const _469b1c1c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _2d223e9c,
    name: "blog"
  }, {
    path: "/portfolio",
    component: _4a021f68,
    name: "portfolio"
  }, {
    path: "/service",
    component: _1464b756,
    name: "service"
  }, {
    path: "/wiki",
    component: _6d04ac80,
    name: "wiki"
  }, {
    path: "/",
    component: _469b1c1c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
