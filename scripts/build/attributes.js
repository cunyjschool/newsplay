'use strict';

var React = require('react');
var Util = require('../util.js');
var data = require('../attributes.json');

var AttributeAll = React.createClass({
	displayName: 'AttributeAll',

	render: function render() {
		var attributeOneNodes = this.props.data.map(function (attributeOne) {
			return React.createElement(AttributeOne, { name: attributeOne.name, options: attributeOne.options, color: attributeOne.color });
		});
		return React.createElement(
			'div',
			{ className: 'attributeAll' },
			React.createElement(
				'p',
				null,
				React.createElement(
					'strong',
					null,
					'How will you present the story with the following mix?'
				)
			),
			React.createElement(
				'table',
				{ className: 'attributeOne' },
				attributeOneNodes
			)
		);
	}
});

var AttributeOne = React.createClass({
	displayName: 'AttributeOne',

	getInitialState: function getInitialState() {
		return {
			option: ''
		};
	},
	componentDidMount: function componentDidMount() {
		if (this.isMounted()) {
			this.setState({
				option: this.props.options.getValueFromRandomIndex() // get a random option from json file whenever component reloads
			});
		}
	},
	render: function render() {
		return React.createElement(
			'tr',
			null,
			React.createElement(
				'td',
				{ className: 'optionName' },
				this.props.name
			),
			React.createElement(
				'td',
				{ className: 'optionValue', style: { borderColor: this.props.color } },
				this.state.option
			)
		);
	}
});

React.render(React.createElement(AttributeAll, { data: data }), document.getElementById('attributes'));