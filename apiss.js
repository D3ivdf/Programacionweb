function consumoApi(){
    var fecha = [];
    var caldas = [];
    var antioquia = [];
    var bogota = [];
    //consumo de la api
    fetch("https://www.datos.gov.co/resource/8835-5baf.json")
    // then nececita una promesa, y esa promesa se resuelve con una respuesta convertida a json
    .then(respueta_exitosa => respueta_exitosa.json())
    .then(function(datos_obtenidos){
        datos_obtenidos.forEach(elemento => {
            if(elemento.fecha != undefined && elemento.caldas != undefined && 
                elemento.antioquia != undefined && elemento.bogota != undefined)
                {caldas.push(elemento.caldas);
                antioquia.push(elemento.antioquia);
                bogota.push(elemento.bogota);
                fecha.push(elemento.fecha);
            }
            
        });
        //variables para las graficas
        var graf1 = {
            y: caldas,
            x: fecha,
            name: 'Caldas',
            type: 'bar'
        };
        var graf2 = {
            y: antioquia,
            x: fecha,
            name: 'Antioquia',
            type: 'bar'
        };
        var graf3 = {
            y: bogota,
            x: fecha,
            name: 'Bogota',
            type: 'bar'
        };
        var datosGraficos = [graf1, graf2, graf3]
        var layout = {
            barmode: 'relative',
            title:{
                text: 'pruebas PCR realizadas en colombia',
            },
        };
        Plotly.newPlot('grafico', datosGraficos,layout);;
    });

}
consumoApi();