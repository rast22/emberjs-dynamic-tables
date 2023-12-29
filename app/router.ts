import EmberRouter from '@ember/routing/router';
import config from 'emberjs-dynamic-tables/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' }); // Explicitly define the main route (optional if using the default 'index' route)

  this.route('index', { path: '*' }); // Wildcard route to catch all undefined routes
});
