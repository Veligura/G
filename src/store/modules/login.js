import { hasToken, getToken } from '../../helpers/oauth/token'

export const LOGIN_REQUEST = 'LOGIN/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN/LOGIN_FAILURE';
export const LOGOUT = 'LOGIN/LOGOUT';




const initialState = {
  isLoggedIn: !!hasToken(),
  token: getToken(),
  error: null
}




const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action)
      return Object.assign({}, state, {
        isLoggedIn: true,
        token: action.token,
        error: null
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLoggedIn: false,
        token: null,
        error: action.error
      })
    case LOGOUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
        token: null,
        error: null
      })
    default:
      return state
  }
}









export const loginRequest = () => ({
  type: LOGIN_REQUEST
})

 const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  token
})

 const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error
})



export const logout = () => ({
  type: LOGOUT
})

export default auth
