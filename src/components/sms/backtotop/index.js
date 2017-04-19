import BackToTop from './src/main';

/* istanbul ignore next */
BackToTop.install = function(Vue) {
  Vue.component(BackToTop.name, BackToTop);
};

export default BackToTop;