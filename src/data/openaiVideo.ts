export const allVideoList = [
  {
    "fileName":"FrayerModel_1.pdf",
    "number": "a1",
    "prompt": "AI的弗雷模型图",
    "Concept": "AI",
    "Definition": "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.",
    "Characteristics": "AI systems typically exhibit characteristics such as learning, reasoning, self-correction, perception, understanding, and problem-solving.",
    "Examples": "Examples of AI include virtual assistants like Siri and Alexa, recommendation systems on e-commerce platforms, autonomous vehicles, and AI-powered robots.",
    "NonExamples": "Non-examples of AI would be traditional software applications that perform specific tasks without learning or adapting, such as a calculator or a simple word processor."
  },
  {
    "fileName":"FrayerModel_2.pdf",
    "number": "a1",
    "prompt": "AI's Frayer Model Diagram",
    "Concept": "NBC News",
    "Definition": "NBC News is the news division of the American broadcast network NBC, providing television programming and online content related to current events, politics, business, technology, entertainment, and more.",
    "Characteristics": "NBC News is characterized by its journalistic integrity, in-depth reporting, a wide range of news topics, and the use of multimedia platforms for news dissemination.",
    "Examples": "Examples of NBC News include the nightly news program 'NBC Nightly News with Lester Holt', the morning news and talk show 'Today', and digital platforms such as NBCNews.com and their mobile applications.",
    "NonExamples": "Non-examples of NBC News would be other news organizations or divisions, such as CNN, BBC News, or local news stations that are not affiliated with NBC."
  },
  {
    "fileName":"FrayerModel_3.pdf",
    "number": "a1",
    "prompt": "AI's Frayer Model Diagram",
    "Concept": "Eminem - Houdini",
    "Definition": "Houdini is a song by American rapper Eminem, featuring Skylar Grey, from his ninth studio album 'The Marshall Mathers LP 2'. The song discusses themes of fame, relationships, and the pressures of being in the public eye.",
    "Characteristics": "The song is characterized by its introspective lyrics, catchy hook, and Eminem's signature rap style. It also includes a music video that complements the narrative of the song.",
    "Examples": "Examples of 'Houdini' include its release as a single, its music video, and its performances at various award shows and concerts.",
    "NonExamples": "Non-examples would be other songs by Eminem or songs by different artists that do not share the same theme or style as 'Houdini'."
  },
  {
    "fileName":"FrayerModel_4.pdf",
    "number": "a1",
    "prompt": "AI's Frayer Model Diagram",
    "Concept": "Alan Jackson",
    "Definition": "Alan Jackson is an American country music singer, known for his neotraditional country style and his contribution to the genre with numerous hit songs and albums.",
    "Characteristics": "Alan Jackson is characterized by his deep baritone voice, heartfelt songwriting, and a style that often pays homage to the traditional country sound.",
    "Examples": "Examples of Alan Jackson's work include his hit songs 'Chattahoochee', 'Where Were You (When the World Stopped Turning)', and albums like 'A Lot About Livin' (And a Little 'bout Love)'.",
    "NonExamples": "Non-examples would be other country artists with different styles or musicians from other genres who do not share Alan Jackson's musical approach."
  },
  {
    "fileName":"FrayerModel_5.pdf",
    "number": "a1",
    "prompt": "AI's Frayer Model Diagram",
    "Concept": "Dell Stock",
    "Definition": "Dell stock refers to the publicly traded shares of Dell Technologies Inc., a multinational technology company that develops, sells, repairs, and supports computers and related products and services.",
    "Characteristics": "Dell stock is characterized by its performance in the market, dividends, and the company's financial health and growth potential. It is subject to market fluctuations and investor sentiment.",
    "Examples": "Examples of Dell stock include its ticker symbol (DELL), stock price, historical performance, and its inclusion in various stock indices or investment portfolios.",
    "NonExamples": "Non-examples would be stocks of other companies not related to Dell Technologies, such as Apple, Microsoft, or any non-technology sector stocks."
  },
  {
    "fileName":"FrayerModel_6.pdf",
    "number": "a1",
    "prompt": "AI's Frayer Model Diagram",
    "Concept": "Janitor AI",
    "Definition": "Janitor AI refers to an artificial intelligence system designed to perform maintenance or cleaning tasks, often in a digital environment. It can also metaphorically refer to AI that manages and organizes data or systems to keep them running smoothly.",
    "Characteristics": "A Janitor AI might have characteristics such as automation, data organization, error correction, routine task execution, and optimization of system performance.",
    "Examples": "Examples of Janitor AI include systems that clean up email inboxes, organize files on a computer, or maintain databases by removing outdated or redundant information.",
    "NonExamples": "Non-examples of Janitor AI would be AI applications that are designed for complex decision-making, creative tasks, or direct human interaction, such as AI chatbots or autonomous vehicle systems."
  },
  {
    "fileName":"FrayerModel_6.pdf",
    "number": "a1",
    "prompt": "AI's Frayer Model Diagram",
    "Concept": "Viggle AI",
    "Definition": "Viggle AI, if hypothetical, could refer to an artificial intelligence system designed for a specific purpose, such as managing user engagement or optimizing user experience in an interactive platform or application.",
    "Characteristics": "Characteristics of Viggle AI might include user interaction tracking, personalized content delivery, data analytics, and automated response systems tailored to user behavior and preferences.",
    "Examples": "Examples of Viggle AI could include an AI that rewards users for engagement, suggests content based on user history, or automates user support within an application.",
    "NonExamples": "Non-examples of Viggle AI would be AI systems that do not focus on user engagement or personalization, such as industrial automation systems or autonomous vehicle control systems."
  },
  {
    "fileName":"FrayerModel_6.pdf",
    "number": "a1",
    "prompt": "AI's Frayer Model Diagram",
    "Concept": "Crushon AI",
    "Definition": "Crushon AI, if hypothetical, could refer to an artificial intelligence system designed to simulate or analyze human emotions, particularly those related to affection or attraction, in various applications such as social robotics, recommendation systems, or mental health support.",
    "Characteristics": "Characteristics of Crushon AI might include emotion recognition, sentiment analysis, personalized interaction, and the ability to adapt responses based on emotional cues.",
    "Examples": "Examples of Crushon AI could include an AI chatbot that provides emotional support, a recommendation system that suggests content based on user's emotional state, or a virtual companion that simulates affectionate interactions.",
    "NonExamples": "Non-examples of Crushon AI would be AI systems that do not involve emotion recognition or personal affection, such as data analysis tools, automated machinery control, or language translation software."
  }
]


export const randomVideo = (count: number) => {
  // 定义一个空数组来存放随机数
  let randomNumbers = [];
  const resultVideoList = [];
  // 循环获取多个不同的随机数
  while (randomNumbers.length < count) {
    let randomNumber = Math.floor(Math.random() * (allVideoList.length + 1));
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
      resultVideoList.push(allVideoList[randomNumber])
    }
  }
  return resultVideoList;
}
