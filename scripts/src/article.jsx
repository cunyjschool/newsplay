var React = require('react');
var $ = require('zeptojs');
var Util = require('../util.js');
var test = require('../attributes.json');

var Article = React.createClass({
	getInitialState: function(){
		return {
			source: '',
			lead: ''
		}
	},
	componentDidMount: function(){
		var util = new Util();
		var apiCall = util.buildQuery();

		if (this.isMounted()){
			$.get(apiCall,function(data){
				var articles = data.response.docs,
					randomizedIndex = util.getRandomIntInclusive(1,articles.length); // pick a random article on that page of results

				this.setState({
					source: articles[randomizedIndex].source,
					lead: articles[randomizedIndex].lead_paragraph
				})
			}.bind(this));
		}
	},
	render: function(){
		return (
			<div className="article">
			<p className="lead">{this.state.lead}</p>
				<small>Source: {this.state.source}</small>
			</div>
		);
	}
});

React.render(
	<Article />,
	document.getElementById('article')
);