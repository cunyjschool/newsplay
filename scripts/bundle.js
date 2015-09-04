(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var article = require('./build/article.js');
var attributes = require('./build/attributes.js');
},{"./build/article.js":3,"./build/attributes.js":4}],2:[function(require,module,exports){
module.exports=[{
    "name": "type",
    "options":["news","feature","explainer","profile"]
},
{
    "name": "method",
    "options":["photo","audio","video","text","inforgraph"]  
},
{
    "name": "length",
    "options":["1 hour", "half-day","full day","week","3 weeks"]
},
{
    "name": "social",
    "options":["twitter","pinterest","intagram/flickr","youtube/vimeo","audioboo/soundcloud","thinglink/stipple"]
},
{
    "name": "audience",
    "options":["kids 8-12","kids 13-20","twentysomethings","adults","seniors"]
}]
},{}],3:[function(require,module,exports){
"use strict";

var Article = React.createClass({
	displayName: "Article",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "article" },
			React.createElement(
				"h1",
				null,
				"article name"
			),
			React.createElement(
				"h2",
				null,
				"article content"
			)
		);
	}
});

React.render(React.createElement(Article, null), document.getElementById('article'));
},{}],4:[function(require,module,exports){
"use strict";

var data = require('../attributes.json');

var AttributeAll = React.createClass({
	displayName: "AttributeAll",

	render: function render() {

		var attributeOneNodes = this.props.data.map(function (attributeOne) {
			return React.createElement(AttributeOne, { name: attributeOne.name, options: attributeOne.options });
		});
		return React.createElement(
			"div",
			{ className: "attributeAll" },
			attributeOneNodes
		);
	}
});

var AttributeOne = React.createClass({
	displayName: "AttributeOne",

	render: function render() {
		var attributeOptionNodes = this.props.options.map(function (option) {
			return React.createElement(AttributeOption, { option: option });
		});
		return React.createElement(
			"div",
			{ className: "attributeOne" },
			React.createElement(
				"h2",
				{ className: this.props.name },
				this.props.name
			),
			attributeOptionNodes
		);
	}
});

var AttributeOption = React.createClass({
	displayName: "AttributeOption",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "attributeOption" },
			this.props.option
		);
	}
});

React.render(React.createElement(AttributeAll, { data: data }), document.getElementById('attributes'));
},{"../attributes.json":2}]},{},[1]);
