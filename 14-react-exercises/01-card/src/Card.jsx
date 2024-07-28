import profilePic from "../public/shinchan.jpg"

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="profile picture" />
      <h2>Sumit Jha</h2>
      <p>I am a full stack developer, I like to make web apps.</p>
    </div>
  );
}

export default Card;