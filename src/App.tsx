import "./css/App.css";
import Header from "./Header";
import Homepage from "./HomePage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { BlogPage } from "./BlogPage";
// import { useEffect, useState } from 'react'
// import Album from './Type'
// import Pagenation from './Pagenation'
import Notfound from "./Notfound";
import BlogContent from "./BlogContent";

function App() {
  //useStateのやつ
  // const [albums, setAlbums] = useState<Album[]>([]);

  // //読み込み時に一回のみ発火されるやつ　jsonPlaceHolderからjsonをよみこんでconsolelogする
  // useEffect(() => {
  //   const getDate = async () => {
  //     await fetch("https://jsonplaceholder.typicode.com/albums/1/photos"

  //     ).then((res) => res.json() //受け取ったデータをresで受け取りres.jsonで返す
  //   ).then((data) => {
  //     setAlbums(data);
  //     console.log(data);
  //   });//res.jsonをdataで受け取りsetAlbumsに渡す
  //   };
  //   getDate();
  // }, [])

  //Main
  return (
    <>
      <Router>
        <div className="container m-auto max-w-1110">
          <Header />
          <Routes>
            <Route path="*" element={<Notfound />} />
            <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogContent />} />
          </Routes>
          {/* <Pagenation albums={albums}/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
