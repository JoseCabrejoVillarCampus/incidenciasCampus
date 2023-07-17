import mysql from 'mysql2';
import {Router} from 'express';
import proxyCategoria from '../middleware/categoriamiddleware.js';
const storageCategoria = Router();
let con = undefined;

storageCategoria.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageCategoria.get("/:id?", (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT * FROM categoria WHERE id_categoria = ?`, req.params.id]
        : [`SELECT * FROM categoria`];
    con.query(...sql,
        (err, data, fie)=>{
            res.send(data);
        }
    );
})

storageCategoria.post("/", proxyCategoria ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO categoria SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear categoria:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageCategoria.put("/:id", proxyCategoria ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE categoria SET ?  WHERE id_categoria = ?`,
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
storageCategoria.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM categoria WHERE id_categoria = ?`,
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


export default storageCategoria;