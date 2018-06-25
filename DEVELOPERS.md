# Developing mogul-vuetify-dist

This is just a build of [Vuetify](https://vuetifyjs.com/en/) as a Meteor package on Atmosphere.

So there isn't any heavy lifting, just keeping up with the releases of Vuetify.

I haven't built any automatic process, just manually do the following:

1. In this repo, rename `vuetify.js` as `vuetify.js.old` and `vuetify.css` as `vuetify.css.old` to make it easy to copy and paste code changes.
1. `$ cd ~/Code/node_modules`
1. `$ npm update vuetify`
1. Copy over the updated `dist/vuetify.js` and `dist/vuetify.css` from `node_modules` to this repo.
1. To the beginning of `vuetify.js` add

```
/* Added by Meteor Mogul
   Export Vuetify symbol so I can import it in meteor */
export const Vuetify = factory();
```

1. Comment out the other factory stuff.
1. Remove the last line of `vuetify.js` so source maps aren't screwed up when debugging.
1. Bump the version number in `package.js`
1. Test in playground.
1. Commit changes to GitHub.
1. Publish new package to Atmosphere:

```
$
```
