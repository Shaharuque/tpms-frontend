import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../Loading/Loading";
import { headers } from "../../Misc/BaseClient";
import ShimmerTableTet from "../../Pages/Pages/Settings/SettingComponents/ShimmerTableTet";
import AddModal from "./AddModal";

const QueryTesting = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(2);
  const [patientId, setPatientId] = useState();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  //   async function fetchPosts(page = 1) {
  //     const response = await axios.get(
  //       `https://app.therapypms.com/api/v1/admin/ac/setting/get/pos?${page}`,
  //       {
  //         headers: headers,
  //       }
  //     );
  //     //console.log(response);
  //     return response;
  //   }
  //   fetchPosts();

  //   const {
  //     isLoading: posLoading,
  //     error: posError,
  //     data: pos,
  //     refetch: posRefetch,
  //   } = useQuery({
  //     queryKey: ["pos_data"],
  //     queryFn: fetchPosts,
  //     refetchOnWindowFocus: false,
  //   });

  //for infinite query
  //   const {
  //     status,
  //     data: pos,
  //     fetchMore,
  //     error: posError,
  //     isLoading: posLoading,
  //   } = useInfiniteQuery(["pos_data"], fetchPosts, {
  //     refetchOnWindowFocus: false,
  //     getFetchMore: (lastGroup, allGroups) => lastGroup.meta.nextPage,
  //   });

  //   if (posLoading) {
  //     return <Loading></Loading>;
  //   }
  //   if (posError) {
  //     return <h1>{posError}</h1>;
  //   }

  //   console.log("all the pos data", pos?.pages);

  //get data from API + data fetch from api while scrolling[Important]
  useEffect(() => {
    const getPatientsData = async () => {
      const res = await axios({
        method: "get",
        url: `https://app.therapypms.com/api/v1/admin/ac/setting/get/pos?page=1`,
        headers: headers,
      });
      // const result = await res.json();
      const data = res?.data?.pos_data?.data;
      //   console.log(data);
      setItems(data);
    };
    getPatientsData();
  }, []);

  const fetchPatients = async () => {
    const res = await axios({
      method: "get",
      url: `https://app.therapypms.com/api/v1/admin/ac/setting/get/pos?page=${page}`,
      headers: headers,
    });
    const data = res?.data?.pos_data?.data;
    console.log(data);
    return data;
  };

  const fetchData = async () => {
    const patientsFromServer = await fetchPatients();
    console.log(patientsFromServer);
    setItems([...items, ...patientsFromServer]);
    if (patientsFromServer.length === 0) {
      sethasMore(false);
    }
    setpage(page + 1);
  };
  console.log(items);
  console.log(refresh);

  return (
    <div>
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="bg-red-600 text-white"
        >
          ADD
        </button>
      </div>
      <InfiniteScroll
        dataLength={items?.length} //items is basically all data here
        next={fetchData}
        hasMore={hasMore}
        refreshFunction={refresh ? fetchData : null}
        loader={<ShimmerTableTet></ShimmerTableTet>}
      >
        <ul>
          {items?.map((p) => (
            <li>{p?.pos_code}</li>
          ))}
        </ul>
      </InfiniteScroll>

      {open && <AddModal setRefresh={setRefresh}></AddModal>}
    </div>
  );
};

export default QueryTesting;
