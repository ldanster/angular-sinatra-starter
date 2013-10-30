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
  $(document).ready(function() {
    $http.get('/events', { 'headers' : {'Accept' : 'application/json'}})
    .success(function(data) {
      var containerList = [];
      var container;
      var modalId = 0;  
      for (i=0; i < data.events.length; i++) {
        if ( i % 4 == 0) {
          container = [];
          containerList.push(container);
        }
        container.push({
          event: data.events[i],
          modalId: modalId++
        });
      }
      $scope.eventsContainer = containerList;

      setTimeout(function() {
        initEventController();
      }, 1);
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

function initEventController() {
  $(document).foundation();
}
