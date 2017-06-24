import SimpleList from './src/main';

/* istanbul ignore next */
SimpleList.install = function(Vue) {
  Vue.component(SimpleList.name, SimpleList);
};

export default SimpleList;