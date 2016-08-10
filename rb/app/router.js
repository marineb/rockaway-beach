import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('beaches');
  this.route('surfing');
  this.route('clothing');
  this.route('eat-drink');
  this.route('shop');
  this.route('places-to-stay');
  this.route('other-activities');
});

export default Router;
