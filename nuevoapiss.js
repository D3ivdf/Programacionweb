function consumoApi(){
    var fecha = [];
    var  casanare = [];
    var meta = [];
    var cauca = [];
    //consumo de la api
    fetch("https://www.datos.gov.co/resource/8835-5baf.json")
    // then nececita una promesa, y esa promesa se resuelve con una respuesta convertida a json
    .then(respueta_exitosa => respueta_exitosa.json())
    .then(function(datos_obtenidos){
        datos_obtenidos.forEach(elemento => {
            if(elemento.fecha != undefined && elemento.casanare != undefined && 
                elemento.meta != undefined && elemento.cauca != undefined)
                {casanare.push(elemento.casanare);
                meta.push(elemento.meta);
                cauca.push(elemento.cauca);
                fecha.push(elemento.fecha);
            }
            
        });
        //variables para las graficas
        var graf1 = {
            y: casanare,
            x: fecha,
            name: 'Casanare',
            type: 'scatter'
        };
        var graf2 = {
            y: meta,
            x: fecha,
            name: 'Meta',
            type: 'scatter'
        };
        var graf3 = {
            y: cauca,
            x: fecha,
            name: 'Cauca',
            type: 'scatter'
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