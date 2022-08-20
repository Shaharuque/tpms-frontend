import React from 'react';

import { IoCaretBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Outlet, useParams } from "react-router-dom";
import CustomLink from '../../Shared/CustomLink';


const Biographic = () => {
    return (
        <div>

            {/** 1st nav bar ...start  */}
            {/**  <div className="flex flex-col lg:flex-row justify-between items-center">
                <div>
                    <h1 className='text-sm font-bold'>Ashu Soni | <span className=' text-orange-600 font-bold text-sm'>DOB:</span> <span className='font-normal text-xs'>12/27/1999 |</span><span className=' text-orange-600 font-bold text-xs'>NPI:</span> <span className='font-normal text-xs'>5563289657 |</span> <span className=' text-orange-600 font-bold text-xs'>DOB:</span> <span className='font-normal text-xs'>12/27/1999 |</span><span className=' text-orange-600 font-bold text-xs'>Phone:</span> <span className='font-normal text-xs'>(123)-456-7822</span>  </h1>
                </div>
                <div>
                    <button className=' bg-sky-600 bg-opacity-70 rounded px-4 py-1 text-sm font-normal text-white'>
                        Back
                    </button>
                </div>

            </div> */}

            {/** 1st nav bar ...end  */}
            <div>
                {" "}
                <>
                    <div className="flex flex-wrap justify-between">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Link to={"/admin/staffs"} className="text-primary text-lg ">
                                <IoCaretBackCircleOutline />
                            </Link>
                            <div className="text-xs font-normal">
                                <span className="text-sm font-semibold text-primary">
                                    {" "}
                                    Ashu Soni |
                                </span>{" "}
                                <span className="text-orange-400 font-semibold">DOB :</span>{" "}
                                12/27/1999 |{" "}
                                <span className="text-orange-400 font-semibold">NPI : </span>
                                5563289657 |{" "}
                                <span className="text-orange-40 font-semibold">Phone : </span>
                                (123)-456-7822
                            </div>
                        </div>

                        <div className="mr-3">
                            <Link to={`/admin/staffs`}>
                                <button className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                                    <IoCaretBackCircleOutline className="text-sm" /> Back
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className=" p-2 setting-nav rounded-md"
                        >
                            <div className="mb-4">
                                <div className="">
                                    <img
                                        src={'#'}
                                        className="h-24 rounded-full border  w-24 mx-auto "
                                        alt=""
                                    />
                                </div>
                            </div>
                            
                            
                            <CustomLink
                                className="flex gap-1 hover:text-white pb-1 hover:bg-primary text-xs text-secondary font-normal patient-nav mb-2 items-center"
                                to={`bios`}
                            >
                                <h1 className="ml-1 mt-1">Bio's</h1>
                            </CustomLink>
                            
                            <div className="text-xs text-secondary font-normal patient-nav mb-2">
                                <CustomLink
                                    className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
                                    to={`bio-contactinfo`}
                                >
                                    <h1 className="ml-1 mt-1">Contact Info</h1>
                                </CustomLink>
                            </div>
                            <div className="text-xs text-secondary font-normal patient-nav mb-2">
                                <CustomLink
                                    className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
                                    to={`bio-credential`}
                                >
                                    <h1 className="ml-1 mt-1">Credentials</h1>
                                </CustomLink>
                            </div>
                     






                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 25 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className=" m-2 p-2  setting-body shadow-md rounded-lg "
                        >
                            <Outlet />
                        </motion.div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Biographic;