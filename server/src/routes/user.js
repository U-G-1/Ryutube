const express = require('express');
const userController = require("../controllers/userController")

const router = express.Router();


router.post('/idCheck', userController.idCheck);



const userModel = require('../db/models/userModel'); // user 모델 불러오기
const jwt = require('jsonwebtoken'); // jwt 토큰 사용을 위해 모듈 불러오기
const { generateToken } = require('../utils/jwt'); // jwt 토큰 생성 파일 불러오기

// 코드 생략 . . .
// 로그인 로직 구현
    async login(req, res) {

        // 유저 아이디, 비밀번호 받아옴
        const { userId, password } = req;

        // 아이디로 해당 유저 검색
        const user = await userModel.findByUserId(userId);

        // 아이디가 db에 없을 경우 에러 메세지 전송
        if (!user) {
            throw new Error('가입되지 않은 아이디 입니다.');
        }

        // 비밀번호 일치 여부 확인
        const isMatched = await bcrypt.compare(password, user.password);

        // 일치하지 않을 경우 에러 메세지 전송
        if (!isMatched) {
            throw new Error('비밀번호가 일치하지 않습니다.');
        }

        // 유저 id, 관리자 여부 객체로 토큰 페이로드 정보 생성
        const payload = {
            userId: user.userId,
            isAdmin: user.isAdmin,
        };

        // jwt.js에서 작성된 토큰 생성 코드 실행
        const token = generateToken(payload);

        // 'token' 이라는 쿠키 이름으로 토큰 저장, 'httpOnly' 옵션으로 접근 보호
        // 'maxAge' 옵션을 3600000(1시간, 밀리초) 설정
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
        res.json({ message: '성공적으로 로그인 되었습니다.', user, token });
    };

    // 로그아웃 로직 구현
    logout(req, res) {
        const token = req.cookies.token;

        if (!token) {
            res.status(400).json({ message: '토큰이 없습니다. 로그인 상태를 확안하세요.' });
            return;
        }

        const decoded = jwt.decode(token);

        if (!decoded) {
            res.status(401).json({ message: '잘못된 토큰입니다. 로그인 상태를 확인하세요.' });
            return;
        }

        res.clearCookie('token'); // 로그아웃시 쿠키 삭제
        res.json({ message: '로그아웃 되었습니다.' });
    };