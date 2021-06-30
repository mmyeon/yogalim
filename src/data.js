import { COLORS } from "./styles/constant";

const data = [
  {
    title: { eng: "neck", kor: "목" },
    buttonColor: `${COLORS.darkGreen1}`,
    playList: [
      {
        title: "목과 등 상부의 긴장을 완화하는 요가",
        desc: "목을 좌우로 움직여 어깨의 긴장을 풀어주는 수련입니다.",
        time: "20분",
        url: "https://www.youtube.com/watch?v=bqmlyel0kPg&t=1s",
      },
      {
        title: "목과 등 상부의 긴장을 완화하는 요가",
        desc: "목을 좌우로 움직여 어깨의 긴장을 풀어주는 수련입니다.",
        time: "20분",
        url: "https://www.youtube.com/watch?v=bqmlyel0kPg&t=1s",
      },
      {
        title: "목과 등 상부의 긴장을 완화하는 요가",
        desc: "목을 좌우로 움직여 어깨의 긴장을 풀어주는 수련입니다.",
        time: "20분",
        url: "https://www.youtube.com/watch?v=bqmlyel0kPg&t=1s",
      },
    ],
  },
  {
    title: { eng: "shoulder", kor: "어깨" },
    buttonColor: `${COLORS.primaryTeal}`,
  },
  {
    title: { eng: "back", kor: "허리" },
    buttonColor: `${COLORS.brightTurquoise}`,
  },
  { title: { eng: "hip", kor: "골반" }, buttonColor: `${COLORS.amber}` },
  { title: { eng: "leg", kor: "다리" }, buttonColor: `${COLORS.brown}` },
  { title: { eng: "whole-body", kor: "전신" }, buttonColor: `${COLORS.red}` },
];

export default data;
