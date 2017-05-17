/* Automatic generated by './build/bin/build-entry.js' */

import Line from './line';
import Card from './card';
import BackToTop from './backtotop';
import Point from './languagepoint';
import Markdown from './markdown';


const components = [
  Line,
  Card,
  BackToTop,
  Point,
  Markdown
];

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;

  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  version: '1.1.6',
  install,
  Line,
  Card,
  BackToTop,
  Point,
  Markdown
};
