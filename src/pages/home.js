import { Button } from "@/components/Elements";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const home = () => {
  const data = [
    {
      image: "/images/food_tour.jpg",
      title: "Food Tours",
      description:
        "Embark on a culinary journey with guides who will introduce you to the best local flavors and dining experiences.",
    },
    {
      image: "/images/history_tour.jpg",
      title: "History Tours",
      description:
        "Delve into the rich history of the city with guides who are passionate about sharing fascinating stories and insights.",
    },
    {
      image: "/images/adventure_tour.jpg",
      title: "Adventure Tours",
      description:
        "For the thrill-seekers, explore the adventurous side of the city with guides who specialize in exciting activities and experiences.",
    },
    {
      image: "/images/art_tour.jpg",
      title: "Art and Culture Tours",
      description:
        "Immerse yourself in the local art scene and cultural heritage with our guides who are passionate about creativity and history.",
    },
  ];
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <section className=" h-[calc(100vh-64px)] relative">
        <Image
          src="/images/home_page_image.jpg"
          width={500}
          height={500}
          alt="An image of a man holding a camera"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-1/2 text-white px-6 md:px-0 md:left-1/4">
          <h4 className="lg:text-3xl text-2xl font-semibold mb-3">
            Discover Your Next Adventure.
          </h4>
          <p className="text-base mb-2">
            Connect with local guides and explore hidden gems in your favorite
            cities.
          </p>
          <Button>Explore Now</Button>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full my-5 ">
        <h2 className="my-10 uppercase text-lg">
          Explore Diverse Guide Options
        </h2>
        <div className="flex flex-wrap gap-4 mb-12">
          {data.map((item, index) => (
            <div
              className="border border-gray-700 h-auto w-72 rounded-lg"
              key={index}
            >
              <Image
                src={item.image}
                width={350}
                height={550}
                alt="An image of a man holding a camera"
                className=" object-cover w-full"
              />
              <div className="mt-8 mb-4 text-base px-6">
                <h3 className="underline mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default home;
