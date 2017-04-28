import Point from './src/main';

/* istanbul ignore next */
Point.install = function(Vue) {
  Vue.component(Point.name, Point);
};

export default Point;