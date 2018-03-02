# mogul-vuetify-dist
Full build of vuetify as a meteor package.

## What

This provides Vuetify as a Meteor package on Atmosphere.

Once you add this package to your add, Vuetify is bundled into your app through one JavaScript file (`vuetify.js`) and one CSS file (`vuetify.css`).

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
