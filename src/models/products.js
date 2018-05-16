// products.js
// Created by fanyingmao 五月/15/2018
//
export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, {payload: id}) {
      return state.filter(item => item.id !== id);
    }
  }
}
