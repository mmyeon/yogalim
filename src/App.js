import { RecordProvider } from "./record";
import Router from "./Router";
import GlobalStyles from "./styles/GlobalStyles";
import data from "./data";

function App() {
  return (
    <RecordProvider data={data}>
      <Router />
      <GlobalStyles />
    </RecordProvider>
  );
}

export default App;
