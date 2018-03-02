// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by vuetify-dist.js.
import { name as packageName } from "meteor/meteormogul:vuetify-dist";

// Write your tests here!
// Here is an example.
Tinytest.add('vuetify-dist - example', function (test) {
  test.equal(packageName, "vuetify-dist");
});
