import './ProfilePage.css';
// import card from '../../assets/sanagi.jpg';
// import avt from '../../assets/avt2.jpg';
import NavigateBar from "../../components/NavigatorBar/NavigatorBar.tsx";

function ProfilePage() {
    // const name = "mufi";
    // const bio = "Karma is a wonderful thing";
    // const wallpaper ='src/assets/image.png';
  return (
    <div className="ProfilePage">
        <NavigateBar/>
        <div className={"wallpaper"}>
            <img src="src/assets/wallpaper.jpeg" className={"wallpaper-img"}/>
        </div>
    </div>
  );
}


export default ProfilePage;