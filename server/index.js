const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const User = mongoose.model('User', {
    username: String,
    password: String,
});

// 회원가입
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ message: '이미 존재하는 사용자입니다.' });

    const user = new User({ username, password });
    await user.save();
    res.json({ message: '회원가입 완료!' });
});

// 로그인
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) return res.status(401).json({ message: '로그인 실패' });

    res.json({ message: '로그인 성공!' });
});

app.listen(5000, () => console.log('서버 실행 중 http://localhost:5000'));
