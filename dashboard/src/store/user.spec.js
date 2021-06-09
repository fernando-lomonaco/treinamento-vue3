import useStore from '../hooks/useStore'
import {
  cleanCurrentUser,
  resetUserStore,
  setApiKey,
  setCurrentUser
} from './user'

describe('UserStore', () => {
  let store = useStore()

  beforeEach(() => {
    store = useStore()
  })

  afterEach(() => {
    resetUserStore()
  })

  it('should set current user', () => {
    setCurrentUser({ name: 'Nando' })
    expect(store.User.currentUser.name).toBe('Nando')
  })

  it('should set api_key on current user', () => {
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('should clean current user', () => {
    setCurrentUser({ name: 'Nando' })
    expect(store.User.currentUser.name).toBe('Nando')
    cleanCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})
