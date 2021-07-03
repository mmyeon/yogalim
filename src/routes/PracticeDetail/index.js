import React, { useState } from "react";
import { useLocation } from "react-router";
import Step1 from "./Step1";
import Step2 from "./Step2";
import data from "../../data";

const Index = () => {
  const [step, setStep] = useState(1);

  // 현재 url 주소 알아내기
  const { pathname, search } = useLocation();
  // 신체부위 알려줌
  const currentBody = pathname.split("/")[2];
  // 현재 신체부위의 플레이리스트 알려줌
  const practicePlayList = data.find(
    (item) => item.title.eng === currentBody
  ).playList;

  const currentVideoId = pathname.split("/").pop() + search;
  const videoInfo = practicePlayList.find(
    (item) => item.videoId === currentVideoId
  );

  return (
    <div>
      {step === 1 && (
        <Step1
          goNextStep={goNextStep}
          currentVideoId={currentVideoId}
          videoInfo={videoInfo}
        />
      )}
      {step === 2 && <Step2 goNextStep={goNextStep} />}
      {step === 3 && <Step2 goNextStep={goNextStep} />}
      {step === 4 && <Step2 goNextStep={goNextStep} />}
    </div>
  );

  function goNextStep() {
    setStep(step + 1);
  }
};

export default Index;
