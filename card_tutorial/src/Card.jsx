import profilePic from './assets/profilepic.png';
function Card(){
    return(
        <div className="card">
            <img className="card-image"src={profilePic} alt="profile pic"></img>
            <h2 className="card-title">Steven</h2>
            <p className="card-text">I Love Coding</p>
        </div>
    );
}

export default Card;