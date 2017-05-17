import Markdown from './src/main';

/* istanbul ignore next */
Markdown.install = function(Vue) {
  Vue.component(Markdown.name, Markdown);
};

export default Markdown;