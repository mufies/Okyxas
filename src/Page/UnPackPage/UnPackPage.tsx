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
                <img src={banner.image} alt={banner.title} className="banner-img" style={{marginRight: "20px"}} />
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
                        <div className="text-blue-900 text-2xl font-bold mb-1">
                            Unique Pick-Up
                        </div>
                        <div className="text-blue-700 font-semibold mb-1">
                            Increased chance to get Unique 3★ {selectedBanner}!
                        </div>

                        <div className="text-gray-700 text-sm mb-2">
                            One 2★ or higher student is guaranteed for every ten recruitments!<br />
                            <span className="text-gray-500 text-xs">
                            * Students who have already been recruited will be converted into Eligma and Eleph.
                             </span>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <button  className="bg-blue-300 text-white border font-bold px-15 py-8 text-lg rounded-lg flex flex-col items-center">
                                <span className="text-xl">Recruit 1</span>
                            </button>
                            <button  className="bg-blue-300 text-white border font-bold px-15 py-8 text-lg rounded-lg flex flex-col items-center">
                                <span className="text-xl">Recruit 10</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnPackPage;