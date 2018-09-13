# vue-firebase-login

A Vue.js project using Firebase for authentication. This project is based on Medium article by **Anas Mammeri**. You can find the article [here](https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c).

## Firebase Config

1. Copy `config.js.template` and rename it to `config.js`
2. Fill in your Firebase Project config, such as `API_KEY`, `DATABASE_NAME`, etc.
3. Don't forget to enable Authentication by Email and Password in your Firebase Project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Firebase Hosting *(optional)*

This is an optional step if you want to host your app on Firebase Hosting.
``` bash
# Install firebase-tools
npm install -g firebase-tools

# Login into your Firebase account
firebase login

# cd to root of your project, then init firebase
firebase init

# Select hosting and your Firebase Project to host your App
# Set dist as public directory
# Configure as Single App? Y

# build your App
npm run build

# deploy to Firebase Hosting
firebase deploy

# To update your App just build it again and deploy
npm run build
firebase deploy
```
