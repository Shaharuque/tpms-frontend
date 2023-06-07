import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Outlet, useParams } from "react-router-dom";
import doctor from "../../../Assets/doctor.png";
import { IoCaretBackCircleOutline, IoDocumentsOutline,IoPeopleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import CustomLink from "../../../Pages/Shared/CustomLink";
import "../../../Style/Patient.css";
import { MdPersonSearch } from "react-icons/md";
import { BsFillFileEarmarkLock2Fill,BsFileEarmarkText,BsFillFileEarmarkLockFill } from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import { TiDocumentAdd } from "react-icons/ti";
import { AiOutlineCloudUpload, AiOutlinePhone,AiOutlineDollar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getpatientsDetails } from "../../../../features/Patient_redux/patientSlice";
import useToken from "../../../../CustomHooks/useToken";

const PatientsInfo = () => {
  // main parent component for all patient related components
  const { id } = useParams();
  localStorage.setItem("p_key", id);
  const { token } = useToken();
  const dispatch = useDispatch();

  const data = useSelector((state) => state?.patientInfo?.patientDetails?.data?.client_info || {});
  console.log("patient_details===", data);
  useEffect(() => {
    // action dispatched
    dispatch(
      getpatientsDetails({
        payload: {
          patient_id: id,
        },
        token,
      })
    );
  }, [id, dispatch, token]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <Link to={"/admin/patient-List"} className="text-primary text-lg">
          <IoCaretBackCircleOutline />
        </Link>
        <div className="text-xs font-normal">
          <span className="text-sm font-semibold text-primary">{data?.client_full_name} |</span>
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
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-info/${id}`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <MdPersonSearch className=" text-2xl" /> Patient Info
              </h1>
            </CustomLink>
          </div>
          <div className="text-xs  text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-vob/${id}`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <TiDocumentAdd className=" text-2xl" /> VOB
              </h1>
            </CustomLink>
          </div>
          <div className="text-xs  text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-authorization/${id}`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <BsFillFileEarmarkLockFill className=" text-2xl" />
                Ins/Authorization
              </h1>
            </CustomLink>
          </div>
          <div className="text-xs text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-document/${id}`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <IoDocumentsOutline className=" text-2xl" /> Documents
              </h1>
            </CustomLink>
          </div>
          <div className="text-xs text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-ledger/${id}`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <TbReport className=" text-2xl" /> Patient Ledger
              </h1>
            </CustomLink>
          </div>
          <div className="text-xs text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-portal/${id}`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <TbReport className=" text-2xl" /> Patient Portal
              </h1>
            </CustomLink>
          </div>
          <div className="text-xs text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-intake/${id}`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <AiOutlineCloudUpload className=" text-2xl" /> Intake
              </h1>
            </CustomLink>
          </div>
          <div className="text-xs text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-call-log/${id}`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <AiOutlinePhone className=" text-2xl" /> Call Log
              </h1>
            </CustomLink>
          </div>
          <div className="text-xs text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-payment-info/${id}`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <AiOutlineDollar className=" text-2xl" /> Payment Info
              </h1>
            </CustomLink>
          </div>

          <div className="text-xs text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-sibling/${id}`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <IoPeopleSharp className=" text-xl" /> Sibling
              </h1>
            </CustomLink>
          </div>

          <div className="text-xs text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-all-notes/${id}`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <BsFileEarmarkText className=" text-2xl" /> Session Notes
              </h1>
            </CustomLink>
          </div>
          <div className="text-xs text-secondary font-normal patient-nav mb-1">
            <CustomLink className="flex gap-1 pb-1 clink items-center" to={`patient-clinicianteam/${id}`}>
              <h1 className=" font-medium ml-1 mt-1 flex items-center text-[14px] gap-1 ">
                <BsFileEarmarkText className=" text-2xl" /> Clinician Team
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

export default PatientsInfo;
