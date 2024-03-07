import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchImages } from "../../gallary-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(query, page);
        setImages((prvImages) => {
          return [...prvImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };
  const hendleLoadMore = () => {
    setPage(page + 1);
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(src, alt) {
    setModalImg({ src, alt });
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setModalImg(null);
  }
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <main>
        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery items={images} imageClick={openModal} />
        )}
        {images.length > 0 && !loading && (
          <LoadMoreBtn hendleLoadMore={hendleLoadMore} />
        )}
        {loading && <Loader />}
        {modalIsOpen && (
          <ImageModal
            imgM={modalImg}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          />
        )}{" "}
      </main>
    </div>
  );
}
