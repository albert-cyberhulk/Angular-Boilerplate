Angular Boilerplate
==========

Angular Boilerplate for easy project bootstrap
==========

In order to run the development version:

Please clone repository, checkout master branch

Install globally nodeJS.

Install globally grunt CLI: "npm install grunt-cli -g"

Install globally bower packaging: "npm install bower -g"

Enter repository: cd Word-Cloud

Run "npm install"

Run "bower install"

whenever everything successfully complete, run "grunt serve" from CLI

In your default browser you will see a new tab: "http://localhost:9000/#/"

Application is running using actual XMLHTTPRequest layer with stubbed mock backend

that intercepts and makes response to emulate more developer environment

===========

In order to run the production version of app:

do all the above mentioned steps,

in CLI instead of "grunt build", write "grunt build"

You will see a /dist folder in project root folder

Run index.html of the dist folder from any webserver you wish, e.g Apache, Node Http-Server or CLI Python server

===========

Dist folder is about 4.6 MB from which 4.5 MB is bower-components helper bower

files and libraries, which can in production should be replaced by Cloud CDN urls E.G Cloudinary

===========

Script images and styles files are minimized and cached, also automatic

cache versioning is implemented in production version

===========

Tests:

In order to run tests input "grunt test" command in CLI and you will see

output in terminal with all existing tests

Tests are being run automatically when grunt build is done for production version
