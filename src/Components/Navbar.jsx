import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Drawer } from 'antd';

const Navbar = () => {
    const [isOpen, setISOpen] = useState((false))

    const handleOpen = () => {
        setISOpen(true)
    }

    const toggleDrawer = () => {
        setISOpen(false)
    }

    let linksItem = [
        {
            url: "/",
            name: "Home",
        },
        {
            url: "/topnews",
            name: "Top News",
        },
        {
            url: "/allnews",
            name: "All News",
        },
        {
            url: "/business",
            name: "Business",
        },
        {
            url: "/general",
            name: "General",
        },
        {
            url: "/health",
            name: "Health",
        },
        {
            url: "/science",
            name: "Science",
        },
        {
            url: "/sports",
            name: "Sports",
        },
        {
            url: "/technology",
            name: "Technoloy",
        },

    ]
    return (
        <div className='text-white bg-gradient-to-r from-purple-500 to-pink-500 h-16 flex justify-between items-center px-6 top-0 sticky z-50'>
            <div>
                <p className='text-3xl font-bold'>NewsMonkey</p>
            </div>

            <div className=' space-x-8 xl:flex hidden'>
                <div>
                    <Link to="/" className='inline-flex items-center text-lg relative px-2 py-[3px] font-semibold text-white   after:w-0 after:h-[3px] after:bg-white after:top-[2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0    hover:after:w-full '>Home</Link>
                </div>
                <div>
                    <Link to="/topnews" className='inline-flex items-center text-lg relative px-2 py-[3px] font-semibold text-white   after:w-0 after:h-[3px] after:bg-white after:top-[2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0    hover:after:w-full '>Top News</Link>
                </div>

                <div>
                    <Link to="/allnews" className='inline-flex items-center text-lg relative px-2 py-[3px] font-semibold text-white   after:w-0 after:h-[3px] after:bg-white after:top-[2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0    hover:after:w-full '>All News</Link>
                </div>

                <div>
                    <Link to="/business" className='inline-flex items-center text-lg relative px-2 py-[3px] font-semibold text-white   after:w-0 after:h-[3px] after:bg-white after:top-[2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0    hover:after:w-full '>Business</Link>
                </div>

                <div>
                    <Link to="/general" className='inline-flex items-center text-lg relative px-2 py-[3px] font-semibold text-white   after:w-0 after:h-[3px] after:bg-white after:top-[2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0    hover:after:w-full '>General</Link>
                </div>

                <div>
                    <Link to="/health" className='inline-flex items-center text-lg relative px-2 py-[3px] font-semibold text-white   after:w-0 after:h-[3px] after:bg-white after:top-[2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0    hover:after:w-full '>Health</Link>
                </div>

                <div>
                    <Link to="/science" className='inline-flex items-center text-lg relative px-2 py-[3px] font-semibold text-white   after:w-0 after:h-[3px] after:bg-white after:top-[2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0    hover:after:w-full '>Science</Link>
                </div>

                <div>
                    <Link to="/sports" className='inline-flex items-center text-lg relative px-2 py-[3px] font-semibold text-white   after:w-0 after:h-[3px] after:bg-white after:top-[2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0    hover:after:w-full '>Sports</Link>
                </div>

                <div>
                    <Link to="/technology" className='inline-flex items-center text-lg relative px-2 py-[3px] font-semibold text-white   after:w-0 after:h-[3px] after:bg-white after:top-[2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0    hover:after:w-full '>Technology</Link>
                </div>

            </div>

            <div className="xl:hidden block">

                <button onClick={handleOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 25.567 18"><g transform="translate(-776 -462)"><rect id="Rectangle_941" data-name="Rectangle 941" width="12.749" height="2.499" rx="1.25" transform="translate(776 462)" fill="currentColor"></rect><rect id="Rectangle_942" data-name="Rectangle 942" width="25.567" height="2.499" rx="1.25" transform="translate(776 469.75)" fill="currentColor"></rect><rect id="Rectangle_943" data-name="Rectangle 943" width="17.972" height="2.499" rx="1.25" transform="translate(776 477.501)" fill="currentColor"></rect></g></svg>
                </button>

                <Drawer
                    title={<h1 className='text-lg font-bold flex items-center justify-center'>MonkeyNews</h1>}
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='left'
                    className='bla bla bla'
                >

                    <div>
                        <ul className='space-y-5'>
                            {
                                linksItem.map((item, index) => (
                                    <li key={index} >
                                        <Link to={item.url} className='font-semibold' onClick={toggleDrawer}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </Drawer>
            </div>


        </div>

    )
}

export default Navbar
