import React from "react";
import WiseLogo from "@/assets/WiseLogo.png";
import Image from "next/image";
import ProfilePhoto from "@/assets/ProfilePhoto.jpg";
import { Star } from "@mui/icons-material";
const Testimonial = () => {
  const testimonialData = {
    name: "Nick Babich",
    designation: "Lead Designer",
    rating: 4,
    comment:
      "I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.",
    profilePhoto: ProfilePhoto,
  };
  return (
    <div className="flex flex-col items-center my-24">
      <Image src={WiseLogo} alt="Wise Logo" />
      <p className="lg:max-w-3xl text-center my-4  text-3xl mx-12 lg:mx-0">
        {testimonialData.comment}
      </p>
      <Image
        src={testimonialData.profilePhoto}
        alt="Profile Photo"
        className="rounded-full my-4"
        height={50}
        width={50}
      />
      <p className="text-center font-medium">{testimonialData.name}</p>
      <p className="text-center text-gray-500">{testimonialData.designation}</p>

      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: testimonialData.rating }).map((_, index) => (
          <Star key={index} className="text-yellow-600 mx-1 text-md" />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
