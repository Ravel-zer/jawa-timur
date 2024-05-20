// src/PhotoGallery.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import "../assets/css/style.css";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const clientId = "CO7kRO7RXXs-tZ3ca1lwe-fZbgZnmfyy93s9siI1A-E";
  const query = "Jawa Timur";
  const perPage = 5; // Jumlah foto per halaman

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
          params: { query, page, per_page: perPage, client_id: clientId },
        });
        const photosWithPreload = response.data.results.map((photo) => {
          const img = new Image();
          img.src = photo.urls.regular;
          return { ...photo, img };
        });
        setPhotos((prevPhotos) => [...prevPhotos, ...photosWithPreload]);
        if (response.data.results.length < perPage) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching data from Unsplash", error);
      }
      setLoading(false);
    };

    fetchPhotos();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery" id="photo-gallery">
      <h2>Gallery</h2>
      <div className="photo-container">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item" onClick={() => handlePhotoClick(photo)}>
            <img src={photo.urls.small} alt={photo.description} />
          </div>
        ))}
      </div>
      {loading && <p className="loading-text">Loading...</p>}
      {hasMore && !loading && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}
      <Modal isOpen={!!selectedPhoto} onClose={closeModal}>
        {selectedPhoto && <img src={selectedPhoto.urls.regular} alt={selectedPhoto.description} />}
      </Modal>
    </div>
  );
};

export default PhotoGallery;
