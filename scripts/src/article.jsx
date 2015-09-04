var React = require('react');
var $ = require('zeptojs');
var Util = require('../util.js');
var test = require('../attributes.json');

var Article = React.createClass({
	getInitialState: function(){
		return {
			headline:'',
			lead: '',
			source: '',
			link: ''
		}
	},
	componentDidMount: function(){
		var util = new Util();
		var apiCall = util.buildQuery();

		if (this.isMounted()){
			$.get(apiCall,function(data){
				var articles = data.response.docs, // an array
					chosenArticle = articles.getValueFromRandomIndex(); // pick a random article on that page of results, see util.js

				this.setState({
					headline: chosenArticle.headline.main,
					lead: chosenArticle.lead_paragraph,
					source: chosenArticle.source,
					link: chosenArticle.web_url
				});
			}.bind(this));
		}
	},
	render: function(){
		return (
			<div className="article">
				<div className="title">
					<h3 className="headline">{this.state.headline}</h3>
				</div>
				<div className="content">
					<h3 className="lead">{this.state.lead}</h3>
					<p>Source: {this.state.source}</p>
					<p><a href={this.state.link} target="_blank">Original Article</a></p>
				</div>
			</div>
		);
	}
});

React.render(
	<Article />,
	document.getElementById('article')
);