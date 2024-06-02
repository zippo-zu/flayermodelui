'use client'
import { useRouter } from "next/navigation";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { useState } from "react";
import { randomVideo } from "~/data/openaiVideo";
import HeadInfo from "~/components/HeadInfo";
import { useCommonContext } from "~/context/common-context";
import Link from "next/link";
import FrayerModel from "~/components/FrayerModel";
import { allVideoList } from "~/data/frayerModelTemplate";


const PageComponent = ({
  locale = '',
  indexLanguageText,
  initVideoList = [],
  questionText
}) => {
  const router = useRouter();

  const [textStr, setTextStr] = useState('');
  const { setShowGeneratingModal, setShowLoadingModal } = useCommonContext();


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setChooseAPI('FakeSora');
    if (!textStr) {
      setVideoList(randomVideo(2));
      return;
    }
    setShowGeneratingModal(true);
    const body = {
      prompt: textStr
    };
    const response = await fetch(`/${locale}/api/generate`, {
      method: 'POST',
      body: JSON.stringify(body)
    })
    const result = await response.json();
    setShowGeneratingModal(false);
    if (result.data) {
      if (!result.data[0].revised_prompt) {
        return
      }
      const video = {
        revised_prompt: result.data[0].revised_prompt,
        url: result.data[0].url
      }

      // add storage
      const videoHistoryListStr = localStorage.getItem('videoHistoryList');
      if (!videoHistoryListStr) {
        const videoHistoryList = [];
        videoHistoryList.unshift(video);
        localStorage.setItem('videoHistoryList', JSON.stringify(videoHistoryList));
      } else {
        const videoHistoryList = JSON.parse(videoHistoryListStr);
        // check exist
        let exist = false;
        for (let i = 0; i < videoHistoryList.length; i++) {
          const videoHistory = videoHistoryList[i];
          if (videoHistory.revised_prompt == video.revised_prompt) {
            exist = true;
            localStorage.setItem('video', JSON.stringify(video));
            router.push(`/${locale}/playground`)
            return;
          }
        }
        if (!exist) {
          videoHistoryList.unshift(video);
          // const newList = videoHistoryList.slice(0, 3);
          localStorage.setItem('videoHistoryList', JSON.stringify(videoHistoryList));
        }
      }
      localStorage.setItem('video', JSON.stringify(video));
      router.push(`/${locale}/playground`)
    }
  }

  const [videoList, setVideoList] = useState(initVideoList);

  const handleMouseEnter = (event) => {
    event.target.play();
  };

  const handleMouseLeave = (event) => {
    event.target.pause();
  };

  const [chooseAPI, setChooseAPI] = useState('FakeSora');

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
                        <FrayerModel Concept={file.Concept} Definition={file.Definition} Characteristics={file.Characteristics} Examples={file.Examples}
                          noExamples={file.NonExamples}
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
                <div className={"w-[96%] text-gray-700 prose mx-auto mt-4"}>
                  <p>
                    {questionText.h2_1_p1}
                  </p>
                  <p>
                    {questionText.h2_1_p2}
                  </p>
                  <p>
                    {questionText.h2_1_p3}
                  </p>
                  <p>{questionText.h2_1_p4}</p>
                </div>
              </div>
            </div>

            <div className={"border-[14px] border-[#ffffff1f] object-fill w-[90%] mx-auto mt-8"}>
              <div className={"mx-auto bg-white py-8"}>
                <div className={"pb-2 border-b-2"}>
                  <h2
                    className={"text-blue-500 pt-4 text-4xl flex justify-center items-center"}>{questionText.h2_2}</h2>
                </div>
                <div className={"w-[96%] text-gray-700 prose mx-auto mt-4"}>
                  <p>
                    {questionText.h2_2_p1}
                  </p>
                  <p>
                    {questionText.h2_2_p2}
                  </p>
                  <p>
                    {questionText.h2_2_p3}
                  </p>
                  <p>
                    {questionText.h2_2_p4a}
                  </p>
                  <p>
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
