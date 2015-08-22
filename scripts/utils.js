(function(){

  var utils = {};

  function capitalize( string ) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function removeItemFromArray( arr, item ) {
    var index = arr.indexOf( item );
    return arr.splice( index, 1 );
  }

  utils.grabTasks = function( num, corpus ) {
    var tasks = [],
        verbs = JSON.parse( JSON.stringify(corpus.verbs) ),
        nouns = JSON.parse( JSON.stringify(corpus.nouns) );
    while ( num-- ) {
      var verb = verbs[ Math.floor(Math.random() * verbs.length) ],
          noun = nouns[ Math.floor(Math.random() * nouns.length) ];
      tasks.push( capitalize(verb) + ' the ' + noun );
      removeItemFromArray( verbs, verb );
      removeItemFromArray( nouns, noun );
    }
    return tasks;
  };

  utils.shuffleArray = function( array ) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  utils.soundIsOn = true;

  utils.getSoundAndFadeAudio = function(audiosnippetId) {
    var sound = document.getElementById(audiosnippetId);
    var fadeAudio = setInterval(function () {
        // Only fade if past the fade out point or not at zero already
        if (sound.volume >= 0.1) {
            sound.volume -= 0.1;
        }
        // When volume at zero stop all the intervalling
        if (sound.volume === 0.0) {
            clearInterval(fadeAudio);
        }
    }, 200);

    utils.debounce = function(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

  };

  utils.randomIntFromInterval = function( min, max ) {
    return Math.floor( Math.random() * (max-min + 1) + min );
  };

  window.utils = utils;

})();