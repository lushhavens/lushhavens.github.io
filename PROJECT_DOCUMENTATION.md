# 🏡 LushHavens - Project Documentation

## 📋 Project Overview

**LushHavens** is a web platform similar to Booking.com or Peerspace, but specifically focused on **small, scenic, ambient venues** for **hourly bookings**. The platform connects users with beautiful spaces like private gardens, cozy rooftops, studios, and aesthetic cafes for small events, photoshoots, or hangouts.

### 🎯 MVP Goals
- Fully static marketing + discovery website
- Hosted on GitHub Pages
- Built with Gatsby + Tailwind CSS
- No backend or login system (static only)
- Client-side interactions for enhanced UX

---

## 🛠️ Tech Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Framework** | Gatsby | React-based, SEO-friendly, static site generation |
| **Styling** | Tailwind CSS | Utility-first CSS framework for rapid styling |
| **Icons** | React Icons (FontAwesome) | Consistent iconography |
| **Routing** | Gatsby Pages API | File-based routing system |
| **Deployment** | GitHub Pages | Static hosting solution |
| **Data** | JSON files | Local data storage for MVP |

---

## 📁 Project Structure

```
lushhavens/
├── src/
│   ├── pages/
│   │   ├── index.js              # Homepage with all blocks
│   │   └── 404.js                # Custom 404 page
│   ├── components/
│   │   ├── blocks/
│   │   │   ├── hero.block.js           # Hero section
│   │   │   ├── howItWorks.block.js     # How it works process
│   │   │   ├── venueListing.block.js  # Featured venues grid
│   │   │   ├── eventCategories.block.js # Event categories showcase
│   │   │   ├── whyChooseUs.block.js   # Why choose us section
│   │   │   └── underConstructionBlock.js # Under construction page
│   │   ├── layout.js             # Main layout wrapper
│   │   ├── header.js             # Site header
│   │   └── footer.js             # Site footer
│   ├── data/
│   │   ├── venues.json           # Venue mock data
│   │   └── eventCategories.json  # Event categories data
│   ├── styles/
│   │   └── global.css           # Global styles and Tailwind imports
│   └── assets/
│       └── images/              # Static images
├── static/                      # Static assets for Gatsby
├── public/                      # Built site output
├── gatsby-config.js            # Gatsby configuration
├── tailwind.config.js          # Tailwind configuration
└── package.json                # Dependencies and scripts
```

---

## 🎨 Design System

### Color Palette
- **Primary Green**: `#A3C49A` - Main brand color
- **Dark Green**: `#5d8353` - Accent and hover states
- **Light Green**: `#6BA96A` - Secondary accents
- **Background**: `#F9FAFB` - Light background
- **Text Dark**: `#1F2937` - Primary text
- **Text Gray**: `#6B7280` - Secondary text

### Typography
- **Font Family**: Inter (system font stack)
- **Headings**: Bold, large sizes (3xl-5xl)
- **Body**: Regular weight, readable sizes

### Components
- **Cards**: Rounded corners (2xl), subtle shadows, hover effects
- **Buttons**: Rounded (lg), hover animations, shadow effects
- **Icons**: FontAwesome icons via React Icons
- **Spacing**: Consistent padding/margins using Tailwind scale

---

## 📄 Page Structure

### Homepage (`/`)
The homepage is composed of several blocks in sequence:

1. **Hero Block** - Main landing section with CTA
2. **How It Works Block** - 3-step process explanation
3. **Venue Listing Block** - Featured venues grid
4. **Event Categories Block** - Image-centric event showcase (NEW)
5. **Why Choose Us Block** - Benefits and features

### Venue Listing Block Features
- **Grid Layout**: Responsive 3-column grid (1 on mobile, 2 on tablet, 3 on desktop)
- **Venue Cards**: Each card includes:
  - Placeholder image with gradient overlay
  - Favorite button (heart icon)
  - Category badge
  - Rating display
  - Title, location, description
  - Amenities tags
  - Price per hour
  - "View Details" button
- **Interactive Elements**:
  - Hover animations (lift effect, shadow changes)
  - Favorite toggle functionality
  - Responsive design
- **CTA Section**: Links to full venue listing and host registration

### Event Categories Block Features (EXPERIENCE-FOCUSED)
- **Experience-Based Display**: Shows beautiful spaces organized by experience type
- **4 Experience Categories**: Private Dining, Birthday Parties, Bridal Showers, Photoshoots
- **Horizontal Venue Scrolling**: Venues displayed in horizontal scrollable rows
- **Color-Coded Categories**: Each experience type has unique color scheme and icon
- **Experience Information**: Title, location, rating for each space (no pricing)
- **Favorite Functionality**: Users can heart/unheart individual spaces
- **Image-Centric Design**: Large, beautiful cards focused on visual appeal
- **Non-Commercial Approach**: Experience-focused language without sales pressure
- **CTA Buttons**: Links to explore all spaces and share your space

---

## 🗃️ Data Structure

### Venue Data (`src/data/venues.json`)
Each venue object contains:
```json
{
  "id": "unique-identifier",
  "title": "Venue Name",
  "location": "City, State",
  "price": 45,
  "image": "/static/venues/venue-image.jpg",
  "category": "Studio|Rooftop|Café|Wellness|Garden",
  "description": "Brief venue description",
  "amenities": ["Amenity 1", "Amenity 2", "..."],
  "rating": 4.9,
  "reviews": 127,
  "host": "Host Name",
  "maxGuests": 8
}
```

### Sample Venues
- **Serene Garden Studio** - Brooklyn, NY - $45/hour
- **Rooftop Oasis** - Manhattan, NY - $75/hour
- **Cozy Café Nook** - Williamsburg, NY - $35/hour
- **Zen Meditation Space** - Queens, NY - $40/hour
- **Artistic Loft** - SoHo, NY - $85/hour
- **Secret Garden** - Brooklyn, NY - $55/hour

### Event Categories Data (`src/data/eventCategories.json`)
Each venue category object contains:
```json
{
  "id": "unique-identifier",
  "title": "Venue Category Name",
  "description": "Brief description of the venue type",
  "icon": "🌿",
  "color": "from-green-500 to-emerald-600",
  "textColor": "text-green-600",
  "bgColor": "bg-green-50",
  "borderColor": "border-green-200",
  "venues": [
    {
      "id": "venue-id",
      "title": "Venue Name",
      "location": "City, State",
      "price": 45,
      "rating": 4.9,
      "image": "/static/venues/venue-image.jpg"
    }
  ]
}
```

### Experience Categories
- **🍽️ Private Dining** - Continental Private Dining, Traditional Delights, Homely & Soulful
- **🎉 Birthday Parties** - Great Outdoors & Food, Family Fun in Citu, Urban Free-spirited
- **💐 Bridal Showers** - Elegant Garden Celebrations, Afternoon Tea & Cocktails
- **📸 Photoshoots** - Artistic Backdrops, Natural Light Studios, City Skyline Views

---

## 🚀 Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd lush-havens

# Install dependencies
npm install

# Start development server
npm run develop

# Build for production
npm run build

# Serve production build
npm run serve
```

### Available Scripts
- `npm run develop` - Start Gatsby development server
- `npm run build` - Build static site for production
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache

---

## 🎯 Key Features Implemented

### ✅ Completed Features

1. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
   - Flexible grid layouts

2. **Interactive Elements**
   - Hover animations and transitions
   - Favorite toggle functionality
   - Smooth scrolling and transitions

3. **Modern UI Components**
   - Card-based layout
   - Gradient overlays
   - Shadow effects
   - Rounded corners
   - Icon integration

4. **Content Management**
   - JSON-based data structure
   - Easy venue addition/modification
   - Consistent data format

5. **Experience Categories Showcase**
   - Experience-based space display with horizontal scrolling
   - Interactive space cards with favorite functionality
   - Color-coded experience types with unique themes
   - Space details including rating and location (no pricing)

6. **Performance Optimizations**
   - Static site generation
   - Optimized images (placeholder gradients)
   - Minimal JavaScript bundle

---

## 🔮 Future Enhancements

### Phase 2: Dynamic Features
- [ ] Real venue images
- [ ] Search and filtering
- [ ] Category-based browsing
- [ ] Venue detail pages
- [ ] Host registration form

### Phase 3: Backend Integration
- [ ] User authentication
- [ ] Booking system
- [ ] Payment processing (Stripe)
- [ ] Database integration (Supabase)
- [ ] Email notifications

### Phase 4: Advanced Features
- [ ] Map integration (Mapbox)
- [ ] Real-time availability
- [ ] Review system
- [ ] Messaging between hosts and guests
- [ ] Mobile app (React Native)

---

## 🎨 Design Guidelines

### Visual Hierarchy
1. **Primary Actions**: Large, colored buttons with hover effects
2. **Secondary Actions**: Outlined buttons or text links
3. **Information**: Cards with clear typography and spacing
4. **Navigation**: Consistent header/footer placement

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Alt text for images (when implemented)
- Keyboard navigation support
- Color contrast compliance

### Performance
- Optimized images and assets
- Minimal JavaScript bundle
- Fast loading times
- Mobile performance optimization

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px+ | Small tablets |
| `md` | 768px+ | Tablets |
| `lg` | 1024px+ | Laptops |
| `xl` | 1280px+ | Desktops |

### Grid Layouts
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns

---

## 🚀 Deployment

### GitHub Pages Setup
1. Configure `gatsby-config.js` for static export
2. Add `gh-pages` package for deployment
3. Set up GitHub Actions for automated deployment
4. Configure custom domain (optional)

### Build Process
```bash
# Build static site
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 🐛 Known Issues & Limitations

### Current Limitations
1. **Static Images**: Using gradient placeholders instead of real venue photos
2. **No Backend**: All data is static JSON
3. **No User System**: No login/registration functionality
4. **No Booking**: No actual booking system implemented

### Technical Debt
1. **Image Optimization**: Need to implement proper image handling
2. **SEO**: Add meta tags and structured data
3. **Analytics**: Implement tracking for user behavior
4. **Testing**: Add unit and integration tests

---

## 📞 Support & Maintenance

### Code Organization
- **Components**: Modular, reusable React components
- **Styling**: Utility-first CSS with Tailwind
- **Data**: Centralized JSON data files
- **Assets**: Organized static file structure

### Maintenance Tasks
- Regular dependency updates
- Performance monitoring
- Content updates (venue data)
- Design system evolution

---

## 📝 Changelog

### Version 1.1.0 (Current)
- ✅ Initial project setup with Gatsby
- ✅ Tailwind CSS integration
- ✅ Hero block implementation
- ✅ How it works section
- ✅ Why choose us section
- ✅ Venue listing block with elegant design
- ✅ Placeholder venue data
- ✅ Interactive favorite functionality
- ✅ Responsive venue grid
- ✅ **UPDATED**: Experience categories showcase with horizontal space scrolling
- ✅ **UPDATED**: 4 experience categories with unique color schemes
- ✅ **UPDATED**: Interactive space cards with favorite functionality
- ✅ **UPDATED**: Space details including rating and location (no pricing)
- ✅ **UPDATED**: Featured experiences section with space counts
- ✅ **UPDATED**: Non-commercial, experience-focused approach
- ✅ **UPDATED**: Comprehensive documentation

---

*This documentation is maintained alongside the project and should be updated as new features are added or changes are made.*
