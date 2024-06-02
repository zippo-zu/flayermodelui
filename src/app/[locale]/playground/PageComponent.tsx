'use client'
import { useRouter } from "next/navigation";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { useState } from "react";
import HeadInfo from "~/components/HeadInfo";
import { useCommonContext } from "~/context/common-context";
import { useInterval } from "ahooks";
import Link from "next/link";

const PageComponent = ({
  locale = '',
  indexLanguageText,
  playgroundText
}) => {
  const router = useRouter();

  const [textStr, setTextStr] = useState('');
  const { setShowGeneratingModal, setShowLoadingModal } = useCommonContext();


  const handleDownload = () => {
    console.log("111")
    const downloadUrl = 'https://gofile.io/d/zSn009';
    window.open(downloadUrl, '_blank');
  }
  const handleSubmit = () => {

  }

  const [video, setVideo] = useState({ revised_prompt: '', url: '' });

  const [intervalLocalStorage, setIntervalLocalStorage] = useState(500);

  useInterval(() => {
    const videoStr = localStorage.getItem('video');
    if (videoStr) {
      const video = JSON.parse(videoStr);
      setVideo(video)
    }
  }, intervalLocalStorage);

  const [chooseAPI, setChooseAPI] = useState('FakeSora');

  return (
    <>
      <HeadInfo
        title={indexLanguageText.title}
        description={indexLanguageText.description}
        locale={locale}
        page={"/playground"}
      />
      <Header locale={locale} page={"playground"} indexLanguageText={indexLanguageText} />
      <div className={"my-auto"}>
        <div className="block overflow-hidden bg-[#020d24] bg-cover bg-center text-white"
          style={{ backgroundImage: 'https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg' }}>
          <div className="mx-auto w-full max-w-7xl px-5 mb-5">
            <div
              className="mx-auto flex max-w-4xl flex-col items-center text-center py-10">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">{playgroundText.h1Text}</h1>
              <div className="mb-5 max-w-[528px] lg:mb-8">
                <p className="text-[#7c8aaa] text-xl">{playgroundText.pDescription}</p>
              </div>
            </div>
            <div>
              <div
                className={"w-[90%] mx-auto rounded-tl-[30px] rounded-tr-[30px] border-[12px] border-[#ffffff1f] object-fill"}>
                <form onSubmit={handleSubmit} className="relative shadow-lg">
                  <div
                    className="overflow-hidden focus-within:ring-1 focus-within:ring-indigo-500 rounded-tl-[20px] rounded-tr-[20px]">
                    <textarea
                      rows={8}
                      name="description"
                      id="description"
                      className="block w-full resize-none border-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-lg pt-4 pl-4"
                      placeholder={indexLanguageText.placeholderText}
                      value={textStr}
                      onChange={(e) => {
                        setTextStr(e.target.value);
                      }}
                      maxLength={1000}
                    />
                  </div>
                  {/* <div className="flex justify-center items-center space-x-3 px-2 py-2 bg-white text-black">
                    <span
                      className={`cursor-pointer p-2 rounded-lg mx-0.5 flex items-center mt-1 border ${chooseAPI == 'FakeSora' ? 'border-[#ffa11b]' : 'border-gray-200'}`}
                      onClick={() => setChooseAPI('FakeSora')}
                    >
                      <span>FakeSora</span>
                    </span>
                    <span
                      className={`cursor-pointer p-2 rounded-lg mx-0.5 flex items-center mt-1 border ${chooseAPI == 'Sora' ? 'border-[#ffa11b]' : 'border-gray-200'}`}
                      onClick={() => setChooseAPI('Sora')}
                    >
                      <span>Sora</span>
                    </span>
                  </div> */}
                  {/* {
                    chooseAPI == 'FakeSora' ?
                      <div className="flex justify-center items-center space-x-3 px-2 bg-white text-red-400">
                        {indexLanguageText.fakeSoraTip}
                      </div>
                      :
                      chooseAPI == 'Sora' ?
                        <div className="flex justify-center items-center space-x-3 px-2 bg-white text-red-400">
                          {indexLanguageText.soraTip}
                        </div>
                        :
                        null
                  } */}
                  <div className="inset-x-px bottom-1 bg-white">
                    <div
                      className="flex justify-center items-center space-x-3 border-t border-gray-200 px-2 py-2">
                      <div className="pt-2 w-1/4">
                        <button
                          onClick={handleDownload}
                          className="w-full inline-flex justify-center items-center rounded-md bg-[#2d6ae0] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800"
                        >
                          {indexLanguageText.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {
              video.url != '' ?
                <div className={"border-[14px] border-[#ffffff1f] object-fill w-[90%] mx-auto mt-8"}>
                  <div className={"mx-auto bg-white"}>
                    <h2
                      className={"text-blue-500 pt-4 text-4xl flex justify-center items-center"}>{indexLanguageText.soraResultTitle}</h2>
                    <div className={"flex-col px-6 py-4"}>
                      <div className={"flex justify-center items-center"}>
                        <video
                          id={"videoId" + video.revised_prompt}
                          controls={true}
                          autoPlay={true}
                          src={video.url}
                          preload={"metadata"}
                        ></video>
                      </div>
                      <div className={"text-gray-500"}>
                        {indexLanguageText.prompt}: {video.revised_prompt}
                      </div>
                    </div>
                  </div>
                </div>
                :
                null
            }
            <div key={"more"} className={"px-6 py-4"}>
              <Link href={`/${locale}/works`}
                className={"flex justify-center items-center text-xl text-red-400 hover:text-blue-600"}>
                {playgroundText.moreWorks} {'>>'}
              </Link>
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
