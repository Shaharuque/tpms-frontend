//This code is almost good for infinite scroling in React table
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import { headers } from '../../Misc/BaseClient';
import Table from './Table';


const MainBase = () => {
  const [items, setItems] = useState([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(2);

  useEffect(() => {
    const getComments = async () => {
      const res = await axios({
        method: "get",
        url: `https://ovh.therapypms.com/api/v1/admin/ac/patient?page=1`,
        headers: headers,
      });
      // const result = await res.json();
      const data = res.data?.clients?.data;
      //console.log(data)
      setItems(data);
    };

    getComments();
  }, []);

  const fetchComments = async () => {
    const res = await axios({
      method: "get",
      url: `https://ovh.therapypms.com/api/v1/admin/ac/patient?page=${page}`,
      headers: headers,
    });
    const data = res.data?.clients?.data;
    //console.log(data)
    return data;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();
    console.log(commentsFormServer)

    setItems([...items, ...commentsFormServer]);

    if (commentsFormServer.length === 0) {
      sethasMore(false);
    }
    setpage(page + 1);
  };
  //console.log(items)
  console.log(page)

  //columns
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "client_full_name"
      },
      {
        Header: "DOB",
        accessor: "client_dob"
      },
      {
        Header: "Phone Number",
        accessor: "phone_number"
      }
    ],
    []
  );

  const data = React.useMemo(() => items, [items]);

  if (!items) {
    return <h1>Loading</h1>
  }
  return (
    <div>
      <h1>Hi From testing table</h1>
      <Table  columns={columns} data={data} update={fetchData} hasMore={hasMore} />
    </div>
  );
};

export default MainBase;