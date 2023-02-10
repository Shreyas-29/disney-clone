import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Hamburger from 'hamburger-react'
import { HiOutlineStar, HiLanguage, HiOutlineRectangleStack, HiOutlineUserCircle } from 'react-icons/hi2'
import { HiOutlineHome, HiOutlineSearch, HiX } from 'react-icons/hi'
import { MdChevronRight } from 'react-icons/md'
import { FaTheaterMasks } from 'react-icons/fa'
import { RiMovie2Line } from 'react-icons/ri'
import { IoFootball, IoLogInOutline } from 'react-icons/io5'
import { TbDeviceTv } from 'react-icons/tb'
import firebase from 'firebase/compat/app'


function Header() {

    const [isOpen, setOpen] = useState(false);
    const [search, setSearch] = useState(false);
    const [user, setUser] = useState(null);

    const router = useRouter();

    const toggleSearch = () => {
        setSearch(!search);
    }
    const items = [
        { title: 'Home', Icon: HiOutlineHome },
        { title: 'TV', Icon: TbDeviceTv },
        { title: 'Sports', Icon: IoFootball },
        { title: 'Originals', Icon: HiOutlineStar },
        { title: 'Movies', Icon: RiMovie2Line },
    ]
    // const signIn = () => {
    //     auth.signInWithPopup(provider).catch(alert);
    // }
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = () => {
        firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(function (result) {
                setUser(result.user);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    const handleLogout = () => {
        firebase
            .auth()
            .signOut()
            .then(function () {
                setUser(null);
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    return (
        <header className='fixed bg-gradient-to-b from-[#141b29] to-[#0c111b] top-0 z-50 flex py-4 items-center justify-between w-full px-2 sm:px-6 lg:px-12 border-b'>

            {/* Desktop */}
            <div className='hidden sm:flex items-center justify-between w-full z-50'>

                {user ? (
                    <>
                        <div className='flex items-center justify-center space-x-12'>
                            <div className='flex items-center space-x-2 relative'>
                                <Hamburger color='#cbd5e1' size={18} toggled={isOpen} toggle={setOpen} />
                                {isOpen && (
                                    <div className={`absolute z-50 top-12 left-2 rounded-lg shadow-lg bg-[#192133] flex flex-col py-4 items-start`}>
                                        <div className='flex items-start space-x-2 text-gray-300 hover:text-white py-2 cursor-pointer hover:bg-[#0c111b] px-8 w-full'>
                                            <HiOutlineRectangleStack />
                                            <p className='text-sm'>Channels</p>
                                        </div>
                                        <div className='flex items-start space-x-2 text-gray-300 hover:text-white py-2 cursor-pointer hover:bg-[#0c111b] px-8 w-full'>
                                            <HiLanguage />
                                            <p className='text-sm'>Languages</p>
                                        </div>
                                        <div className='flex items-start space-x-2 text-gray-300 hover:text-white py-2 cursor-pointer hover:bg-[#0c111b] px-8 w-full'>
                                            <FaTheaterMasks />
                                            <p className='text-sm'>Genres</p>
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <div onClick={() => router.push("/")}>
                                        <Image src={'/disney.svg'} alt='disney' width={1000} height={1000} unoptimized className='w-full h-auto cursor-pointer pb-[10px]' />
                                    </div>
                                </div>
                            </div>

                            <div className='hidden lg:flex flex-grow justify-center max-w-2xl space-x-4 sm:space-x-8 mb-4 sm:mb-0'>
                                {['Home', 'TV', 'Sports', 'Originals', 'Movies'].map((title, index) => (
                                    <span key={index} className='text-gray-300 hover:text-white cursor-pointer ease-out transition'>{title}</span>
                                ))}
                            </div>
                        </div>

                        <div className='flex items-center justify-end space-x-4'>
                            <div className='flex items-center group max-w-sm relative'>
                                <input type="search" name="search" id="search" placeholder='Start Searching...' className='border-b border-gray-500 group-focus:border-blue-500 focus:outline-none bg-transparent text-white' />
                                <HiOutlineSearch className='text-gray-500 group-focus:text-white absolute cursor-pointer right-1' />
                            </div>
                            <div className='flex items-center mx-2'>
                                <button className='bg-blue-500 text-white uppercase text-xs font-medium rounded-md px-3 focus:outline-none py-2 hover:bg-blue-600'>Subscribe</button>
                            </div>
                            <div className='flex items-center'>
                                <button
                                    onClick={handleLogout}
                                    className='border px-3 py-2 text-xs rounded-md font-medium text-white uppercase hover:bg-white hover:text-black transition ease-out focus:outline-none'
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex items-center space-x-2 relative'>
                                <Hamburger color='#cbd5e1' size={18} toggled={isOpen} toggle={setOpen} />
                                {isOpen && (
                                    <div className={`absolute top-12 left-2 z-10 rounded-lg shadow-lg bg-[#192133] flex flex-col py-4 items-start ${isOpen && 'transition-transform duration-300 transform'}`}>
                                        <div className='flex items-start space-x-2 text-gray-300 hover:text-white py-2 cursor-pointer hover:bg-[#0c111b] px-8 w-full'>
                                            <HiOutlineRectangleStack />
                                            <p className='text-sm'>Channels</p>
                                        </div>
                                        <div className='flex items-start space-x-2 text-gray-300 hover:text-white py-2 cursor-pointer hover:bg-[#0c111b] px-8 w-full'>
                                            <HiLanguage />
                                            <p className='text-sm'>Languages</p>
                                        </div>
                                        <div className='flex items-start space-x-2 text-gray-300 hover:text-white py-2 cursor-pointer hover:bg-[#0c111b] px-8 w-full'>
                                            <FaTheaterMasks />
                                            <p className='text-sm'>Genres</p>
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <Link href={'/'}>
                                        <Image src={'/disney.svg'} alt='disney' width={1000} height={1000} unoptimized className='w-full h-auto cursor-pointer pb-[10px]' />
                                    </Link>
                                </div>
                            </div>
                            <button
                                onClick={handleLogin}
                                className='border px-3 py-2 text-xs rounded-md font-medium text-white uppercase hover:bg-white hover:text-black transition ease-out focus:outline-none'
                            >
                                Login
                            </button>
                        </div>
                    </>
                )}

            </div>

            {/* Mobile */}
            <div className='sm:hidden flex items-center justify-between w-full relative'>
                <div className='flex items-center space-x-2'>
                    <div className='flex items-center z-50'>
                        <Hamburger color='#cbd5e1' size={18} toggled={isOpen} toggle={setOpen} />
                    </div>
                    {isOpen && (
                        <div className='absolute bg-gradient-to-tr from-[#141b29] to-[#0c111b] text-white w-screen h-screen -left-4 -top-4 py-4'>
                            <div className='w-full py-16'>
                                {!user ? (
                                    <div onClick={handleLogin} className='flex items-center justify-between border-b border-slate-600 px-8 w-full pb-4 cursor-pointer'>
                                        <div className='flex flex-col items-start'>
                                            <h6 className='text-white font-medium'>
                                                Log in
                                            </h6>
                                            <span className='text-xs text-gray-300'>
                                                For a better experience
                                            </span>
                                        </div>
                                        <div>
                                            <MdChevronRight className='w-5 h-5' />
                                        </div>
                                    </div>
                                ) : (
                                    <div onClick={handleLogout} className='cursor-pointer flex items-center justify-between border-b border-slate-600 px-8 w-full pb-4'>
                                        <div className='flex space-x-4 items-center'>
                                            <HiOutlineUserCircle className='w-10 h-10 cursor-pointer text-gray-300' />
                                            <div className='flex flex-col items-start'>
                                                <h5 className='capitalize font-medium text-white'>{user._delegate.displayName}</h5>
                                                <p className='text-xs text-gray-300'>Log out</p>
                                            </div>
                                        </div>
                                        <div>
                                            <IoLogInOutline className='w-7 h-7 text-gray-500' />
                                        </div>
                                    </div>
                                )}
                                <div className='w-full py-4 border-b border-slate-600 px-8'>
                                    <p className='text-white'>Watchlist</p>
                                </div>
                                {user && (
                                    <div className='flex flex-col items-start space-y-4 w-full py-6 border-b border-slate-600'>
                                        {items.map(({ title, Icon }, index) => (
                                            <div key={index} className='flex items-center justify-start text-gray-300 hover:text-white space-x-4 py-2 hover:bg-[#0c111b] w-full px-8'>
                                                <Icon className='w-5 h-5' />
                                                <p>{title}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className='flex flex-col py-6 items-start space-y-3'>
                                    <div className='flex items-start space-x-4 text-gray-300 hover:text-white py-2 cursor-pointer hover:bg-[#0c111b] px-8 w-full py-2'>
                                        <HiOutlineRectangleStack className='w-5 h-5' />
                                        <p>Channels</p>
                                    </div>
                                    <div className='flex items-start space-x-4 text-gray-300 hover:text-white py-2 cursor-pointer hover:bg-[#0c111b] px-8 w-full py-2'>
                                        <HiLanguage className='w-5 h-5' />
                                        <p>Languages</p>
                                    </div>
                                    <div className='flex items-start space-x-4 text-gray-300 hover:text-white py-2 cursor-pointer hover:bg-[#0c111b] px-8 w-full py-2'>
                                        <FaTheaterMasks className='w-5 h-5' />
                                        <p>Genres</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div>
                        <div onClick={() => router.push("/")}>
                            <Image src={'/disney.svg'} alt='disney' width={1000} height={1000} unoptimized className='w-full h-auto cursor-pointer pb-[10px]' />
                        </div>
                    </div>
                </div>
                <div className='text-gray-300 hover:text-white mr-2 cursor-pointer' onClick={toggleSearch}>
                    {search ? <HiX className='w-5 h-5' /> : <HiOutlineSearch className='w-5 h-5' />}
                </div>
                {search && (
                    <div className='absolute bg-slate-900 w-full h-10 top-16 py-2 shadow-xl shadow-slate-800/40 rounded-md'>
                        <input
                            type="text"
                            placeholder='Start Searching...'
                            className='bg-transparent focus:border-b border-slate-400 text-white w-11/12 focus:outline-none mx-4'
                        />
                    </div>
                )}
            </div>

        </header>
    )
}

export default Header
