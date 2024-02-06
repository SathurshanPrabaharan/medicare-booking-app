import React from "react";
import useFetchData from "../../Hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "../../Components/Doctors/DoctorCard";
import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appoinments/my-appoinments`);
  return (
    <div>
      {loading && !error && <Loading />}

      {error && !loading && <Error errorMsg={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}

      {!loading && !error && appointments.length===0 && 
      <h2 className="mt-5 text-center text-[20px] leading-7 font-semibold text-primaryColor">You did not book any doctor yet!</h2>}
    </div>
  );
};

export default MyBookings;
