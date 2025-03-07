import './GetBannerShowcase.css';

const selectedBanner = localStorage.getItem("selectedBanner") || "defaultBanner";
const videoSrc = selectedBanner ? `/src/assets/bannershowcasevideo/${selectedBanner}.mp4` : null;

console.log("Selected Banner:", selectedBanner);
console.log("Video source:", videoSrc);

function GetBannerShowcase() {
    return (
        <div className="banner-video">
            {videoSrc ? (
                <video className="banner-video" autoPlay loop muted src={videoSrc} />
            ) : (
                <div>No banner selected</div>
            )}
        </div>
    );
}

export default GetBannerShowcase;
