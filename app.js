var app = angular.module('myApp', []);

app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header containing XMLHttpRequest used to identify ajax call 
    //that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('MainCtrl', function($scope, $http) {
    $http.get("https://api.kawalcorona.com/indonesia/").success(function(result) {
        console.log("Success", result);
        $scope.resultGet = result;
    }).error(function() {
        console.log("error");
    });
});


