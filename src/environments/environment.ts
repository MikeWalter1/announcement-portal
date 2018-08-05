/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD4xYr0JKJFQ-F6IyrDa83x18iL_X5-kzc",
    authDomain: "announcements-212320.firebaseapp.com",
    databaseURL: "https://announcements-212320.firebaseio.com",
    projectId: "announcements-212320",
    storageBucket: "announcements-212320.appspot.com",
    messagingSenderId: "238028788131"
  }
};
