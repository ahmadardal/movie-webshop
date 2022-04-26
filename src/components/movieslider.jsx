import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: require("../assets/img1.jpg")},
    { url: require("../assets/img2.jpg")},
];

const movieSlider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    );
}

export default movieSlider
