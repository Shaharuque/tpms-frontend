//This code is almost good for infinite scroling in React table
import React, { useEffect, useState } from 'react';
import Table from './Table';


const MainBase = () => {
  const [items, setItems] = useState([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(10);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10`
        // For json server use url below
        // `http://localhost:3004/comments?_page=1&_limit=20`
      );
      const result = await res.json();
      const data = result.results;
      //console.log(data)
      setItems(data);
    };

    getComments();
  }, []);

  const fetchComments = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${page}`
      // For json server use url below
      // `http://localhost:3004/comments?_page=${page}&_limit=20`
    );
    const result = await res.json();
    const data = result.results
    console.log(data)
    return data;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();

    setItems([...items, ...commentsFormServer]);
    if (commentsFormServer.length === 0) {
      sethasMore(false);
    }
    setpage(page + 10);
  };
  console.log(items)
  

  //columns
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Info",
        accessor: ""
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