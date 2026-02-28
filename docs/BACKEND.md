# Backend Development Guide

Complete guide for developing and maintaining the Node.js/Express backend.

## Project Setup

### Initial Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Using Nodemon for Development

The project uses nodemon for automatic server restarts during development:

```bash
npm run dev
```

**Note:** Nodemon is configured to watch for changes in:
- `.js` files
- `config/` directory
- Excludes `node_modules/`

## Project Structure

```
backend/
├── server.js              # Main entry point
├── package.json           # Dependencies and scripts
├── .env.example          # Environment template
├── config/               # Configuration files
│   ├── constants.js      # App constants
│   └── database.js       # Database configuration
├── routes/               # API route files
│   └── (users.js, products.js, etc.)
├── controllers/          # Business logic
│   └── (userController.js, etc.)
├── middleware/           # Custom middleware
│   └── (auth.js, validation.js, etc.)
├── models/               # Data models
│   └── (User.js, Product.js, etc.)
├── utils/                # Utility functions
│   └── (validators.js, helpers.js, etc.)
└── public/               # Static files (served by Express)
```

## Architecture Pattern: MVC (Model-View-Controller)

### Routes
Handle HTTP requests and direct them to controllers.

**Example: `routes/users.js`**
```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);

module.exports = router;
```

### Controllers
Contain business logic and interact with models.

**Example: `controllers/userController.js`**
```javascript
exports.getAllUsers = (req, res) => {
  try {
    // Business logic
    res.json({ data: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  
  // Validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }
  
  // Create user logic
  res.json({ data: { name, email } });
};
```

### Models
Handle data structure and database operations.

**Example: `models/User.js`**
```javascript
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static getAll() {
    // Database query
  }

  static getById(id) {
    // Database query
  }

  save() {
    // Save to database
  }
}

module.exports = User;
```

## Middleware

Middleware functions process requests before reaching route handlers.

### Custom Middleware Example

**`middleware/auth.js`**
```javascript
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  // Verify token
  req.user = { id: 1, name: 'User' };
  next();
};
```

### Using Middleware

```javascript
const auth = require('./middleware/auth');

// Apply to specific route
router.post('/protected', auth, (req, res) => {
  res.json({ message: 'Protected route' });
});

// Or apply globally
app.use(auth);
```

## Built-in Middleware

The backend comes with these middleware pre-configured:

- **Helmet**: Security headers
- **CORS**: Cross-origin requests
- **Express.json**: Parse JSON requests
- **Express.urlencoded**: Parse form data

## Environment Variables

Create a `.env` file (copy from `.env.example`):

```env
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=trident_escapes
DB_USER=postgres
DB_PASSWORD=your_password
CORS_ORIGIN=http://localhost:8080
LOG_LEVEL=debug
```

### Accessing Environment Variables

```javascript
const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST;
```

## Error Handling

### Global Error Handler

```javascript
// In server.js (at the end)
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});
```

### Try-Catch in Controllers

```javascript
try {
  const data = await fetchData();
  res.json(data);
} catch (error) {
  console.error('Error:', error);
  res.status(500).json({ error: 'Failed to fetch data' });
}
```

## Common Tasks

### Creating a New Route

1. **Create controller**: `controllers/productController.js`
```javascript
exports.getAllProducts = (req, res) => {
  res.json({ data: [] });
};
```

2. **Create route**: `routes/products.js`
```javascript
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);

module.exports = router;
```

3. **Register in server.js**
```javascript
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);
```

### Input Validation

Using `express-validator`:

```javascript
const { body, validationResult } = require('express-validator');

router.post('/users', [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  // Process request
});
```

### Database Connection Example (PostgreSQL)

```javascript
// config/database.js
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

module.exports = pool;
```

## API Response Standards

### Success Response
```json
{
  "status": "success",
  "data": { /* Your data */ },
  "timestamp": "2024-02-28T10:30:45.123Z"
}
```

### Error Response
```json
{
  "error": "Descriptive error message",
  "status": 400,
  "timestamp": "2024-02-28T10:30:45.123Z"
}
```

## Testing

### Using Postman

1. Create API collection
2. Add requests for each endpoint
3. Use environment variables for dynamic values
4. Save requests for regression testing

### Using cURL

```bash
# GET
curl http://localhost:3000/api/health

# POST
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}'

# PUT
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane"}'

# DELETE
curl -X DELETE http://localhost:3000/api/users/1
```

## Debugging

### Console Logging
```javascript
console.log('Regular log');
console.error('Error message');
console.info('Info message');
console.warn('Warning message');
```

### Using Node Debugger
```bash
node --inspect server.js
```
Then open `chrome://inspect` in Chrome.

### Common Issues

**Port Already in Use:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**CORS Errors:**
- Check `CORS_ORIGIN` in `.env`
- Ensure frontend makes requests to correct URL
- Verify `cors()` middleware is enabled

**Module Not Found:**
```bash
# Clear dependencies and reinstall
rm -r node_modules package-lock.json
npm install
```

## Production Deployment

### Before Deploying

1. ✅ Set `NODE_ENV=production`
2. ✅ Configure `.env` for production
3. ✅ Enable rate limiting
4. ✅ Configure CORS for your domain
5. ✅ Use HTTPS only
6. ✅ Set secure headers (Helmet enabled)

### Start Command
```bash
npm start
```

### Environment-Specific Configuration

```javascript
if (process.env.NODE_ENV === 'production') {
  // Use production settings
  app.set('trust proxy', true);
} else {
  // Use development settings
}
```

## Security Best Practices

1. **Environment Variables**: Never hardcode secrets
2. **Input Validation**: Always validate user input
3. **Error Messages**: Don't expose internal errors to clients
4. **HTTPS**: Use HTTPS in production
5. **Rate Limiting**: Implement rate limiting
6. **CORS**: Configure CORS properly
7. **SQL Injection**: Use parameterized queries
8. **Authentication**: Use JWT or OAuth

## Resources

- [Express.js Docs](https://expressjs.com)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [HTTP Status Codes](https://httpwg.org/specs/rfc7231.html#status.codes)
- [REST API Best Practices](https://restfulapi.net/)

---

**Last Updated**: February 28, 2024
