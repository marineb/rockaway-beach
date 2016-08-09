import Ember from 'ember';

export default Ember.Route.extend({
  headTags: [
    {
      type: 'meta',
      tagId: 'description',
      attrs: {
        rel: 'canonical',
        content: 'Custom title'
      }
    },
  ]
});
