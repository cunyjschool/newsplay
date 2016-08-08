var article = require("./build/article.js");
var attributes = require("./build/attributes.js");

function startIntro(){
  var intro = introJs();
      intro.setOptions({
        steps: [
          {
            intro: "Hi! Welcome to <strong>NewsPlay</strong>, a game to generate creative approaches to covering news stories. Here's how to play."
          },
          {
            element: "#headline",
            intro: "You have the summary of (and link to) a randomly-selected news story from NY Times, sourced from the <a href='http://developer.nytimes.com/article_search_v2.json' target='_blank'>NYT Article Search API</a>.",
            position: "right"
          },
          {
            element: "#criteria",
            intro: "You also have a new set of constraints to cover this story differently, including a new story type, supplemental media type, etc.",
            position: "left"
          },
          {
            intro: "Use the next 5 minutes to develop an approach to that story that you could pitch to a publication editor for a publication of your choice."
          },
          {
            intro:"Draft a 3- to 5-sentence pitch. If you feel inspired by the supplemental media type or the platform, add your ideas for additional social media content in your pitch."
          },
          {
            element: "#submit",
            intro: "Submit your approach and see other's ideas.",
            position: "top"
          },
          {
            element: "#generate",
            intro: "Generate a fresh combination if you are stuck!",
            position: "left"
          }
        ]
      });

  intro.start();
};

document.getElementById("help").onclick = function(){startIntro();};
document.getElementById("generate").onclick= function(){window.location.reload();};
