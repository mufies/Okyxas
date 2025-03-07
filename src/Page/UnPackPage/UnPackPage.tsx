import { useState, useEffect } from 'react';import './UnPackPage.css';
import bannerlist from '../../components/GetCurrentBanner/BannerList.tsx';
import NavigateBar from "../../components/NavigatorBar/NavigatorBar.tsx";
function UnPackPage() {
    const [selectedBanner, setSelectedBanner] = useState(localStorage.getItem("selectedBanner") || "defaultBanner");
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    useEffect(() => {
                setVideoSrc(`/src/assets/bannershowcasevideo/${selectedBanner}.mp4`);
            }, [selectedBanner]);
    const rows = [];
    const flatBannerList = bannerlist.flat();
    for (let i = 0; i < flatBannerList.length; i++) {
        const banner = flatBannerList[i];
        rows.push(
            <button
                key={banner.id}
                className="banner-card"
                onClick={() => {
                    localStorage.setItem("selectedBanner", banner.title);
                    setSelectedBanner(banner.title);
                    console.log(banner.title);
                }}
            >
                <img src={banner.image} alt={banner.title} className="banner-img" />
            </button>
        );
    }

    return (
        <div className="UnpackPage">
            <NavigateBar />
            <div className="Unpack-container">
                <div className="Character-showcase">
                    <div className="banner-video">
                        {videoSrc ? (
                            <video className="banner-video" autoPlay loop muted src={videoSrc} />
                        ) : (
                            <div>No banner selected</div>
                        )}
                    </div>
                </div>
                <div className="Unpack-part">
                    <div className="Unpack-cardlist">
                        <div className="scroll-container-banner">{rows}</div>
                    </div>
                    <div className="Unpack-zone">
                        <div className="Unpack-zone-unpackonepack"></div>
                        <div className="Unpack-zone-unpacktenpack"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnPackPage;