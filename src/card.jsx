import profilePic from './assets/profile.jpg'

function Card(){
    
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture" />
            <h2>Darijan Mickoski</h2>
            <p>Front-End Web Developer and Entrepreneur</p>
        </div>
    );
}

export default Card