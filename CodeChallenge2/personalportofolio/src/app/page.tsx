import Image from "next/image";
import Avatar from '@/app/avatar.jpg';
import Sosmed from '@/app/sosmed.png';
import Codeppl from '@/app/Codeppl.png';

export default function Home() {
  return (
    <div className="font-mono">
      <div id="hero-section" className="relative bg-[#131010] h-screen w-full grid grid-cols-8 bg-cover bg-center bg-[url('../app/Picture4.png')]">
        <div className="grid grid-cols-7 gap-4 col-span-8 text-[15px] h-[30px] p-5 text-[#D98324] ">
          <button className="col-start-3 ">
            About me
          </button>
          <button className="">
            Resume
          </button>
          <button className="">
            Contact
          </button>
        </div>
        <div className=" border-red-50 h-full flex flex-col justify-center items-center col-span-1 row-span-2">
          <div>
            <Image src={Sosmed} alt="Sosmed"/>
          </div>
        </div>
        <div id="name" className="-mt-[14px] font-mono flex flex-col row-span-2 col-span-4 col-start-2 h-full font-extrabold text-[50px] items-center justify-center ">
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
            <p className="text-[14px]">
              Building scalable and high-performance web solutions for your business needs.
            </p>
          </div>
        </div>
        <div className="flex items-center h-full rounded-full row-span-2 col-span-2 ">
          <Image src={Avatar} alt="Logo" height={370} className="w-fit h-fit"/>
        </div>
        <div className=" border-red-50 row-span-2 flex flex-col justify-center items-center">
          <div className="border-1 bg-[#D98324] border-[#D98324] rounded-full h-full w-[3px] flex flex-col justify-between items-center">
          </div>
        </div>
        <div className="col-span-8"></div>
      </div>
      <div id="aboutme-section" className="relative bg-[#D98324] h-screen w-full grid grid-cols-8 grid-rows-9 gap-4 bg-cover bg-center bg-[url('../app/Picture4.png')] text-[#FFF0DC]">
        <div className="w-full pl-4 pr-4 font-extrabold row-start-2 col-span-8 rounded-tl-3xl rounded-br-3xl flex flex-col items-center justify-center text-[50px] text-[#131010] ">
          Inrtoduction
        </div>
        <p className="border-4 bg-[#D98324] border-[#131010] w-fit pl-4 pr-4 font-extrabold row-start-4 col-start-2 col-span-2 rounded-tl-3xl rounded-br-3xl flex flex-col items-center justify-center text-[35px] text-[#131010] ">
          About Me
        </p>
        <div className="bg-[#131010] p-5 row-start-5 row-span-3 col-start-2 rounded-3xl col-span-3 flex flex-col justify-center text-[14px]">
          <h1 className="text-[24px] text-[#D98324]">
            Hello!,
          </h1>
          <h1 >
            Completed my Bachelor of Applied Science of Mechatronic Engineering from Batam State Polytechnic in 2022. Almost 3 years of experience as a Software Engineer. I am interested in programming, especially Desktop applications and Automations. I really like to try new things and challenge myself to keep growing. 
          </h1>
        </div>
        <div className="row-start-3 -ml-[40px] col-start-6 row-span-5 col-span-2 ">
          <Image src={Codeppl} alt="Logo" height={420} className="w-fit h-fit"/>
          <a href="https://storyset.com/technology"></a>
        </div>
      </div>
      <div id="skills-section" className="p-10 pt-10 gap-10 relative bg-[#131010] h-screen w-scareen justify-stretch grid grid-cols-8 bg-cover bg-center bg-[url('../app/Picture4.png')] text-[20px] text-[#FFF0DC]">
        <div className="col-span-8 flex flex-col justify-center items-center text-[#D98324] font-extrabold text-[50px]">
          My Skills
        </div>
        <div className="rounded-full bg-[#D98324] grid grid-rows-5 col-start-2 col-span-2 p-10">
          <div className="h-full w-full row-span-2 flex justify-center items-center">
            <Image src={Codeppl} alt="Logo" height={80} className="w-fit h-fit"/>
          </div>
          <div className="h-full w-full row-span-3 flex items-center text-center justify-center">
            HTML, CSS, JavaScript, React, Angular, etc
          </div>
        </div>
        <div className="rounded-full bg-[#D98324] grid grid-rows-5 col-start-4 col-span-2 p-10">
        <div className="h-full w-full row-span-2 flex justify-center items-center">
            <Image src={Codeppl} alt="Logo" height={80} className="w-fit h-fit"/>
          </div>
          <div className="h-full w-full row-span-3 flex items-center text-center justify-center">
            Node.js, Express, Django, or Ruby on Rails.
          </div>
        </div>
        <div className="rounded-full bg-[#D98324] grid grid-rows-5 col-start-6 col-span-2 p-10">
        <div className="h-full w-full row-span-2 flex justify-center items-center">
            <Image src={Codeppl} alt="Logo" height={80} className="w-fit h-fit"/>
          </div>
          <div className="h-full w-full row-span-3 flex items-center text-center justify-center">
            Docker, Git, Jenkins, AWS, or CI/CD solutions.
          </div>
        </div>
      </div>
    </div>
  );
}
