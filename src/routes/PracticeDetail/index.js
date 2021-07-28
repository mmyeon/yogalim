import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import data from "../../data";
import { useStep, useSetStep } from "../../record";

const Index = () => {
  let step = useStep();
  const setStep = useSetStep();

  const { pathname } = useLocation();
  let query = useQuery();

  let currentStep = Number(query.get("step"));

  useEffect(() => {
    setStep(currentStep);
  }, [currentStep]);

  // TODO: 코드스멜! 2는 매직넘버이니 개선하기
  const currentBodyInEng = pathname.split("/")[2];

  const currentBodyPartInfo = data.find(
    (bodyPart) => bodyPart.title.eng === currentBodyInEng
  );

  const currentBodyInKorean = currentBodyPartInfo.title.kor;

  const practicePlayList = currentBodyPartInfo.playList;
  const currentVideoId = pathname.split("/").pop();
  const videoInfo = practicePlayList.find(
    (item) => item.videoId === currentVideoId
  );

  return (
    <div>
      {step === 1 && <Step1 videoInfo={videoInfo} />}
      {step === 2 && <Step2 currentBodyInKorean={currentBodyInKorean} />}
      {step === 3 && (
        <Step3 videoInfo={videoInfo} currentVideoId={currentVideoId} />
      )}
      {step === 4 && (
        <Step4
          currentBodyInKorean={currentBodyInKorean}
          currentBodyInEng={currentBodyInEng}
          currentVideoId={currentVideoId}
        />
      )}
    </div>
  );
};

export default Index;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
