import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {IoCloseCircleOutline} from "react-icons/io5";
import {Modal} from "antd";

const CorrectedClaim = ({handleClose, open}) => {
    const {register, handleSubmit, reset} = useForm();
    const [notes, setNotes] = useState("");
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
        reset();
    };
    // console.log(editableRow);
    useEffect(() => {
        setTimeout(() => {
            reset({});
        }, 500);
    }, [reset]);
    return (
        <div>
            <div>
                <Modal // fullScreen={fullScreen}
                    open={open}
                    centered
                    width={500}
                    footer={false}
                    closable={false}
                    bodyStyle={
                        {padding: "0"}
                    }
                    className="box rounded-md">
                    <div className="px-5 py-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-lg text-left text-orange-400 ">
                                 Corrected Claim
                            </h1>
                            <IoCloseCircleOutline onClick={handleClose}
                                className="text-gray-600 font-semibold  text-2xl hover:text-primary"/>
                        </div>
                        <form onSubmit={
                            handleSubmit(onSubmit)
                        }>
                            <div className="w-full font-semibold">
                                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 mr-2 gap-5">
                                    <div>
                                        <label className="label">
                                            <span className="label-text text-sm text-gray-500 text-left">
                                              Box 19
                                            </span>
                                        </label>
                                        <input type="text" name="service_no" className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full" {...register("box19")}/>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text text-sm text-gray-500 text-left">
                                            Resub. Code
                                            </span>
                                        </label>
                                        <input type="text" name="service_no" className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full" {...register("resubCode")}/>
                                    </div>

                                    {/* staff_number  */}
                                
                                    <div className="mt-[-15px]">
                                        {" "}
                                        <label className="label">
                                            <span className="label-text text-sm text-gray-500 text-left">
                                            Org. Ref. No.
                                            </span>
                                        </label>
                                        <input type="number" name="service_no" className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full" {...register("orgrefno")}/>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-200 py-[1px] mt-3"></div>
                            <div className=" flex items-end justify-end mt-2">
                                <button className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm" type="submit">
                                    Save
                                </button>

                                <button className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm" autoFocus
                                    onClick={handleClose}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default CorrectedClaim;
