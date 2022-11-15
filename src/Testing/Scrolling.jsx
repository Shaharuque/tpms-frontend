//react table+infine scrolling
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { headers } from "../Misc/BaseClient";
import PostCard from "./PostCard";

const Scrolling = () => {
  const [tableData, setTableData] = useState([]);
  const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://app.therapypms.com/api/v1/admin/ac/patient?page=${pageParam}`,
      {
        method: "GET",
        headers: headers,
      }
    );
    const results = await response.json();
    return { results, nextPage: pageParam + 1, totalPages: 3 };
  };

  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery(["patients"], fetchPosts, {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    });

  useEffect(() => {
    data?.pages?.map((p) => {
      const oldData = [];
      setTableData(oldData.concat(...p?.results?.clients?.data));
    });
  }, [data]);

  console.log(tableData);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>There was an error</p>
      ) : (
        <InfiniteScroll
          hasMore={hasNextPage}
          loadMore={fetchNextPage}
          loader={
            <h4 className="text-red-800 font-bold">Loading more 2 itens...</h4>
          }
        >
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  {tableData?.map((post, index) => (
                    <PostCard key={post.id} post={post} index={index} />
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Scrolling;
