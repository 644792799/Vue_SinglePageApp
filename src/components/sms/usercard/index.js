import UserCard from './src/main';

/* istanbul ignore next */
UserCard.install = function(Vue) {
  Vue.component(UserCard.name, UserCard);
};

export default UserCard;