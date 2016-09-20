$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */


    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunctionName);
    

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(dancerMakerFunction);

    

    // make a dancer with a random position

    console.log(dancerMakerFunctionName);
    var top;
    if (dancerMakerFunctionName !== 'makeBlinkyDancer') {
      top = 800 - Math.random() * 150;
    } else {
      top = $('body').height() * Math.random();
    }


    var dancer = new dancerMakerFunction(
      top,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);

    dancers.push(dancer);
    console.log(dancers);
    
  });

  $('.lineUpButton').on('click', function(event) {
    window.lineUp();
  });

  window.lineUp = function() {
    dancers.forEach(function (val) {
      console.log(val);
      if (val instanceof makeBlinkyDancer) {
        val.$node.css('top', '20%');
      } else if (val instanceof dogDancer) {
        val.$node.css('left', '10%');
      } else if (val instanceof animatedDancer) {
        val.$node.css('left', '80%');
      }
    });
  };

  // $('body').delegate('.cat', 'mouseover', function() {
  //   $('.cat').addClass('rotate90');
  // });

  // $('body').delegate('.lameDog', 'mouseover', function() {
  //   $('.lameDog').remove();
  // });

  // $('body').delegate('.butterfly', 'mouseover', function() {
  //   $('.butterfly').css({
  //     'background-size': 300,
  //     'height': 500,
  //     'width': 500
  //   });
  // });
  

});

