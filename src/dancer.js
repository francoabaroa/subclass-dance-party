var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  
  if (this instanceof makeBlinkyDancer) {
    this.$node = $('<span class="butterfly"></span>');
  } else if (this instanceof dogDancer) {
    this.$node = $('<span class="lameDog"></span>');
  } else if (this instanceof animatedDancer) {
    this.$node = $('<span class="cat"></span>');
  } else {
    this.$node = $('<span class="dancer"></span>');
  }
  
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // this.top = top;
  // this.left = left;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  console.log('success');
};
