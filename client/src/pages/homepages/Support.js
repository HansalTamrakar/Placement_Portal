import React from "react";
import Dropdown from "./Dropdownn";

const Support = () => {
  return (
    <div className="flex w-screen ">
      <div className=" mt-20 mr-20 w-screen ">
        <div className="text-6xl text-gray-800 font-bold text-center  ">
          Where To Get Support
        </div>
        <div className="text-xl text-gray-800  mt-12 bg-red-200 font-bold p-8   ">
          Welcome to our dedicated support hub! At Placement Portal, our top
          priority is ensuring your experience with our products/services is
          seamless and enjoyable. If you ever find yourself with questions or
          facing challenges, our support team is here to assist you every step
          of the way.
          <p className="font-normal mt-8 mb-8">
            Our comprehensive Frequently Asked Questions (FAQs) section
            addresses common queries and provides quick solutions. Whether
            you're troubleshooting an issue, seeking clarification, or looking
            for guidance on using our features, you'll likely find answers here.
          </p>
          <img className="w-1/2" src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Customer-Care-Company3--1--1.jpg"/>
        </div>
        <Dropdown />
      </div> 
     
    </div>
  );
};
export default Support;
