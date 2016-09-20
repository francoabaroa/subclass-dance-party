var dogDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

dogDancer.prototype = Object.create(makeDancer.prototype);

dogDancer.prototype.constructor = dogDancer;

dogDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle('fast');
};