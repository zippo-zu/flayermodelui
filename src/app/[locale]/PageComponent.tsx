'use client'
// import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
// import { randomVideo } from "~/data/openaiVideo";
import HeadInfo from "~/components/HeadInfo";
// import { useCommonContext } from "~/context/common-context";
import Link from "next/link";
import FrayerModel2 from "~/components/FrayerModel2";
// import { allVideoList } from "~/data/frayerModelTemplate";
import { FrayerModel } from "~/types/FrayerModel";


const PageComponent = ({
  locale = '',
  indexLanguageText,
  initVideoList = [],
  questionText
}) => {
      const [allVideoList, setallVideoList] = useState([]);


       // let allVideoList :FrayerModel[]=[];

        const  getFrayerList = async () => {
          const baseUrl = process.env.BASE_URL || "http://localhost"; // 请确保设置了基础 URL
          console.log("base log--",baseUrl);
          const response =  await fetch(`/${locale}/api/getmodellist?pagesize=4`, { method: "GET" });
          const result =await response.json();
          
          if (result.code ===0){
            const data: FrayerModel[] = result.data;
           // allVideoList=data;
           setallVideoList(data);
            console.log(result.data);
          }
          console.log("******* :",JSON.stringify(allVideoList))
        }
        useEffect(() => {getFrayerList()},[]);


  const handleSubmit = async (e: { preventDefault: () => void }) => {

  }


  const handleMouseEnter = (event) => {
    event.target.play();
  };

  const handleMouseLeave = (event) => {
    event.target.pause();
  };


  return (
    <>
      <HeadInfo
        title={indexLanguageText.title}
        description={indexLanguageText.description}
        locale={locale}
        page={""}
      />
      <Header locale={locale} indexLanguageText={indexLanguageText} />
      <div>
        <div className="block overflow-hidden bg-[#020d24] bg-cover bg-center text-white"
          style={{ backgroundImage: 'https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg' }}>
          <div className="mx-auto w-full max-w-7xl px-5 mb-5">
            <div
              className="mx-auto flex max-w-4xl flex-col items-center text-center py-10">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">{indexLanguageText.h1Text}</h1>
              <div className="mb-5 max-w-[528px] lg:mb-8">
                <p className="text-[#7c8aaa] text-xl">{indexLanguageText.pDescription}</p>
              </div>
              {/* <a
                href="https://www.producthunt.com/posts/sorawebui?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-sorawebui"
                target="_blank"><img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=440945&theme=light"
                  alt="SoraWebui - Open&#0045;source&#0032;Sora&#0032;Web&#0032;Client | Product Hunt"
                /></a> */}
            </div>
            <div className={"border-[14px] border-[#ffffff1f] object-fill w-[90%] mx-auto mt-8"}>
              <div className={"mx-auto"}>
                <div className={"pb-2 border-b-2"}>
                  <h2
                    className={"text-blue-500 pt-4 text-4xl flex justify-center items-center mb-4"}>{indexLanguageText.soraVideoExample}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                  {allVideoList.map((file) => (
                    <div key={file.prompt}>
                      <div
                        className="rounded-xl flex justify-center items-start">
                        <FrayerModel2 prompt={file.prompt} vocal={file.Concept} fileName={file.fileName} Definition={file.Definition} Characteristics={file.Characteristics} Examples={file.Examples}
                          noExamples={file.NonExamples} number={file.number} lang={locale} 
                        />
                      </div>

                    </div>
                  ))}


                </div>
                <div key={"more"} className={"px-6 py-4"}>
                  <Link href={`/${locale}/frayermodeltemplates`}
                    className={"flex justify-center items-center text-xl text-red-400 hover:text-blue-600"}>
                    {indexLanguageText.moreExample} {'>>'}
                  </Link>
                </div>
              </div>
            </div>

            <div className={"border-[14px] border-[#ffffff1f] object-fill w-[90%] mx-auto mt-8"}>
              <div className={"mx-auto bg-white py-8"}>
                <div className={"pb-2 border-b-2"}>
                  <h2
                    className={"text-blue-500 pt-4 text-4xl flex justify-center items-center"}>{questionText.h2_1}</h2>
                </div>
                <div className={"w-[60%] text-gray-700 prose mx-auto mt-4"}>
                  <p className="mt-5 leading-loose">
                    {questionText.h2_1_p1}
                  </p>
                  <p className="mt-5 leading-loose">
                    {questionText.h2_1_p2}
                  </p>
                  <p className="=mt-5 leading-loose">
                    {questionText.h2_1_p3}
                  </p>
                  <p className="mt-5 leading-loose">{questionText.h2_1_p4}</p>
                </div>
              </div>
            </div>

            <div className={"border-[14px] border-[#ffffff1f] object-fill w-[90%] mx-auto mt-8"}>
              <div className={"mx-auto bg-white py-7"}>
                <div className={"pb-2 border-b-2"}>
                  <h2
                    className={"text-blue-500 pt-4 text-4xl flex justify-center items-center"}>{questionText.h2_2}</h2>
                </div>
                <div className={"w-[60%] text-gray-700 prose mx-auto mt-4"}>
                  <p className="=mt-5 leading-loose">
                    {questionText.h2_2_p1}
                  </p>
                  <p className="=mt-5 leading-loose">
                    {questionText.h2_2_p2}
                  </p>
                  <p className="=mt-5 leading-loose">
                    {questionText.h2_2_p3}
                  </p>
                  <p className="=mt-5 leading-loose">
                    {questionText.h2_2_p4a}
                  </p>
                  <p className="=mt-5 leading-loose">
                    {questionText.h2_2_p4b}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer
        locale={locale}
        description={indexLanguageText.description}
      />



    </>
  )


}
export default PageComponent
