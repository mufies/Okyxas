import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import avatar from '../../assets/avtz.jpg';
// import card from '../../assets/sanagi.jpg';
import wallpaper from '../../assets/image.png';
import avt from '../../assets/avt2.jpg';

function ProfilePage() {
    const navigate = useNavigate();
    const name = "mufi";
    const bio = "Karma is a wonderful thing";
  return (
    <div>
       <div className="navigator">
        <button className="returnHomePageBtn" type="button" onClick={() => navigate('/')}>
            <img className="returnHomePage-icon" src={avatar} alt="Avatar"/>
        </button>
        </div>
        <div className="wallpaper">
            <img className="wallpaperImg" src={wallpaper} alt="" />
        </div>
        <div className="profile">
            <img src={avt} alt="" className="avatar"/>
            <h2 className="name">{name}</h2>
            <h2 className="bio">{bio}</h2>
        </div>
        <div className="cardShowcase">
                <img src={avt} alt="" className="cardImg"/>


                <img src={avt} alt="" className="cardImg"/>

                <img src={avt} alt="" className="cardImg"/>

                <img src={avt} alt="" className="cardImg"/>
        </div>
    </div>
  );
}


export default ProfilePage;