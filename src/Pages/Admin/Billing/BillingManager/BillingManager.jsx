import React from "react";
import { Nav } from "rsuite";
import { NavLink, Outlet } from "react-router-dom";

const BillingManager = () => {
  return (
    <>
      <div className="container width-fix  mx-auto mb-5 mt-5">
        <Nav appearance="tabs" justified className="mt-5 mb-5">
          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"proces-Clims"}
          >
            Processing Claim(s)
            <span className="bg-orange-400 badge text-white ml-2 rounded-full text-[10px]">
              step-1
            </span>
          </NavLink>

          {/* <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"Batching-climbs"}
          >
            Batching Claim(s)
            <span className="bg-orange-400 badge text-white ml-2 text-[10px] rounded-full">
              step-2
            </span>
          </NavLink> */}

          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"Manage-claims"}
          >
            Manage claim(s)
            <span className="bg-orange-400 badge text-white ml-2 text-[10px] rounded-full">
              step-2
            </span>
          </NavLink>
        </Nav>

        <Outlet />
      </div>
    </>
    // <div>
    //   <ul class="flex mt-2 flex-wrap text-sm font-medium text-center text-gray-500 border-b-2  ">
    //     <li>
    //       {/* <a
    //         href="setting-staffSetup.html"
    //         class="inline-block p-2 px-6 rounded-t-lg -mb-1 text-[#393C52] text-sm font-normal bg-gray-100 border-t-2  border-t-[#089BAB]  "
    //       >
    //         Credential Setup
    //       </a> */}

    //       <NavLink
    //         className={(navinfo) =>
    //           navinfo.isActive
    //             ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
    //             : "rs-nav-item text-[14px] font-medium"
    //         }
    //         to={"proces-Clims"}
    //       >
    //         Processing Claim(s)
    //         <span className="bg-orange-400 badge text-white ml-2 rounded-full text-[10px]">
    //           step-1
    //         </span>
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         className={(navinfo) =>
    //           navinfo.isActive
    //             ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
    //             : "rs-nav-item text-[14px] font-medium"
    //         }
    //         to={"Batching-climbs"}
    //       >
    //         Batching Claim(s)
    //         <span className="bg-orange-400 badge text-white ml-2 text-[10px] rounded-full">
    //           step-2
    //         </span>
    //       </NavLink>
    //     </li>

    //     <li>
    //       <a
    //         href="setting-gameGoal.html"
    //         class="inline-block p-2 px-6 rounded-t-lg  text-[#393C52] text-sm font-normal   hover:bg-[#FFFFFF] hover:border hover:border-b-0 active:text-[#089BAB] active:-mb-2 active:border-t-2   active:border-t-[#089BAB] "
    //       >
    //         Game Goal Setup
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="setting-gameGoalCopy.html"
    //         class="inline-block p-2 px-6 rounded-t-lg  text-[#393C52] text-sm font-normal   hover:bg-[#FFFFFF] hover:border hover:border-b-0 active:text-[#089BAB] active:-mb-2 active:border-t-2   active:border-t-[#089BAB] "
    //       >
    //         Game Goal Copy
    //       </a>
    //     </li>
    //   </ul>
    //   <Outlet />
    // </div>
  );
};

export default BillingManager;
