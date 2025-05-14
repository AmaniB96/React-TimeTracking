import profileImg from '../images/image-jeremy.png'

export default function BigCard({ timeframe, toggleDaily, toggleWeekly, toggleMonthly }) {
    return (
        <div className='profile-cont'>
            <div className='bigcardhead'>
                <img className='pp' src={profileImg} alt="Jeremy profile" />
                <div className='text'>
                    <span className='sp'>Report for</span>
                    <p>Jeremy Robson</p>
                </div>
            </div>

            <div className='bigcard'>
                <a id="toggle" onClick={toggleDaily}>Daily</a>
                <a id="toggle" onClick={toggleWeekly}>Weekly</a>
                <a id="toggle" onClick={toggleMonthly}>Monthly</a>
            </div>
        </div>
    )
}