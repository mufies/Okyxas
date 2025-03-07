import bannerlist from './BannerList.tsx';
import './GetCurrentBanner.css'

function GetCurrentBanner() {
    const rows = [];
    const flatBannerList = bannerlist.flat();
    for (let i = 0; i < flatBannerList.length; i++) {
        const banner = flatBannerList[i];
        rows.push( <button
                key={banner.id}
                className="banner-card"
                onClick={() => {
                    localStorage.setItem("selectedBanner", banner.title);
                    console.log(banner.title);
                }}
            >
                <img src={banner.image} alt={banner.title} className="banner-img" />
            </button>
        );
    }

    return <div className="scroll-container-banner">{rows}</div>;

}
export default GetCurrentBanner;