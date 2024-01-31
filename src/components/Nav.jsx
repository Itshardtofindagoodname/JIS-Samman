import { FiEdit } from "react-icons/fi";
  import { BsCalendar2Event } from "react-icons/bs";
  import { IoCodeSlashOutline } from "react-icons/io5";
  import { motion } from "framer-motion";
  import { useState } from "react";

  const Nav = () => {
    const [open, setOpen] = useState(false);
  
    return (
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-400"
          >
            <span className="font-medium hover:font-bold transition-shadow duration-100 delay-300 md:text-lg text-sm">What's more?</span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            <Option setOpen={setOpen} Icon={FiEdit} text="About"/>
            <Option setOpen={setOpen} Icon={BsCalendar2Event} text="Events" _url="https://tally.so/r/w5x7pd"/>
            <Option setOpen={setOpen} Icon={IoCodeSlashOutline} text="Hackathons"/>
          </motion.ul>
        </motion.div>
    );
  };
  
  const Option = ({ text, Icon, setOpen, _url }) => {
    return (
      <div>
        <a href={_url} target="_blank" rel="noopener noreferrer">
        <motion.li
          variants={itemVariants}
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
        >
          <motion.span variants={actionIconVariants}>
            <Icon />
          </motion.span>
          <span>{text}</span>
        </motion.li>
        </a>
      </div>
    );
  };
  
  export default Nav;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };