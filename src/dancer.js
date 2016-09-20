// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};
  // var dancer = new makeDancer(top, left, timeBetweenSteps);
  // console.log(this);

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // this.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  //   setTimeout(this.step, timeBetweenSteps);
  // };
  console.log(this);
  console.log(this.step.bind(this));
  

  // this.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   this.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition.bind(this, top, left);

  // return dancer;
};



makeDancer.prototype.step = function() {
  // debugger;
  alert('hi');
  // console.log(this);
  setTimeout(this.step, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// var dance = new makeDancer;
// var dancer = new makeDancer(top, left, ti)

