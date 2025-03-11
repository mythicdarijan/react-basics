import profilePic from './assets/profile.jpg'

function Card(){
    
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Darijan Mickoski</h2>
            <p className="card-text">Front-End Web Developer and Entrepreneur</p>
        </div>
    );
}

export default Card