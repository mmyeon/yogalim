import React from "react";
import { useLocation } from "react-router";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import data from "../../data";
import { useStep, useSetStep } from "../../record";

const Index = () => {
  const step = useStep();
  const setStep = useSetStep();

  // 현재 url 주소 알아내기
  const { pathname, search } = useLocation();
  // 신체부위 알려줌
  const currentBodyInEng = pathname.split("/")[2];

  const currentBodyPartInfo = data.find(
    (bodyPart) => bodyPart.title.eng === currentBodyInEng
  );

  const currentBodyInKorean = currentBodyPartInfo.title.kor;
  // 현재 신체부위의 플레이리스트 알려줌

  const practicePlayList = currentBodyPartInfo.playList;
  const currentVideoId = pathname.split("/").pop() + search;
  const videoInfo = practicePlayList.find(
    (item) => item.videoId === currentVideoId
  );

  return (
    <div>
      {step === 1 && <Step1 goNextStep={goNextStep} videoInfo={videoInfo} />}
      {step === 2 && (
        <Step2
          goNextStep={goNextStep}
          currentBodyInKorean={currentBodyInKorean}
        />
      )}
      {step === 3 && (
        <Step3 goNextStep={goNextStep} currentVideoId={currentVideoId} />
      )}
      {step === 4 && (
        <Step4
          goNextStep={goNextStep}
          currentBodyInKorean={currentBodyInKorean}
          currentBodyInEng={currentBodyInEng}
          currentVideoId={currentVideoId}
        />
      )}
    </div>
  );

  function goNextStep() {
    setStep(step + 1);
  }
};

export default Index;
