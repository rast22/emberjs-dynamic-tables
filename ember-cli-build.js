'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },
    'ember-prism': {
      plugins: ['normalize-plugins'],
    },
    postcssOptions: {
      config: 'postcss.config.js',
      compile: {
        enabled: true,
        plugins: [
          require('tailwindcss')('./app/styles/tailwind.config.js'),
          require('autoprefixer'),
        ],
      },
    },
  });
  return app.toTree();
};
