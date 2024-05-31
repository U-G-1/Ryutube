const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../database/models/user');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('join');
});

router.post('/join', async (req, res, next) => {
    const { email, name, password } = req.body; // 바디에서 제출된거 가져옴
    try {
        const exUser = await User.findOne({ where: { email } }) // 이메일을 통해 사용자를 데이터베이스에서 찾음
        if (exUser) {
            return res.redirect('/join?error=exist'); // 사용자가 이미 존재하는 경우 오류를 포함하여 회원가입 페이지로 리디렉션
        }
        const hash = await bcript.hash(password, 12); // 비밀번호를 해싱
        await User.create({     // 새로운 사용자를 데이터베이스에 생성
            email,
            name,
            password: hash,
        });
        return res.redirect('/');
    } catch (error) {
        console.error(error);
        return next(error);
    }
});



module.exports = router;