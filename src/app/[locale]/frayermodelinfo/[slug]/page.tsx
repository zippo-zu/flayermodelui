/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1auoUlYhc0U
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import { Button } from "../../../../components/ui/button"
// import { findFrayerModel } from "~/data/frayerModelTemplate";
// import { allVideoList } from "~/data/frayerModelTemplate";
import HeadInfo from "~/components/HeadInfo";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { useEffect, useState } from 'react';
import { FrayerModel } from "~/types/FrayerModel";


export default  function Page({ params }) {

    const [frayerModel, setfrayerModel] = useState({}  as FrayerModel);


    const number = params.slug;

     // let allVideoList :FrayerModel[]=[];

     const  getFrayerInfo = async () => {

        const response =  await fetch(`/api/getFrayerModelInfo?number=${number}`, { method: "GET" });
        const result =await response.json();
        console.log("frayerInfo---"+JSON.stringify(result));
        if (result.code ===0){
          const data: FrayerModel = result.data;
         // allVideoList=data;
         setfrayerModel(data);
          console.log("frayerInfo--e-"+JSON.stringify(frayerModel)) ;
        }
       // console.log("******* :",JSON.stringify(allVideoList))
      }
      useEffect(() =>{getFrayerInfo()},[]);

  //  let frayerModel =  findFrayerModel(allVideoList,number);
    

    const downloadFile = async () => {
            // 调用下载 API 
            const response = await fetch(`/zh/api/r2download?fileName=${frayerModel.fileName}`)
            
            // 获取文件 Blob
            const blob = await response.blob()
            
            // 生成临时 URL
            const fileURL = window.URL.createObjectURL(blob) 
            
            // 触发下载
            let anchor = document.createElement('a')
            anchor.href = fileURL
            anchor.download = frayerModel.fileName;
            anchor.click()

      };




    return (
        <>
        <HeadInfo
        title="frayer model templates info "
        description="frayer model templates info"
        locale="zh"
        page={"/frayermodelinfo"}
      />
      <Header locale="zh" page={"frayermodeltemplates"} indexLanguageText="zh" />
        <div className="flex flex-col items-center justify-center  bg-gray-100 dark:bg-gray-900">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-3xl">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 dark:bg-gray-700 rounded-full w-32 h-32 flex items-center justify-center border border-black dark:border-white">
                    <h2 className="text-lg font-semibold  dark:text-gray-400 text-black ">{frayerModel.Concept} </h2>
                </div>
                <h1 className="text-2xl font-bold mb-6 text-center text-black">{frayerModel.Concept} |Frayer Model Template </h1>
                <div className="grid grid-cols-2 gap-0 border-0">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-black dark:border-white">
                        <h2 className="text-lg font-semibold mb-2  text-black">Definition</h2>
                        <p className="text-gray-600 dark:text-gray-400">{frayerModel.Definition}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-black dark:border-white">
                        <h2 className="text-lg font-semibold mb-2  text-black">Characteristics</h2>
                        <p className="text-gray-600 dark:text-gray-400">{frayerModel.Characteristics}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-black dark:border-white">
                        <h2 className="text-lg font-semibold mb-2  text-black">Examples</h2>
                        <p className="text-gray-600 dark:text-gray-400">{frayerModel.Examples}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-black dark:border-white">
                        <h2 className="text-lg font-semibold mb-2  text-black">Non-Examples</h2>
                        <p className="text-gray-600 dark:text-gray-400">{frayerModel.NonExamples}</p>
                    </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{frayerModel.Concept}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{frayerModel.prompt}..</p>
                <Button  onClick={downloadFile} size="sm" className="w-full">
                    Download
                </Button>
            </div>
        </div>
        <Footer
        locale="ZH"
        description="FRAYER model info "
      />

        </>
    )
}