# [Biomedical Technology Student Association Official Website](http://sdsubtsa.sdsu.edu/)

## Dependancies
* [node](http://nodejs.org/)
* [gulp](http://gulpjs.com/)`npm install -g gulp`
* [bower](http://bower.io/)`npm install -g bower` 

This app was created using [angularjs](https://angularjs.org/), [jquery](http://jquery.com/) and [php](http://php.net/manual/en/intro-whatis.php).

If you are unfamilar with git, check out this [resource](http://git-scm.com/book/en/v1/Getting-Started)

# Getting Started

#### 1. Download our site [here](https://github.com/pfryling/btsa/archive/master.zip):

#### 2. Download [node](http://nodejs.org/download/):


#### 3. Install gulp:
You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

```sh
$ npm install -g gulp
```

#### 4. Install bower:
You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

```sh
$ npm install -g bower
```

#### 5. Install additional project dependancies:

```sh
$ npm install
```
#### 6. Type gulp in the command line:

```sh
$ gulp
```
The default task will run and do nothing.

Use the following URL to view your changes -> [homepage](http://localhost:8080/#/Home)

## Updating Club Information (Location, Semesters, Contacts, etc...)
1. Access the rohan server by talking with the current or previous club webmaster
2. Open the BTSA.js file in /public_html/js/BTSA.js
3. Edit the bottom of the file next to "clubInfo"

##Changing the layout of the website
Using [Less](http://lesscss.org/) makes it easy to create changes

1. Edit the variables.less file in /less
2. Enjoy!



##Todo

- Add updated info to officers.html (this information can be found on the current site sdsubtsa.sdsu.edu)
- reach out to past leadership to get details to add to alumni section
- create google group and add link to footer
