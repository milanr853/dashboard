import React, { useEffect, useRef, useState } from 'react'

import { IoSettingsSharp, IoHome } from 'react-icons/io5';
import { BsBookmarkFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { FaFireAlt, FaUserAlt } from "react-icons/fa";
import { RiLogoutBoxRFill, RiFileTextFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

import styles from "./Sidebar.module.css";


function Sidebar() {
    const size = 24
    const sections = [
        {
            title: "Overview",
            icon: (color) => <IoHome size={size} color={color} />
        },
        {
            title: "Opportunities",
            icon: (color) => <FaFireAlt size={size} color={color} />
        },
        {
            title: "My competitors",
            icon: (color) => <FaUserAlt size={size} color={color} />
        },
        {
            title: "Briefs",
            icon: (color) => <RiFileTextFill size={size} color={color} />
        },
        {
            title: "Saved",
            icon: (color) => <BsBookmarkFill size={size} color={color} />
        },
    ]


    const options = [
        { icon: <IoSettingsSharp size={size} />, title: "Settings" },
        { icon: <BsFillQuestionCircleFill size={size} />, title: "Help" },
        { icon: <RiLogoutBoxRFill size={size} />, title: "Logout" },
    ]

    const [selectedSection, setSelectedSection] = useState(null)
    const [searchClicked, setSearchClick] = useState(null)

    const textRef = useRef()
    const boxRef = useRef()
    const inputRef = useRef()

    // toggle between "Search" text and search-box
    useEffect(() => {
        if (searchClicked === null) return

        searchClicked ?
            (() => {
                textRef.current.classList.remove(styles.text)
                textRef.current.classList.add(styles.textInv)
                setTimeout(() => {
                    textRef.current.style.display = "none"
                    boxRef.current.classList.add(styles.boxTransition)
                    boxRef.current.classList.remove(styles.box)
                    setTimeout(() => {
                        inputRef.current.focus()
                    }, 1000);
                }, 100);
            })()
            :
            (() => {
                boxRef.current.classList.remove(styles.boxTransition)
                boxRef.current.classList.add(styles.box)

                setTimeout(() => {
                    textRef.current.style.display = "flex"
                    textRef.current.classList.remove(styles.textInv)
                    textRef.current.classList.add(styles.text)
                }, 400);
            })()
    }, [searchClicked])




    return (
        <div className="sidebar w-[18%] h-full bg-[#f6f6fb] flex flex-col">

            {/* search */}
            <div className='py-6 flex items-center space-x-4 pl-8 '>
                <div
                    onClick={() => setSearchClick(!searchClicked)}
                    className='rounded-full w-[40px] h-[40px] cursor-pointer 
                    bg-gradient-to-tr from-purple-400 from-30% to-cyan-400 to-70%
                flex justify-center items-center '>
                    <BiSearch color='white' size={20} />
                </div>

                <div ref={textRef} className={`font-semibold text-lg `}>Search</div>

                <div ref={boxRef} className={`bg-gradient-to-tr 
                from-purple-400 from-30% to-cyan-400 to-70% 
                h-[40px] rounded-3xl
                flex justify-center items-center 
                ${styles.box}
                `}>
                    <input ref={inputRef} type="text"
                        className={`outline-none rounded-3xl px-4 bg-slate-200 ${styles.input}
                        `} />
                </div>
            </div>


            {/* sections */}
            <div >
                {
                    sections.map(obj => {
                        const { icon, title } = obj
                        return (
                            <div
                                onClick={() => { setSelectedSection(title) }}
                                key={title}
                                className={`w-full cursor-pointer h-[60px] pl-8
                                flex items-center space-x-6 relative 
                                ${selectedSection === title ? "bg-[#f3f3f3]" : ""}`}>
                                {icon(selectedSection === title ? '#6366f1' : "black")}
                                <div className='text-xs'>{title}</div>
                                <div className={`absolute h-full w-[4px] bg-indigo-300 
                                right-0 rounded-tl-full rounded-bl-full 
                                ${selectedSection !== title ? "hidden" : ""}`}>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


            {/* options */}
            <div className='flex flex-col flex-1 justify-center pl-8'>
                {
                    options.map(({ icon, title }) => {
                        return (
                            <div key={title} className='w-full cursor-pointer h-[60px] flex
                        items-center space-x-4'>
                                {icon}
                                <div className='text-xs'>{title}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Sidebar