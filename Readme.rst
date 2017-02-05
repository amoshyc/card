Card
########

a responsive `Pelican <http://docs.getpelican.com/en/stable/>`_ theme using `mdl 1.3.0 <https://github.com/google/material-design-lite/releases/tag/v1.3.0>`_;

Usage
********

Developing
*************

Requirement
============

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

Design
=========

Components
============

All components listed below is a Jinja2's **macro** and is a file seperately. Their style sheet is located in ``scss/components``.

Drawer
---------

Article-big
------------

Article-small
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
