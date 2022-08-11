import React from 'react';
import { Nav } from "rsuite";
import ReactDOM from 'react-dom';
import { NavLink, Outlet  } from "react-router-dom";

 

const BillingManager = () => {

  return (
    <div className="container mx-auto mb-5 mt-5">
  <Nav appearance="tabs" justified className='mt-5'>
      <NavLink
        
        className={(navinfo) =>
          navinfo.isActive ? "rs-nav-item rs-nav-item-active" : "rs-nav-item "
        }
        to={"proces-Clims"}
      >
        Processing Claim(s)
        <span className="bg-orange-400 badge text-white  rounded-full">
          step-1
        </span>
      </NavLink>

      <NavLink
    
        className={(navinfo) =>
          navinfo.isActive ? "rs-nav-item rs-nav-item-active" : "rs-nav-item"
        }
        to={"Batching-climbs"}
      >
        Batching Claim(s)
        <span className="bg-orange-400 badge text-white ml-2 rounded-full">
          step-2
        </span>
      </NavLink>
     
      <NavLink
        className={(navinfo) =>
          navinfo.isActive ? "rs-nav-item rs-nav-item-active" : "rs-nav-item"
        }
        to={"Manage-claims"}
      >
        Manage claim(s)
        <span className="bg-orange-400 badge text-white ml-2 rounded-full">
          step-3
        </span>
      </NavLink>

       
    </Nav>
    <hr className='mb-5'></hr>
    {/* <div class="rs-nav-bar"></div> */}
    <Outlet/>
  </div>
  );
};

export default BillingManager;