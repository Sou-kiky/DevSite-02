import './css/App.css'
import Header from './Header'
import HomePage from './HomePage'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { BlogPage } from './BlogPage'
import { useEffect, useState } from 'react'
import Album from './Type'
import Pagenation from './Pagenation'


function App() {

  //useStateのやつ
  const [albums, setAlbums] = useState<Album[]>([]);

  //読み込み時に一回のみ発火されるやつ　jsonPlaceHolderからjsonをよみこんでconsolelogする
  useEffect(() => {
    const getDate = async () => {
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos"

      ).then((res) => res.json() //受け取ったデータをresで受け取りres.jsonで返す
    ).then((data) => {
      setAlbums(data);
      console.log(data);
    });//res.jsonをdataで受け取りsetAlbumsに渡す
    };
    getDate();
  }, [])

  //Main
  return (
    <>
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />} />     
          </Routes>

          <Pagenation albums={albums}/>
        </div>
      </Router>
    </>
  )
}

export default App
