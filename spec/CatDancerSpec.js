describe('CatDancer', function() {

  var animatedDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    animatedDancer = new CatDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(animatedDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node show', function() {
    sinon.spy(animatedDancer.$node, 'show');
    animatedDancer.step();
    expect(animatedDancer.$node.show.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(animatedDancer, 'step');
      expect(animatedDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      

      expect(animatedDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(animatedDancer.step.callCount).to.be.equal(2);
    });
  });
});
