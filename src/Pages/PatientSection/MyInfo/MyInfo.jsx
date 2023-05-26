import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Outlet, useParams } from "react-router-dom";
import doctor from "../../Assets/doctor.png";
import { IoCaretBackCircleOutline, IoDocumentsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CustomLink from "../../Pages/Shared/CustomLink";
import "../../Style/Patient.css";
import { MdPersonSearch } from "react-icons/md";
import { BsFillFileEarmarkLock2Fill } from "react-icons/bs";

const MyInfo = () => {
  // main parent component for all patient related components
  // const { id } = useParams();
  // localStorage.setItem("p_key", id);
  // const { token } = useToken();
  // const dispatch = useDispatch();

  // const data = useSelector((state) => state?.patientInfo?.patientDetails?.data?.client_info || {});
  // console.log("patient_details===", data);
  // useEffect(() => {
  //   // action dispatched
  //   dispatch(
  //     getpatientsDetails({
  //       payload: {
  //         patient_id: id,
  //       },
  //       token,
  //     })
  //   );
  // }, [id, dispatch, token]);

  const data = {};

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <Link to={"/admin/patient-List"} className="text-primary text-lg">
          <IoCaretBackCircleOutline />
        </Link>
        <div className="text-xs font-normal">
          <span className="text-sm font-semibold text-primary">{data?.client_full_name || "Test"} |</span>
          <span className="text-orange-400 font-semibold">DOB :</span>
          {data?.client_dob} |<span className="text-orange-400 font-semibold">Phone : </span>
          {data?.phone_number} |<span className="text-orange-400 font-semibold">Address : </span>
          {data?.client_street}, {data?.client_city}, {data?.client_state} {data?.client_zip}
        </div>
      </div>
      <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap justify-between gap-2 my-2">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className=" p-2  setting-nav shadow-md rounded-lg "
        >
          <div className="">
            <div className="">
              <img src={doctor} className="h-24 w-24 m-auto rounded-full border border-gray-100" alt="" />
            </div>
          </div>
          <div className="text-xs text-secondary font-normal patient-nav mt-2 mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`/patient/my-info`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <MdPersonSearch className=" text-2xl" /> Patient Info
              </h1>
            </CustomLink>
          </div>
          <div className="text-xs  text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-authorization`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <BsFillFileEarmarkLock2Fill className=" text-2xl" />
                Ins/Authorization
              </h1>
            </CustomLink>
          </div>
          <div className="text-xs text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-document`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <IoDocumentsOutline className=" text-2xl" /> Documents
              </h1>
            </CustomLink>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="p-2  setting-body shadow-md rounded-lg "
        >
          <Outlet />
        </motion.div>
      </div>
    </>
  );
};

export default MyInfo;
