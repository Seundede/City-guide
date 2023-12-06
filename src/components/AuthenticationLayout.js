import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const AuthenticationLayout = ({ children }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="flex flex-row w-screen h-screen">
      <div className=" w-full md:w-1/2 flex items-center justify-center">
        {children}
      </div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container ">
          <div className="embla__slide">
            <Image
              src="/images/authImage2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="embla__slide">
            <Image
              src="/images/authImage3.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
