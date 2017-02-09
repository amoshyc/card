Card
########

a responsive `Pelican <http://docs.getpelican.com/en/stable/>`_ theme using `mdl 1.3.0 <https://github.com/google/material-design-lite/releases/tag/v1.3.0>`_;

Usage
********

Developing
*************

Requirement
============

#. mdl: (already in project)
#. Jinja2: (included in Pelican)
#. Node.js
#. gulp
#. gulp-sass
#. gulp-uglify

To install the last 3, you can just do

.. code-block:: shell

    npm install

Since the dependencies is already stated in package.json.

I use scss for all style sheet in this project because mdl is written in scss.

Design & Layout
================

Components
============

Each component is in a directory.
Ecah html file is a Jinja2 **marcro**.
Each custom style is prefixed ``cd``.

Drawer
---------

macro definistion::

    drawer(sitename, image, links)

where

    sitename: string                // name of blog
    image: string               // path of profile image under static/
    links: list of <word, icon, url>   // list of links in drawer with material icon and target url

Article-card
--------------

Search-card
--------------

Result-card
--------------

Social-share
--------------

Gotop-button
--------------

Project Structure
==================
