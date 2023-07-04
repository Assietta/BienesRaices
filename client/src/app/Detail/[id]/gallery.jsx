"use client"
import { useState, useEffect } from "react"
import styles from "./page.module.css";






export default function Gallery (props){

    const{images} = props


    const [modalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);


    const openModal = (index) => {
        setCurrentIndex(index);
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };
    
      const changeImage = (n) => {
        let newIndex = currentIndex + n;
        if (newIndex < 0) {
          newIndex = images.length - 1;
        } else if (newIndex >= images.length) {
          newIndex = 0;
        }
        setCurrentIndex(newIndex);
      };


    return(
        <div className="container mx-auto px-2 py-2 lg:px-32 lg:pt-12">
          <div className="flex flex-wrap md:-m-2">
            {images.map((image, index) => (
              <div className="w-1/3 p-1 md:p-2" key={index}>
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                  src={image}
                  onClick={() => openModal(index)}
                />
              </div>
            ))}
          </div>

          {modalOpen && (
            <div className={styles.modalOverlay}>
              <div className={styles.modal}>
                <span className={styles.close} onClick={closeModal}>
                  &times;
                </span>
                <img
                  className={styles.modalContent}
                  src={images[currentIndex]}
                  alt="modal"
                />
                <a className={styles.prev} onClick={() => changeImage(-1)}>
                  &#10094;
                </a>
                <a className={styles.next} onClick={() => changeImage(1)}>
                  &#10095;
                </a>
              </div>
            </div>
          )}
        </div>
    )
    
}