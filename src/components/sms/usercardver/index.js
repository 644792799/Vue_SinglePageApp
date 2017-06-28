import UserCardVer from './src/main';

/* istanbul ignore next */
UserCardVer.install = function(Vue) {
  Vue.component(UserCardVer.name, UserCardVer);
};

export default UserCardVer;