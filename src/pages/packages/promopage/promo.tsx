import SearchPageTopSeoContent from "@/components/SearchPageTopSeoContent"
import "../../../app/globals.css"
import SearchHeaderWpr from "@/components/SearchHeaderWpr"

export default function promopage() {
    return (
        <>
            <div className="bg-slate-100">
                <SearchPageTopSeoContent />
                <SearchHeaderWpr />
                <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[0.7fr,2fr] gap-4">
                    <div className="bg-white rounded-md">
                        <div className="p-5">
                            <div className="flex justify-between pb-5">
                                <p className="text-[16px] font-semibold">Filter Your Tour</p>
                                <p className="text-[12px] underline text-blue-800 cursor-pointer">Clear All</p>
                            </div>
                            <div>
                                <div className="badge badge-lg text-[14px]">987,654
                                    <svg className="ml-2" width="10" height="9" viewBox="0 0 10 9" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.27588 8.00024L4.92199 4.49998L8.56809 8.00024" stroke="#212220"
                                            stroke-width="1.15385" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M1.27588 1L4.92199 4.50026L8.56809 1" stroke="#212220" stroke-width="1.15385"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>

                            </div>

                        </div>
                        <div>
                            <div className="border-t p-5">
                                <div>
                                    <p className="text-[16px] font-semibold my-2">Tour Duration</p>
                                </div>
                                <input type="range" min="0" max="100" value="40" className="range range-xs mt-4" />
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <p className="text-[14px]">Min <span>9 days</span></p>
                                        <p className="text-[14px]">Max <span>15 days</span></p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex gap-3 justify-between ">
                                        <p className="border grow text-center px-6 py-3 rounded-md text-[12px]">9-11 days</p>
                                        <p className="border grow text-center px-6 py-3 rounded-md text-[12px]">9-11 days</p>
                                    </div>
                                    <div className="flex gap-3 justify-between ">
                                        <p className="border grow text-center px-6 py-3 rounded-md text-[12px]">9-11 days</p>
                                        <p className="border grow text-center px-6 py-3 rounded-md text-[12px]">9-11 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b mt-2"></div>
                            <div className="px-5 py-2">
                                <p className="text-[16px] font-semibold my-2">Tour Duration</p>
                            </div>
                            <div>
                                <div className="form-control px-5 pb-2">
                                    <label className="cursor-pointer flex gap-4">
                                        <input type="checkbox" checked="checked" className="checkbox checkbox-sm" />
                                        <span className="label-text text-[14px]">Banglore</span>
                                    </label>
                                </div>
                                <div className="form-control px-5 pb-2">
                                    <label className="cursor-pointer flex gap-4">
                                        <input type="checkbox" checked="checked" className="checkbox checkbox-sm" />
                                        <span className="label-text text-[14px]">Kolkata</span>
                                    </label>
                                </div>
                                <div className="form-control px-5 pb-2">
                                    <label className="cursor-pointer flex gap-4">
                                        <input type="checkbox" checked="checked" className="checkbox checkbox-sm" />
                                        <span className="label-text text-[14px]">Banglore</span>
                                    </label>
                                </div>
                                <div className="form-control px-5">
                                    <label className="cursor-pointer flex gap-4">
                                        <input type="checkbox" checked="checked" className="checkbox checkbox-sm" />
                                        <span className="label-text text-[14px]">Mumbai</span>
                                    </label>
                                </div>
                            </div>
                            <div className="border-b mt-5"></div>
                            <div className="px-5 py-2">
                                <p className="text-[16px] font-semibold my-2">Package Type</p>
                                <div>
                                    <div className="flex gap-3 text-[14px] py-2">
                                        <input type="radio" name="radio-1" className="radio radio-sm" checked />
                                        <p>Women's days</p>
                                    </div>
                                    <div className="flex gap-3 text-[14px] py-2">
                                        <input type="radio" name="radio-1" className="radio radio-sm" checked />
                                        <p>Faimly</p>
                                    </div>
                                    <div className="flex gap-3 text-[14px] py-2">
                                        <input type="radio" name="radio-1" className="radio radio-sm" checked />
                                        <p>Valentine days</p>
                                    </div>
                                    <div className="flex gap-3 text-[14px] py-2">
                                        <input type="radio" name="radio-1" className="radio radio-sm" checked />
                                        <p>Senior special</p>
                                    </div>
                                    <div className="flex gap-3 text-[14px] py-2">
                                        <input type="radio" name="radio-1" className="radio radio-sm" checked />
                                        <p>Customized days</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        {/* <!-- package card 1 --> */}
                        <div
                            className=" flex-shrink-0  flex gap-5 justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg overflow-hidden">
                            <div className=" mx-5 flex items-center">
                                <img className="w-[550px] h-[150px] rounded-md overflow-hidden object-cover"
                                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                    alt="ui/ux review check" />

                            </div>
                            <div className="py-2 pr-2">
                                <div className="">


                                    <div className="flex items-center justify-between mb-1">
                                        <h5 className="block font-sans text-[18px] font-semibold antialiased text-black">
                                            Wooden House, Florida
                                        </h5>
                                        <p
                                            className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="-mt-0.5 h-5 w-5 text-yellow-700">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            5.0
                                        </p>
                                    </div>




                                    <div className="flex flex-wrap gap-5 mb-2">
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <img className="w-3"
                                                src="https://cdn.iconscout.com/icon/free/png-512/free-calendar-1439790-1214120.png?f=webp&w=256"
                                                alt="" />
                                        </span> 15 Days</p>
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <img className="w-3" src="https://www.svgrepo.com/show/229132/internet.svg" alt="" />
                                        </span> 15 Days</p>
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <img className="w-3" src="https://www.svgrepo.com/show/38705/location-pin.svg"
                                                alt="" />
                                        </span> 23 Cities</p>

                                    </div>






                                    <p className="block text-[12px] font-normal text-gray-800">
                                        Enter a freshly updated and thoughtfully furnished peaceful home
                                        surrounded by ancient trees, stone walls, and open meadows.
                                    </p>
                                </div>





                                <div className="flex gap-4 max-w-[350px] mt-3 mb-1">
                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/13776/building.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Hotel</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/6379/french-fries-on-container.svg"
                                            alt="" />
                                        <p className="text-[10px] text-neutral-600">Meals</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/447874/transport.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Transport</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/438545/flight.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Flight</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/533057/camera-alt-1.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Sightseeing</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/394547/visa.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Visa</p>
                                    </div>

                                </div>



                            </div>


                            <div className="w-[420px] bg-cyan-100 justify-center px-2 flex flex-col">
                                <div className="">

                                    <div className="text-right">
                                        <p className="text-[14px] leading-snug text-cyan-400 font-semibold">SUPER DEAL PRICE</p>
                                        <p className="text-[12px] leading-snug">Starts From <span className="text-[22px] font-medium">₹
                                            3,50,000</span>
                                        </p>
                                        <p className="text-[10px] leading-snug">per person on twin sharing</p>
                                        <p className="text-[14px] leading-snug font-medium underline text-blue-900">from ₹
                                            19,423/months</p>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        className="mt-3 block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none "
                                        type="button">
                                        View details
                                    </button>
                                </div>
                            </div>
                        </div>




                        {/* <!-- package card 2 --> */}
                        <div
                            className=" flex-shrink-0 mt-5 flex gap-5 justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg overflow-hidden">
                            <div className=" mx-5 flex items-center">
                                <img className="w-[550px] h-[150px] rounded-md overflow-hidden object-cover"
                                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                    alt="ui/ux review check" />

                            </div>
                            <div className="py-2 pr-2">
                                <div className="">


                                    <div className="flex items-center justify-between mb-1">
                                        <h5 className="block font-sans text-[18px] font-semibold antialiased text-black">
                                            Wooden House, Florida
                                        </h5>
                                        <p
                                            className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="-mt-0.5 h-5 w-5 text-yellow-700">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            5.0
                                        </p>
                                    </div>




                                    <div className="flex flex-wrap gap-5 mb-2">
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <img className="w-3"
                                                src="https://cdn.iconscout.com/icon/free/png-512/free-calendar-1439790-1214120.png?f=webp&w=256"
                                                alt="" />
                                        </span> 15 Days</p>
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <img className="w-3" src="https://www.svgrepo.com/show/229132/internet.svg" alt="" />
                                        </span> 15 Days</p>
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <img className="w-3" src="https://www.svgrepo.com/show/38705/location-pin.svg"
                                                alt="" />
                                        </span> 23 Cities</p>

                                    </div>






                                    <p className="block text-[12px] font-normal text-gray-800">
                                        Enter a freshly updated and thoughtfully furnished peaceful home
                                        surrounded by ancient trees, stone walls, and open meadows.
                                    </p>
                                </div>





                                <div className="flex gap-4 max-w-[350px] mt-3 mb-1">
                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/13776/building.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Hotel</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/6379/french-fries-on-container.svg"
                                            alt="" />
                                        <p className="text-[10px] text-neutral-600">Meals</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/447874/transport.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Transport</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/438545/flight.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Flight</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/533057/camera-alt-1.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Sightseeing</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/394547/visa.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Visa</p>
                                    </div>

                                </div>



                            </div>


                            <div className="w-[420px] bg-cyan-100 justify-center px-2 flex flex-col">
                                <div className="">

                                    <div className="text-right">
                                        <p className="text-[14px] leading-snug text-cyan-400 font-semibold">SUPER DEAL PRICE</p>
                                        <p className="text-[12px] leading-snug">Starts From <span className="text-[22px] font-medium">₹
                                            3,50,000</span>
                                        </p>
                                        <p className="text-[10px] leading-snug">per person on twin sharing</p>
                                        <p className="text-[14px] leading-snug font-medium underline text-blue-900">from ₹
                                            19,423/months</p>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        className="mt-3 block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none "
                                        type="button">
                                        View details
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- package card 3 --> */}
                        <div
                            className=" flex-shrink-0 mt-5 flex gap-5 justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg overflow-hidden">
                            <div className=" mx-5 flex items-center">
                                <img className="w-[550px] h-[150px] rounded-md overflow-hidden object-cover"
                                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                    alt="ui/ux review check" />

                            </div>
                            <div className="py-2 pr-2">
                                <div className="">


                                    <div className="flex items-center justify-between mb-1">
                                        <h5 className="block font-sans text-[18px] font-semibold antialiased text-black">
                                            Wooden House, Florida
                                        </h5>
                                        <p
                                            className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="-mt-0.5 h-5 w-5 text-yellow-700">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            5.0
                                        </p>
                                    </div>




                                    <div className="flex flex-wrap gap-5 mb-2">
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <img className="w-3"
                                                src="https://cdn.iconscout.com/icon/free/png-512/free-calendar-1439790-1214120.png?f=webp&w=256"
                                                alt="" />
                                        </span> 15 Days</p>
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <img className="w-3" src="https://www.svgrepo.com/show/229132/internet.svg" alt="" />
                                        </span> 15 Days</p>
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <img className="w-3" src="https://www.svgrepo.com/show/38705/location-pin.svg"
                                                alt="" />
                                        </span> 23 Cities</p>

                                    </div>






                                    <p className="block text-[12px] font-normal text-gray-800">
                                        Enter a freshly updated and thoughtfully furnished peaceful home
                                        surrounded by ancient trees, stone walls, and open meadows.
                                    </p>
                                </div>





                                <div className="flex gap-4 max-w-[350px] mt-3 mb-1">
                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/13776/building.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Hotel</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/6379/french-fries-on-container.svg"
                                            alt="" />
                                        <p className="text-[10px] text-neutral-600">Meals</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/447874/transport.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Transport</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/438545/flight.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Flight</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/533057/camera-alt-1.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Sightseeing</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/394547/visa.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Visa</p>
                                    </div>

                                </div>



                            </div>


                            <div className="w-[420px] bg-cyan-100 justify-center px-2 flex flex-col">
                                <div className="">

                                    <div className="text-right">
                                        <p className="text-[14px] leading-snug text-cyan-400 font-semibold">SUPER DEAL PRICE</p>
                                        <p className="text-[12px] leading-snug">Starts From <span className="text-[22px] font-medium">₹
                                            3,50,000</span>
                                        </p>
                                        <p className="text-[10px] leading-snug">per person on twin sharing</p>
                                        <p className="text-[14px] leading-snug font-medium underline text-blue-900">from ₹
                                            19,423/months</p>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        className="mt-3 block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none "
                                        type="button">
                                        View details
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- package card 4 --> */}
                        <div
                            className="py-5  flex-shrink-0 mt-5 md:flex gap-5 justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg overflow-hidden">
                            <div className=" mx-5 flex items-center">
                                <img className="h-[180px] w-full  md:w-[550px] md:h-[150px] rounded-md overflow-hidden object-cover"
                                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                    alt="ui/ux review check" />

                            </div>
                            <div className="px-5  py-2 pr-2">
                                <div className="">


                                    <div className="flex items-center justify-between mb-1">
                                        <h5 className="block font-sans text-[18px] font-semibold antialiased text-black">
                                            last Wooden House, Florida
                                        </h5>
                                        <p
                                            className="px-5 flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                className="-mt-0.5 h-5 w-5 text-yellow-700">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            5.0
                                        </p>
                                    </div>




                                    <div className="flex flex-wrap gap-5 mb-2">
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <img className="w-3"
                                                src="https://cdn.iconscout.com/icon/free/png-512/free-calendar-1439790-1214120.png?f=webp&w=256"
                                                alt="" />
                                        </span> 15 Days</p>
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <img className="w-3" src="https://www.svgrepo.com/show/229132/internet.svg" alt="" />
                                        </span> 15 Days</p>
                                        <p className="text-[11px] flex gap-1 items-center"> <span>
                                            <img className="w-3" src="https://www.svgrepo.com/show/38705/location-pin.svg"
                                                alt="" />
                                        </span> 23 Cities</p>

                                    </div>






                                    <p className="block text-[12px] font-normal text-gray-800">
                                        Enter a freshly updated and thoughtfully furnished peaceful home
                                        surrounded by ancient trees, stone walls, and open meadows.
                                    </p>
                                </div>





                                <div className="flex gap-4 max-w-[350px] mt-3 mb-1">
                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/13776/building.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Hotel</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/6379/french-fries-on-container.svg"
                                            alt="" />
                                        <p className="text-[10px] text-neutral-600">Meals</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/447874/transport.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Transport</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/438545/flight.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Flight</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/533057/camera-alt-1.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Sightseeing</p>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        <img className="w-5" src="https://www.svgrepo.com/show/394547/visa.svg" alt="" />
                                        <p className="text-[10px] text-neutral-600">Visa</p>
                                    </div>

                                </div>



                            </div>


                            <div className="w-[420px] bg-cyan-100 justify-center px-2 flex flex-col">
                                <div className="">

                                    <div className="text-right">
                                        <p className="text-[14px] leading-snug text-cyan-400 font-semibold">SUPER DEAL PRICE</p>
                                        <p className="text-[12px] leading-snug">Starts From <span className="text-[22px] font-medium">₹
                                            3,50,000</span>
                                        </p>
                                        <p className="text-[10px] leading-snug">per person on twin sharing</p>
                                        <p className="text-[14px] leading-snug font-medium underline text-blue-900">from ₹
                                            19,423/months</p>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        className="mt-3 block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none "
                                        type="button">
                                        View details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container-wrapper py-12">
                    <div className="text-center pb-8">
                        <p className="text-[22px] font-semibold">Havelock Tour Package Frequently Asked Questions</p>
                        <p className="text-[16px]">We help you prepare for your trip and ensure an effortless and enjoyable travel experience.</p>
                    </div>
                    <div className="collapse collapse-arrow bg-white my-3 rounded-md">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-[18px] font-semibold border-b ">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p className="py-5">hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white my-3 rounded-md">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-[18px] font-semibold border-b ">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p className="py-5">hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white my-3 rounded-md">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-[18px] font-semibold border-b ">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p className="py-5">hello</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}