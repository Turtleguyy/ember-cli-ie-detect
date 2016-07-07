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
  ieDetect: Ember.inject.service(),
})
```

After injecting the service, it's pretty straight forward to use.

```js
this.get('ieDetect.version') >= 12     // Edge
this.get('ieDetect.version') < 12      // IE
this.get('ieDetect.version') === false // Not IE or Edge
```

Simple as that.

### Attributions

This addon is based on a [codepen](https://codepen.io/gapcode/pen/vEJNZN) by Mario Pizzinini.
