import Album from "./Type";
import "./css/AlbumList.css";

type Props = {
    albums: Album[];
    currentAlbums: Album[];
};


const AlbumList = (props: Props) => {

    const {currentAlbums} = props;
  return (
    <div className="AlbumGridWrapper">{currentAlbums.map((album) => (
        <div key={album.id}>
            <img src={album.url} alt="album" />
            <h2>{album.title}</h2>
        </div>
    ))}</div>
  )
}

export default AlbumList