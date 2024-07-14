/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1auoUlYhc0U
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "./ui/button"
import Link from "next/link";

export default function Component({ prompt,vocal,fileName, Definition, Characteristics, Examples, noExamples,number,lang }) {

    const downloadFile = async () => {
            // 调用下载 API 
            const response = await fetch(`/zh/api/r2download?fileName=${fileName}`)
            
            // 获取文件 Blob
            const blob = await response.blob()
            
            // 生成临时 URL
            const fileURL = window.URL.createObjectURL(blob) 
            
            // 触发下载
            let anchor = document.createElement('a')
            anchor.href = fileURL
            anchor.download = fileName;
            anchor.click()

      };
    return (
        <div className="flex flex-col items-center justify-center  bg-gray-100 dark:bg-gray-900">

            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-3xl">
          
            <Link href={`/frayermodelinfo/${number}`}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 dark:bg-gray-700 rounded-full w-32 h-32 flex items-center justify-center border border-black dark:border-white">
                   <h2 className="text-base font-semibold  dark:text-gray-400 text-black "> {vocal}</h2>
                </div>
            </Link>
                <h1 className="text-2xl font-bold mb-6 text-center text-black">{vocal} | Frayer Model template</h1>
                <div className="grid grid-cols-2 gap-0 border-0">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-black dark:border-white">
                        <h2 className="text-sm font-semibold mb-2  text-black">Definition</h2>
                        <p className="text-gray-600 dark:text-gray-400">{Definition.slice(0, 15)}...</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-black dark:border-white">
                        <h2 className="text-sm font-semibold mb-2  text-black text-left">Characteristics</h2>
                        <p className="text-gray-600 dark:text-gray-400">{Characteristics.slice(0, 15)}...</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-black dark:border-white">
                        <h2 className="text-sm font-semibold mb-2  text-black">Examples</h2>
                        <p className="text-gray-600 dark:text-gray-400">{Examples.slice(0, 15)}...</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-black dark:border-white">
                        <h2 className="text-sm font-semibold mb-2  text-black text-left">Non-Examples</h2>
                        <p className="text-gray-600 dark:text-gray-400">{noExamples.slice(0, 15)}...</p>
                    </div>
                </div>
                <h3 className="text-sm font-semibold mb-2">{vocal}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{prompt}.</p>
                {/* <Button  onClick={downloadFile} size="sm" className="w-full">
                    Download
                </Button>  */}
            </div>
        </div>
    )
}