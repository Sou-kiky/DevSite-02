import { useState } from "react";
import AlbumList from "./AlbumList";
import "./css/Pagenation.css";
import Album from "./Type";
import ReactPaginate from "react-paginate";

type Props = {
  albums: Album[];
};

const Pagenation = (props: Props) => {
  const { albums } = props;

  const itemsPerpage = 6; //一ページに何個表示するか？

  const [itemsOffset, setItemsOffset] = useState(0);

  const endOffset = itemsOffset + itemsPerpage;

  const currentAlbums = albums.slice(itemsOffset, endOffset);
  const pageCount = Math.ceil(albums.length / itemsPerpage); //ceilは繰り上げる関数 50/6

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerpage) % albums.length;
    setItemsOffset(newOffset);
  };

  return (
    <div className="AlbumWrapper">
      <AlbumList albums={albums} currentAlbums={currentAlbums} />
      <ReactPaginate pageCount={pageCount} onPageChange={handlePageClick} />
    </div>
  );
};

export default Pagenation;
