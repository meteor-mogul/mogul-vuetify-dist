# mogul-vuetify-dist
Full build of vuetify as a meteor package.

## What

This provides [Vuetify](https://vuetifyjs.com/en/) as a Meteor package on Atmosphere.

Once you add this package to your app, Vuetify is provided through one JavaScript file (`vuetify.js`) that exports `Vuetify` and one CSS file (`vuetify.css`).

## Why

Use this package to get Vuetify functionality in Meteor Mogul apps with local delivery of the `vuetify.js` and `vuetify.css` code.  This allows you develop Meteor Mogul apps without an Internet connection.

This is an alternative to the standard Vuetify recommendation to rely on a content delivery network that requires an Internet connection.  These lines of code also provide Vuetify functionality but require an active Internet connection:

```
<html>
<head>
  <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
</head>
<body>
  <script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>
</body>
</html>
```

Once you add this package to your app, you no longer need the above lines of code in your app.

## How

From a shell, `$ meteor add meteormogul:vuetify-dist` or manually edit your `.meteor/packages` file to include `meteormogul:vuetify-dist`.

You will also need `Vue` version 2.  You can use the Meteor Mogul package of Vue (`meteormogul:vue-dist`) or you can use the `npm` package of Vue.

If you use `meteormogul:vue-dist`, here's how to get Vue and Vuetify working in your app:

```
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

The above code just demonstrates how to get Vuetify working, and assumes you already have Vue and Meteor figured out.

To see this package in action, including all the gory details about how to get Vue and Meteor working nicely together, clone and try out some of these Meteor Mogul apps:

- [mogul-helloworld](https://github.com/meteor-mogul/mogul-helloworld)
- [mogul-button](https://github.com/meteor-mogul/mogul-button)
- [vue-intro](https://github.com/meteor-mogul/vue-intro)
