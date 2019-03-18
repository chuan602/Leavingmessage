const express = require("express");
const mysql = require("mysql");
const sd = require("silly-datetime");
const router = express.Router();
const md5 = require("md5");
const fs = require('fs');
const path = require('path');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "leavingmessage",
    timezone: "00:00"
});
connection.connect();

const pageSize = 10;

//项目入口页面
router.get('/', function (req, res) {
    res.render('index');
})

//获取指定页数的list
router.get("/list", function(req, res) {
    try {
        let originalStr = req.originalUrl.match(
            /\?([A-Za-z\d+/][A-Za-z\d+/=]|==)+$/
        );
        let base = originalStr[0].slice(1);
        let b = new Buffer(base, "base64");
        let s = b.toString();
        let page = s.match(/\d+$/)[0];

        connection.query(
            `select * from tb_list order by date DESC limit 10 offset ${(page -
                1) *
                pageSize}`,
            function(err, ret) {
                if (err) {
                    res.sendStatus(500);
                }
                res.json(ret);
            }
        );
    } catch (error) {
        res.sendStatus(404);
    }
});

//获取总留言数
router.get("/totalCount", function(req, res) {
    connection.query(`select count(*) as totalCount from tb_list`, function(
        err,
        ret
    ) {
        if (err) throw err;
        res.send(ret);
    });
});

//插入留言数据
router.post("/addMessage", function(req, res) {
    const msg = req.body.msg;
    connection.query(
        `INSERT INTO tb_list VALUES(NULL,'${msg}','${sd.format(new Date())}')`,
        function(err, ret) {
            if (err) res.sendStatus(500);
            res.send(ret);
        }
    );
});

//验证登陆信息
router.post("/login", function(req, res) {
    let loginInfo = req.body;
    //md5加密后传输
    loginInfo.password = md5(loginInfo.password);
    connection.query(
        `SELECT * FROM tb_user WHERE usename = '${
            loginInfo.userName
        }' and password = '${loginInfo.password}'`,
        function(err, ret) {
            if (err) res.sendStatus(500);
            res.json(ret);
        }
    );
});

//删除指定id的留言
router.post("/delete", function (req, res) {
    const id = req.body.id;
    connection.query(`DELETE FROM tb_list WHERE id = ${ id }`, function (err, ret) {
        if(err) res.sendStatus(500);
        res.json(ret);
    })

})

module.exports = router;
