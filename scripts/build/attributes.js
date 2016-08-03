'use strict';

var React = require('react');
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
					'Time to present the story with the new mix!'
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
		var style = {
			borderColor: this.props.color,
			color: this.props.color
		};
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