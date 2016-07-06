# ember-cli-ie-detect

This ember addon provides a simple way to detect the IE or Edge browsers and their version.

## Installation

```
ember install ember-cli-ie-detect
```

## Usage

The method is available as a service, injected into files.

```js
export default Ember.Controller.extend({
  ieVersion: Ember.inject.service('ieDetect'),
})
```

After injecting the service, it's pretty straight forward to use.

```js
this.get('ieVersion') >= 12     // Edge
this.get('ieVersion') < 12      // IE
this.get('ieVersion') === false // Not IE or Edge
```

Simple as that.
