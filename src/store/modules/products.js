import { cardFilterEnum } from '@/enums/cardFilterEnum'

export default {
  namespaced: true,

  state () {
    return {
      products: [
        {
          title: 'best 1',
          description: 'test description',
          image: '/img/default-picture.png',
          price: '10000',
        },
        {
          title: 'dest 2',
          description: 'test description',
          image: '/img/default-picture.png',
          price: '20000',
        },
        {
          title: 'aest 3',
          description: 'test description',
          image: '/img/default-picture.png',
          price: '60000',
        },
        {
          title: 'eest 4',
          description: 'test description',
          image: '/img/default-picture.png',
          price: '30000',
        },
        {
          title: 'test 5',
          description: 'test description',
          image: '/img/default-picture.png',
          price: '40000',
        },
        {
          title: 'gest 6',
          description: 'test description',
          image: '/img/default-picture.png',
          price: '80000',
        },
        {
          title: 'sest 7',
          description: 'test description',
          image: '/img/default-picture.png',
          price: '50000',
        },
        {
          title: 'fest 8',
          description: 'test description',
          image: '/img/default-picture.png',
          price: '70000',
        },
        {
          title: 'hest 9',
          description: 'test description',
          image: '/img/default-picture.png',
          price: '90000',
        },
      ],
      activeFilter: cardFilterEnum.DEFAULT,
    }
  },

  getters: {
    products: (state) => state.products,
    activeFilter: (state) => state.activeFilter,
  },

  mutations: {
    setActiveFilter: (state, val) => {
      state.activeFilter = val
    },
    addProduct: (state, val) => {
      if (!state.products.some((item) => item.title.toLowerCase() === val.title.toLowerCase())) {
        state.products.push(JSON.parse(JSON.stringify(val)))
      }
    },
    deleteProduct: (state, val) => {
      state.products = state.products.filter((item) => item.title.toLowerCase() !== val.title.toLowerCase())
    },
  },
}
