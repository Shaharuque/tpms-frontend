import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetClaimsQuery } from "../features/Billing_redux/Primary_Billing_redux/processingClaimApi";
import useToken from "../CustomHooks/useToken";

const TableInstance = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { token } = useToken();
  const { data: items, fetchNextPage } = useGetClaimsQuery({
    token,
    data: {
      insurance_ids: [1, 207, 300],
      page: 1,
      to_date: "2023-05-21",
    },
  });

  const fetchMoreItems = () => {
    fetchNextPage({
      token,
      data: {
        insurance_ids: [1, 207, 300],
        page: page,
        to_date: "2023-05-21",
      },
    });
  };

  return (
    <InfiniteScroll
      dataLength={items?.processClaims.data?.length || 0}
      next={fetchMoreItems}
      hasMore={hasMore}
      loader={<div>Loading more...</div>}
      endMessage={<div>No more items to load.</div>}
    >
      {items?.processClaims?.data?.map((item) => (
        <div key={item.id}>{item.id}</div>
      ))}
    </InfiniteScroll>
  );
};

export default TableInstance;
