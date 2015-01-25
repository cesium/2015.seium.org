angular.module('sei-app',['angular-carousel'])
.controller('eventCtrl',['$scope',function($scope){
    $scope.eventSlides = [
        {file:'event/14-fev.html', day:'14 Fev', weekday:'Sábado'},
        {file:'event/15-fev.html', day:'15 Fev', weekday:'Domingo'},
        {file:'event/16-fev.html', day:'16 Fev', weekday:'Segunda'},
        {file:'event/17-fev.html', day:'17 Fev', weekday:'Terça'},
        {file:'event/18-fev.html', day:'18 Fev', weekday:'Quarta'},
        {file:'event/19-fev.html', day:'19 Fev', weekday:'Quinta'},
        {file:'event/20-fev.html', day:'20 Fev', weekday:'Sexta'},
        {file:'event/21-fev.html', day:'21 Fev', weekday:'Sabado'}
    ];
    $scope.carouselEvents = 0;
}]);
