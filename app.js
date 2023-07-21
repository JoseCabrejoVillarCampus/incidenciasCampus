import dotenv from 'dotenv';
import express from 'express';
import storageTipoIncidencia from './routes/tipo_incidencia.js';
import storageCategoria from './routes/categoria.js';
import storageReporte from './routes/reporte_incidencia.js';
import storageArea from './routes/area.js';
import storageEstado from './routes/estado.js';
import storageTrainners from './routes/trainners.js';
import storageSalon from './routes/salon.js';
import storagePantalla from './routes/pantalla.js';
import storageTorre from './routes/torre.js';
import storageTeclado from './routes/teclado.js';
import storageDiadema from './routes/diadema.js';
import storageMouse from './routes/mouse.js';
import storageEquipo from './routes/equipo.js';
import storageIncidencia from './routes/incidencia.js';
import storageTelefono from './routes/telefono.js';
import storageEmail from './routes/email.js';
import storageSalonTrainner from './routes/salon_trainner.js';


dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/tipo_incidencia", storageTipoIncidencia);
appExpress.use("/categoria", storageCategoria);
appExpress.use("/reporte_incidencia", storageReporte);
appExpress.use("/area", storageArea);
appExpress.use("/estado", storageEstado);
appExpress.use("/trainners", storageTrainners);
appExpress.use("/salon", storageSalon);
appExpress.use("/pantalla", storagePantalla);
appExpress.use("/torre", storageTorre);
appExpress.use("/teclado", storageTeclado);
appExpress.use("/diadema", storageDiadema);
appExpress.use("/mouse",storageMouse);
appExpress.use("/equipo", storageEquipo);
appExpress.use("/incidencia",storageIncidencia);
appExpress.use("/telefono",storageTelefono);
appExpress.use("/email",storageEmail);
appExpress.use("/salon_trainner",storageSalonTrainner);

const config =JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));


