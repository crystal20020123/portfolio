import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const Detail = ({ title, count }) => {
  let images = [];

  for (let i = 0; i < count; i++) {
    images.push(i);
  }

  return (
    <>
      <Carousel
        sx={{
          minHeight: "500px",
        }}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            opacity: 1, // Make buttons fully visible
            backgroundColor: "rgba(0,0,0,0.3)",
            transform: "none", // Prevent any transform animations
          },
        }}
        navButtonsWrapperProps={{
          // Add wrapper props
          style: {
            opacity: 1, // Make wrapper fully visible
            transform: "none", // Prevent any transform animations
          },
        }}
      >
        {images &&
          images.map((image, idx) => (
            <Image
              key={idx}
              src={`/portfolio/${title}/${idx + 1}.jpg`}
              alt={image}
              width={1000}
              height={500}
            />
          ))}
      </Carousel>
    </>
  );
};

export default Detail;
