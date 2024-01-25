import React from "react";
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-[24px] text-irisBlueColor font-bold leading-9">
            Kamal Vimalesh
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi
          id dolorem ab, asperiores fugit labore laboriosam! Praesentium
          distinctio molestias officia vero consectetur veniam aperiam! Quae
          amet debitis est eaque. Aut saepe possimus repellat voluptatem
          blanditiis, eaque non assumenda unde sequi laudantium et dignissimos
          nostrum sed, in magni ut commodi!
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:pt-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className=" text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("10-18-2008")} - {formateDate("11-25-2010")}
              </span>
              <p className=" text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className=" text-[16px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className=" text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2010")} - {formateDate("07-15-2013")}
              </span>
              <p className=" text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className=" text-[16px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
            
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className=" p-4 rounded bg-[#fff9ea]">
                <span className=" text-yellowColor text-[15px] font-semibold">
                    {formateDate('06-24-2014')} - {formateDate('02-25-2016')}
                </span>
                <p className="text-[15px] leading-6 font-medium text-textColor">
                    Sr.Surgeon
                </p>
                <p className=" text-[16px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
            </li>
            <li className=" p-4 rounded bg-[#fff9ea]">
                <span className=" text-yellowColor text-[15px] font-semibold">
                    {formateDate('06-24-2014')} - {formateDate('02-25-2016')}
                </span>
                <p className="text-[15px] leading-6 font-medium text-textColor">
                    Sr.Surgeon
                </p>
                <p className=" text-[16px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
            </li>
        </ul>
      </div>
    </>
  );
};

export default DoctorAbout;
