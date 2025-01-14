import './css/App.css'
import Header from './Header'
import Homepage from './HomePage'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { BlogPage } from './BlogPage'
import { useEffect, useState } from 'react'
import Album from './Type'
import Pagenation from './Pagenation'
import Three from './Three'


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
          <Three />
          <Routes>
            <Route path='/homepage' element={<Homepage />} />
            <Route path='/blog' element={<BlogPage />} />     
          </Routes>
          <div className='flex flex-col items-center justify-center h-screen'>
            <p className='text-red-600 '>
              ╱|、<br />
              (˚ˎ 。7<br />
                |、˜〵<br />          
              じしˍ,)ノ
            </p>
          </div>
          {/* <Pagenation albums={albums}/> */}
        </div>
      </Router>
    </>
  )
}

export default App
