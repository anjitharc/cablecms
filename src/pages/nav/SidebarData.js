import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import { FcMindMap } from "react-icons/fc";


const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("data");
  window.location.href = "/";
};


const userstatus = JSON.parse(localStorage.getItem('data'));


export const SidebarData = [


  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  

  {
  
    title: 'Customers',
    path: '/custlist',
    icon: <FaIcons.FaUserCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
  },
  
  {
    title: 'Lead',
    path: '/Leadmenu',
    icon: <IoIcons.IoIosLeaf />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'LEAD LIST',
        path: '/leadlist',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'LEAD ADD',
        path: '/leadadd',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },

      {
        title: 'CLOSED LEAD',
        path: '/leadclse',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },

      {
        title: 'ENQ LEADS',
        path: '/casualleadlist',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },

    ]
  },

  {
    title: 'Complaint',
    path: '/complaintmenu',
    icon: <IoIcons.IoIosBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'COMPLAINT LIST',
        path: '/cmplntlist',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },

      {
        title: 'RESOLVED LIST',
        path: '/CloseList',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },

    ]
  },


  {
    title: 'Payments',
    path: '/complaintmenu',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },

  // {
  //   title: 'Products',
  //    path: '/products',
  //   icon: <FaIcons.FaCartPlus />
  // },
  //   {
  //    title: 'Team',
  //    path: '/team',
  //   icon: <IoIcons.IoMdPeople />
  //  },
  {
    title: 'Master',
    path: '/mastermenu',
    icon: <FaIcons.FaRing />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Team Management',
        path: '/teamlist',
        icon: <IoIcons.IoMdPeople />
      },

      {
        title: 'Complaint Catagory',
        path: '/complaintctgry',
        icon: <IoIcons.IoIosBonfire />
      },

      {
        title: 'Area',
        path: '/pages/area',
        icon: <IoIcons.IoMdAppstore />
      },

      {
        title: 'Role Management',
        path: '/rolemanagement',
        icon: <FcMindMap />
      },


    ]
  },
  

  {
    title: <label onClick={handleLogout}>Logout </label>,

    icon: < IoIcons.IoMdLogOut />

  }


];