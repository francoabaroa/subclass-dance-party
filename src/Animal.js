var Animal = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // depeneding on type of dancer, assigns appropriate class name
  if (this instanceof ButterflyDancer) {
    this.$node = $('<span class="butterfly"></span>');
  } else if (this instanceof DogDancer) {
    this.$node = $('<span class="lameDog"></span>');
  } else if (this instanceof CatDancer) {
    this.$node = $('<span class="cat"></span>');
  } else {
    this.$node = $('<span class="dancer"></span>');
  }
  
  this.step();
  this.setPosition(top, left);
};

Animal.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Animal.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
