import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  user_id:''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USER_ID: (state, user_id) => {
    state.user_id = user_id
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({'user_name':username.trim(),'user_password':password}).then(res=>{
        console.log(res)
        const { data } = res;
        commit('SET_TOKEN', data.logintoken)
        setToken(data.logintoken)
        resolve()
      }).catch(error => {
          reject(error)
      })
      // login({ user_name: user_name.trim()}).then(response => {
      //   const { data } = response;
      //   commit('SET_TOKEN', data.token)
      //   setToken(data.token)
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
      // commit('SET_TOKEN', 'sdfsd');
      // setToken('sdfsd');
      // resolve();
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // getInfo(state.token).then(response => {
      //   const { data } = response
      //   if (!data) {
      //     reject('Verification failed, please Login again.')
      //   }
      //   const { name, avatar, user_id } = data
    
      //   commit('SET_NAME', name)
      //   commit('SET_AVATAR', avatar)
      //   commit('SET_USER_ID', user_id)
      //   resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
        let data = {name:'editor',avatar:'asdasd',user_id:'asddf1234'}
        commit('SET_NAME', data.name)
        commit('SET_AVATAR', data.avatar)
        commit('SET_USER_ID', data.user_id)
        resolve(data)
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

