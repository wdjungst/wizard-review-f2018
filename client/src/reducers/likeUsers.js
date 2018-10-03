import axios from 'axios'

const LIKE_USERS = 'LIKE_USERS'

export const getLikeUsers = () => {
  return (dispatch) => {
    axios.get('/api/like_users')
    .then ( res => { 
      debugger
      dispatch({ type: LIKE_USERS, users: res.data }) 
    })
  }
}

export default ( state = [], action ) => {
  switch(action.type) {
    case LIKE_USERS:
      return action.users
    default:
      return state
  }
}
