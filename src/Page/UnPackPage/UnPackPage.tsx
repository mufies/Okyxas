import './UnPackPage.css';
import NavigateBar from "../../components/NavigatorBar/NavigatorBar.tsx";
function UnPackPage() {
  return (
    <div>
        <NavigateBar/>
        <div className={"Unpack-container"}>
            <div className={"Unpack-container-packlist"}>
            </div>
            <div className={"Unpack-container-packdetail"}>
                <div className={"Unpack-container-packdetail-packshowcase"}>
                    <img className={"Unpack-container-packdetail-packshowcase-img"} src={"/src/assets/wallpaper.jpeg"}  alt="pack"/>
                </div>
                <button className={"Unpack-container-packdetail-btn"}>Open!</button>
            </div>
        </div>
    </div>
  );
}
export default UnPackPage;