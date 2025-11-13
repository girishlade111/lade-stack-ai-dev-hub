import { useState } from "react";
import { cn } from "@/lib/utils";
import ImageLightbox from "./ImageLightbox";

interface BentoImageGridProps {
  images: {
    src: string;
    alt: string;
    size?: "small" | "medium" | "large";
    className?: string;
  }[];
  className?: string;
}

const BentoImageGrid = ({ images, className }: BentoImageGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getGridClass = (size: string = "medium") => {
    switch (size) {
      case "small":
        return "col-span-1 row-span-1";
      case "large":
        return "col-span-2 row-span-2";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const setImageIndex = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className={cn("grid grid-cols-4 grid-rows-4 gap-2 h-96", className)}>
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative overflow-hidden rounded-lg bg-muted/30 border border-border/50 hover:border-border transition-all duration-300 group cursor-pointer",
              getGridClass(image.size)
            )}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
        onSetIndex={setImageIndex}
      />
    </>
  );
};

export default BentoImageGrid;