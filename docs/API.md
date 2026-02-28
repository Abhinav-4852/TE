# Backend API Documentation

Complete reference for all backend API endpoints.

## Base URL
```
http://localhost:3000/api
```

## Authentication
Currently no authentication required. This will be added in future releases.

## Response Format

### Success Response (2xx)
```json
{
  "status": "success",
  "data": {}
}
```

### Error Response (4xx, 5xx)
```json
{
  "error": "Error message describing what went wrong"
}
```

---

## Endpoints

### Health Check

**GET** `/health`

Check if the server is running.

**Response:**
```json
{
  "status": "Server is running",
  "timestamp": "2024-02-28T10:30:45.123Z"
}
```

**Example:**
```bash
curl http://localhost:3000/api/health
```

---

## Rate Limiting

Currently disabled. Will be implemented in production.

## Error Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 400 | Bad Request - Invalid parameters |
| 404 | Not Found - Resource not found |
| 500 | Server Error - Backend error |

---

## Adding New Endpoints

### 1. Create a Route File

Create `backend/routes/users.js`:
```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all users' });
});

module.exports = router;
```

### 2. Create a Controller (Optional)

Create `backend/controllers/userController.js`:
```javascript
exports.getAllUsers = (req, res) => {
  res.json({ data: [] });
};
```

### 3. Register Route in `server.js`

```javascript
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
```

---

## Environment Variables

```env
PORT=3000                          # Server port
NODE_ENV=development               # Environment mode
DB_HOST=localhost                  # Database host
DB_NAME=trident_escapes            # Database name
CORS_ORIGIN=http://localhost:8080  # Allowed CORS origin
```

---

## Testing Endpoints

### Using cURL

```bash
# GET request
curl http://localhost:3000/api/health

# POST request
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John"}'

# With headers
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/api/users
```

### Using Postman

1. Import requests from this documentation
2. Set base URL to `http://localhost:3000/api`
3. Test endpoints individually

### Using Fetch (Frontend)

```javascript
// GET
fetch('http://localhost:3000/api/health')
  .then(res => res.json())
  .then(data => console.log(data));

// POST
fetch('http://localhost:3000/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John' })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## Middleware

Built-in middleware loaded in `server.js`:

- **Helmet**: Security headers
- **CORS**: Cross-origin requests
- **Express.json**: JSON parsing
- **Express.urlencoded**: Form data parsing

---

## Security Considerations

1. **Environment Variables**: Never commit `.env` files
2. **CORS**: Configure `CORS_ORIGIN` for your domain
3. **Rate Limiting**: Implement for production
4. **Input Validation**: Use `express-validator` for all inputs
5. **Authentication**: Implement JWT or OAuth for protected routes

---

## Deployment

See main [README.md](../README.md#deployment) for deployment instructions.

---

**Last Updated**: February 28, 2024
