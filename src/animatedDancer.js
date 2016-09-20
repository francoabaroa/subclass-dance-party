var animatedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

animatedDancer.prototype = Object.create(makeDancer.prototype);

animatedDancer.prototype.constructor = animatedDancer;

animatedDancer.prototype.slideUp = function() {
  makeDancer.prototype.step.call(this);
  this.$node.slideUp();
};








