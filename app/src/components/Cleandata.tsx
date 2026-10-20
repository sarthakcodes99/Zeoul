import { useState } from "react";
import Template from "./Template";
const Cleandata = () => {
  const Data = [
    {
      id: 1,
      title: "AI Job Displacement",
      filetype: ".csv",
      para: "Data tracking high-risk job sectors impacted by generative AI automation.",
      explanation:
        "This dataset outlines specific occupations, calculated automation risk percentages, and driving AI tools.",
      URL: "https://zeouldatasets-git-main-sarthaks-projects-9053b087.vercel.app/ai-job-displacement",
      code: `import pandas as pd\n

            # Direct URL to your hosted CSV dataset\n
            url = "https://your-hosted-dataset-url/ai_jobs_data.csv"\n

            # Load directly into a Pandas DataFrame\n
            df = pd.read_csv(url)\n

            # Preview the data\n
            print(df.head())\n`,
    },
  ];
  const [selectedCard, setSelectedCard] = useState(null);

  const getData = async (carditem: any) => {
    try {
      const Url = await fetch(carditem.URL);
      const result = await Url.text();
      const fullpackage = { ...carditem, livedata: result };
      setSelectedCard(fullpackage);
    } catch (err) {
      console.log(err);
    }
  };

  if (selectedCard) {
    return <Template data={selectedCard} />;
  }
  return (
    <div className="min-h-screen w-full bg-black">
      <div
        id="CARDS"
        className="cards text-[#ededed] font-normal p-4 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 "
      >
        {Data.map((item) => (
          <div
            className="card h-100 w-110 bg-gray-800 text-[#ededed] p-4 font-bold text-[20px] flex gap-40 border-[0.5px] border-[#ededed]"
            key={item.id}
          >
            <div className="head-file-type flex gap-50">
              <div>
                {item.title}
                <div className="font-thin">{item.para}</div>
                <div className="mt-25 flex items-center justify-center bg-white h-10 w-40 rounded-4xl hover:scale-110">
                  <button
                    onClick={() => {
                      getData(item);
                    }}
                    className="text-black text-[17px]"
                  >
                    Get Data
                  </button>
                </div>
              </div>
              {item.filetype}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cleandata;
