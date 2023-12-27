import React from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Avatar,
    Collapse,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShareAlt, AiOutlineSearch } from 'react-icons/ai'
import SearchDialog from "../searchDialog/SearchDialog";
import myContext from "../../context/data/myContext";
import ShareDialogBox from "../shareDialoxBox/ShareDialogBox";


export default function Nav() {
    const [openNav, setOpenNav] = React.useState(false);

    const context = useContext(myContext);
    const { mode, toggleMode } = context;



    return (
        <>
            {/* Navbar  */}
            <Navbar
                className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2"
                style={{ background: mode === 'dark' ? 'rgb(68, 160, 71)' : '#44a047' }}>

                {/* Desktop View  */}
                <div className="flex items-center justify-between text-blue-gray-900">

                    {/* Home Page Link  */}
                    <Link to={'/'}>
                        <Typography
                            as="a"
                            className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center"
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                        >
                            {/* Logo Image  */}
                            <img
                                className=' w-10 h-10 '
                                src='images/logo.png'
                            />
                            {/* Logo Text  */}
                            <span>
                                Aamcha Community
                            </span>
                        </Typography>
                    </Link>

                    {/* All Items  */}
                    <div className="flex items-center gap-4">

                        {/* Search Icon */}
                        <div>
                            {/* <AiOutlineSearch size={20} color="white" /> */}
                            <SearchDialog/>
                        </div>

                        {/* Share Icon */}
                        <div className="hidden lg:block">
                            {/* <AiOutlineShareAlt size={20} color="white" /> */}
                            <ShareDialogBox />
                        </div>


                        {/* dark And Light Button */}
                        <div>
                            {mode === 'light'
                                ?
                                <>
                                    {/* Light Button  */}
                                    <IconButton onClick={toggleMode} className=" lg:inline-block rounded-full" style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                        </svg>
                                    </IconButton>
                                </>
                                :
                                <>
                                    {/* Dark Button  */}
                                    <IconButton onClick={toggleMode} className=" lg:inline-block rounded-full" style={{ background: mode === 'light' ? '#ced6e0' : '#57606f' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>
                                    </IconButton>
                                </>}
                        </div>

                    </div>
                </div>
            </Navbar>
        </>
    );
}