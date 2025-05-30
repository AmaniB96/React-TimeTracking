import './card.css'
import iconWork from '../images/icon-work.svg'
import iconPlay from '../images/icon-play.svg'
import iconStudy from '../images/icon-study.svg'
import iconExercise from '../images/icon-exercise.svg'
import iconSocial from '../images/icon-social.svg'
import iconSelfcare from '../images/icon-self-care.svg'
import ellipsis from '../images/icon-ellipsis.svg'

export default function Card({donnee, timeframe}) {

    const backgroundColors = {
        'Work': 'hsl(15, 100%, 70%)',      
        'Play': 'hsl(195, 74%, 62%)',      
        'Study': 'hsl(348, 100%, 68%)',    
        'Exercise': 'hsl(145, 58%, 55%)',  
        'Social': 'hsl(264, 64%, 52%)',   
        'Self Care': 'hsl(43, 84%, 65%)'   
    }

    const backgroundImages = {
        'Work': `url("${iconWork}")`,      
        'Play': `url("${iconPlay}")`,      
        'Study': `url("${iconStudy}")`,    
        'Exercise': `url("${iconExercise}")`,  
        'Social': `url("${iconSocial}")`,   
        'Self Care': `url("${iconSelfcare}")`   
    }

    const cardStyle = {
        backgroundColor: backgroundColors[donnee.title],
        backgroundImage: backgroundImages[donnee.title],
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '90% 0%',
        backgroundSize: '30%'
    }

    const getTimePeriodText = () => {
        switch(timeframe) {
            case 'daily':
                return 'Yesterday';
            case 'weekly':
                return 'Last Week';
            case 'monthly':
                return 'Last Month';
            default:
                return 'Last Week';
        }
    }

    return (
        <>
        <div id="card" style={cardStyle}>
            <div className="sousCard">
                <p>{donnee.title} <img id='ellipsis' src={ellipsis} alt="" /></p>
                <h2 className='temps'>{donnee.timeframes[timeframe].current} hrs</h2>
                <p>{getTimePeriodText()} - {donnee.timeframes[timeframe].previous} hrs</p>
            </div>
        </div>
        </>
    )
}