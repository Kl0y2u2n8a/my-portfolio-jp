import React, { useRef } from 'react';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";



function MyProject(props, projectRef) {

    const contentRef = useRef();

    return (
        <section className="min-h-screen px-5 mx-auto mb-5 justify-center scroll-smooth" ref={projectRef}>

            <h2 className="text-center text-5xl md:text-6xl font-newWalt mb-5 dark:text-white">Projects</h2>
            <div className="flex md:grid md:grid-cols-[1000px_auto] justify-center md:min-h-screen">

                <div ref={contentRef} className="md:flex h-auto md:w-9/12 pb-5 px-10 md:px-0 mx-auto gap-5 md:gap-10 overflow-x-scroll snap-x snap-mandatory no-scrollbar ">
                    <div className="border-t my-10 md:ml-10 lg:ml-60 border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl md:mx-auto md:my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">

                        <h3 className="text-lg font-mochy text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-300">Finance logs</h3>

                        <p className="md:max-w-lg p-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">
                            これはTypescriptとReactのミニプロジェクトです。
                            自分で自主学習のため、作成しました。
                            下のフォームを入力すると上のボックスにユーザーさんが追加した内容を表示します。
                            </p>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">* 未完成、作成中 *</p>

                        <h4 className="py-2 font-mochy text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">ツールと言語</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS, Typescript, React</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>

                        <button className="mt-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons 
                            bg-gradient-to-r from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                            dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                            <a href="https://github.com/Kl0y2u2n8a/HelloWorld" target="_blank">Resource Code</a>
                        </button>

                        <button className="mt-3 mx-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r 
                            from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                            dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                                <a href="https://hello-world-qsdmh6h2j-kl0y2u2n8as-projects.vercel.app/" target="_blank">Website</a>
                        </button>

                    </div>
                    <p className=" invisible md:visible m-auto"><FaAnglesRight/></p>

                    <p className=" invisible md:visible m-auto md:ml-10 lg:ml-60"><FaAnglesLeft/></p>

                    <div className="border-t my-10 border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl mx-auto md:my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">

                        <h3 className="text-2xl font-mochy text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-300">CRUD プロジェクト</h3>

                        <p className="md:max-w-lg p-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">
                            これはCRUDプロジェクトです。このサイトはフォームで野球選手のデータを入力するとテーブルで選手達の資料が表示し、データを編集が削除することができます。
                            このサイトは日本語、中国語、英語を支援しています。
                            このサイトはXAMPPを使うことが必要です。</p>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 
                            dark:to-red-400  bg-clip-text text-transparent">* もっと詳しくしたいならResource codeを押してください *</p>

                        <h4 className="py-2 font-mochy text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">ツールと言語</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS, PHP</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code, XAMPP</p>

                        <button className="mt-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons 
                        bg-gradient-to-r from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                        dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                            <a href="https://github.com/Kl0y2u2n8a/CRUDproject" target="_blank">Resource Code</a>
                        </button>

                    </div>        
                    <p className=" invisible md:visible m-auto"><FaAnglesRight/></p>

                    <p className=" invisible md:visible m-auto md:ml-10 lg:ml-60"><FaAnglesLeft/></p>
                    <div className="border-t my-10 border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl mx-auto md:my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">

                        <h3 className="text-2xl font-mochy text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-200">PHP ログインシステム</h3>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">
                            このプロジェクトはPHPで作ったログインシステムです。
                            PHPを勉強していたとき、作成しました。
                            まずはアカウントを登録してください。もしパスワードを変更したいとき、自分のプロファイルで変更できます。
                            このアプリはXAMPPを使うことが必要です。
                        </p>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 
                            dark:to-red-400  bg-clip-text text-transparent">* もっと詳しくしたいならResource codeを押してください *</p>

                        <h4 className="py-2 font-mochy text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">ツールと言語</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">PHP, HTML/CSS</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code, XAMPP</p>

                        <button className="mt-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons 
                        bg-gradient-to-r from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                        dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                            <a href="https://github.com/Kl0y2u2n8a/phpproject" target="_blank">Resource Code</a>
                        </button>

                    </div>
                    <p className=" invisible md:visible m-auto"><FaAnglesRight/></p>

                    <p className=" invisible md:visible m-auto md:ml-10 lg:ml-60"><FaAnglesLeft/></p>
                    <div className="border-t my-10 border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl mx-auto md:my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">

                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-200">TV screen ミニプロジェクト</h3>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 
                            dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">
                            これはJavascriptで作成したミニプロジェクトです。
                            私は同時に四つの動画を見たいので、このサイトを作成しました。
                            動画の著作権は全部YouTubeと動画を作成した人所有です。
                        </p>

                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">Tools & Language</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">HTML/CSS</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>

                        <button className="mt-3 mx-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 
                        hover:text-violet-500 dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                            <a href="https://github.com/Kl0y2u2n8a/tvscreen" target="_blank">Resource Code</a>
                        </button>
                        <button className="mt-3 mx-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r 
                            from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                            dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                                <a href="https://kl0y2u2n8a.github.io/tvscreen/" target="_blank">Website</a>
                        </button>
                    </div>
                    <p className=" invisible md:visible m-auto"><FaAnglesRight/></p>

                    <p className=" invisible md:visible m-auto md:ml-10 lg:ml-60"><FaAnglesLeft/></p>
                    <div className="border-t my-10 md:mr-10 border-gray-200 text-center min-w-fit md:h-auto shadow-lg p-10 rounded-xl mx-auto md:my-auto snap-center snap-always dark:border-white dark:shadow-gray-500 hover:shadow-neutral-200 dark:hover:shadow-gray-400">

                        <h3 className="text-2xl font-salma text-slate-600 md:text-xl lg:text-2xl dark:text-neutral-200">Guess Password Game</h3>
                        <p className="md:max-w-lg py-2 font-rony9 bg-gradient-to-r from-fuchsia-500 dark:from-sky-400 via-rose-400 dark:via-indigo-100 to-red-500 dark:to-red-400  bg-clip-text text-transparent">
                            これはパスワードを推測するミニゲームです。
                            プレイヤーは五回のチャンスがあります。
                            画面でプレイヤーが入力した数字と残り回数を表示します。
                            プレイヤーが正確の数字を入力すると成功のメッセージが出ます。
                            逆に、間違った場合も失敗のメッセージが出ます。
                        </p>

                        <h4 className="py-2 font-salma text-slate-600 dark:text-neutral-200 text-base md:text-lg lg:text-xl ">ツールと言語</h4>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">JavaScript, HTML/CSS</p>
                        <p className="text-sm bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent py-1 font-rony9">Visual Studio Code</p>
                        <div className="">
                            <button className="mt-3 mx-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r 
                            from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                            dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                                <a href="https://github.com/Kl0y2u2n8a/Get-Password-Game" target="_blank">Resource Code</a>
                            </button>
                            <button className="mt-3 mx-3 rounded-lg border border-gray-800 p-1 text-sm text-blue-700 font-burtons bg-gradient-to-r 
                            from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                            dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                                <a href="https://kl0y2u2n8a.github.io/Get-Password-Game/" target="_blank">Website</a>
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
export default React.forwardRef(MyProject);