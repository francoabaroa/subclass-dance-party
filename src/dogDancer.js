var DogDancer = function(top, left, timeBetweenSteps) {
  Animal.apply(this, arguments);
};

DogDancer.prototype = Object.create(Animal.prototype);

DogDancer.prototype.constructor = DogDancer;

DogDancer.prototype.step = function() {
  Animal.prototype.step.call(this);
  this.$node.show();
};