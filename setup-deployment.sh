#!/bin/bash

# Deployment Setup Script for Trident Escapes
# This script copies email from .env to config.js for deployment

echo "🚀 Setting up Trident Escapes for deployment..."

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "❌ .env file not found! Please create one from .env.example"
    exit 1
fi

# Extract email from .env
EMAIL=$(grep "WEB3FORMS_EMAIL=" .env | cut -d '=' -f2)

if [ -z "$EMAIL" ]; then
    echo "❌ WEB3FORMS_EMAIL not found in .env file"
    exit 1
fi

echo "📧 Found email: $EMAIL"

# Update config.js with the email
if [ -f "frontend/js/config.js" ]; then
    # Replace placeholder with actual email
    sed -i.bak "s/REPLACE_WITH_YOUR_EMAIL/$EMAIL/g" frontend/js/config.js
    echo "✅ Updated frontend/js/config.js with email"
    echo "📁 Backup saved as config.js.bak"
else
    echo "❌ frontend/js/config.js not found!"
    exit 1
fi

echo "🎉 Setup complete! Your site is ready for deployment."
echo ""
echo "📝 Next steps:"
echo "   1. Deploy to your hosting platform"
echo "   2. Ensure the hosting platform can serve static files"
echo "   3. Test form submissions"
echo ""
echo "⚠️  Remember: Don't commit config.js with real email to git!"