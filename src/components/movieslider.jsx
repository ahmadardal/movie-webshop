import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: require("../assets/img1.jpg")},
    { url: require("../assets/img2.jpg")},
];

const movieSlider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={900}
                height={400}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
            />
        </div>
    );
}

export default movieSlider
