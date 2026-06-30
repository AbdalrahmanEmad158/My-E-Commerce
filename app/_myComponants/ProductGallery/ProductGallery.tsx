"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({
  images,
}: {
  images: string[];
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-2xl border bg-white">
        <Image
          src={selectedImage}
          alt="product"
          width={600}
          height={600}
          className="h-[500px] w-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setSelectedImage(img)}
            className={`overflow-hidden rounded-xl border-2 transition
              ${
                selectedImage === img
                  ? "border-green-500"
                  : "border-gray-200"
              }`}
          >
            <Image
              src={img}
              alt="thumb"
              width={90}
              height={90}
              className="h-24 w-24 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}