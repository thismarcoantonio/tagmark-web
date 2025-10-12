# Tagmark: Web

A minimalist web application that facilitates saving and finding bookmarks using tags.

## Features

- Save bookmarks and use tags to categorize them.
- Tag-based search and filtering.
- Synchronization via firebase.

## Getting started

In order to get this application running locally, duplicate `.env.example` and rename it to `.env`. Setup your own firebase variables, then copy the value from the `VITE_FIREBASE_PROJECT_ID` variable.
Duplicate the `.firebaserc.example` file and rename it to `.firebaserc`. Replace the `"default"` property with the value you copied previously.

Add your own firebase variables before running the following commands:

- Install the packages running `npm ci`.
- Run `./node_modules/.bin/firebase login` to login in firebase with your account.
- Run `npm run firebase` to get the local emulators running.
