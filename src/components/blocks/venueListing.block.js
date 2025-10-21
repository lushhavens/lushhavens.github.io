import React, { useState } from 'react';
import { FaStar, FaMapMarkerAlt, FaUsers, FaHeart, FaEye } from 'react-icons/fa';
import venuesData from '../../data/venues.json';

const VenueListingBlock = () => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (venueId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(venueId)) {
        newFavorites.delete(venueId);
      } else {
        newFavorites.add(venueId);
      }
      return newFavorites;
    });
  };

  const VenueCard = ({ venue }) => {
    const isFavorite = favorites.has(venue.id);
    
    return (
      <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 cursor-pointer">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          {/* Background Image */}
          <img 
            src={`https://picsum.photos/400/400?random=${venue.id}`}
            alt={venue.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80`;
            }}
          />
          
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
          
          {/* Favorite Button */}
          <button
            onClick={() => toggleFavorite(venue.id)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg z-20"
          >
            <FaHeart 
              className={`text-lg transition-colors duration-200 ${
                isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
              }`} 
            />
          </button>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
            <div className="text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaEye className="text-2xl" />
              </div>
              <p className="text-lg font-medium">Explore Space</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title and Location */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors duration-200">
              {venue.title}
            </h3>
            <div className="flex items-center text-gray-600 mb-3">
              <FaMapMarkerAlt className="text-sm mr-2 text-[#A3C49A]" />
              <span className="text-sm">{venue.location}</span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              {venue.description}
            </p>
          </div>

          {/* Amenities - Simplified */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {venue.amenities.slice(0, 2).map((amenity, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  {amenity}
                </span>
              ))}
              {venue.amenities.length > 2 && (
                <span className="bg-[#A3C49A]/10 text-[#5d8353] text-sm px-3 py-1 rounded-full">
                  +{venue.amenities.length - 2} more
                </span>
              )}
            </div>
          </div>

          {/* Simple capacity info */}
          <div className="flex items-center text-gray-500 text-sm">
            <FaUsers className="text-sm mr-2" />
            <span>Perfect for up to {venue.maxGuests} people</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F9FAFB] to-[#F0F9F0]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E7F0E7] text-[#6BA96A] text-sm font-medium px-4 py-1 rounded-full mb-4">
            🌿 Featured Venues
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-6">
            Discover Your Perfect
            <span className="text-[#A3C49A]"> Space</span>
          </h2>
          <div className="w-20 h-1 bg-[#A3C49A] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of beautiful, peaceful venues perfect for your next event, 
            photoshoot, or gathering. Each space is handpicked for its unique charm and tranquil atmosphere.
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {venuesData.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6">
              Browse our complete collection of venues or let us help you find the perfect space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/venues"
                className="inline-flex items-center bg-[#A3C49A] text-white px-8 py-4 rounded-lg hover:bg-[#5d8353] transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View All Venues
                <FaEye className="ml-2" />
              </a>
              <a
                href="/host"
                className="inline-flex items-center bg-white text-[#A3C49A] border-2 border-[#A3C49A] px-8 py-4 rounded-lg hover:bg-[#A3C49A] hover:text-white transition-all duration-200 font-medium text-lg"
              >
                Host Your Space
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueListingBlock;
