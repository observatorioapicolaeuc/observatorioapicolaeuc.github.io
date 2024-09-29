// function initMap() {
    
//     var center = { lat: -14.235004, lng: -51.92528 };

    
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 6,
//         center: center
//     });

//     // Exemplo de marcador para um apiário
//     var apiario1 = new google.maps.Marker({
//         position: { lat: -12.971599, lng: -38.501206 },
//         map: map,
//         title: 'Apiário 1'
//     });

//     // Adicione mais marcadores para outros apiários

//     // Personalize os marcadores e informações adicionais conforme necessário
// }
function initMap() {

   

    // Coordenadas do Obeservatório 
    var center = { lat: -10.5077, lng: -39.0159 };
    // Opções do mapa
    var mapOptions = {
        zoom: 10,
        center: center,
    };
    // Crie um mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // Array de objetos com informações sobre os pontos
    var apiarios = [
        { nome: 'Observatório Apícola', lat: -10.5077, lng: -39.0159, descricao:'Observatório Apícola' },
        { nome: 'APIÁRIO IRANDI SOUZA LIMA', lat: -10.52377, lng: -38.90462, descricao:'APIÁRIO IRANDI SOUZA LIMA' },
        { nome: 'APIÁRIO IZAEL', lat: -10.51385, lng: -38.84638, descricao:'APIÁRIO IZAEL' },
        { nome: 'APIÁRIO ALBERTO E ACÁSIO', lat: -10.50233, lng: -38.74745, descricao:'APIÁRIO ALBERTO E ACÁSIO' },
        { nome: 'APIÁRIO JOSÉ ALVES', lat: -10.49954, lng: -38.74684, descricao:'APIÁRIO JOSÉ ALVES' }
        // Adicione mais apiários conforme necessário
    ];

    // Loop para criar marcadores para cada apiário
    for (var i = 0; i < apiarios.length; i++) {
        var apiario = apiarios[i];
        
        var marker = new google.maps.Marker({
            position: { lat: apiario.lat, lng: apiario.lng },
            map: map,
            title: apiario.nome
        });

        function createInfoWindow(infoContent) {
            return new google.maps.InfoWindow({
                content: infoContent
            });
        }

        var infoContent = apiario.nome;

        // Crie uma instância de InfoWindow para o marcador atual
        var infoWindow = createInfoWindow(infoContent);

        // Adicione um evento de clique para mostrar a janela de informações
        //função imediatamente invocada (IIFE)
		marker.addListener('click', (function (infoWindow) {
		    return function () {
		        map.panTo(this.getPosition()); // Move o centro do mapa para a posição do marcador
		        map.setZoom(16);
		        infoWindow.open(map, this);
		    };
		})(infoWindow));
    }
}
