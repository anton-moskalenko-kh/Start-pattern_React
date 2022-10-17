//Core
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {routers} from "../../engine/config/links";
import {Provider} from "react-redux";
import {store} from "../../engine/init/store";
//Parts
import Header from "../components/Header";

//Style
import '../_helpers/main.css'

//Pages
import Main from "../pages/Main/Main";
import Example from "../pages/Example";
import Footer from "../components/Footer";


function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
                  <Header/>
                  <main className='main'>
                      <Routes>
                          <Route path={routers.main} element={<Main/>}/>
                          <Route path={routers.example} element={<Example/>}/>
                      </Routes>
                  </main>
                  <Footer />
          </Provider>
      </BrowserRouter>
  );
}

export default App;
