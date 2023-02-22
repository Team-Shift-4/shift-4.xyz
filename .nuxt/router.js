import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f0edb92 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _2d539903 = () => interopDefault(import('..\\pages\\portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _12526ea0 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _5ef14976 = () => interopDefault(import('..\\pages\\wiki.vue' /* webpackChunkName: "pages/wiki" */))
const _92421de6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1f0edb92,
    name: "blog"
  }, {
    path: "/portfolio",
    component: _2d539903,
    name: "portfolio"
  }, {
    path: "/service",
    component: _12526ea0,
    name: "service"
  }, {
    path: "/wiki",
    component: _5ef14976,
    name: "wiki"
  }, {
    path: "/",
    component: _92421de6,
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
