import Image from "next/image";
import Sosmed from '@/app/sosmed.png';
import Avatar from '@/app/avatar.jpg';

export default function HeroSection() {
  return (
    <div id="hero-section" className="relative bg-[#131010] h-screen w-full grid grid-cols-1 md:grid-cols-8 bg-cover bg-center bg-[url('../app/Picture4.png')]">
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4 col-span-1 md:col-span-8 text-[15px] h-[30px] p-5 text-[#D98324]">
        <button className="col-start-2 md:col-start-3" aria-label="About me">
          About me
        </button>
        <button className="" aria-label="Resume">
          Resume
        </button>
        <button className="" aria-label="Contact">
          Contact
        </button>
      </div>
      <div className="border-red-50 h-full flex flex-col justify-center items-center col-span-1 row-span-2">
        <div>
          <Image src={Sosmed} alt="Social media icons" loading="lazy"/>
        </div>
      </div>
      <div id="name" className="-mt-[14px] font-mono flex flex-col row-span-2 col-span-1 md:col-span-4 col-start-1 md:col-start-2 h-full font-extrabold text-[30px] md:text-[50px] items-center justify-center">
        <div className="flex flex-col justify-center">
          <p className="text-[#FFF0DC]">
            Hi, I'm
          </p>
          <h1 className="text-[#D98324]">
            Irga Julian Diputra,
          </h1>
          <p className="text-[#FFF0DC]">
            a junior web developer
          </p>
          <p className="text-[12px] md:text-[14px]">
            Building scalable and high-performance web solutions for your business needs.
          </p>
        </div>
      </div>
      <div className="flex items-center h-full rounded-full row-span-2 col-span-1 md:col-span-2">
        <Image src={Avatar} alt="Logo" height={370} className="w-fit h-fit" priority/>
      </div>
      <div className="border-red-50 row-span-2 flex flex-col justify-center items-center">
        <div className="border-1 bg-[#D98324] border-[#D98324] rounded-full h-full w-[3px] flex flex-col justify-between items-center">
        </div>
      </div>
      <div className="col-span-1 md:col-span-8"></div>
    </div>
  );
}