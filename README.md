# drupalgenerator

[drupalgenerator](http://drupalgenerator.com/) is an initiative to provide a GUI
for the Drupal Console project.

The idea of this site, is make the Drupal Console project available
for everyone, including people who does not have experience, or does not feel
comfortable working on the terminal.

### Purpose

Provide a GUI for the Drupal Console project to execute generators and
deliver a downloadable file containing the generated module or code.

This is a WIP, for more information about the Drupal Console project, visit
[the official site](http://drupalconsole.com/)

### Contributing

If you'd like to contribute to this project, please follow these steps:

* make sure you have node version ~0.10.x installed (0.12.x preferably)
* make sure you have both `gulp` and `bower` installed (`$ npm install -g bower gulp`)
* clone this repository `$ git clone git@github.com:hechoendrupal/drupalgenerator.git`
* cd into the local directory `$ cd drupalgenerator`
* install all dependencies: `$ npm install && bower install`
* run a development instance: `$ gulp watch`
  this will run a development server at `http://localhost:9000` and watch for any
  changes to local files
* open a pull request against `master` branch
* If you can contribute tests, you will automatically become one of our heroes
