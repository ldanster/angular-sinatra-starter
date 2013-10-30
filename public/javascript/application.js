
$(document).foundation(
  'orbit' , {
    animation: 'fade',
    timer_speed: 10000,
    pause_on_hover: true,
    resume_on_mouseout: false,
    animation_speed: 500,
    stack_on_small: true,
    navigation_arrows: true,
    slide_number: false,
    container_class: 'orbit-container',
    stack_on_small_class: 'orbit-stack-on-small',
    next_class: 'orbit-next',
    prev_class: 'orbit-prev',
    timer_container_class: 'orbit-timer',
    timer_paused_class: 'paused',
    timer_progress_class: 'orbit-progress',
    slides_container_class: 'orbit-slides-container',
    bullets_container_class: 'orbit-bullets',
    bullets_active_class: 'active',
    slide_number_class: 'orbit-slide-number',
    caption_class: 'orbit-caption',
    active_slide_class: 'active',
    orbit_transition_class: 'orbit-transitioning',
    bullets: false,
    timer: false,
    variable_height: false,
    before_slide_change: function(){},
    after_slide_change: function(){}
});

$(document).foundation(
'reveal' ,
{
  animation: 'fadeAndPop',
  animationSpeed: 250,
  closeOnBackgroundClick: true,
  dismissModalClass: 'close-reveal-modal',
  bgClass: 'reveal-modal-bg',
  open: function(){},
  opened: function(){},
  close: function(){},
  closed: function(){},
  bg : $('.reveal-modal-bg'),
  css : {
    open : {
      'opacity': 0,
      'visibility': 'visible',
      'display' : 'block'
    },
    close : {
      'opacity': 1,
      'visibility': 'hidden',
      'display': 'none'
    }
  }
});

$scope.init = function() {
  console.log("lebo");  
}

$(document).ready(function() {
  console.log("Testing");
}); 