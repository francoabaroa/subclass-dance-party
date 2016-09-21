var CatDancer = function(top, left, timeBetweenSteps) {
  Animal.apply(this, arguments);
};

CatDancer.prototype = Object.create(Animal.prototype);

CatDancer.prototype.constructor = CatDancer;

CatDancer.prototype.step = function() {
  Animal.prototype.step.call(this);
  this.$node.show();
};








