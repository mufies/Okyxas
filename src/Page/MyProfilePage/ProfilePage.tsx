import './ProfilePage.css';
// import card from '../../assets/sanagi.jpg';
import avt from '../../assets/avt2.jpg';
import NavigateBar from "../../components/NavigatorBar/NavigatorBar.tsx";

function ProfilePage() {
    const name = "mufi";
    const bio = "Karma is a wonderful thing";
    const wallpaper ='src/assets/image.png';
  return (
    <div className="ProfilePage">
        <NavigateBar/>
        <div className="wallpaper">
            <img className="wallpaperImg" src={wallpaper} alt="" />
        </div>
        <div className="profile">
            <img src={avt} alt="" className="avatar"/>
            <h2 className="name">{name}</h2>
            <h2 className="bio">{bio}</h2>
        </div>
        <div className="cardShowcase">
        </div>
    </div>
  );
}


export default ProfilePage;