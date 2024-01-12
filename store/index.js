import lightImg from '~/assets/images/sushi/light-img.png'
import meatImg from '~/assets/images/sushi/meat-img.png'
import veganImg from '~/assets/images/sushi/vegan-img.png'
import ysayImg from '~/assets/images/sushi/ysay-img.png'
import batakonImg from '~/assets/images/sushi/batakon-img.png'
import calipsoImg from '~/assets/images/sushi/calipso-img.png'
import chiroImg from '~/assets/images/sushi/chiro-img.png'
import tayolImg from '~/assets/images/sushi/tayol-img.png'
import mishcuImg from '~/assets/images/sushi/mishcu-img.png'
import cavarImg from '~/assets/images/sushi/cavar-img.png'
import catanaImg from '~/assets/images/sushi/catana-img.png'
import chipuImg from '~/assets/images/sushi/chipu-img.png'

// state
export const state = () => ({
  sushiList: [
    {
      id: 1,
      name: 'ролл ясай',
      description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут',
      weight: '185',
      cost: '200',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: ysayImg
    },
    {
      id: 2,
      name: 'Мясные роллы',
      description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут',
      weight: '260',
      cost: '240',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: meatImg
    },
    {
      id: 3,
      name: 'ролл лайт',
      description: 'Листья салата, огурец, перец, помидор, сырный соус, чипсы',
      weight: '190',
      cost: '165',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: lightImg
    },
    {
      id: 4,
      name: 'ролл веган',
      description: 'Листья салата, авокадо, огурец, спаржа, сивид чука, кунжут',
      weight: '230',
      cost: '200',
      favorite: true,
      addToBascet: false,
      count: 0,
      img: veganImg
    },
    {
      id: 5,
      name: 'ролл чиро',
      description: 'Листья салата, копченая курица, болгарский перец, твердый сыр, чесночный соус',
      weight: '210',
      cost: '210',
      favorite: true,
      addToBascet: false,
      count: 0,
      img: chiroImg
    },
    {
      id: 6,
      name: 'ролл тайол',
      description: 'Огурец, помидор, сыр творожный, бекон, сыр маасдам',
      weight: '215',
      cost: '215',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: tayolImg
    },
    {
      id: 7,
      name: 'ролл Батакон',
      description: 'Огурец, сыр творожный, бекон',
      weight: '220',
      cost: '230',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: batakonImg
    },
    {
      id: 8,
      name: 'ролл калипсо',
      description: 'Сыр творожный, огурец, мидии, стружка тунца',
      weight: '195',
      cost: '185',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: calipsoImg
    },
    {
      id: 9,
      name: 'ролл кавьяр',
      description: 'Сыр творожный, помидор, огурец, мидии, майонез',
      weight: '240',
      cost: '200',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: cavarImg
    },
    {
      id: 10,
      name: 'ролл чипу',
      description: 'Сыр творожный, лосось, томаго, стружка тунца',
      weight: '190',
      cost: '180',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: chipuImg
    },
    {
      id: 11,
      name: 'ролл катана',
      description: 'Сыр творожный, краб, огурец, черный кунжут, лососевый тар-тар, спайси соус',
      weight: '240',
      cost: '250',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: catanaImg
    },
    {
      id: 12,
      name: 'ролл мишику',
      description: 'Угорь, краб, огурец, масаго, сыр творожный,  сырный соус, картофельные чипсы',
      weight: '210',
      cost: '260',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: mishcuImg
    },
    {
      id: 13,
      name: 'ролл ясай',
      description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут',
      weight: '185',
      cost: '200',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: ysayImg
    },
    {
      id: 14,
      name: 'Мясные роллы',
      description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут',
      weight: '260',
      cost: '240',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: meatImg
    },
    {
      id: 15,
      name: 'ролл лайт',
      description: 'Листья салата, огурец, перец, помидор, сырный соус, чипсы',
      weight: '190',
      cost: '165',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: lightImg
    },
    {
      id: 16,
      name: 'ролл веган',
      description: 'Листья салата, авокадо, огурец, спаржа, сивид чука, кунжут',
      weight: '230',
      cost: '200',
      favorite: false,
      addToBascet: false,
      count: 0,
      img: veganImg
    }
  ],
  sushiListBasket: [],
  isSidebarOpen: false,
  isMobileMenuOpen: false,
  isOrderingMenuOpen: true
})

// getters
export const getters = {
  getSushiList (state) {
    return state.sushiList
  },
  getSushiBusketList (state) {
    return state.sushiListBasket
  },
  getSidebarStatus (state) {
    return state.isSidebarOpen
  },
  getMobileMenuStatus (state) {
    return state.isMobileMenuOpen
  },
  getOrderingMenuStatus (state) {
    return state.isOrderingMenuOpen
  },
  getTotalCostInBasket (state) {
    return state.sushiListBasket.reduce((total, item) => {
      return total + item.count * item.cost
    }, 0)
  }
}

// actions
export const actions = {
  async fetchSushiList () {
    // git api to get users
  }
}

// mutations
export const mutations = {
  toggleFavoriteSushiById (state, id) {
    const sushiItem = state.sushiList.find((item) => item.id === id)

    if (sushiItem) {
      sushiItem.favorite = !sushiItem.favorite
    }
  },

  toggleSidebar (state) {
    state.isSidebarOpen = !state.isSidebarOpen
  },

  toggleMobileMenu (state) {
    state.isMobileMenuOpen = !state.isMobileMenuOpen
  },

  addSushiToBasketById (state, id) {
    const basketItem = state.sushiListBasket.find((item) => item.id === id)
    const sushiItem = state.sushiList.find((item) => item.id === id)

    if (sushiItem) {
      sushiItem.count += 1
      sushiItem.addToBascet = true
    }

    if (basketItem) {
      basketItem.count += 1
    } else {
      const sushiItem = state.sushiList.find((item) => item.id === id)

      if (sushiItem) {
        state.sushiListBasket.push({
          id: sushiItem.id,
          name: sushiItem.name,
          description: sushiItem.description,
          weight: sushiItem.weight,
          count: 1,
          img: sushiItem.img,
          cost: sushiItem.cost,
          favorite: sushiItem.favorite
        })
      }
    }
  },

  removeSushiFromBasketById (state, id) {
    const basketItemIndex = state.sushiListBasket.findIndex((item) => item.id === id)

    if (basketItemIndex !== -1) {
      const basketItem = state.sushiListBasket[basketItemIndex]

      if (basketItem.count > 1) {
        basketItem.count -= 1
      } else {
        state.sushiListBasket.splice(basketItemIndex, 1)
      }

      const sushiItem = state.sushiList.find((item) => item.id === id)
      if (sushiItem) {
        sushiItem.count -= 1

        if (sushiItem.count === 0) {
          sushiItem.addToBascet = false
        }
      }
    }
  },

  removeAllSushiFromBasketById (state, id) {
    const basketItemIndex = state.sushiListBasket.findIndex((item) => item.id === id)

    if (basketItemIndex !== -1) {
      state.sushiListBasket.splice(basketItemIndex, 1)
    }

    const sushiItem = state.sushiList.find((item) => item.id === id)
    if (sushiItem) {
      sushiItem.count = 0
      sushiItem.addToBascet = false
    }
  }
}
