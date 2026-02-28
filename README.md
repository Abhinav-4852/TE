# Trident Escapes Website

A complete full-stack web application for Trident Escapes - an adventure travel and escape experiences platform.

## Project Structure

```
Trident Escapes Website/
├── frontend/                    # Frontend static files
│   ├── index.html              # Main landing page
│   ├── pages/                  # Additional pages
│   │   ├── about.html
│   │   ├── destinations.html
│   │   └── contact.html
│   ├── css/                    # Stylesheets
│   │   └── style.css
│   ├── js/                     # Client-side JavaScript
│   │   └── main.js
│   ├── images/                 # Image assets
│   └── assets/                 # Other assets (fonts, icons, etc.)
│
├── backend/                     # Node.js/Express backend
│   ├── server.js               # Main server file
│   ├── package.json            # Dependencies and scripts
│   ├── .env.example            # Environment variables template
│   ├── config/                 # Configuration files
│   │   ├── constants.js
│   │   └── database.js
│   ├── routes/                 # API route handlers
│   ├── controllers/            # Business logic
│   ├── middleware/             # Custom middleware
│   ├── models/                 # Data models
│   ├── utils/                  # Utility functions
│   └── public/                 # Static files served by backend
│
├── docs/                        # Documentation
├── .gitignore                   # Git ignore rules
├── .env.example                 # Environment variables template
└── README.md                    # This file
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- A modern web browser

### Installation

#### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration settings.

5. Start the development server:
```bash
npm run dev
```

The backend API will be available at `http://localhost:3000`

#### Frontend Setup

1. The frontend is a static website. You can serve it using:

**Option 1: Using Python**
```bash
cd frontend
python -m http.server 8080
```

**Option 2: Using any simple HTTP server**
Access the frontend by navigating to `http://localhost:8080` or open `frontend/index.html` directly in your browser.

## Features

- **Responsive Design**: Mobile-friendly layout
- **Modern UI**: Clean and professional interface
- **API Integration**: Connected to Node.js/Express backend
- **Easy to Extend**: Well-organized code structure
- **Multiple Pages**: Home, About, Destinations, Contact

## Available API Endpoints

- `GET /api/health` - Server health check

## Configuration

### Environment Variables

Copy `.env.example` to `.env` and update with your configuration:

```env
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_NAME=trident_escapes
CORS_ORIGIN=http://localhost:8080
```

## Scripts

### Backend
- `npm start` - Run the production server
- `npm run dev` - Run the development server with auto-reload
- `npm test` - Run tests

## Technologies Used

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript
- Responsive Grid Layout

### Backend
- Node.js
- Express.js
- Helmet (security)
- CORS
- Dotenv (environment management)

## Development

### Adding New Pages

1. Create a new HTML file in `frontend/pages/`
2. Update navigation links in all HTML files
3. Add corresponding styles in `frontend/css/style.css`

### Adding API Endpoints

1. Create route files in `backend/routes/`
2. Create corresponding controllers in `backend/controllers/`
3. Import and use in `backend/server.js`

## Deployment

### Deploy Backend
- Use services like Heroku, Railway, or AWS
- Set environment variables on your hosting platform
- Run `npm start`

### Deploy Frontend
- Use services like Netlify, Vercel, or GitHub Pages
- Upload the `frontend` folder contents
- Ensure backend API URL is configured correctly

## License

ISC

## Support

For issues or questions, please contact the development team.

---

**Last Updated**: February 28, 2024
