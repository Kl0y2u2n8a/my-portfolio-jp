import React from 'react';

function WorkExperience(props, workRef) {
    const clientList = [
        { title: "NBCユニバーサル.エンターテイメントジャパン", position: "ヘルプデスク", period: "2024/1 ~ now"},
        { title: "ポールへイティングス法律事務所", position: "ヘルプデスク", period: "2023/7 ~ now"},
        { title: "ビオメリュージャパン株式会社", position: "ヘルプデスク", period: "2023/7 ~ 2024/1"},
        { title: "ジェンマプ株式会社", position: "ヘルプデスクアシスタント", period: "2023/2 ~ 2023/6"},
        { title: "フォッシル", position: "ディスパッチエンジニア", period: "2022/11 ~ 2023/1 & 2023/6 ~ 2023/7"},
        { title: "Salesforce", position: "アセットマネジメント", period: "2022/11 ~ 2023/1 & 2023/6 ~ 2023/7"},
        { title: "バンク・オブ・アメリカ", position: "ディスパッチエンジニア", period: "2022/11 ~ 2023/1 & 2023/6 ~ 2023/7"},
        { title: "Teneo 日本", position: "ディスパッチエンジニア", period: "2022/11 ~ 2023/1 & 2023/6 ~ 2023/7"}]

    const Clients = clientList.map((client) =>
        <li>
            <div className="mx-auto">
                <p>------------------------</p>
                <p className=" md:text-xl">{client.title}</p>
                <p>{client.position}</p>
                <p>({client.period})</p>
            </div>
        </li>);

    return (
        <section className="min-h-screen p-10" ref={workRef}>
            <div className="workexperience">
                <div className="text-center p-auto font-mplus font-bold">
                    <h3 className="text-5xl md:text-6xl py-1 font-newWalt  dark:text-white">Work experience</h3>

                    <div className="py-2 max-w-2xl mx-auto leading-8 mt-5">
                        <div className="h-fit w-fit mx-auto px-2 md:px-10 rounded-3xl border-2 border-sky-400 hover:border-sky-200 bg-gradient-to-r from-blue-300 to-neutral-200 dark:from-blue-800 dark:to-slate-600 shadow-md shadow-gray-500 ">
                            <h2 className="font-bold text-xl md:text-2xl pt-1 dark:text-white"><a href="https://www.computec.co.jp/ja/" target="_blank">コンピューテックエンジニアリング株式会社</a><br /><a className="text-sm md:text-lg">(2022/11 ~ now)</a></h2>
                            <p className="text-xl md:text-2xl py-3 bg-gradient-to-r from-violet-700 dark:from-purple-400  via-blue-600 to-cyan-600 dark:to-cyan-300 bg-clip-text text-transparent">システムエンジニア 正社員</p>
                            <ul className="text-lg py-3 bg-gradient-to-r from-violet-700 dark:from-purple-400  via-blue-600 to-cyan-600 dark:to-cyan-300 bg-clip-text text-transparent">
                                <p className="md:text-xl font-bold">サポートのクライアントリスト</p>
                                {Clients}
                            </ul>
                            <button className="my-5 rounded-lg border border-gray-800 p-1 md:text-lg text-blue-700 font-burtons bg-gradient-to-r 
                            from-blue-400 via-white to-sky-500 hover:from-sky-500 hover:via-white hover:to-blue-400 hover:text-violet-500 
                            dark:from-blue-600 dark:to-sky-600 dark:text-white dark:hover:from-sky-600 dark:hover:via-gray-400 dark:hover:to-blue-600">
                                <a href="https://drive.google.com/file/d/1laXrfOwiUNvZJaPEPMLyUJeqxHeApEMe/view?usp=sharing" target="_blank">もっと知りたい</a>
                        </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.forwardRef(WorkExperience);