# drupalgenerator
A GUI to generate Drupal 8 modules using the Drupal Console project

# How to install

* Clone the repository 
```sh
$ git clone https://github.com/hechoendrupal/drupalgenerator.git
``` 

* Locate inside the project and install npm and bower dependencies
```sh
$ npm install
$ bower install
```
* At this moment materialize has problems when used with AMD (Require JS) https://github.com/Dogfalo/materialize/issues/634 you can replace the bower component with this https://github.com/max1011/materialize 

```sh
$ cd app/bower_components
  #remove Dogfalo materialize library
$ rm -rf app/bower_components/materialize
  #clone max1011 materialize library
$ git clone https://github.com/max1011/materialize
```

* Run `grunt serve`

* Enjoy
