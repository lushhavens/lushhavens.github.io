import React, { useState } from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaStar, FaEye, FaHeart } from 'react-icons/fa';
import eventCategoriesData from '../../data/eventCategories.json';

const EventCategoriesBlock = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
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

  const VenueCard = ({ venue, categoryColor }) => {
    const isFavorite = favorites.has(venue.id);
    
    return (
      <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 flex-shrink-0 w-96 cursor-pointer">
        {/* Image Container - 85% of card */}
        <div className="relative h-64 lg:h-72 xl:h-64 overflow-hidden">
          {/* Background Image */}
          <img 
            src={`https://picsum.photos/400/300?random=${venue.id}`}
            alt={venue.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80`;
            }}
          />
          
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-3xl" />
              </div>
              <p className="text-xl font-medium">{venue.title}</p>
            </div>
          </div>
          
          {/* Favorite Button */}
          <button
            onClick={() => toggleFavorite(venue.id)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
          >
            <FaHeart 
              className={`text-lg transition-colors duration-200 ${
                isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
              }`} 
            />
          </button>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaEye className="text-2xl" />
              </div>
              <p className="text-lg font-medium">Explore</p>
            </div>
          </div>
        </div>

        {/* Content - 15% of card */}
        <div className="p-4">
          <h4 className="font-bold text-gray-800 mb-1 group-hover:text-gray-600 transition-colors duration-200 text-lg text-center">
            {venue.title}
          </h4>
          <div className="flex items-center justify-center text-gray-500">
            <FaMapMarkerAlt className="text-sm mr-1" />
            <span className="text-sm">{venue.location}</span>
          </div>
        </div>
      </div>
    );
  };

  const EventCategoryCard = ({ category, index }) => {
    const isHovered = hoveredCategory === category.id;
    
    return (
      <div className="mb-12">
        {/* Category Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
              {category.icon}
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${category.textColor} mb-1`}>
                {category.title}
              </h3>
              <p className="text-gray-600">
                {category.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            
            <button className={`${category.bgColor} ${category.textColor} px-6 py-3 bg-transparent  rounded-lg font-medium text-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2`}>
              View All
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>

        {/* Horizontal Venues Scroll */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {category.venues.map((venue) => (
              <VenueCard 
                key={venue.id} 
                venue={venue} 
                categoryColor={category.color}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E7F0E7] text-[#6BA96A] text-sm font-medium px-4 py-1 rounded-full mb-4">
            🌿 Discover Beautiful Spaces
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-6">
            Where to
            <span className="text-[#A3C49A]"> Unwynd</span>
          </h2>
          <div className="w-20 h-1 bg-[#A3C49A] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of beautiful, peaceful spaces perfect for your next 
            gathering, celebration, or quiet moment of reflection.
          </p>
        </div>

        {/* Event Categories with Horizontal Venues */}
        <div className="max-w-7xl mx-auto mb-16">
          {eventCategoriesData.map((category, index) => (
            <EventCategoryCard 
              key={category.id} 
              category={category} 
              index={index}
            />
          ))}
        </div>

        {/* Featured Categories Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-4">
              Popular Experiences
            </h3>
            <p className="text-gray-600">
              Discover the most loved spaces for creating unforgettable memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventCategoriesData.map((category, index) => (
              <div key={category.id} className="text-center group">
                <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {category.icon}
                </div>
                <h4 className={`${category.textColor} font-bold text-lg mb-2`}>
                  {category.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {category.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <span>{category.venues.length} beautiful spaces</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/venues"
                className="inline-flex items-center bg-[#A3C49A] text-white px-8 py-4 rounded-lg hover:bg-[#5d8353] transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore All Spaces
                <FaArrowRight className="ml-2" />
              </a>
              <a
                href="/host"
                className="inline-flex items-center bg-white text-[#A3C49A] border-2 border-[#A3C49A] px-8 py-4 rounded-lg hover:bg-[#A3C49A] hover:text-white transition-all duration-200 font-medium text-lg"
              >
                Share Your Space
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCategoriesBlock;
