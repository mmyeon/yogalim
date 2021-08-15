import React from "react";
import { useLocation, useParams } from "react-router";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import data from "../../data";
import styled from "styled-components";
import Layout from "../../components/Layout";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Index = () => {
  const { body, id } = useParams();
  let query = useQuery();
  let step = Number(query.get("step"));

  const currentBodyPartInEng = body;
  const currentBodyPartInfo = data.find(
    (bodyPart) => bodyPart.title.eng === currentBodyPartInEng
  );

  const currentBodyInKorean = currentBodyPartInfo.title.kor;
  const practicePlayList = currentBodyPartInfo.playList;
  const currentVideoId = id;
  const videoInfo = practicePlayList.find((item) => item.videoId === id);

  return (
    <Layout>
      <Container>
        {step === 1 && <Step1 videoInfo={videoInfo} />}
        {step === 2 && <Step2 currentBodyInKorean={currentBodyInKorean} />}
        {step === 3 && (
          <Step3 videoInfo={videoInfo} currentVideoId={currentVideoId} />
        )}
        {step === 4 && (
          <Step4
            currentBodyPartInEng={currentBodyPartInEng}
            currentVideoId={currentVideoId}
          />
        )}
      </Container>
    </Layout>
  );
};

export default Index;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
