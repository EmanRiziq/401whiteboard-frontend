// News State
export const newsState = [];

// User State
const userInfo = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : {};
const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';

export const initialState = {
  user: userInfo,
  token: token,
  errorMessage: null,
  isAuth: token ? true : false,
  loading: false
};