import dotenv from 'dotenv';
import express from 'express';
import storageTipoIncidencia from './routes/tipo_incidencia.js';
import storageCategoria from './routes/categoria.js';
import storageReporte from './routes/reporte_incidencia.js';
import storageArea from './routes/area.js';
import storageEstado from './routes/estado.js';
import storageTrainners from './routes/trainners.js';
import storageSalon from './routes/salon.js';


dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/tipo_incidente", storageTipoIncidencia);
appExpress.use("/categoria", storageCategoria);
appExpress.use("/reporte", storageReporte);
appExpress.use("/area", storageArea);
appExpress.use("/estado", storageEstado);
appExpress.use("/trainners", storageTrainners);
appExpress.use("/salon", storageSalon);

const config =JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));


