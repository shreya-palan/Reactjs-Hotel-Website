import React from 'react';
import Navbar from '../Navbar';
import HeadTitle from '../HeadTitle/HeadTitle';
import Card from './Card';
import GalleryData from './GalleryData';
import '../gallery/gallery.css';

const Gallery = () => {
  return (
    <>
    <Navbar />
    <HeadTitle />
    <section className="gallery top">
        <div className="container grid">
            {
                GalleryData.map((value) => {
                    return <Card images={value.images} title={value.title}/>
                })
            }
        </div>
    </section>
    </>
  )
}

export default Gallery
