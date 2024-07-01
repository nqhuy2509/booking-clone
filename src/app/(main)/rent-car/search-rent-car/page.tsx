import React from "react";
import Footer from "../../_components/Footer";

export default function page() {
  return (
    <div>
      <div className=" mt-32 outline w-[1024px] ml-24 justify-center pl-6 h-52 rounded-md pt-3">
        <h1 className="text-3xl">No cars available</h1>
        <span>
          We’re sorry, but the companies we work with in Vinhomes Central Park
          don’t have any cars available. <br /> What can I do? <br /> You could
          try: <br />
          <li>Changing your pick-up time or date</li>
          <li>Changing your drop-off time or date</li>
          <li>Searching for a car in a nearby location</li>
        </span>
      </div>
      <div className="mt-24">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
