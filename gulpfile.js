var gulp = require('gulp'),
  boilerplate = require('boilerplate-gulp');

boilerplate(gulp, {
  pkg: require('./package.json'),
  jsHintConfig: require('./dev/jsHintConfig'),
  disableCss: true
});
