import React from "react";
import HorizontalLine from "./HorizontalLine";
import Mover from "./Mover";

const Feedback = () => {
  return (
    <div className="container mx-auto mt-20 header" id="feedback">
      <div className="items-center justify-center text-2xl font-semibold text-center text-gray-700 sm:text-3xl lg:text-3xl xl:text-3xl">
        What Our Client's Are Saying
        <HorizontalLine width="w-1/3" />
      </div>
      <Mover />
      
        <div className="mt-16">
            <p className="text-3xl font-bold text-center text-gray-700">"Join a vibrant community where peer-to-peer learning, <br />virtual co-working spaces, and mentorship programs cultivate <br /> meaningful connections and professional development."</p>
        </div>
        
    </div>
  );
};

export default Feedback;
