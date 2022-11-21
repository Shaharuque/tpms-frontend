import React, { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import ERAActionModal from "./ERAActionModal";

const EraManagerAction = ({ row }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  // const handleClose=()=>{

  // }
  return (
    <div className="flex justify-center">
      <BsEyeFill onClick={handleModal} className="text-primary" />

      {ERAActionModal && (
        <ERAActionModal open={modal} handleClose={handleModal}></ERAActionModal>
      )}
    </div>
  );
};

export default EraManagerAction;
