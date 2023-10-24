import React from 'react'

const Navbar = () => {
    return (
        <div className=' bg-dark w-full h-24 flex-auto'>
            <div className=' max-w-7xl bg-dark flex mx-auto items-center h-24'>

                {/* Logo */}
                <div id='Logo'>
                    <img width={140} src="/assets/Logo.png" alt="logo" />
                </div>


                {/* Menu List */}
                <div id='Menu' className=' ml-10 mt-3 font-normal flex-auto'>
                    <ul className=' text-white flex items-center gap-2 text-[15px] '>
                        <li>Add task</li>
                        <li><div className=' rounded-full w-[3px] h-[3px] bg-white'></div></li>
                        <li>Calendar</li>
                        <li><div className=' rounded-full w-[3px] h-[3px] bg-white'></div></li>
                        <li>Prizes</li>
                        <li><div className=' rounded-full w-[3px] h-[3px] bg-white'></div></li>
                        <li>Create team</li>
                    </ul>
                </div>

                {/* Menu Button */}
                <div id='Menu_button' className=' flex-initial'>
                    <button className=' text-white bg-red px-9 py-[10px] text-[12px] rounded-md font-medium'>Log in</button>
                </div>


            </div>
        </div>
    )
}

export default Navbar