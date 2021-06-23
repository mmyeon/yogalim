import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import BodyPartChoice from "./routes/BodyPartChoice";
import VideoDetail from "./routes/VideoDetail";
import VideoList from "./routes/VideoList";
import BeforeEstimation from "./routes/BeforeEstimation";
import AfterEstimation from "./routes/AfterEstimation";
import Review from "./routes/Review";

const DefaultRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/bodypartchoice" exact component={BodyPartChoice} />
      <Route path="/videolist" exact component={VideoList} />
      <Route path="/videodetail" exact component={VideoDetail} />
      <Route path="/beforeestimation" exact component={BeforeEstimation} />
      <Route path="/afterestimation" exact component={AfterEstimation} />
      <Route path="/review" exact component={Review} />
    </Router>
  );
};

export default DefaultRouter;
