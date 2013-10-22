angular.module('starter', [])
  .controller('PeopleCtrl', function ($scope, $http) {
    $scope.login = function() {
      console.log({'person': $scope.me})
      $http.post('/login', JSON.stringify({'person': $scope.me}), {'headers': {'Accept': 'application/json', 'Content-Type': 'application/json'}})
        .success(function(data, status, headers, config) {
            $scope.userData = data;
            $scope.apply();
        });
    };
    $http.get('/people', {'headers': {'Accept': 'application/json'}})
    .success(function(data, status, headers, config) {
        $scope.people = data['people'];
    })
    .error(function(data, status, headers, config) {
    });
  });