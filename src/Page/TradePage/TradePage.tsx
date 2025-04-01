import NavigateBar from "../../components/NavigatorBar/NavigatorBar.tsx";
import GetUserCardData from "../../hooks/GetUserCardData/GetUserCardData.tsx";
import GetAnotherUserCardData from "../../hooks/GetUserCardData/GetAnotherUserCardData.tsx";
import "./TradePage.css";

function TradePage() {
    return (
        <div>
            <NavigateBar />
            <div className="Trade-container">
                <div className="TradePage-header">
                    <div className="Trade-container-userpage">
                        <div className="Trade-container-userpage-packshowcase">
                            <GetUserCardData/>
                        </div>
                    </div>

                    <button className="Trade-container-btn">Trade!</button>

                    <div className="Trade-container-anotheruser">
                        <div className="Trade-container-anotheruser-packshowcase">
                            <GetAnotherUserCardData />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TradePage;
