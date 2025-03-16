import Image from "next/image";
import Avatar from '@/app/avatar.jpg';

export default function PortofolioSection() {
  return (
    <div id="portofolio-section" className="relative bg-[#D98324] h-screen w-full grid grid-cols-8 grid-rows-9 gap-4 bg-cover bg-center bg-[url('../app/Picture4.png')] text-[#FFF0DC]">
        <div className="flex flex-col items-center justify-end w-full col-span-8 text-[20px] -mb-6">
            -Project
        </div>
        <div className="w-full pl-4 pr-4 font-extrabold row-start-2 col-span-8 flex flex-col items-center justify-center text-[50px] text-[#131010] ">
            My Latest Project
        </div>
        <div className="bg-[#131010] p-5 row-start-4 row-span-5 col-start-2 col-span-6 rounded-3xl flex flex-cols-2 gap-10 justify-center text-[14px]">
            <div className="h-full w-full relative rounded-3xl">
            <Image src={Avatar} className="rounded-3xl" alt="Logo" layout="fill" objectFit="cover" />
            </div>
            <div className="h-full w-full flex flex-col justify-center gap-5">
                <div className="flex flex-cols-3 w-full gap-5 ">
                    <div className="bg-[#D98324] rounded-full pl-3 pr-3 p-2 w-fit h-full">
                        App Design
                    </div>
                    <div className="bg-[#D98324] rounded-full pl-3 pr-3 p-2 w-fit h-full">
                        React
                    </div>
                    <div className="bg-[#D98324] rounded-full pl-3 pr-3 p-2 w-fit h-full">
                        MongoDB & AWS
                    </div>
                </div>
                <div className="text-[25px]">
                    XYZ Retail <br />
                    Mobile and Desktop app
                </div>
                <div className="">
                XYZ Retail, an established retail company, sought to expand into e-commerce to reach a wider audience and streamline its sales 
                processes. They needed a scalable, user-friendly platform to support both desktop and mobile users with features like product 
                browsing, user reviews, secure checkout, and real-time inventory updates.
                </div>
                <button className="bg-[#D98324] rounded-full pl-3 pr-3 p-2 w-fit">
                   -{">"} View Details
                </button>
            </div>
        </div>
    </div>
  );
}