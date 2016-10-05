import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact-us', function() {
    this.route('billing');
    this.route('tech-support');
  });
  this.route('songs');
  this.route('reddit');
});

export default Router;
