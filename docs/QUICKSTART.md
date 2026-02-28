# Quick Start Guide

Get your Trident Escapes website up and running in minutes.

## 📋 Prerequisites

- Node.js v14+ ([Download](https://nodejs.org))
- npm (comes with Node.js)
- Git (optional)

## 🚀 Quick Start

### Step 1: Backend Setup (5 minutes)

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
copy .env.example .env
# On Mac/Linux: cp .env.example .env

# Start the server
npm run dev
```

✅ Backend is now running at `http://localhost:3000`

### Step 2: Frontend Setup (1 minute)

**Option A: Using Python (Recommended)**
```bash
cd frontend
python -m http.server 8080
```

**Option B: Using Node.js**
```bash
# Install a simple HTTP server globally
npm install -g http-server
cd frontend
http-server -p 8080
```

✅ Frontend is now accessible at `http://localhost:8080`

## 🧪 Test Your Setup

1. Open `http://localhost:8080` in your browser
2. You should see the Trident Escapes homepage
3. Check the browser console (F12) for any errors
4. The navigation menu should work (though other pages might be empty initially)

## 📁 Project Structure Overview

```
├── frontend/          ← Static HTML/CSS/JS files
├── backend/           ← Node.js/Express server
├── docs/              ← Documentation
└── README.md          ← Full documentation
```

## 🔧 Common Commands

### Backend
```bash
npm run dev    # Run with auto-reload
npm start      # Run production mode
npm test       # Run tests (if configured)
```

### Frontend
Simply open the files in a browser or use a local server.

## 🎨 Next Steps

1. **Add Images**: Place images in `frontend/images/`
2. **Customize Styles**: Edit `frontend/css/style.css`
3. **Add Content**: Edit HTML files in `frontend/` and `frontend/pages/`
4. **Create API Routes**: Add routes in `backend/routes/`
5. **Update Config**: Modify `backend/config/` files

## 🐛 Troubleshooting

### Port Already in Use

**Backend (port 3000):**
```bash
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux
lsof -ti:3000 | xargs kill -9

# Or change port in .env
PORT=3001
```

**Frontend (port 8080):**
```bash
# Use a different port
python -m http.server 8080
# Change 8080 to another port like 8081
```

### CORS Errors

Check that:
1. Backend is running on `http://localhost:3000`
2. Frontend API URL points to correct backend URL
3. `.env` has correct `CORS_ORIGIN` setting

### Dependencies Not Installing

```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -r node_modules package-lock.json
npm install
```

## 📚 Additional Resources

- [Full README.md](../README.md)
- [Express.js Documentation](https://expressjs.com)
- [HTML/CSS/JS Guide](https://developer.mozilla.org/en-US/)

## 💡 Tips

- Use browser DevTools (F12) to debug frontend issues
- Check Node console for backend errors
- Keep `.env` file in `.gitignore` for security
- Test API endpoints using tools like Postman or curl

---

**Ready to build?** Start with the backend setup above!
