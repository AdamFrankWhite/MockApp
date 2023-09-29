"use client";
const Image = (props) => {
    let { filename, altText, size } = props;
    let imageResizeDivisor;
    if (size == "large") {
        imageResizeDivisor = 1;
    } else if (size == "medium") {
        imageResizeDivisor = 2;
    } else {
        imageResizeDivisor = 5;
    }
    // get the current screen size
    let currentScreenWidth = window.screen.width;
    let width = Math.ceil(currentScreenWidth / imageResizeDivisor);
    // endpoint
    const serviceUrl = `https://12sw3uj2va.execute-api.eu-west-2.amazonaws.com/dev/resize?f=${filename}&w=${width}`;
    return <img style={{ width: "100%" }} src={serviceUrl} alt={altText} />;
};
export default Image;
