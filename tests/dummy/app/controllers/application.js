import Ember from 'ember'

export default Ember.Controller.extend({
  ieDetect: Ember.inject.service(),

  // Can't use Ember.computed.lt because in js, `false < 12 == true`
  isIE: Ember.computed('ieDetect.version', function() {
    let version = this.get('ieDetect.version')
    return !!version ? version < 12 : false
  }),

  isEdge: Ember.computed.gte('ieDetect.version', 12),
  isNiether: Ember.computed.not('ieDetect.version'),
})
