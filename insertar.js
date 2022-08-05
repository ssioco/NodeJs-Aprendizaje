var axios = require('axios');
var data = JSON.stringify({
    "collection": "<COLLECTION_NAME>",
    "database": "<DATABASE_NAME>",
    "dataSource": "ADSI2364482",
    "document": {
         "Cedula":102244367,
         "Nombre":"José Aristizabal",
         "Edad":24,
         "Promedio":[3.8,4,3.5,4.2,4.1],
         "ProyectoFormativo":{"NombreProyecto":"Funeraria","Descripcion":"Proyecto de afiliacion a funeraria web","PorcentajeAvance":60},
         "PromedioAcumulado":3.92
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-cmiel/endpoint/data/v1/action/insertOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'Hnkke9l3K0fnNDFrgO5pptXfN0ITe1fckDXKaApJxMqRnOPLC4RQpU6U2a3vQ1eO',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });