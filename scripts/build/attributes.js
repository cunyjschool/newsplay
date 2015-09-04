'use strict';

var React = require('react');
var data = require('../attributes.json');

var AttributeAll = React.createClass({
	displayName: 'AttributeAll',

	render: function render() {
		var attributeOneNodes = this.props.data.map(function (attributeOne) {
			return React.createElement(AttributeOne, { name: attributeOne.name, options: attributeOne.options });
		});
		return React.createElement(
			'div',
			{ className: 'attributeAll' },
			attributeOneNodes
		);
	}
});

var AttributeOne = React.createClass({
	displayName: 'AttributeOne',

	render: function render() {
		var attributeOptionNodes = this.props.options.map(function (option) {
			return React.createElement(AttributeOption, { option: option });
		});
		return React.createElement(
			'div',
			{ className: 'attributeOne' },
			React.createElement(
				'h2',
				{ className: this.props.name },
				this.props.name
			),
			attributeOptionNodes
		);
	}
});

var AttributeOption = React.createClass({
	displayName: 'AttributeOption',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'attributeOption' },
			this.props.option
		);
	}
});

React.render(React.createElement(AttributeAll, { data: data }), document.getElementById('attributes'));