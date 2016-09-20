describe('dogDancer', function() {

  var dogDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dogDancer = new dogDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dogDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(dogDancer.$node, 'toggle');
    dogDancer.step();
    expect(dogDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(dogDancer, 'step');
      expect(dogDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      

      expect(dogDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dogDancer.step.callCount).to.be.equal(2);
    });
  });
});
