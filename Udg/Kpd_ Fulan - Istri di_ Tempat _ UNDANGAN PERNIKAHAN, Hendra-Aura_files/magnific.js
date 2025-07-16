$(document).ready(function(){
    $('.img-pos-in').magnificPopup({
        type: 'image',
      mainClass: 'pos-zoom',
      gallery:{
                enabled:true
            },

      zoom: {
        enabled: true,

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        opener: function(openerElement) {

          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }

    });

    });
