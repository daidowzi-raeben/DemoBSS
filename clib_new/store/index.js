// store/index.js
import { createStore } from 'vuex'
import common from './modules/common'

// store modules
import L01M01S00 from './modules/L01M01S00'

export default createStore({
  namespaced: true,
  modules: {
    foo: {
      // namespaced: true,
      modules: {
        common: common,
        L01M01S00: L01M01S00
      }
    }
  }
})
