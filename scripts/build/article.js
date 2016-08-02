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
			link: '',
			thumb: false
		};
	},
	componentDidMount: function componentDidMount() {
		var util = new Util();
		var apiCall = util.buildQuery();

		if (this.isMounted()) {
			$.get(apiCall, (function (data) {
				var articles = data.response.docs,
				    // an array
				chosenArticle = articles.getValueFromRandomIndex(),
				    // pick a random article on that page of results, see util.js
				possibleMedia;

				if (chosenArticle.multimedia[0] != undefined) {
					//this first object is thumbnail for the article
					possibleMedia = util.buildMediaUrl(chosenArticle.multimedia[0]); //see util.js for static media url reconstruction
				} else {
						possibleMedia = false;
					}

				this.setState({
					headline: chosenArticle.headline.main,
					lead: chosenArticle.lead_paragraph,
					source: chosenArticle.source,
					link: chosenArticle.web_url,
					thumb: possibleMedia
				});
			}).bind(this));
		}
	},
	render: function render() {
		var image;

		// only insert thumb if there is one
		if (this.state.thumb) {
			image = React.createElement('img', { src: this.state.thumb });
		} else {
			image = React.createElement(
				'p',
				null,
				'¶'
			);
		}

		return React.createElement(
			'div',
			{ className: 'article' },
			React.createElement(
				'div',
				{ className: 'title' },
				React.createElement(
					'h1',
					{ className: 'headline' },
					this.state.headline
				)
			),
			React.createElement(
				'div',
				{ className: 'content' },
				React.createElement(
					'p',
					{ className: 'lead' },
					this.state.lead
				),
				image,
				React.createElement(
					'div',
					{ className: 'source' },
					React.createElement(
						'p',
						null,
						'Source:',
						this.state.source
					),
					React.createElement(
						'button',
						null,
						React.createElement(
							'a',
							{ href: this.state.link, target: '_blank' },
							'visit the original article'
						)
					)
				)
			)
		);
	}
});

React.render(React.createElement(Article, null), document.getElementById('article'));