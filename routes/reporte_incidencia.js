import mysql from 'mysql2';
import {Router} from 'express';
import proxyReporteIncidencia from '../middleware/reportemiddleware.js';
const storageReporte = Router();
let con = undefined;

storageReporte.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageReporte.get("/:id?", proxyReporteIncidencia ,(req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT * FROM reporte_incidencia WHERE id_reporte = ?`, req.params.id]
        : [`SELECT * FROM reporte_incidencia`];
    con.query(...sql,
        (err, data, fie)=>{
            res.send(data);
        }
    );
})

storageReporte.post("/", proxyReporteIncidencia ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO reporte_incidencia SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear reporte:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageReporte.put("/:id", proxyReporteIncidencia ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE reporte_incidencia SET ?  WHERE id_reporte = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar categoria:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageReporte.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM reporte_incidencia WHERE id_reporte = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar categoria:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageReporte;