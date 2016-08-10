import Ember from 'ember';

export default Ember.Route.extend({
  headTags: [{
      type: 'meta',
      tagId: 'meta-og-name',
      attrs: {
        property: 'og:name',
        content: 'Ice-T'
      }
    },
    {
      type: 'link',
      tagId: 'canonical-link',
      attrs: {
        rel: 'canonical',
        content: 'http://mydomain.org/'
      }
    }]
});
