import mysql from 'mysql2';
import {Router} from 'express';
import proxyTrainners from '../middleware/trainnersmiddleware.js';
const storageTrainners = Router();
let con = undefined;

storageTrainners.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageTrainners.get("/:id?", proxyTrainners ,(req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT * FROM trainners WHERE id_trainner = ?`, req.params.id]
        : [`SELECT * FROM trainners`];
    con.query(...sql,
        (err, data, fie)=>{
            res.send(data);
        }
    );
})

storageTrainners.post("/", proxyTrainners ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO trainners SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear trainner:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageTrainners.put("/:id", proxyTrainners ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE trainner SET ?  WHERE id_trainner = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar trainner:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageTrainners.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM trainners WHERE id_trainner = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar trainner:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageTrainners;