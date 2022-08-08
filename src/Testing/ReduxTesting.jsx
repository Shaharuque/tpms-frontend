import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getpatients } from '../features/Patient_redux/patientSlice';

const ReduxTesting = () => {
      //redux
  const dispatch = useDispatch()

  //useSelector use korey [adminData reducer] extract kora hocchey to get admins data from api
  const result_patients = useSelector((state) => state.patientData);
  const alldata=result_patients?.patient?.clients?.data
  console.log(alldata)

  //dispatchasync action  
  useEffect(() => {
    dispatch(getpatients())
  }, []);
    return (
        <div>
            <h1>{alldata?.length}</h1>
        </div>
    );
};

export default ReduxTesting;