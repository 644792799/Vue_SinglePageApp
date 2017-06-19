import MarkdownPreview from './src/main';

/* istanbul ignore next */
MarkdownPreview.install = function(Vue) {
  Vue.component(MarkdownPreview.name, MarkdownPreview);
};

export default MarkdownPreview;