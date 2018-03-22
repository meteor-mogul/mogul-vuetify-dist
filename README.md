# mogul-vuetify-dist

## What

Full build of [Vuetify](https://vuetifyjs.com/en/) as a Meteor package on Atmosphere.

Once you add this package to your app, Vuetify is provided through one JavaScript file (`vuetify.js`) that exports `Vuetify` and one CSS file (`vuetify.css`).

## Why

Use this package to get Vuetify functionality in Meteor Mogul apps with inclusion of the `vuetify.js` and `vuetify.css` code.  This allows you to develop Meteor Mogul apps without an Internet connection, which I find useful since my Internet connection is intermittent.

## How

From a shell:

```
$ meteor add meteormogul:vuetify-dist
````

or manually edit your `.meteor/packages` file to include `meteormogul:vuetify-dist`.

You will also need `Vue` version 2.  Assuming you're using the Meteor Mogul package of Vue (`meteormogul:vue-dist`), here's how to get Vue and Vuetify working in your app:

```js
import { Vue } from 'meteor/meteormogul:vue-dist';
import { Vuetify } from 'meteor/meteormogul:vuetify-dist';

Vue.use(Vuetify);

new Vue({
    el: '#app',
    data: {
      message: 'Hello, world!'
    }
});
```

The above code just demonstrates how to get Vuetify working; to make sense of it you'll need to have Vue and Meteor figured out already.

## Demo

To see this package in action, visit [www.meteormogul.com](http://www.meteormogul.com/).

For all the gory details about how to get Vue and Meteor working nicely together, clone and try out some of these Meteor Mogul apps:

- [mogul-helloworld](https://github.com/meteor-mogul/mogul-helloworld)
- [meteormogul.dev](https://github.com/meteor-mogul/meteormogul.dev)

## Discussion

This package an alternative to the standard recommendation (see below) to get Vuetify through a content delivery network that requires an Internet connection.

Once you add this package, you no longer need the following lines of code in your app that pull Vuetify from [unpkg](https://unpkg.com/#/about):

```html
<html>
<head>
  <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
</head>
<body>
  <script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>
</body>
</html>
```
