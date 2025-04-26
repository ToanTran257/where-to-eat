import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sampleRestaurant = {
  name: 'Sushi Zen Garden',
  images: [
    '/images/sushi1.jpg',
    '/images/sushi2.jpg',
    '/images/sushi3.jpg',
  ],
  cuisine: 'Japanese, Sushi',
  priceRange: '$$ - $$$',
  location: '123 Tokyo Street, Food City',
  rating: 4.7,
  reviews: 128,
};

export default function RestaurantFeature() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % sampleRestaurant.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (currentImage - 1 + sampleRestaurant.images.length) % sampleRestaurant.images.length
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        {sampleRestaurant.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Carousel */}
        <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-lg">
          <img
            src={sampleRestaurant.images[currentImage]}
            alt="Restaurant"
            className="object-cover w-full h-full"
          />

          {/* Left Button */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Button */}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Info List */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-2">Cuisine</h2>
            <p className="text-gray-700">{sampleRestaurant.cuisine}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-2">Price Range</h2>
            <p className="text-gray-700">{sampleRestaurant.priceRange}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-2">Location</h2>
            <p className="text-gray-700">{sampleRestaurant.location}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-2">Rating</h2>
            <p className="text-gray-700">
              {sampleRestaurant.rating} / 5.0 ({sampleRestaurant.reviews} reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

