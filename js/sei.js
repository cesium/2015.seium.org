angular.module('sei-app',['angular-carousel'])
.controller('eventCtrl',['$scope','$rootScope',function($scope,$rootScope){
    /*$scope.eventSlides = [
        {file:'event/14-fev.html', day:'14 Fev', weekday:'Sábado'},
        {file:'event/15-fev.html', day:'15 Fev', weekday:'Domingo'},
        {file:'event/16-fev.html', day:'16 Fev', weekday:'Segunda'},
        {file:'event/17-fev.html', day:'17 Fev', weekday:'Terça'},
        {file:'event/18-fev.html', day:'18 Fev', weekday:'Quarta'},
        {file:'event/19-fev.html', day:'19 Fev', weekday:'Quinta'},
        {file:'event/20-fev.html', day:'20 Fev', weekday:'Sexta'},
        {file:'event/21-fev.html', day:'21 Fev', weekday:'Sabado'}
    ];*/
    $scope.eventSlides = [
        {file:'event/17-fev.html', day:'14 Fev', weekday:'Sábado'},
        {file:'event/17-fev.html', day:'15 Fev', weekday:'Domingo'},
        {file:'event/17-fev.html', day:'16 Fev', weekday:'Segunda'},
        {file:'event/17-fev.html', day:'17 Fev', weekday:'Terça'},
        {file:'event/17-fev.html', day:'18 Fev', weekday:'Quarta'},
        {file:'event/17-fev.html', day:'19 Fev', weekday:'Quinta'},
        {file:'event/17-fev.html', day:'20 Fev', weekday:'Sexta'},
        {file:'event/17-fev.html', day:'21 Fev', weekday:'Sabado'}
    ];
    $scope.carouselEvents = 0;

    $rootScope.eventGoto = function(page){
        $scope.carouselEvents = page;
    }
}])
.controller('speakerCtrl',['$scope',function($scope){
    $scope.speakerSlides = [
        // slide 01#
        [
            {pic:'speaker/01.jpg', name:'Rui Oliveira01', position:'Developer' , enterprise:'Minho', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',
             about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        ],
        // slide 02#
        [
            {pic:'speaker/01.jpg', name:'Rui Oliveira02', position:'Developer' , enterprise:'Minho',facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',
             about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {pic:'speaker/01.jpg', name:'Rui Oliveira02', position:'Developer' , enterprise:'Minho', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        ],
        // slide 03#
        [
            {pic:'speaker/01.jpg', name:'Rui Oliveira03', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {pic:'speaker/01.jpg', name:'Rui Oliveira03', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {pic:'speaker/01.jpg', name:'Rui Oliveira03', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        ]
    ];
    $scope.carouselEvents = 0;
}])
.controller('organizationCtrl',['$scope',function($scope){
    $scope.staffSlides = [
        // slide 01#
        [
            {pic: 'speaker/asantos.jpg', name:'André Santos', position: 'Presidente', enterprise: 'Minho', facebook:'https://www.facebook.com/andreccdr', twitter: 'https://twitter.com/62Gerente', github: 'https://github.com/62Gerente'},
            {pic: 'speaker/mpinto.jpg', name:'Miguel Pinto', position: 'Vice Presidente', enterprise: 'Minho', facebook:'http://www.facebook.com/mcpinto98', twitter: 'https://twitter.com/mcpinto98', github: 'https://github.com/miguelpinto98'},
            {pic: 'speaker/fneves.jpg', name:'Francisco Neves', position: 'Director do departamento Pedagógico', enterprise: 'Minho', facebook:'https://www.facebook.com/fnversace', twitter: 'https://twitter.com/fntneves', github: 'https://github.com/fntneves'},
            {pic: 'speaker/fgomes.jpg', name:'Fábio Gomes', position: 'Vice Director do departamento Pedagógico', enterprise: 'Minho', facebook:'https://www.facebook.com/semnome.especial', twitter: 'https://twitter.com/SHIFTBASIC', github: 'https://github.com/MrFabio'},
            {pic: 'speaker/fmendes.jpg', name:'Fernando Mendes', position: 'Director do Centro de apoio ao Open Source', enterprise: 'Minho', facebook:'https://www.facebook.com/frmendes94', twitter: 'https://twitter.com/fribmendes', github: 'https://github.com/fribmendes'},
            {pic: 'speaker/maragão.jpg', name:'Martinho Aragão ', position: 'Vice Director do Centro de apoio ao Open Source', enterprise: 'Minho', facebook:'https://www.facebook.com/martinhoaragao.silva', twitter: 'https://twitter.com/martinhoaragao', github: 'https://github.com/martinhoaragao'},
            {pic: 'speaker/mmedeiros.jpg', name:'Mariana Medeiros', position: 'Vice Director do departamento de Comunicação e Imagem', enterprise: 'Minho', facebook:'https://www.facebook.com/mim063', twitter: 'https://twitter.com/MariMedeiros63', github: 'https://github.com/Mariana63'},
            {pic: 'speaker/roliveira.jpg', name:'Rui Oliveira', position: 'Web-Site Developer', enterprise: 'Minho', facebook:'https://www.facebook.com/rui.oliveiras', twitter: '', github: 'https://bitbucket.org/ruioliveiras'}
            {pic: 'speaker/pleite.jpg', name:'Pedro Leite', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/pmcleite', twitter: 'https://twitter.com/pmcleite', github: 'https://github.com/pmcleite'},
            {pic: 'speaker/pcardoso.jpg', name:'Paulo Cardoso', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/paulooboemio', twitter: 'https://twitter.com/HeadlessHeader', github: 'https://github.com/pcardosolei'},
            {pic: 'speaker/bferreira.jpg', name:'Bruno Ferreira', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/chalkos', twitter: 'https://twitter.com/chalkos', github: 'https://github.com/chalkos'},
            {pic: 'speaker/dduarte.jpg', name:'Duarte Duarte', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/duknust', twitter: 'https://twitter.com/duknust', github: 'https://github.com/duknust'},
        ],
        [
            {pic: 'speaker/psousa.jpg', name:'Paulo Sousa', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/34chronos', twitter: '', github: 'https://github.com/prsousa'},
            {pic: 'speaker/pcosta.jpg', name:'Pedro Costa', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/pedrocosta92', twitter: 'https://twitter.com/santosk20', github: 'https://github.com/santosk20'},
            {pic: 'speaker/msantos.jpg', name:'Mário Santos', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/Mario.Galay125', twitter: 'https://twitter.com/MarioSantos125', github: 'https://github.com/Galay125'},
            {pic: 'speaker/dlemos.jpg', name:'Diana Lemos', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/dianaguimaraes57', twitter: '', github: 'https://github.com/dianalemos'},
            {pic: 'speaker/dcarvalho.jpg', name:'Daniel Carvalho', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/dapcarvalho', twitter: 'https://twitter.com/dapcarvalho/', github: 'https://github.com/Insatisfeito'},
            {pic: 'speaker/daraujo.jpg', name:'Duarte Araújo', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/Duarte.Araujo1', twitter: 'https://twitter.com/PMDAraujo', github: 'https://github.com/PMDA'},
            {pic: 'speaker/jarantes.jpg', name:'Joana Arantes', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/joana.arantes.10', twitter: '', github: 'https://github.com/joanaarantes'},
            {pic: 'speaker/smendes.jpg', name:'Susana Mendes', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/susana.mendes.102', twitter: 'https://twitter.com/Su__Mendes', github: ''},
            {pic: 'speaker/jcosta.jpg', name:'João Costa', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/arnaldo.asturias.9', twitter: '', github: 'https://github.com/joaofcosta'},
            {pic: 'speaker/psilva.jpg', name:'Pedro Silva', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/miguelsilvaface', twitter: '', github: 'https://github.com/pedroSilva4'},
            {pic: 'speaker/foliveira.jpg', name:'Filipe Oliveira', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/filipecosta.90', twitter: '', github: ''},
            {pic: 'speaker/jsimao.jpg', name:'Jorge Simão', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/15manson', twitter: '', github: ''},
        ],
        [
            {pic: 'speaker/pcarneiro.jpg', name:'Pedro Carneiro', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/pedrosfdcarneiro', twitter: 'https://twitter.com/pedrosfdc', github: 'https://github.com/pedrosfdcarneiro'},
            {pic: 'speaker/pbarros.jpg', name:'Patricia Barros', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/patriciaaabarros', twitter: '', github: 'https://github.com/7patricia'},
            {pic: 'speaker/pmaia.jpg', name:'Pedro Maia', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/maiarib', twitter: '', github: 'https://github.com/PedroMaia'},
            {pic: 'speaker/pduarte.jpg', name:'Pedro Duarte', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/pedrodpduarte870', twitter: 'https://twitter.com/pedroduarte870', github: 'https://github.com/pedroduarte870'}
        ]
    ];
    $scope.carouselEvents = 0;
}]);












































































































