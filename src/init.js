$(document).ready(function() {
  window.dancers = [];

  // adds a dancer on click
  $('.addDancerButton').on('click', function(event) {

    // get the maker function name from data attribute
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    

    // make a dancer with a random OR fixed position
    var top;


    // if dancer is not butterfly, place at the bottom half of page, else place randomly
    if (dancerMakerFunctionName !== 'ButterflyDancer') {
      top = 800 - Math.random() * 650;
    } else {
      top = $('body').height() * Math.random();
    }


    // create a new dancer
    var dancer = new dancerMakerFunction(
      top,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );


    // append to body
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });


  // makes all dancers on page line up
  $('.lineUpButton').on('click', function(event) {
    window.lineUp();
  });


  // makes cat and dog dancers party together
  $('.catsDogsButton').on('click', function(event) {
    window.catsDogs();
  });


  // function to make dancers line up
  window.lineUp = function() {
    dancers.forEach(function (val) {
      if (val instanceof ButterflyDancer) {
        val.$node.css('top', '20%');
      } else if (val instanceof DogDancer) {
        val.$node.css('left', '10%');
      } else if (val instanceof CatDancer) {
        val.$node.css('left', '80%');
      }
    });
  };


  // function to make cats and dogs party together
  window.catsDogs = function() {
    dancers.forEach(function (val) {
      if (val instanceof DogDancer) {
        val.$node.css('top', '80%');
      } else if (val instanceof CatDancer) {
        val.$node.css('top', '85%');
      }
    });
  };


  // mouseover effects for cats, dogs and butterflies
  $('body').delegate('.cat', 'mouseover', function() {
    $('.cat').toggle(2000);
  });

  $('body').delegate('.lameDog', 'mouseover', function() {
    $('.lameDog').remove();
  });

  $('body').delegate('.butterfly', 'mouseover', function() {
    $('.butterfly').fadeOut(2500);
  });
  

});

