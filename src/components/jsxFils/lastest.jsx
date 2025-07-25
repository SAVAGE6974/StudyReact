import "../css/lastest.css";
import lastestImage from '../images/grandimg.jpg';
import AOS from 'aos';
import { useEffect } from 'react';


const Lastest = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,  // 애니메이션 시간 (ms)
            once: true,     // 한 번만 실행할지 여부
        });
    }, []);

    return (
        <div className="lastest">
            <h1 data-aos="fade-up" data-aos-delay="300">THE LASTEST</h1>
            <div className="lastest-content" 
            data-aos="fade-left" 
            data-aos-delay="900">
                <a href="">
                    <div className="content-card">
                        <h2>The Latest</h2>
                        <p>The Latest</p>
                        <img src={lastestImage} alt="lastest" />
                    </div>
                </a>
                <a href="">
                    <div className="content-card">
                        <h2>The Latest</h2>
                        <p>The Latest</p>
                        <img src={lastestImage} alt="lastest" />
                    </div>
                </a>
                <a href="">
                    <div className="content-card">
                        <h2>The Latest</h2>
                        <p>The Latest</p>
                        <img src={lastestImage} alt="lastest" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Lastest;
