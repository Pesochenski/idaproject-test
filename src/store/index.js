import Vuex from 'vuex'

import products from '@/store/modules/products'

export const store = new Vuex.Store({
  modules: {
    products,
  },
})
