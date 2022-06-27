import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const BusinessComponent = ({ row }) => {
  // console.log(row);
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
      <div className="flex justify-center">
        <button className="text-sm mx-1 text-secondary">
          <AiOutlineEye />
        </button>
        <div>
          <label for="edit-modal" class="text-secondary">
            <AiOutlineEdit />
          </label>
          <input type="checkbox" id="edit-modal" class="modal-toggle" />
          <div class="modal modal-middle sm:modal-middle">
            <div class="modal-box box">
              <label
                for="edit-modal"
                class="btn btn-sm btn-circle hover:bg-primary hover:text-white absolute right-2 top-2"
              >
                ✕
              </label>
              <div>
                <h1 className="text-lg  text-left text-orange-400">
                  Edit Document
                </h1>
                <div className="divider"></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex items-center text-sm">
                    <div>
                      <label className="label">
                        <span className="text-sm">Description</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                        {...register("description")}
                      />
                    </div>
                    <div className=" ">
                      <label className="label">
                        <span className="text-sm ml-2 mb-2 mt-[-2px]">
                          Upload File
                        </span>
                      </label>
                      <input
                        type="file"
                        className=" border bg-white rounded-sm  mx-3 text-xs"
                        {...register("fileName")}
                      />
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div class="modal-action">
                    {/* <input type="submit" /> */}
                    <input
                      type="submit"
                      value={"SAVE"}
                      className="px-5  py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <button className="text-sm mx-1 text-secondary">
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default BusinessComponent;
