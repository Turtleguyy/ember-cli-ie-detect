import Ember from 'ember'

export default Ember.Service.extend({
  version: Ember.computed(function() {
    let agent = window.navigator.userAgent

    // IE 10 or older, return version number
    let msie = agent.indexOf('MSIE ')
    if (msie > 0) {
      return parseInt(agent.substring(msie + 5, agent.indexOf('.', msie)), 10)
    }

    // IE 11, return version number
    let trident = agent.indexOf('Trident/')
    if (trident > 0) {
      let rv = agent.indexOf('rv:')
      return parseInt(agent.substring(rv + 3, agent.indexOf('.', rv)), 10)
    }

    // Edge (IE 12+), return version number
    let edge = agent.indexOf('Edge/')
    if (edge > 0) {
      return parseInt(agent.substring(edge + 5, agent.indexOf('.', edge)), 10)
    }

    // Not IE or Edge browser, return false
    return false
  }),
})
