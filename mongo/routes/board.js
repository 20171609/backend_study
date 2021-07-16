const express = require('express');
const router = express.Router();
const Board = require('../Schema/board');

// 사용자 전체 조회
router.get('/board', (req, res, next) => {
    Board.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        })
});

// 유저 생성
router.post('/board', (req, res, next) => {
    const Boardcontext = new Board();
    Boardcontext.title = req.body.title;
    Boardcontext.body = req.body.body;

    Boardcontext.save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        })
})

module.exports = router;