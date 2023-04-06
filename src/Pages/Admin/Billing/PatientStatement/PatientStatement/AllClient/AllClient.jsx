import React, { useState } from "react";
import { Collapse, Switch } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import AllClientTable from "./AllClientTable";
const { Panel } = Collapse;
const data = [
  {
    id: 1,
    name: "Adrianne Hilley",
  },
  {
    id: 2,
    name: "Rosabella Mooring",
  },
  {
    id: 3,
    name: "Alla Grahlmans",
  },
  {
    id: 4,
    name: "Aloise Colquit",
  },
  {
    id: 5,
    name: "Cinderella Sykes",
  },
  {
    id: 6,
    name: "Judd Arghent",
  },
  {
    id: 7,
    name: "Shamus Gilby",
  },
  {
    id: 8,
    name: "Claretta Wyrall",
  },
  {
    id: 9,
    name: "Alfredo Hellsdon",
  },
  {
    id: 10,
    name: "Ainslee Jacobovitz",
  },
];

const AllClient = () => {
  const [submited, setSubmited] = useState(false);
  return (
    <div className="my-5">
      <Collapse
        accordion
        className=" bg-transparent"
        bordered={false}
        defaultActiveKey={["1"]}
      >
        {data.map((d, i) => (
          <Panel
            header={
              <>
                <div className="flex items-center justify-between flex-wrap">
                  <div className="flex items-center gap-2 text-base font-medium text-gray-600">
                    <input type="checkbox" />
                    {d.name}
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="text-base">$ 45.6</div>
                    <AiOutlineMail className=" text-base text-secondary" />
                    <FaRegEye className=" text-base text-secondary" />
                    <div className="flex items-center gap-2 text-sm font-regular text-gray-600">
                      <Switch
                        size="small"
                        onClick={() => {
                          setSubmited(!submited);
                        }}
                      />
                      {submited ? (
                        <span>Submitted</span>
                      ) : (
                        <span>Not Submitted</span>
                      )}
                    </div>
                  </div>
                </div>
              </>
            }
            key={d.id}
          >
            <hr />
            <AllClientTable></AllClientTable>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default AllClient;
