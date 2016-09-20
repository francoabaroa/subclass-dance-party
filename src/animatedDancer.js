var animatedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

animatedDancer.prototype = Object.create(makeDancer.prototype);

animatedDancer.prototype.constructor = animatedDancer;

animatedDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    opacity: '0.8',
    height: '150px',
    width: '150px'
  }).toggle();
};








