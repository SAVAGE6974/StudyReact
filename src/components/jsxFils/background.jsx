import "../css/background.css";

const Background = (backgrounds) => {
    return (
        <div className="background">
            <img src={backgrounds.background} alt="background" />
        </div>
    )
}

export default Background;