'use strict';

var React = require('react');
var $ = require('zeptojs');
var Util = require('../util.js');
var test = require('../attributes.json');

var Article = React.createClass({
	displayName: 'Article',

	getInitialState: function getInitialState() {
		return {
			source: '',
			lead: ''
		};
	},
	componentDidMount: function componentDidMount() {
		var util = new Util();
		var apiCall = util.buildQuery();

		if (this.isMounted()) {
			$.get(apiCall, (function (data) {
				var articles = data.response.docs,
				    randomizedIndex = util.getRandomIntInclusive(1, articles.length); // pick a random article on that page of results

				this.setState({
					source: articles[randomizedIndex].source,
					lead: articles[randomizedIndex].lead_paragraph
				});
			}).bind(this));
		}
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'article' },
			React.createElement(
				'p',
				{ className: 'lead' },
				this.state.lead
			),
			React.createElement(
				'small',
				null,
				'Source: ',
				this.state.source
			)
		);
	}
});

React.render(React.createElement(Article, null), document.getElementById('article'));