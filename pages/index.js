import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaGripLinesVertical } from "react-icons/fa6";
import { TbLanguageHiragana } from "react-icons/tb";
import Image from 'next/image';
import my from '../public/my.jpg';
import { useState, useRef } from 'react';
import WorkExperience from "./components/workexp";
import MySkills from "./components/skills/skills";
import MyProject from "./components/projects";



export default function Home() {
  // for dark mode
  const [darkMode, setDarkMode] = useState(false);
  // for dropdown
  // const [isOpen, setIsOpen] = useState(false);

  const skillsRef = useRef();
  const workRef = useRef();
  const projectRef = useRef();

  // Scroll handler
  function handleClick(div) {
    switch (div) {
      case "top":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "workexp":
        workRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };


  return (

    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>リャン カイのポートフォリオ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-5 min-w-fit min-h-full bg-gradient-to-tr
      from-sky-300 via-indigo-300 to-blue-100 dark:from-blue-950 dark:via-indigo-950 dark:to-slate-950">

        

        <nav className="sticky top-0 z-50 py-5 mb-12 flex justify-between font-mochy">
          <h1 className="md:text-2xl font-burtons text-blue-900 hover:text-blue-500 dark:text-white dark:hover:text-neutral-300">
            <a href="/">kevinliangweb</a>
          </h1>
          <ul className="flex items-center">
            <li>
              <button className=" text-[10px] align-middle sm:text-[12px] md:text-sm ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-sky-500 dark:text-white  dark:hover:text-neutral-300"
                onClick={() => handleClick("top")}>
                紹介
              </button>
            </li>

            <li className="text-sm align-text-bottom md:text-xl ml-0 md:ml-2 lg:ml-4 text-blue-900 dark:text-white">
              <FaGripLinesVertical />
            </li>

            <li>
              <button className="text-[10px] align-middle sm:text-[10px] md:text-sm ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-sky-500 dark:text-white  dark:hover:text-neutral-300"
                onClick={() => handleClick("skills")}>
                スキール
              </button>
            </li>

            <li className="text-sm align-text-bottom md:text-xl ml-0 md:ml-2 lg:ml-4 text-blue-900 dark:text-white">
              <FaGripLinesVertical />
            </li>

            <li>
              <button className="text-[10px] align-middle sm:text-[10px] md:text-sm ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-sky-500 dark:text-white dark:hover:text-neutral-300"
                onClick={() => handleClick("workexp")}>
                職務経験
              </button>
            </li>
            <li className="text-sm align-text-bottom md:text-xl ml-0 md:ml-2 lg:ml-4 text-blue-900 dark:text-white">
              <FaGripLinesVertical />
            </li>

            <li>
              <button className="text-[10px] align-middle sm:text-[10px] md:text-sm ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-sky-500 dark:text-white  dark:hover:text-neutral-300"
                onClick={() => handleClick("projects")}>
                プロジェクト
              </button>
            </li>

            <li className="text-xs sm:text-lg  align-text-bottom md:text-xl ml-0 md:ml-2 lg:ml-4 text-blue-900 dark:text-white">
              <FaGripLinesVertical />
            </li>

            {/* <li>
              <button  data-ripple-light="true" data-popover-target="menu"
                className="font-burtons text-l align-middle md:text-2xl ml-1 md:ml-2 lg:ml-4 text-blue-900 hover:text-sky-500 dark:text-white  dark:hover:text-neutral-300"
                >
                <FiMenu />
              </button>
              

            </li> */}

            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer  text-xs sm:text-lg md:text-xl ml-1 md:ml-2 lg:ml-4
            text-blue-900 hover:text-sky-500 dark:text-white dark:hover:text-neutral-300"
              />
            </li>

            <li>
              <a href="https://my-portfolio-eta-orpin-11.vercel.app/" target="_blank"><TbLanguageHiragana
                className=" cursor-pointer text-lg md:text-xl ml-1 md:ml-2 lg:ml-4
            text-blue-900 hover:text-sky-500 dark:text-white dark:hover:text-neutral-300"
              /></a>
            </li>

            <li>
              <button
                className="text-[10px] border-2 w-16  h-8 sm:w-auto sm:h-auto sm:text-lg border-gray-600 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-2 justify-center 
                            ml-1 sm:ml-2 lg:ml-4 font-burtons text-l text-blue-900 dark:text-white hover:bg-gradient-to-l dark:hover:text-neutral-300"
              >
                <a href="https://drive.google.com/file/d/1brZKtkZXY8eL__ZqG7HDDxdz1ndcuYV4/view?usp=sharing" target="_blank" >履歴書</a>
              </button>
            </li>
          </ul>
        </nav>


        <section className="min-h-screen">
          <div className="text-center p-10 ">

            <div className="relative mx-auto bg-gradient-to-tr from-slate-600 to-blue-400 bg-clip-border border-transparent border-2 hover:border-4 hover:from-indigo-400 hover:to-blue-300 rounded-full w-60 h-60 mb-5 overflow-hidden md:w-72 md:h-72">
              <Image src={my}/>
            </div>
            <h2 className="text-4xl py-2 font-mplus bg-gradient-to-r from-cyan-400 to-indigo-800 bg-clip-text text-transparent md:text-5xl lg:text-6xl lg:py-3">リャン カイ</h2>
            <h3 className="text-xl py-2 font-mplus md:text-2xl lg:text-3xl bg-gradient-to-r from-purple-500 to-sky-400 bg-clip-text text-transparent ">システムエンジニア</h3>
            <p className="text-md font-mplus py-3 leading-8 bg-gradient-to-br from-sky-400  to-indigo-700 bg-clip-text text-transparent max-w-xl mx-auto md:text-lg lg:text-xl lg:py-3">
              初めまして、リャン カイと申します。台湾出身です。<br/>
              現在は東京エリアのお客様先でヘルプデスクエンジニアと<br/>ディスパッチエンジニアとして働いています。<br/>
              イリノイ大学シカゴ分校でコンピューターサイエンス学科を<br/>専攻しました。
              今はフロントエンドに興味を持って、自主でReactやTypescriptなどの知識と技術を勉強しています。<br/>
              今後はフロントエンドエンジニアとして活躍したいと思います。
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-10 text-gray-600 dark:text-sky-200">
            <a href="https://github.com/Kl0y2u2n8a" target='_blank' className='hover:text-gray-800 dark:hover:text-sky-100'><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/liang-kai0228/" target='_blank' className=' hover:text-gray-800 dark:hover:text-sky-100'><AiFillLinkedin /></a>
          </div>
        </section>
        
        <MySkills ref={skillsRef} />
        <WorkExperience ref={workRef} />
        <MyProject ref={projectRef}/>

        <footer>
          <div className="font-rony9 pb-8 text-sm border-t-2 p-auto pt-3 text-center font-extrabold text-blue-800 dark:text-sky-400 ">
            <h1 className="p-1 text-xl">リャン カイ</h1>
            <p className="p-1">連絡資料</p>
            <p className="p-1">メール: kevinmailforjapan@gmail.com</p>
            <p className="p-1">電話番号: 080-2966-3363</p>
            <p className="p-1">LinkedIn: <a href="https://www.linkedin.com/in/liang-kai0228/" target="_blank">Kai Liang</a></p>
          </div>
        </footer>

      </main>
    </div>

  );
}
