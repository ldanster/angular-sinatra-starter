angular.module('chiApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/events/show', {
    templateUrl: 'partials/events.html',
    controller: 'eventsController'
  })
  .when('/timeline/show', {
    templateUrl: 'partials/timeline.html',
    controller: 'timelineController'
  })
  .otherwise({
    redirectTo: 'partials/error.html'
  });
}])

.controller('eventsController', ['$scope', '$http', function($scope, $http) {
  $http.get('/events', { 'headers' : {'Accept' : 'application/json'}})
  .success(function(data) {
    var containerList = [];
    var container;  
    for (i=0; i < data.events.length; i++) {
      console.log(i);
      if ( i % 4 == 0) {
        container = [];
        containerList.push(container);
      }
      container.push(data.events[i]);
    }
    $scope.eventsContainer = containerList;
    $scope.$watch('eventsContainer', function() {
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
    });
  });
}])

.controller('timelineController', ['$scope', '$http', function($scope, $http) {
  $(document).ready(function() {
    $http.get('/timeline/get', {'headers' : {'Accept' : 'application/json'}})
    .success(function(data) {
      console.log(data);
      var timeline = new VMM.Timeline();
      var source = angular.toJson(data.timeline);
      console.log(source);
      timeline.init(source);
    });
  })
}]);


