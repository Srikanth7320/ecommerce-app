# Use lightweight Node image
FROM node:18-alpine

RUN echo "Building Backend"

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy remaining source code
COPY . .

# Expose backend port
EXPOSE 5000

# Start the application
CMD ["node", "src/app.js"]
