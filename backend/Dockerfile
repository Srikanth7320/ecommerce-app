# Use official Node.js 18 LTS (Alpine for smaller size)
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (for better Docker layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev && npm cache clean --force

# Copy application source code
COPY . .

# Create uploads directory for product images
RUN mkdir -p uploads && chmod 755 uploads

# Expose port 5000
EXPOSE 5000

#start the app
CMD ["node", "server.js"]
