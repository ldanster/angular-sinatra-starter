
angular.module('chiApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/events/show', {
    templateUrl: 'partials/events.html',
    controller: 'eventsController'
  })
  .when ('/events/add', { 
    templateUrl:'partials/addevent.html',
    controller:'eventsController'
  })
  .when('/timeline/show', {
    templateUrl: 'partials/timeline.html',
    controller: 'timelineController'
  })
  .when('/video/show', {
    templateUrl: 'partials/video.html',
    controller: 'videoController'
  })
  .otherwise({
    redirectTo: 'partials/error.html'
  });
}])

.controller('eventsController', ['$scope', '$http', function($scope, $http) {
  $scope.events = []
  $scope.addEvent = function(ev) {
    console.log(ev);
    $http({
      url: '/events/add',
      method: 'POST',
      data: 'name='+ev.name+'&description='+ev.description+'&address='+ev.address+'&date='+ev.date+'&time='+ev.time+'&imageUrl='+ev.imageUrl,
      headers: { 'Content-Type' : 'application/x-www-form-urlencoded'}
    }).success(function(data) {
      console.log(data);
    });
  };

  $(document).ready(function() {
    $http.get('/events', { 'headers' : {'Accept' : 'application/json'}})
    .success(function(data) {
      var containerList = [];
      var container;
      var modalId = 0;  
      for (i=0; i < data.length; i++) {
        if ( i % 4 == 0) {
          container = [];
          containerList.push(container);
        }
        container.push({
          event: data[i],
          modalId: modalId++
        });
      }
      $scope.eventsContainer = containerList;
      setTimeout(function() {
        $(document).foundation();
      }, 1);
    });
  });
}])

.controller('timelineController', ['$scope', '$http', function($scope, $http) {
  $(document).ready(function() {
    $http.get('/timeline/get', {'headers' : {'Accept' : 'application/json'}})
    .success(function(data) {
      var timeline = new VMM.Timeline();
      var source = angular.toJson(data);
      timeline.init(source);
    });
  })
}])

.controller('videoController', ['$scope', '$http', function($scope, $http) {
  $http.get('/video/get', {'headers' : {'Accept' : 'application/json'}})
  .success(function(data) {
    $scope.videos = data.videos;
  });
}]);


