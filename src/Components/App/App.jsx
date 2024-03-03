import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchImages } from "../../gallary-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessag";
import Modal from "react-modal";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [modalImg, setModalImg] = useState([]);

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
    if (newQuery === "") {
      toast.error("enter your request");
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };
  const hendleLoadMore = () => {
    setPage(page + 1);
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(imgUrl) {
    setModalImg(imgUrl);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#3688a3";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      <main>
        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery items={images} imageClick={openModal} />
        )}
        {images.length > 0 && !loading && (
          <LoadMoreBtn hendleLoad={hendleLoadMore} />
        )}
        {loading && <Loader />}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={modalImg} />
        </Modal>
      </main>
    </div>
  );
}
