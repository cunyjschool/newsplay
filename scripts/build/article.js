'use strict';

var React = require('react');
var $ = require('zeptojs');
var Util = require('../util.js');
var test = require('../attributes.json');

var Article = React.createClass({
	displayName: 'Article',

	getInitialState: function getInitialState() {
		return {
			headline: '',
			lead: '',
			source: '',
			link: ''
		};
	},
	componentDidMount: function componentDidMount() {
		var util = new Util();
		var apiCall = util.buildQuery();

		if (this.isMounted()) {
			$.get(apiCall, (function (data) {
				var articles = data.response.docs,
				    // an array
				chosenArticle = articles.getValueFromRandomIndex(); // pick a random article on that page of results, see util.js

				this.setState({
					headline: chosenArticle.headline.main,
					lead: chosenArticle.lead_paragraph,
					source: chosenArticle.source,
					link: chosenArticle.web_url
				});
			}).bind(this));
		}
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'article' },
			React.createElement(
				'div',
				{ className: 'title' },
				React.createElement(
					'h3',
					{ className: 'headline' },
					this.state.headline
				)
			),
			React.createElement(
				'div',
				{ className: 'content' },
				React.createElement(
					'h3',
					{ className: 'lead' },
					this.state.lead
				),
				React.createElement(
					'p',
					null,
					'Source: ',
					this.state.source
				),
				React.createElement(
					'p',
					null,
					React.createElement(
						'a',
						{ href: this.state.link, target: '_blank' },
						'Original Article'
					)
				)
			)
		);
	}
});

React.render(React.createElement(Article, null), document.getElementById('article'));