import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vue2Filters from 'vue2-filters'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueLocalStorage from 'vue-localstorage'
import LocationIcon from './views/location/LocationIcon.vue'

// create a constructor from a Vue component
const LocationIconConstructor = Vue.extend(LocationIcon)

export const getColoredIconUrl = (fillColor, strokeColor) => {
  // create a Vue element with required props
  const iconComponent = new LocationIconConstructor({ propsData: { fillColor, strokeColor } })
  // mount the component shadow DOM
  iconComponent.$mount()

  // generate an html string from an element
  const iconString = new XMLSerializer().serializeToString(iconComponent.$el)
  // finally, generate a data url from a string
  return 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(iconString)
}

Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true // created computed members from your variable declarations
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBW-j0osdanV5StvFAiCyCJqmgAORHgyE4',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    /// / If you want to set the version, you can do so:
    // v: '3.26',
  },

  /// / If you intend to programmatically custom event listener code
  /// / (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  /// / instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  /// / you might need to turn this on.
  // autobindAllEvents: false,

  /// / If you want to manually install components, e.g.
  /// / import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  /// / Vue.component('GmapMarker', GmapMarker)
  /// / then set installComponents to 'false'.
  /// / If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
})

Vue.use(Vue2Filters)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
