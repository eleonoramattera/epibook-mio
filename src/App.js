import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

import BookList from "./components/BookList";
import history from "./data/history.json";

function App() {
  return (
    <>
      <MyNav />
      {/*<AllTheBook />*/}
      <BookList propbook={history} />
      <MyFooter />
    </>
  );
}

export default App;
