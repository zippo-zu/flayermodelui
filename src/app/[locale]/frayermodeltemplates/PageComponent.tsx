'use client'
import HeadInfo from "~/components/HeadInfo";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { allVideoList } from "~/data/openaiVideo";
import FrayerModel from "~/components/FrayerModel";

const PageComponent = ({
  locale = '',
  videosLanguageText,
  indexLanguageText,
}) => {

  const handleMouseEnter = (event) => {
    event.target.play();
  };

  const handleMouseLeave = (event) => {
    event.target.pause();
  };

  return (
    <>
      <HeadInfo
        title={videosLanguageText.title}
        description={videosLanguageText.description}
        locale={locale}
        page={"/videos"}
      />
      <Header locale={locale} page={"videos"} indexLanguageText={indexLanguageText} />

      <div className={"mb-8"}>
        <h2
          className={"text-blue-500 pt-4 text-4xl flex justify-center items-center"}>{indexLanguageText.soraVideoExample}</h2>
      </div>

      <div className={"w-[90%] mx-auto mb-20"}>
        <div role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </div>

      <Footer
        locale={locale}
        description={indexLanguageText.description}
      />
    </>
  )
}
export default PageComponent
