import mysql from 'mysql2';
import {Router} from 'express';
import proxyArea from '../middleware/areamiddleware.js';
const storageArea = Router();
let con = undefined;

storageArea.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageArea.get("/:id?", (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT * FROM area WHERE id_area = ?`, req.params.id]
        : [`SELECT * FROM area`];
    con.query(...sql,
        (err, data, fie)=>{
            res.send(data);
        }
    );
})

storageArea.post("/", proxyArea ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO area SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear area:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageArea.put("/:id", proxyArea ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE area SET ?  WHERE id_area = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar area:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageArea.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM area WHERE id_area = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar area:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageArea;