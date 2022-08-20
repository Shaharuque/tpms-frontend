import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import NameLocationTableAddButton from "./NameLocationTableAddButton";
import Form from "./Form";


const NameLocationTable32 = ({
  data,
  table32Open,
  handleTableOpen32,
  loading,
}) => {
  const [add, setAdd] = useState(0);
  const [test,setTest]=useState({})
  //console.log(loading);
  //const {id,facility_name_two,address}=data
  console.log(data)

  const handleAdd = () => {
    setAdd(add + 1);
  };
  
  // Editable value
  useEffect(() => {
    setTimeout(() => {
      reset({
        address: '',
      });
    }, 0);
  }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };


  return (
    <div>
      {/* Child 32  */}
      <h2
        onClick={handleTableOpen32}
        className=" mt-4 text-xs p-2 text-white bg-secondary"
      >
        Box No 32
      </h2>
      {table32Open && (
        <div className="border">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-2"
            style={{
              transition: "all .3s ease-out",
            }}
          >
           <Form item={data}></Form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NameLocationTable32;
