# Feed-Reader-Testing-Project

## Table of Contents

* [Project Description](#project-description)
* [Instructions](#instructions)
* [Build With](#build-with)
* [Development Strategy](#Development-Strategy)
* [Author](#author)
* [Project Link](#project-link)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgement](#acknowledgement)

## Project Description

Implement Test Driven Development (TDD) on a pre-existing web-based application that reads RSS feeds using Jasmine.js; JavaScript Testing Framework

## Instructions

The starter Template provided by [Udacity](https://www.udacity.com/) is already a pre-existing application.

The Starter Template can be downloaded through:

  * [The Feeder Reader repository on GitHub](https://github.com/udacity/frontend-nanodegree-feedreader)

This starter code has a static, non-interactive version of the project.

This [Feeder Reader Testing Project](https://neorusse.github.io/Classic-Arcarde-Game/) was implemented to meet the specifications provided in these style guides:

  * [HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
  * [CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
  * [JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
  * [Git Style Guide](https://udacity.github.io/git-styleguide/)
  
## Build With

  * VS Code Editor
  * Chrome Browser
  * HTML
  * CSS
  * JavaScript (Object Oriented Programming)
  * Git Hub
  
Note: To complete [Classic Arcade Game Project](https://neorusse.github.io/Classic-Arcarde-Game/), I ensure I use the current version of [Edge](https://www.microsoft.com/en-us/download/details.aspx?id=48126), [Firefox](https://www.mozilla.org/en-US/firefox/new/), or [Chrome](https://support.google.com/chrome/answer/95346?hl=en).
  
## Development Strategy

  * I familiarize myself with the starter code
  * Then I Open up the index.html and review the functionality of the application in chrome browser
  * I read through the code in app.js file to fully understand it.
  * I reviewed the style.css to determine its effect on the application.
  * I explore the Jasmine spec file in feedreader.js file and then review the [Jasmine documentation](https://jasmine.github.io/)
  * I went ahead to edit the allFeeds variable in app.js file to make the provided test fail in-order to gain an understanding of how {Jasmine](https://jasmine.github.io/) visualizes this failure in the application.
  * I the return the allFeeds variable to a passing state after reviewing the failed test.
  * I wrote a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
  * I also wrote a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
  * Next I wrote a new test suite named "The menu" that ensures the menu element is hidden by default.To do this, I analyze the HTML and the CSS to determine how the hiding/showing of the menu element is implemented.
  * Again, I wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test have two expectations: the menu should display itself when clicked, and hide when clicked again.
  * I also wrote a test suite named "Initial Entries" that ensures when the loadFeed function is called and completes its work, there is at least a single ".entry element" within the ".feed container".
  * Finally, I wrote a test suite named "New Feed Selection" that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## Project Expectations that were mearnt as required

  * Non of the tests was dependent on the results of another
  * Callbacks was used to ensure that feeds are loaded before they are tested
  * Error handling was implemented for undefined variables and out-of-bound array access
  * On Project completion, all of tests pass
  
## Author

This [Feeder Reader Testing Project](https://neorusse.github.io/Classic-Arcarde-Game/) was developed by *Russell Nyorere* with the starter template provided by [Udacity](https://www.udacity.com/).
  
## Contributing

Your are at liberty to fork this repo and improve on it.

## License

This [Feeder Reader Testing Project](https://neorusse.github.io/Classic-Arcarde-Game/) is released under [GNU General Public License v3.0](https://neorusse.github.io/Memory-Game/blob/master/LICENSE).

## Acknowledgement

I gratefull to [Google](https://www.google.com/) for providing me this opportunity of learning Frontend Web Development under Scholarship. [Udacity](https://www.udacity.com/) and the course instructor have been very impactful, I appreciate you. I specially thank [Andela](https://andela.com/), the project manager of this Scholarship Program. All our Mentors, Program Assistant, Local Meetup coordinators and fellow scholars on the [Slack](https://slack.com/) Forum, you guys are equally appreciated.
