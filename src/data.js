import { COLORS } from "./styles/constant";

const data = [
  {
    title: { eng: "neck", kor: "목" },
    buttonColor: `${COLORS.darkGreen1}`,
    playList: [
      {
        title: "목의 긴장을 완화하는 요가",
        desc: "목을 좌우로 움직여 어깨의 긴장을 풀어주는 수련입니다.",
        // TODO: 시간 어떻게 가져올 것인가, youtube api로 가져오기
        time: "20분",
        thumbnail: "/assets/images/practiceVideoList/test.png",
        videoId: "NWKtNDqBDmo",
        videoClip: "NWKtNDqBDmo?t=2800",
        url: "https://www.youtube.com/watch?v=bqmlyel0kPg&t=1s",
      },
      {
        videoId: "i-a-GXqDaSo?t=160",
        title: "목과 등 상부의 긴장을 완화하는 요가",
        desc: "목을 좌우로 움직여 어깨의 긴장을 풀어주는 수련입니다.",
        time: "20분",
        thumbnail: "/assets/images/practiceVideoList/test.png",
        url: "https://www.youtube.com/watch?v=bqmlyel0kPg&t=1s",
      },
      {
        videoId: "TcXyk0VAUyw",
        title: "목과 등 상부의 긴장을 완화하는 요가",
        desc: "목을 좌우로 움직여 어깨의 긴장을 풀어주는 수련입니다.",
        time: "20분",
        thumbnail: "/assets/images/practiceVideoList/test.png",
        url: "https://www.youtube.com/watch?v=bqmlyel0kPg&t=1s",
      },
    ],
  },
  {
    title: { eng: "shoulder", kor: "어깨" },
    buttonColor: `${COLORS.primaryTeal}`,
    playList: [
      {
        videoId: "LlLQpxo5pmQ?t=54",
        videoClip: "LlLQpxo5pmQ?t=669",
        title: "Realign your shoulder girdle yoga practice",
        desc: "This yoga practice will make you aware of your shoulder girdle, relieve upper back tension and stretch the muscles that bind the shoulder blades to the ribcage and spine.",
        // time: "",
        thumbnail:
          "/assets/images/practiceVideoList/thumbnails/shoulder/shoulder1.png",
        url: "https://youtu.be/LlLQpxo5pmQ?t=54",
        // 19초 전에 종료
      },
      {
        videoId: "Nvq0uEC3VDM?t=54",
        videoClip: "Nvq0uEC3VDM?t=746",
        title: "Liberate your shoulders",
        desc: "The shoulder often ends up on the receiving end of what’s happening elsewhere in the body. This yoga practice addresses shoulder discomfort by working with the chest and upper back, neck and middle back instead of the shoulder joint itself. It will help you liberate your shoulders from the incessant pulling of the surrounding structures.",
        // time: "",
        thumbnail:
          "/assets/images/practiceVideoList/thumbnails/shoulder/shoulder2.png",
        url: "https://youtu.be/Nvq0uEC3VDM?t=54",
        // 15초 전에 종료
      },
      {
        videoId: "E-E76UQ3fos?t=158",
        videoClip: "E-E76UQ3fos?t=2662",
        title: "Body appreciation yoga practice",
        desc: "Our bodies try to communicate with us, but we rarely listen. We are so focused on the external environment, that we tend to ignore our inner state until it complains loud enough through pain, physiological distress or mental anguish. Instead of letting things fester and get out of hand, let’s learn to listen to our body’s signals. In this full-length yoga practice, we will focus on developing our interoception (conscious awareness of what’s going on inside) and balancing our physiology, while expressing appreciation to our bodies for all the work they do for us every day.",
        // time: "",
        thumbnail:
          "/assets/images/practiceVideoList/thumbnails/shoulder/shoulder3.png",
        url: "https://youtu.be/E-E76UQ3fos?t=158",
        // 8초 전에 종료
      },
      {
        videoId: "OpYljvPPGcw?t=59",
        videoClip: "OpYljvPPGcw?t=405",
        title: "Short yoga practice for energetic boost",
        desc: "This 20-minute yoga practice is designed to give you an energetic boost if you feel tired, depleted or frazzled. You can do it in the morning or at any point during the day; however, please do not do it too close to bedtime. The entire practice is focused on expanding and deepening your inhalation, which creates the sense of spaciousness and helps build your energy up.",
        // time: "",
        thumbnail:
          "/assets/images/practiceVideoList/thumbnails/shoulder/shoulder4.png",
        // 8초 전에 종료
        url: "https://youtu.be/OpYljvPPGcw?t=59",
      },
    ],
  },
  {
    title: { eng: "back", kor: "허리" },
    buttonColor: `${COLORS.brightTurquoise}`,
    playList: [],
  },
  {
    title: { eng: "hip", kor: "골반" },
    buttonColor: `${COLORS.amber}`,
    playList: [],
  },

  {
    title: { eng: "leg", kor: "다리" },
    buttonColor: `${COLORS.brown}`,
    playList: [],
  },
  {
    title: { eng: "whole-body", kor: "전신" },
    buttonColor: `${COLORS.red}`,
    playList: [
      {
        videoId: "rzdtYf1Zwes?t=34",
        videoClip: "rzdtYf1Zwes?t=1807",
        title: "Resilience: whole body yoga practice",
        desc: "This 60-minute practice takes time to “oil up” the entire body, to slow down the breath and to look within. It is a balanced whole-body practice that helps you cultivate and maintain physical, energetic and emotional resilience.",
        // time: "",
        thumbnail:
          "/assets/images/practiceVideoList/thumbnails/wholeBody/whole-body1.png",
        url: "",
        // 11초 전에 종료
      },
      {
        videoId: "HNn63Jbm1PY?t=43",
        videoClip: "HNn63Jbm1PY?t=1193",
        title: "Empower yoga practice",
        desc: "This yoga practice uses expansive, open body positions, 'tidal wave' breathing pattern with emphasis on inhalation, and 'removing the obstacles' meditation to help you cultivate a sense of powerful presence. ",
        // time: "",
        thumbnail:
          "/assets/images/practiceVideoList/thumbnails/wholeBody/whole-body2.png",
        // 11초 전에 종료
      },
      {
        videoId: "m7NRc0A-2hU?t=57",
        videoClip: "m7NRc0A-2hU?t=360",
        title: "Yoga practice for core awareness and strength",
        desc: "This short yoga practice will help you become aware of the center of your body and teach you how to move from that center. It will also help you strengthen your core and create stability and integration for whatever daily tasks you want to do.",
        // time: "",
        thumbnail:
          "/assets/images/practiceVideoList/thumbnails/wholeBody/whole-body3.png",
        // 13초 전에 종료
      },
      {
        videoId: "_waBrv-FpcU?t=60",
        videoClip: "_waBrv-FpcU?t=1790",
        title: "Explore the asymmetries practice",
        desc: "Before you can do anything about your body asymmetries you need to figure out what they are. This yoga practice will help you compare the right and the left side of the body and use lateral bending to begin restore balance between the two sides.",
        // time: "",
        thumbnail:
          "/assets/images/practiceVideoList/thumbnails/wholeBody/whole-body4.png",
        // 14초 전에 종료
      },
    ],
  },
];

export default data;
