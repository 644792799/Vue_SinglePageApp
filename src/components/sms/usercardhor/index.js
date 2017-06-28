import UserCardHor from './src/main';

/* istanbul ignore next */
UserCardHor.install = function(Vue) {
  Vue.component(UserCardHor.name, UserCardHor);
};

export default UserCardHor;