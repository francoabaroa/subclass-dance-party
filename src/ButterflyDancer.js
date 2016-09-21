var ButterflyDancer = function(top, left, timeBetweenSteps) {
  Animal.call(this, top, left, timeBetweenSteps);
};

ButterflyDancer.prototype = Object.create(Animal.prototype);

ButterflyDancer.prototype.constructor = ButterflyDancer;

ButterflyDancer.prototype.step = function() {
  Animal.prototype.step.call(this);
  this.$node.show();
};




