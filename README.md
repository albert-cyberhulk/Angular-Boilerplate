# Angular-Boilerplate

> Angular Boilerplate for easy project bootstrap

## Getting Started
This boilerplate requires Grunt `~0.4.5` and NodeJS `~4.2.2`

If you haven't used [Grunt](http://gruntjs.com/) or [nodeJS](https://nodejs.org) before, be sure to check out the [Grunt Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to use Grunt, additionally checkout [NodeJS documentation](https://nodejs.org/en/docs/). Once you're familiar with that process, you may install this boilerplate with the following steps :


##### Import a Git repository using the command line

```shell
git clone https://github.com/albert-cyberhulk/Angular-Boilerplate.git
```

#####  Install nodeJS on your preferred system

_Download from official website_ [Official website](https://nodejs.org/en/download/)

#####  Install Ruby on your preferred system

_Download from official website_ [Official website](https://www.ruby-lang.org/de/downloads/)

#####  Install SASS on your preferred system

_Install using command line_

```shell
gem install sass
```
_Download from official website_ [Official website](http://sass-lang.com/install)

#####  Install scss-lint on your preferred system

_Download from official website_ [Official website](https://github.com/brigade/scss-lint)

_Install using command line_

```shell
gem install scss_lint
```

## The 'cloudinary' task

### Overview
In your project's Gruntfile, add a section named `cloudinary` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cloudinary: {
      // Options for cloudinary
      options: {},
      // source files to be processed
      files: [{}]
    }
});
```

### Options

#### options.remove
Type: `Boolean`
Default value: `false`

A Boolean value that is used remove the src files after upload (to be done in next release...).

#### options.replace
Type: `Boolean`
Default value: `false`

A Boolean value that is used to replace all occurrences

#### options.dir
Type: `String`
Default value: `empty string`

A String value that is used to indicate the path where all occurrences in project should be replaced (removal to be done in next release...)

### Usage Examples

#### Simplified Options
In this example, the simplified options are used to upload files to cloudinary

```js
grunt.initConfig({
  cloudinary: {
    options: {
      credentials: { // cloudinary credentials
        'api_key': 'yourapikey',
        'api_secret': 'yourapisecret',
        'cloud_name': 'yourcloudnamehere'
      }
    },
    files: [{
      expand: true, // should be set to true to find whole path
      cwd: '<%= project.dist %>',
      src: [
        'images/**/*.ico', 'images/**/*.png', 'images/**/*.jpeg',
        'scripts/**/*.js', 'scripts/**/*.js'
      ]
    }]
  }
});
```

#### Custom Options
See full example with upload and replace options enabled

```js
grunt.initConfig({
  cloudinary: {
    // Options for cloudinary
    options: {
      replace: true, // replaces originals with uploaded ones // default false
      // in case replace is false find and replace all occurrences is not enabled
      dir: '<%= project.dist %>/', // path where the occurrences should be replaced // defaults to ""
      credentials: { // cloudinary credentials
        'api_key': 'yourapikey',
        'api_secret': 'yourapisecret',
        'cloud_name': 'yourcloudnamehere'
      }
    },
    // source files to be processed
    files: [{
      expand: true, // should be set to true to find whole path
      cwd: '<%= project.dist %>',
      src: [
        'images/**/*.ico', 'images/**/*.png', 'images/**/*.jpeg'
      ]
    }, {
      expand: true, // should be set to true to find whole path
      cwd: '<%= project.dist %>', // use your project destination
      src: [
        'styles/**/*.css'
      ]
    }, {
      expand: true, // should be set to true to find whole path
      cwd: '<%= project.dist %>', // use your project destination
      src: [
        'scripts/**/*.js'
      ]
    }]
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using guidelines provided by [Github guide](https://guides.github.com/activities/contributing-to-open-source/).

## Release History
_Version: 0.5.0_
