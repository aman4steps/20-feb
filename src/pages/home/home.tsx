import { margin } from "@mui/system";
import "../../app/globals.css";
import BasicDemo from "./submenu";
// import VideoBackground from '../../../public/video/'
// import VideoBackground from '../../../public/assets/video/travel.mp4';


export default function home(){
return (
<>
    <div className="bg-slate-200">

        <div className=" container-wrapper  h-16 z-30 top-5  flex  items-center justify-between">
            <div>
                <img className="w-40" src="https://www.bizarexpedition.com/bx/images/logo/15903060991.png" alt="" />
            </div>
            <div className="flex items-center justify-between gap-10">

                <div className="flex gap-5 items-center">
                    <div className="py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-8a8 8 0 1 0-16 0 8 8 0 0 0 16 0z" />
                        </svg>
                    </div>
                    <a className="transition duration-700 ease-in-out" href="">Destination</a>
                    <a href="">Experience</a>
                    <a href="">About</a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </div>
                </div>


                <div className="flex items-center gap-5 z-30">
                    <p>+44 54 554 54552</p>
                    <button className="border rounded-md hover:bg-orange-500 px-5 py-1">Sign in</button>
                </div>
            </div>
        </div>

        {/* submenu */}
        {/*
        <BasicDemo /> */}


    </div>
    <div className="relative h-[80vh] flex items-center justify-center">
        {/*
        <!-- Background Image --> */}
        {/*
        <!-- <div  className="absolute  inset-0 z-0">
            <img  className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1707570071990-d51f6d902d91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" />
        </div> --> */}


        <video className="absolute  inset-0 z-0 w-full h-full object-cover" autoPlay muted loop>
            <source
                src="https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-small.mp4"
                type="video/mp4" />
            {/*
            <!-- Your browser does not support the video tag. --> */}
        </video>





        {/*
        <!-- Overlay --> */}
        <div className="absolute inset-0 z-1 bg-black opacity-10"></div>

        {/*
        <!-- Text Content --> */}
        <div className="z-20 text-white text-center relative">
            <h1 className="text-4xl font-bold">Lorem ipsum dolor. Explicabo, quam!</h1>
            <p className="mt-2">Additional text or content can go here.</p>
            <button
                className="border px-20 py-4 mt-3 rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out">Submit</button>
        </div>

        {/*
        <!-- scroll arrow sign --> */}
        <div className="absolute bottom-10 z-30 animate-bounce items-center flex flex-col">
            <p className="text-white">scroll down</p>
            <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 mt-4 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>
    </div>







    {/* card tab section */}
    <div className=" my-10">
        <div className="container-wrapper flex gap-3 ">


            <div className="flex flex-col gap-2 py-5">
                <div>
                    <button className="shadow-md bg-amber-600 text-white py-4 px-[80px]  rounded-md">Europe</button>
                </div>
                <div>
                    <button className="shadow-md hover:bg-amber-600 hover:text-white py-4 px-[80px] bg-white rounded-md">Europe</button>
                </div>
                <div>
                    <button className="shadow-md hover:bg-amber-600 hover:text-white py-4 px-[80px] bg-white rounded-md">Europe</button>
                </div>
                <div>
                    <button className="shadow-md hover:bg-amber-600 hover:text-white py-4 px-[80px] bg-white rounded-md">Europe</button>
                </div>
            </div>


            {/*
            <!-- card 1 --> */}
            <div
                className="relative flex-shrink-0 max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg my-2">
                <div
                    className=" mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img className=""
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                        alt="ui/ux review check" />

                </div>
                <div className="px-6 py-4">
                    <div className="flex items-center justify-center mb-3">
                        <h5
                            className="block font-sans text-[18px] font-semibold antialiased  leading-snug tracking-normal text-blue-gray-900">
                            Wooden House, Florida
                        </h5>
                        {/*
                        <!-- <p
                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p> --> */}
                    </div>
                    <p
                        className="text-center  block font-sans text-[15px] antialiased font-light leading-relaxed text-gray-700">
                        Enter a freshly updated and thoughtfully furnished peaceful home
                        surrounded by ancient trees, stone walls.
                    </p>
                    <div className="items-center mt-5">

                        <div className="text-center">
                            <p className="text-[14px] leading-5 text-cyan-400 font-semibold">SUPER DEAL PRICE</p>
                            <p className="text-[12px] leading-5">Starts From <span className="text-[22px] font-medium">₹
                                    3,50,000</span></p>
                            <p className="text-[10px] leading-5">per person on twin sharing</p>
                            <p className="text-[14px] leading-5 font-medium underline text-blue-900">from ₹
                                19,423/months</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 pt-3">
                    <button
                        className="block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        View details
                    </button>
                </div>
            </div>
            {/*
            <!-- card 1 --> */}
            <div
                className="relative flex-shrink-0 max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg my-2">
                <div
                    className=" mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img className=""
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                        alt="ui/ux review check" />

                </div>
                <div className="px-6 py-4">
                    <div className="flex items-center justify-center mb-3">
                        <h5
                            className="block font-sans text-[18px] font-semibold antialiased  leading-snug tracking-normal text-blue-gray-900">
                            Wooden House, Florida
                        </h5>
                        {/*
                        <!-- <p
                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p> --> */}
                    </div>
                    <p
                        className="text-center  block font-sans text-[15px] antialiased font-light leading-relaxed text-gray-700">
                        Enter a freshly updated and thoughtfully furnished peaceful home
                        surrounded by ancient trees, stone walls.
                    </p>
                    <div className="items-center mt-5">

                        <div className="text-center">
                            <p className="text-[14px] leading-5 text-cyan-400 font-semibold">SUPER DEAL PRICE</p>
                            <p className="text-[12px] leading-5">Starts From <span className="text-[22px] font-medium">₹
                                    3,50,000</span></p>
                            <p className="text-[10px] leading-5">per person on twin sharing</p>
                            <p className="text-[14px] leading-5 font-medium underline text-blue-900">from ₹
                                19,423/months</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 pt-3">
                    <button
                        className="block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        View details
                    </button>
                </div>
            </div>
            {/*
            <!-- card 1 --> */}
            <div
                className="relative flex-shrink-0 max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg my-2">
                <div
                    className=" mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img className=""
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                        alt="ui/ux review check" />

                </div>
                <div className="px-6 py-4">
                    <div className="flex items-center justify-center mb-3">
                        <h5
                            className="block font-sans text-[18px] font-semibold antialiased  leading-snug tracking-normal text-blue-gray-900">
                            Wooden House, Florida
                        </h5>
                        {/*
                        <!-- <p
                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p> --> */}
                    </div>
                    <p
                        className="text-center  block font-sans text-[15px] antialiased font-light leading-relaxed text-gray-700">
                        Enter a freshly updated and thoughtfully furnished peaceful home
                        surrounded by ancient trees, stone walls.
                    </p>
                    <div className="items-center mt-5">

                        <div className="text-center">
                            <p className="text-[14px] leading-5 text-cyan-400 font-semibold">SUPER DEAL PRICE</p>
                            <p className="text-[12px] leading-5">Starts From <span className="text-[22px] font-medium">₹
                                    3,50,000</span></p>
                            <p className="text-[10px] leading-5">per person on twin sharing</p>
                            <p className="text-[14px] leading-5 font-medium underline text-blue-900">from ₹
                                19,423/months</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 pt-3">
                    <button
                        className="block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        View details
                    </button>
                </div>
            </div>
        </div>
    </div>








    

    <div className="container-wrapper py-10">
        <p className="text-center font-semibold text-[22px]">Plan an unforgettable trip from your city</p>
    </div>

    {/* very small horizontal card */}
    <div className="container-wrapper justify-center my-10 flex flex-wrap">
        {/* each small horizontal card */}
        <div className="shadow-lg w-[320px] border gap-5 m-2 flex items-center rounded-md shrink-0">
            <div>
                <img className="w-20 h-16 object-cover rounded-md"
                    src="https://plus.unsplash.com/premium_photo-1706896001583-08b5ba33e3be?q=80&w=1338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
            <div>
                <p className="text-[12px]">Tour Package from</p>
                <p className="text-[16px] font-semibold">Ahemdabad</p>
                <p className="text-[10px]">141 tours</p>
            </div>
        </div>
        {/* each small horizontal card */}
        <div className="shadow-lg w-[320px] border gap-5 m-2 flex items-center rounded-md shrink-0">
            <div>
                <img className="w-20 h-16 object-cover rounded-md"
                    src="https://plus.unsplash.com/premium_photo-1706896001583-08b5ba33e3be?q=80&w=1338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
            <div>
                <p className="text-[12px]">Tour Package from</p>
                <p className="text-[16px] font-semibold">Ahemdabad</p>
                <p className="text-[10px]">141 tours</p>
            </div>
        </div>
        {/* each small horizontal card */}
        <div className="shadow-lg w-[320px] border gap-5 m-2 flex items-center rounded-md shrink-0">
            <div>
                <img className="w-20 h-16 object-cover rounded-md"
                    src="https://plus.unsplash.com/premium_photo-1706896001583-08b5ba33e3be?q=80&w=1338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
            <div>
                <p className="text-[12px]">Tour Package from</p>
                <p className="text-[16px] font-semibold">Ahemdabad</p>
                <p className="text-[10px]">141 tours</p>
            </div>
        </div>
        {/* each small horizontal card */}
        <div className="shadow-lg w-[320px] border gap-5 m-2 flex items-center rounded-md shrink-0">
            <div>
                <img className="w-20 h-16 object-cover rounded-md"
                    src="https://plus.unsplash.com/premium_photo-1706896001583-08b5ba33e3be?q=80&w=1338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
            <div>
                <p className="text-[12px]">Tour Package from</p>
                <p className="text-[16px] font-semibold">Ahemdabad</p>
                <p className="text-[10px]">141 tours</p>
            </div>
        </div>
        {/* each small horizontal card */}
        <div className="shadow-lg w-[320px] border gap-5 m-2 flex items-center rounded-md shrink-0">
            <div>
                <img className="w-20 h-16 object-cover rounded-md"
                    src="https://plus.unsplash.com/premium_photo-1706896001583-08b5ba33e3be?q=80&w=1338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
            <div>
                <p className="text-[12px]">Tour Package from</p>
                <p className="text-[16px] font-semibold">Ahemdabad</p>
                <p className="text-[10px]">141 tours</p>
            </div>
        </div>
    </div>
















    {/* rounded card */}
    <div className="container-wrapper pb-5 pt-20">
        <p className="font-semibold text-[22px] text-center ">More Places</p>
    </div>
    <div className="container-wrapper flex flex-wrap justify-center pb-10">
        {/* card multiple */}
        <div className=" m-3 relative lg- ">
            <img className="absolute w-[220px] h-40 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" />
            <div
                className="backdrop-sepia-[.25] bg-black/10 grayscale  hover:grayscale-0 rounded-lg relative flex items-center justify-center w-[220px] h-30">
                <div className="text-center text-white bg-opacity-70 p-8 rounded-lg">
                    <h1 className="text-4xl font-bold">Japan</h1>
                    <button className="px-3 py-2 bg-white text-black rounded-badge text-[12px] mt-5">7 Days</button>
                </div>
            </div>
        </div>
        {/* card multiple */}
        <div className=" m-3 relative lg- ">
            <img className="absolute w-[220px] h-40 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" />
            <div
                className="backdrop-sepia-[.25] bg-black/10 grayscale  hover:grayscale-0 rounded-lg relative flex items-center justify-center w-[220px] h-30">
                <div className="text-center text-white bg-opacity-70 p-8 rounded-lg">
                    <h1 className="text-4xl font-bold">Japan</h1>
                    <button className="px-3 py-2 bg-white text-black rounded-badge text-[12px] mt-5">7 Days</button>
                </div>
            </div>
        </div>

        {/* card multiple */}
        <div className=" m-3 relative ">
            <img className="absolute w-[220px] h-40 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" />
            <div
                className="backdrop-sepia-[.25] bg-black/10 grayscale  hover:grayscale-0 rounded-lg relative flex items-center justify-center w-[220px] h-30">
                <div className="text-center text-white bg-opacity-70 p-8 rounded-lg">
                    <h1 className="text-4xl font-bold">Japan</h1>
                    <button className="px-3 py-2 bg-white text-black rounded-badge text-[12px] mt-5">7 Days</button>
                </div>
            </div>
        </div>

        {/* card multiple */}
        <div className=" m-3 relative">
            <img className="absolute w-[220px] h-40 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" />
            <div
                className="backdrop-sepia-[.25] bg-black/10 grayscale  hover:grayscale-0 rounded-lg relative flex items-center justify-center w-[220px] h-30">
                <div className="text-center text-white bg-opacity-70 p-8 rounded-lg">
                    <h1 className="text-4xl font-bold">Japan</h1>
                    <button className="px-3 py-2 bg-white text-black rounded-badge text-[12px] mt-5">7 Days</button>
                </div>
            </div>
        </div>

        {/* card multiple */}
        <div className=" m-3 relative">
            <img className="absolute w-[220px] h-40 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" />
            <div
                className="backdrop-sepia-[.25] bg-black/10 grayscale  hover:grayscale-0 rounded-lg relative flex items-center justify-center w-[220px] h-30">
                <div className="text-center text-white bg-opacity-70 p-8 rounded-lg">
                    <h1 className="text-4xl font-bold">Japan</h1>
                    <button className="px-3 py-2 bg-white text-black rounded-badge text-[12px] mt-5">7 Days</button>
                </div>
            </div>
        </div>

        {/* card multiple */}
        <div className=" m-3 relative">
            <img className="absolute w-[220px] h-40 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" />
            <div
                className="backdrop-sepia-[.25] bg-black/10 grayscale  hover:grayscale-0 rounded-lg relative flex items-center justify-center w-[220px] h-30">
                <div className="text-center text-white bg-opacity-70 p-8 rounded-lg">
                    <h1 className="text-4xl font-bold">Japan</h1>
                    <button className="px-3 py-2 bg-white text-black rounded-badge text-[12px] mt-5">7 Days</button>
                </div>
            </div>
        </div>

        {/* card multiple */}
        <div className=" m-3 relative   ">
            <img className="absolute w-[220px] h-40 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" />
            <div
                className="backdrop-sepia-[.25] bg-black/10 grayscale  hover:grayscale-0 rounded-lg relative flex items-center justify-center w-[220px] h-30">
                <div className="text-center text-white bg-opacity-70 p-8 rounded-lg">
                    <h1 className="text-4xl font-bold">Japan</h1>
                    <button className="px-3 py-2 bg-white text-black rounded-badge text-[12px] mt-5">7 Days</button>
                </div>
            </div>
        </div>

        {/* card multiple */}
        <div className=" m-3 relative ">
            <img className="absolute w-[220px] h-40 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" />
            <div
                className="backdrop-sepia-[.25] bg-black/10 grayscale  hover:grayscale-0 rounded-lg relative flex items-center justify-center w-[220px] h-30">
                <div className="text-center text-white bg-opacity-70 p-8 rounded-lg">
                    <h1 className="text-4xl font-bold">Japan</h1>
                    <button className="px-3 py-2 bg-white text-black rounded-badge text-[12px] mt-5">7 Days</button>
                </div>
            </div>
        </div>




    </div>


    {/* slider card here */}
    <div className=" container-wrapper block lg:grid grid-cols-[390px,2fr] items-center h-[420px] px-12 pb-40">
        <div className="relative py-[150px] shrink-0 w-[370px] m-auto">
            <div className="absolute z-40 left-6 shadow-xl top-2 rounded-2xl overflow-hidden">
                <img className="w-80 h-[320px] object-cover "
                    src="https://images.unsplash.com/photo-1524026986132-000404263b59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
            <div className="absolute z-30 left-12 top-5 shadow-xl rounded-2xl overflow-hidden">
                <img className="w-80 h-[290px] object-cover "
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
            <div className="absolute z-20 left-0 top-5 shadow-xl rounded-2xl overflow-hidden">
                <img className="w-80 h-[290px] object-cover"
                    src="https://images.unsplash.com/photo-1512699355324-f07e3106dae5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
        </div>
        <div className=" mt-12 px-16">
            <p className="text-[26px] text-black font-semibold pb-5">Discover the World, specially curated for you!</p>
            <p className="text-[14px] pb-3">Our exclusive customized holidays division can cater to every travel need:
                hotel, air tickets, VISA, sightseeings, transfer or the entire package, all designed keeping in mind
                your interests!</p>
            <button className="p-3 bg-yellow-500 rounded-md px-10">Enquire now</button>
        </div>
    </div>






{/* card and small banner */}

<div className="container-wrapper grid grid-cols-[1fr,2fr] relative">
    <div className=" flex  p-5 shadow-lg bg-cover bg-center rounded-xl overflow-hidden" style={{ backgroundColor: 'rgb(153, 199, 221)', width: '550px', height: '320px' }}>
        <div className="">
            <p style={{ fontSize: '32px', margin: '10px 0', fontFamily: 'italic' }}>Lorem, ipsum dolor.</p>
            <h1 className=" font-bold" style={{ fontSize: '20px' }}>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="text-sm mt-2 mb-10 line-clamp-2">Lorem ipsum dolor sinsectetur nam assumenda, voluptas, commodi ipsam dignissimos dolor, excepturi vitae. Atque sunt rem laudantium est ducimus aliquam fuga!</p>
            <a href="" style={{ fontSize: '20px', marginTop: '20px' }}>More Information</a>
        </div>
    </div>
    <div className="flex gap-3 absolute right-0 z-30 top-20" >
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white">
            <img className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1682685797795-5640f369a70a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                 nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pb-1">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
            
          </div>
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white">
            <img className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1682685797795-5640f369a70a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                 nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pb-1">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
            
          </div>
        
    </div>
</div>



<div className="py-40">
        
    </div>


    {/* Footer section */}

    <div className="container-wrapper mt-52">
        <div className="w-52 mt-5">
            <img className="w-full" src="https://www.bizarexpedition.com/bx/images/logo/15903060991.png" alt="" />
        </div>
        <footer className="p-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col space-y-4 ">
                    <h2 className="font-medium">Getting started</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="#">Installation</a>
                        <a rel="noopener noreferrer" href="#">Release Notes</a>
                        <a rel="noopener noreferrer" href="#">Upgrade Guide</a>
                        <a rel="noopener noreferrer" href="#">Using with Preprocessors</a>
                        <a rel="noopener noreferrer" href="#">Optimizing for Production</a>
                        <a rel="noopener noreferrer" href="#">Browser Support</a>
                        <a rel="noopener noreferrer" href="#">IntelliSense</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Core Concepts</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="#">Utility-First</a>
                        <a rel="noopener noreferrer" href="#">Responsive Design</a>
                        <a rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</a>
                        <a rel="noopener noreferrer" href="#">Dark Mode</a>
                        <a rel="noopener noreferrer" href="#">Adding Base Styles</a>
                        <a rel="noopener noreferrer" href="#">Extracting Components</a>
                        <a rel="noopener noreferrer" href="#">Adding New Utilities</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Customization</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="#">Configuration</a>
                        <a rel="noopener noreferrer" href="#">Theme Configuration</a>
                        <a rel="noopener noreferrer" href="#">Breakpoints</a>
                        <a rel="noopener noreferrer" href="#">Customizing Colors</a>
                        <a rel="noopener noreferrer" href="#">Customizing Spacing</a>
                        <a rel="noopener noreferrer" href="#">Configuring Variants</a>
                        <a rel="noopener noreferrer" href="#">Plugins</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Community</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="#">GitHub</a>
                        <a rel="noopener noreferrer" href="#">Discord</a>
                        <a rel="noopener noreferrer" href="#">Twitter</a>
                        <a rel="noopener noreferrer" href="#">YouTube</a>
                    </div>
                </div>

            </div>
            <hr className="mt-10 mb-2" />
            <div>
                <p className="text-[12px]">*Caution: Beware of Fake Promotions or Offers *Please do not believe or
                    engage with any promotional emails, SMS or Web-link which ask you to click on a link and fill in
                    your details. All Veena World authorized email communications are delivered from domain
                    @veenaworld.com or @veenaworld.in or SMS from VNAWLD or 741324. *Veena World bears no liability or
                    responsibility whatsoever for any communication which is fraudulent or misleading in nature and not
                    received from registered domain.</p>
            </div>
            <hr className="mt-2" />

            <div className="bg-white md:flex md:items-center md:justify-between mt-5 ">
                <ul className="flex items-center flex-wrap mb-6 md:mb-0">
                    <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Terms and
                            conditions</a>
                    </li>
                    <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Privacy
                            Policy</a></li>
                    <li><a href="#"
                            className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Licensing</a>
                    </li>
                    <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Cookie
                            Policy</a></li>
                    <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline">Contact</a></li>
                </ul>
                <div className="flex sm:justify-center space-x-6">
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                            </path>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>

            </div>







            <div className="flex items-center justify-center px-6 pt-10 text-sm">
                <span className="dark:text-gray-400">© Copyright 1986. All Rights Reserved.</span>
            </div>



        </footer>
    </div>




</>
)
}