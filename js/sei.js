angular.module('sei-app',['angular-carousel'])
.controller('eventCtrl',['$scope','$rootScope',function($scope,$rootScope){
    $scope.eventSlides = [
        {file:'events/14-fev.html', day:'14 Fev', weekday:'Sábado'},
        {file:'events/16-fev.html', day:'16 Fev', weekday:'Segunda'},
        {file:'events/17-fev.html', day:'17 Fev', weekday:'Terça'},
        {file:'events/18-fev.html', day:'18 Fev', weekday:'Quarta'},
        {file:'events/19-fev.html', day:'19 Fev', weekday:'Quinta'},
        {file:'events/20-fev.html', day:'20 Fev', weekday:'Sexta'},
        {file:'events/21-fev.html', day:'21 Fev', weekday:'Sábado'},
    ];
    $scope.carouselEvents = 0;
    var counter = 0;
    $scope.marteladaIncludeFeito = function(){
        counter++;
        if (counter=== $scope.eventSlides.length){
            window.marteladaRefresh();
        }
    }

    $rootScope.eventGoto = function(page){
        $scope.carouselEvents = page;
    }
}])
.controller('speakerCtrl',['$scope','$window','$rootScope',function($scope,$window,$rootScope){
     var speakers =
        // slide 01#
        [
            {pic:'img/speakers/hpinto.jpg', name:'Hélder Pinto', position:'3D Environment Artist' , enterprise:[{name:'Blizzard', enterpriseUrl:'http://eu.blizzard.com/'}], web:'http://www.helderpinto.com/' , twitter:'https://twitter.com/HelderHP', github:'',
                about:'Começou carreira profissional na indústria dos vídeo jogos em terras Lusitanas na Seed Studios, no ano de 2007, onde trabalhou no jogo Under Siege Game, partindo depois para a Alemanha, onde ajudou a embelezar os ambientes de Crysis 2 e 3 antes de finalmente começar na Blizzard na Califórnia onde de momento trabalha no jogo Overwatch.'},
            {pic:'img/speakers/lfonseca.jpg', name:'Luís Fonseca', position:'Lead Interactive Developer' , enterprise:[{name:'X-Team',enterpriseUrl:'http://x-team.com/'}], web:'http://luispedrofonseca.com/' , twitter:'https://twitter.com/lpfonseca', github:'',
                about:'Com mais de uma década de experiência num leque muito variado de tecnologias, desde Unity a Objective-C passando pelo Javascript e Flash, focou-se fortemente, nos últimos anos, em desenvolvimento de jogos e aplicações mobile. Faz parte da X-Team desde 2008 onde trabalha, em parceria, para empresas como RIOT Games, Dreamworks, FOX Broadcasting, Microsoft, etc., criando projectos que alcançam todos os dias milhões de utilizadores.'},
            {pic:'img/speakers/rdescoffier.png', name:"Rafael D'Escoffier", position:'Developer' , enterprise:[{name:'BloomIdea',enterpriseUrl:'http://bloomidea.com/'}], web:'http://bloomidea.com/' , twitter:'', github:'',
                about:'Estudante de Engenharia Informática na Universidade do Minho e programador na BloomIdea, com foco especial no desenvolvimento de soluções na área das aplicações móveis. Otimista incurável e geek praticante, apaixonado pela tecnologia, natureza e desporto.'},
            {pic:'img/speakers/fcosta.jpg', name:'Francisco Costa', position:'CEO & Founder',
                enterprise:[{name:'Tricubo,',enterpriseUrl:'https://tricubo.com/'}, {name:'Chique,',enterpriseUrl:'https://chique.pt/'}, {name:'TYMR,',enterpriseUrl:'https://tymr.com/'}, {name:'Venture FC',enterpriseUrl:'https://venturefc.co/'}],
                web:'https://franciscocosta.com/' , twitter:'https://twitter.com/franciscocosta', github:'',
                about:'Empreendedor de sucesso, licenciado em Engenharia de Sistemas e Informática pela Universidade do Minho. Apaixonado por tecnologia, conta já com mais de uma década de experiência e muito sucesso acumulado em diversas áreas como E-Commerce, Social Shopping e Digital Marketing'},
            {pic:'img/speakers/nfernandes.png', name:'Nuno Fernandes', position:'D&R Director' , enterprise:[{name:'Eurotux',enterpriseUrl:'http://eurotux.com/'}], web:'http://www.eurotux.com' , twitter:'', github:'',
                about:'Licenciado pela Universidade do Minho em Engenharia de Sistemas e Informática é actualmente Director de Investigação e Desenvolvimento da Eurotux Informática. Co-Autor do livro Apache Instalação, Configuração Gestão Servidores Web, editado pela FCA, tem sido responsável pela implementação de diversos projectos de infra-estruturas tecnológicas de grande porte.'},
            {pic:'img/speakers/rantunes.jpg', name:'Rui Antunes', position:'Fundador FPV Portugal' , enterprise:[{name:'FPV',enterpriseUrl:'http://fpvportugal.com/'}], web:'http://fpvportugal.com/' , twitter:'', github:'',
                about:'Sempre se interessou com tudo o que estava relacionado com tecnologia e desde alguns anos que tem experiência em aeromodelismo, há cerca de 4 anos começou a ter contacto com multirotores. Actualmente frequenta o 2o ano de Engenharia Informática na Escola Superior de Tecnologia de Castelo Branco.'},
            {pic:'img/speakers/fmendes.jpg', name:'Francisco Mendes', position:'Entrepreneur & Creator' , enterprise:[{name:'Bee Very Creative',  enterpriseUrl:'https://beeverycreative.com/'}], web:'https://www.beeverycreative.com' , twitter:'https://twitter.com/fmendes75/', github:'',
                about:'Empreendedor apaixonado por tecnologia. Licenciado em Engenharia Electrónica e Telecomunicações e pós-graduado em Engenharia de Automação Industrial, ambos pela Universidade de Aveiro, começou a sua carreira profissional como Engenheiro de I&D e posteriormente como director de Hardware. No final de 2010, juntou-se a Jorge Pinto e fundaram a bitBOX Electronic Systems na incubadora de empresas da Universidade de Aveiro, que mais tarde tornou-se na BEEVERYCREATIVE, a empresa que criou a primeira impressora 3D portuguesa.'},
            {pic:'img/speakers/pvieira.jpg', name:'Paulo Vieira', position:'Developer' , enterprise:[{name:'iMobileMagic',  enterpriseUrl:'http://www.imobilemagic.com/'}], web:'http://www.imobilemagic.com/' , twitter:'https://twitter.com/imobilemagic', github:'',
                about:'Licenciado em Engenharia Informática pela Universidade do Minho, ao longo dos anos, tem estado envolvido na maioria dos projetos e produtos em que a ImobileMagic tem trabalhado, com um foco particular em desenvolvimento de soluções multimédia para vários clientes e no produto de localização e proteção familiar PhoneNear Family Safety. Tem uma experiência já muito vasta em aplicações móveis e, em particular, no ecossistema iOS'},
            {pic:'img/speakers/rfiqueira.jpg', name:'Rui Figueira', position:'Behaviour Driven Development with Minium' , enterprise:[{ name:'Vilt',  enterpriseUrl:'http://www.vilt-group.com'}], web:'http://www.vilt-group.com/en/' , twitter:'', github:'https://github.com/ruifigueira',
                about:'Tem 10 anos de experiência em desenvolvimento web, principalmente em Java. Adora programar e automatizar tarefas aborrecidas (de aborrecido a divertido), e por isso criou o Minium, uma ferramenta para automatização de tarefas e testes web no browser.'},
            {pic:'img/speakers/mpalhas.jpg', name:'Miguel Palhas', position:'Software Developer & SysAdmin' , enterprise:[{ name:'Group Buddies',  enterpriseUrl:'https://groupbuddies.com/'}], web:'' , twitter:'https://twitter.com/Naps62', github:'https://github.com/naps62',
                about:'Formado na Universidade do Minho, especializou-se em Computação Paralela e Distríbuida e Computação Gráfica, mantendo ainda hoje a sua paixão por alta performance e o sonho de um dia se tornar Game Developer. Actualmente, é Software Developer e SysAdmin na Group Buddies, empresa à qual se juntou para poder continuar a experimentar novas tecnologias e trabalhar em projectos aliciantes. Fez parte da organização da primeira RubyConf Portugal e é um contribuidor extremamente activo para a comunidade de Open Source'}
                  
        ];

        $scope.$watch(function(){
            return $window.innerWidth;
        }, function(value) {
            if ($window.innerWidth < 768) {
                $scope.speakerSlides = [];
                for (var i = 0; i< speakers.length; i++) {
                    $scope.speakerSlides.push([speakers[i]]);
                };
            } else {
                $scope.speakerSlides = [[],[],[],[]];
                for (var i = 0; i< speakers.length; i++) {
                    $scope.speakerSlides[Math.trunc(i/3)].push(speakers[i]);
                };
            }
        });

    $rootScope.speakerGoto = function(speakerName){
        for (var i = $scope.speakerSlides.length - 1; i >= 0; i--) {
            for (var j = $scope.speakerSlides[i].length - 1; j >= 0; j--) {
                if ($scope.speakerSlides[i][j].name === speakerName) {
                    $scope.carouselSpeakers = i;
                }
            };
        };
    }
    $scope.carouselSpeakers = 0;
}])

.controller('organizationCtrl',['$scope','$window',function($scope,$window){
    var staffs= [
        // slide 01#
            {pic: 'img/staff/asantos.jpg', name:'André Santos', position: 'Presidente', enterprise: 'Minho', facebook:'https://www.facebook.com/andreccdr', twitter: 'https://twitter.com/62Gerente', github: 'https://github.com/62Gerente',linkedin:'asdasd'},
            {pic: 'img/staff/mpinto.jpg', name:'Miguel Pinto', position: 'Vice Presidente', enterprise: 'Minho', facebook:'http://www.facebook.com/mcpinto98', twitter: 'https://twitter.com/mcpinto98', github: 'https://github.com/miguelpinto98'},
            {pic: 'img/staff/pduarte.jpg', name:'Pedro Duarte', position: 'Vice Presidente', enterprise: 'Minho', facebook:'https://www.facebook.com/pedrodpduarte870', twitter: 'https://twitter.com/pedroduarte870', github: 'https://github.com/pedroduarte870'},
            {pic: 'img/staff/pmaia.jpg', name:'Pedro Maia', position: 'Tesoureiro', enterprise: 'Minho', facebook:'https://www.facebook.com/maiarib', twitter: '', github: 'https://github.com/PedroMaia'},
            {pic: 'img/staff/pbarros.jpg', name:'Patricia Barros', position: 'Secretária', enterprise: 'Minho', facebook:'https://www.facebook.com/patriciaaabarros', twitter: '', github: 'https://github.com/7patricia'},
            {pic: 'img/staff/fmendes.jpg', name:'Fernando Mendes', position: 'Director do Centro de Apoio ao Open Source', enterprise: 'Minho', facebook:'https://www.facebook.com/frmendes94', twitter: 'https://twitter.com/fribmendes', github: 'https://github.com/frmendes'},
            {pic: 'img/staff/maragao.jpg', name:'Martinho Aragão ', position: 'Vice Director do Centro de Apoio ao Open Source', enterprise: 'Minho', facebook:'https://www.facebook.com/martinhoaragao.silva', twitter: 'https://twitter.com/martinhoaragao', github: 'https://github.com/martinhoaragao'},
            {pic: 'img/staff/fneves.jpg', name:'Francisco Neves', position: 'Director do Departamento Pedagógico', enterprise: 'Minho', facebook:'https://www.facebook.com/fnversace', twitter: 'https://twitter.com/fntneves', github: 'https://github.com/fntneves'},
            {pic: 'img/staff/fgomes.jpg', name:'Fábio Gomes', position: 'Vice Director do Departamento Pedagógico', enterprise: 'Minho', facebook:'https://www.facebook.com/semnome.especial', twitter: 'https://twitter.com/SHIFTBASIC', github: 'https://github.com/MrFabio'},
            {pic: 'img/staff/sei.jpg', name:'Tiago Cunha', position: 'Director do Departamento Recreativo', enterprise: 'Minho', facebook:'https://www.facebook.com/Apocalipse.113', twitter: '', github: ''},
            {pic: 'img/staff/sei.jpg', name:'Pedro Faria', position: 'Vice Director do Departamento Recreativo', enterprise: 'Minho', facebook:'https://www.facebook.com/NoventaESeis', twitter: '', github: ''},
            {pic: 'img/staff/sei.jpg', name:'Gil Gonçalves', position: 'Vice Director do Departamento Recreativo', enterprise: 'Minho', facebook:'https://www.facebook.com/gil.goncalves.161', twitter: '', github: ''},
            {pic: 'img/staff/foliveira.jpg', name:'Filipe Oliveira', position: 'Diretor do Departamento de Comunicação e Imagem', enterprise: 'Minho', facebook:'https://www.facebook.com/filipecosta.90', twitter: '', github: ''},
            {pic: 'img/staff/mmedeiros.jpg', name:'Mariana Medeiros', position: 'Vice Directora do Departamento de Comunicação', enterprise: 'Minho', facebook:'https://www.facebook.com/mim063', twitter: 'https://twitter.com/MariMedeiros63', github: 'https://github.com/Mariana63'},
            {pic: 'img/staff/jsimao.jpg', name:'Jorge Simão', position: 'Vice Diretor do Departamento de Imagem', enterprise: 'Minho', facebook:'https://www.facebook.com/15manson', twitter: '', github: ''},
            {pic: 'img/staff/psousa.jpg', name:'Paulo Sousa', position: 'Diretor do Dep. de Relações Externas e Parcerias', enterprise: 'Minho', facebook:'https://www.facebook.com/34chronos', twitter: '', github: 'https://github.com/prsousa'},
            {pic: 'img/staff/msantos.jpg', name:'Mário Santos', position: 'Vice Diretor do Dep. de Relações Externas e Parcerias', enterprise: 'Minho', facebook:'https://www.facebook.com/Mario.Galay125', twitter: 'https://twitter.com/MarioSantos125', github: 'https://github.com/Galay125'},
            {pic: 'img/staff/spinto.jpg', name:'Serafim Pinto', position: 'Vogal', enterprise: 'Minho', facebook:'', twitter: 'https://twitter.com/serafimmcp', github: 'https://github.com/serafimpinto'},
            {pic: 'img/staff/pcarneiro.jpg', name:'Pedro Carneiro', position: 'Vogal', enterprise: 'Minho', facebook:'https://www.facebook.com/pedrosfdcarneiro', twitter: 'https://twitter.com/pedrosfdc', github: 'https://github.com/pedrosfdcarneiro'},
            {pic: 'img/staff/sei.jpg', name:'Sandra Ferreira', position: 'Vogal', enterprise: 'Minho', facebook:'https://www.facebook.com/sandra.ferreira.96742', twitter: '', github: ''},
            {pic: 'img/staff/mleite.jpg', name:'Mário Leite', position: 'Vogal', enterprise: 'Minho', facebook:'https://www.facebook.com/mario.leite.80', twitter: 'https://twitter.com/marioleite80', github: 'https://github.com/maleite'},
            {pic: 'img/staff/dcarvalho.jpg', name:'Daniel Carvalho', position: 'Assembleia Geral', enterprise: 'Minho', facebook:'https://www.facebook.com/dapcarvalho', twitter: 'https://twitter.com/dapcarvalho/', github: 'https://github.com/Insatisfeito'},
            {pic: 'img/staff/sei.jpg', name:'Ricardo Branco', position: 'Assembleia Geral', enterprise: 'Minho', facebook:'https://www.facebook.com/ricardobranco28', twitter: '', github: ''},
            {pic: 'img/staff/sei.jpg', name:'André Pimenta', position: 'Conselho Fiscal', enterprise: 'Minho', facebook:'https://www.facebook.com/pimenta53', twitter: '', github: ''},
            {pic: 'img/staff/pleite.jpg', name:'Pedro Leite', position: 'Conselho Fiscal', enterprise: 'Minho', facebook:'https://www.facebook.com/pmcleite', twitter: 'https://twitter.com/pmcleite', github: 'https://github.com/pmcleite'},
            {pic: 'img/staff/roliveira.jpg', name:'Rui Oliveira', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/rui.oliveiras', twitter: '', github: 'https://bitbucket.org/ruioliveiras'},
            {pic: 'img/staff/jcosta.jpg', name:'João Costa', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/arnaldo.asturias.9', twitter: '', github: 'https://github.com/joaofcosta'},
            {pic: 'img/staff/pcardoso.jpg', name:'Paulo Cardoso', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/paulooboemio', twitter: 'https://twitter.com/HeadlessHeader', github: 'https://github.com/pcardosolei'},
            {pic: 'img/staff/jarantes.jpg', name:'Joana Arantes', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/joana.arantes.10', twitter: '', github: 'https://github.com/joanaarantes'},
            {pic: 'img/staff/smendes.jpg', name:'Susana Mendes', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/susana.mendes.102', twitter: 'https://twitter.com/Su__Mendes', github: ''},
            {pic: 'img/staff/dduarte.jpg', name:'Duarte Duarte', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/duknust', twitter: 'https://twitter.com/duknust', github: 'https://github.com/duknust'},
            {pic: 'img/staff/bferreira.jpg', name:'Bruno Ferreira', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/chalkos', twitter: 'https://twitter.com/chalkos', github: 'https://github.com/chalkos'},
            {pic: 'img/staff/pcosta.jpg', name:'Pedro Costa', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/pedrocosta92', twitter: 'https://twitter.com/santosk20', github: 'https://github.com/santosk20'},
            {pic: 'img/staff/dlemos.jpg', name:'Diana Lemos', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/dianaguimaraes57', twitter: '', github: 'https://github.com/dianalemos'},
            {pic: 'img/staff/sei.jpg', name:'Duarte Araújo', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/Duarte.Araujo1', twitter: 'https://twitter.com/PMDAraujo', github: 'https://github.com/PMDA'},
            {pic: 'img/staff/psilva.jpg', name:'Pedro Silva', position: 'Membro', enterprise: 'Minho', facebook:'https://www.facebook.com/miguelsilvaface', twitter: '', github: 'https://github.com/pedroSilva4'},
            {pic: 'img/staff/jfarinha.jpg', name:'João Farinha', position: 'Membro', enterprise: 'Minho',facebook: '',twitter:'',github:'' },
            {pic: 'img/staff/hgoncalves.jpg', name:'Hélder Gonçalves', position: 'Membro', enterprise: 'Minho',facebook: '',twitter:'https://twitter.com/heldergon92',github:'https://github.com/HelderGoncalves92' }
    ];/*
*/

    // $scope.staffSlides
    $scope.$watch(function(){
        return $window.innerWidth;
    }, function(value) {
            if ($window.innerWidth < 768) {
            $scope.staffSlides = [[]];
            var  slidePos= 0,slidei = 0; // slidePos the position in the slide, slidei the index of the slide
            for (var staffi = 0; staffi< staffs.length; staffi++) {
                $scope.staffSlides[slidei].push(staffs[staffi]);
                if (slidePos<11){
                    slidePos++;
                } else if(staffi< staffs.length - 1) {
                    slidePos = 0;
                    slidei++;
                    $scope.staffSlides.push([]);
                }
            };
        } else {
            $scope.staffSlides = [[]];
            var  slidePos = 0, slidei = 0; // slidePos the position in the slide, slidei the index of the slide
            for (var staffi = 0; staffi< staffs.length; staffi++) {
                $scope.staffSlides[slidei].push(staffs[staffi]);

                if (slidePos<17){
                    slidePos++;
                } else if(staffi< staffs.length - 1){
                    slidePos = 0;
                    slidei++;
                    $scope.staffSlides.push([]);
                }
            };
        }
        $scope.carouselOrganization = 0;
    });

    $scope.carouselOrganization = 0;
}]);
