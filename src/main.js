// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('~/assets/styles/tailwind.css')
require('~/assets/styles/style.scss')
require('~/assets/styles/tailwind-utils.css')
if (process.env.NODE_ENV !== 'production') { require('~/assets/styles/revenge.css') }
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'preload',
    href: '/assets/fonts/CartographCF-Bold.woff2',
    as: 'font',
    crossOrigin: 'anonymous'
  })
  head.link.push({
    rel: 'preload',
    href: '/assets/fonts/marcher-book.woff2',
    as: 'font',
    crossOrigin: 'anonymous'
  })
  head.link.push({
    rel: 'preload',
    href: '/assets/fonts/marcher-bookitalic.woff2',
    as: 'font',
    crossOrigin: 'anonymous'
  })
}
