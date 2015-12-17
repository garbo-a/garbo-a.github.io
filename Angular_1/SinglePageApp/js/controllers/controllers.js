app.controller('Homepage',['$scope',function($scope){
    $scope.homepage = "Главная";
}]);
app.controller('About',['$scope', function($scope){
    $scope.about = "Some txt about us...";
}]);
app.controller('Date',['$scope', function($scope) {
    $scope.now = new Date();
}]);