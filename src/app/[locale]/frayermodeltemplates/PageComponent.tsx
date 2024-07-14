"use client";
import { useEffect, useState } from 'react';
import HeadInfo from "~/components/HeadInfo";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
 // import { allVideoList } from "~/data/openaiVideo";
import FrayerModel2 from "~/components/FrayerModel2";
// import {getRecommendedFrayerModel} from "~/models/frayerModel";
import { FrayerModel } from "~/types/FrayerModel";

const PageComponent =  ({
  locale = '',
  videosLanguageText,
  indexLanguageText,
}) => {
      const [allVideoList, setallVideoList] = useState([]);


       // let allVideoList :FrayerModel[]=[];

        const  getFrayerList = async () => {
          const baseUrl = process.env.BASE_URL || "http://localhost"; // 请确保设置了基础 URL
          console.log("base log--",baseUrl);
          const response =  await fetch(`/${locale}/api/getmodellist`, { method: "GET" });
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
       
      


  return (
    <>
      <HeadInfo
        title={videosLanguageText.title}
        description={videosLanguageText.description}
        locale={locale}
        page={"/frayermodeltemplates"}
      />
      <Header locale={locale} page={"frayermodeltemplates"} indexLanguageText={indexLanguageText} />

      <div className={"mb-8"}>
        <h2
          className={"text-blue-500 pt-4 text-4xl flex justify-center items-center"}>{indexLanguageText.soraVideoExample}</h2>
      </div>

      <div className={"w-[90%] mx-auto mb-20"}>
        <div role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allVideoList.map((file : FrayerModel,idx :number) => (
            <div key={idx}>
              <div
                className="rounded-xl flex justify-center items-start">
                <FrayerModel2 prompt={file.prompt} vocal={file.Concept} fileName={file.fileName} Definition={file.Definition} Characteristics={file.Characteristics} Examples={file.Examples}
                  noExamples={file.NonExamples} number={file.number} lang={locale}
                />
              </div>

            </div>
          ))}
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
