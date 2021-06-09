import { reactive } from 'vue'

const userInitialState = {
  currentUser: {}
}

let state = reactive(userInitialState)

export default state

export function resetUserStore () {
  state = reactive(userInitialState)
}

// limpart usuario
export function cleanCurrentUser () {
  state.currentUser = {}
}

// alterar usuario atual
export function setCurrentUser (user) {
  state.currentUser = user
}

// alterar apiKey
export function setApiKey (apiKey) {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}
