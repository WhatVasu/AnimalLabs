# Animal Labs 🦁

A beautiful, responsive web application for discovering and learning about animals from around the world.

## Features

- 🔍 **Search Functionality**: Search for any animal and get detailed information
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern Design**: Glass morphism UI with smooth animations
- 📚 **Comprehensive Data**: Taxonomy, characteristics, and location information
- ⚡ **Fast Performance**: Optimized for quick loading and smooth interactions

## Screenshots

### Homepage
![Animal Labs Homepage](IMAGE_PLACEHOLDER_1)

### Animal Info Page
![Animal Information Page](IMAGE_PLACEHOLDER_2)

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **APIs**: 
  - Wikipedia REST API for animal descriptions and images
  - API Ninjas Animals API for detailed taxonomy and characteristics
- **Design**: Glass morphism effects, CSS Grid, Flexbox
- **Responsive**: Mobile-first approach with comprehensive media queries

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. Clone the repository
```bash
git clone https://github.com/WhatVasu/AnimalLabs.git
cd AnimalLabs
```

2. Open the application
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then navigate to http://localhost:8000
```

## Project Structure

```
AnimalLabs/
├── index.html              # Homepage with hero section and daily discovery
├── animalinfo.html         # Animal details page
├── index.js                # Main JavaScript logic
├── README.md              # This file
└── static/
    ├── css/
    │   └── styles.css     # All styling and responsive design
    └── images/
        ├── favicon.jpg
        ├── beautiful-giraffe-wild.jpg
        └── Gemini_Generated_Image_*.png
```

## Features in Detail

### Search Bar
- Real-time search for animals
- Redirects to detailed animal information page
- Works on both desktop and mobile

### Daily Discovery
- Random animal featured each day
- Quick overview with image and description

### Animal Information Page
- Detailed taxonomy (Kingdom, Phylum, Class, Order, Family, Genus, Scientific Name)
- Characteristics (Habitat, Diet, Lifespan, Top Speed, Weight)
- Natural locations where the animal is found
- High-quality images

### Responsive Design
- Desktop optimized for large screens
- Tablet layout with adjusted spacing
- Mobile-first approach with optimized navigation
- Hidden nav links on mobile with centered logo

## API Integration

### Wikipedia API
- Provides animal summaries and thumbnail images
- Endpoint: `https://en.wikipedia.org/api/rest_v1/page/summary/{animal}`

### API Ninjas Animals API
- Provides detailed taxonomy and characteristics
- Endpoint: `https://api.api-ninjas.com/v1/animals?name={animal}`

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablets**: 768px - 1024px
- **Mobile**: 480px - 767px
- **Small Phones**: 320px - 479px

## Navigation

- **Home**: Returns to the main page
- **About Me**: Links to external portfolio (whatvasu.pages.dev)
- **Donate**: Placeholder for donation page
- **Contact**: Email link (whatvasu@gmail.com)

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Advanced filters (by habitat, diet, etc.)
- [ ] Favorites/Bookmarks feature
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Offline functionality with service workers
- [ ] Animal comparison feature

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: whatvasu@gmail.com
- **Portfolio**: https://whatvasu.pages.dev
- **GitHub**: https://github.com/WhatVasu

## Acknowledgments

- Wikipedia API for providing animal data
- API Ninjas for detailed animal information
- Josefin Sans font for beautiful typography
- All contributors and testers

---

**Made with ❤️ by Vasu**
