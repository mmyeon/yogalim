import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Practice from "./routes/Practice/index";
import PracticeDetail from "./routes/PracticeDetail";
import PracticeVideoList from "./routes/PracticeVideoList";
import Review from "./routes/Review";

const DefaultRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/practice" exact component={Practice} />
      <Route path="/practice/:body" exact component={PracticeVideoList} />
      <Route path="/practice/:body/:id" exact component={PracticeDetail} />
      <Route path="/practice/:body/:id/review" exact component={Review} />
    </Router>
  );
};

export default DefaultRouter;
