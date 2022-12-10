//If user reload the page authInfo will not lost its stored data if available
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/login_redux/loginSlice";
import useToken from "./useToken";

//Here this custom hook will check weather in the localstorage accesstoken and user is stored or not then dispatch redux action to store accessToken and user info in the redux store
//reload diley jeno redux store info abr set hoa jay shei jnno ai process
export const usePersistStore = () => {
  const { token } = useToken() || {};
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  //useEffect ar moddhey rakha bhalo
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (token && user) {
      const userInfo = JSON.parse(user); //JSON.stringify kora silo tai sheita parse korey newa holo

      if (token && userInfo) {
        //now dispatch action to store data in redux store
        dispatch(
          userLoggedIn({
            accessToken: token,
            user: userInfo,
          })
        );
      }
      setChecked(true);
    }
  }, [dispatch, setChecked]);

  return checked;
};
