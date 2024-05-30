const loginRequired = require('../middlewares/login-required'); // 로그인 확인 미들웨어 불러오기 (로그인이 필요한 기능이 있을시 해당 라우터에 사용됨)

// 로그인 라우터
router.post('/login', async (req, res) => {
    try {
        await userService.login(req.body, res);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message }); // JSON 형식으로 에러 메시지 반환
    }
});

// 로그아웃 라우터
// 쿠키에서 토큰을 제거하는 작업은 동기적인 작업이므로, async 처리 불필요
router.post('/logout', (req, res) => {
    try {
        userService.logout(req, res);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message }); // JSON 형식으로 에러 메시지 반환
    }
});