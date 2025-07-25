import "../css/main.css";
import AOS from 'aos';
import 'aos/dist/aos.css';   // 이거 꼭 추가!
import { useEffect } from 'react';

const Main = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,  // 애니메이션 시간 (ms)
            once: true,     // 한 번만 실행할지 여부
        });
    }, []);

    return (
        <div className="main">
            <h1>Main</h1>
        </div>
    )
}

export default Main;
