Basic Ember App example using JSPM
==========

Blog post about this repo: [https://60devs.com/optimizing--default-jspm-workflow-with-gulp-and-nginx.html](https://60devs.com/optimizing--default-jspm-workflow-with-gulp-and-nginx.html)

Requirements
===========

Requires `nginx`, `realpath`.

Usage
=====

1. Clone the repository
2. `npm install`

To start/stop the nginx (su):

```
  ./bin/stop.sh
  ./bin/start.sh
```

To run a development version (not-minified, files loaded in runtime):

    gulp

and open https://localhost:8080/

To build a production-ready version:

    gulp build

and open https://localhost:8080/

Packages Info
=============

Ember version: 1.13.2

JSPM: ^0.15.6

Build system: gulp ^3.9.0

Transpiler: babel
