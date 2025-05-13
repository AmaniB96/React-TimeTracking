import './card.css'


export default function Card({donnee, timeframe}) {
// background: url("../images/icon-work.svg");

    const backgroundColors = {
        'Work': 'hsl(15, 100%, 70%)',      
        'Play': 'hsl(195, 74%, 62%)',      
        'Study': 'hsl(348, 100%, 68%)',    
        'Exercise': 'hsl(145, 58%, 55%)',  
        'Social': 'hsl(264, 64%, 52%)',   
        'Self Care': 'hsl(43, 84%, 65%)'   
    }

    const backgroundImages = {
        'Work': 'url("../images/icon-work.svg")',      
        'Play': 'url("../images/icon-play.svg")',      
        'Study': 'url("../images/icon-study.svg)',    
        'Exercise': 'url("../images/icon-exercise.svg)',  
        'Social': 'url("../images/icon-social.svg)',   
        'Self Care': 'url("../images/icon-self-care.svg)'   
    }

    const cardStyle = {
        backgroundColor: backgroundColors[donnee.title],
        backgroundImage: backgroundImages[donnee.title],
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '90% -10%',
        backgroundSize: '30%'
    }

    return (
        <>

        <div id="card" style= {cardStyle}>
            <div className="sousCard">
                <p>{donnee.title}</p>
                <h2>{donnee.timeframes[timeframe].current} hrs</h2>
                <p>Last week - {donnee.timeframes[timeframe].previous} hrs</p>
            </div>
        </div>
        </>
    )
}