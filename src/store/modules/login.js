import { hasToken, getToken } from '../../helpers/oauth/token'

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';




const initialState = {
  isLoggedIn: !!hasToken(),
  token: getToken(),
  error: null
}




const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
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









const loginRequest = () => ({
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

// export const login = (config) => (dispatch) => {
//   dispatch(loginRequest())
//   return authorize(config).then(
//     (token) => dispatch(loginSuccess(token)),
//     (error) => dispatch(loginFailure(error))
//   )
// }

export const logout = () => ({
  type: LOGOUT
})

export default auth
