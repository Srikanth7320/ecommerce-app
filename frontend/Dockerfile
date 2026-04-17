# Build stage - Multi-stage build for smaller final image
FROM node:18-alpine AS builder

# Set working directory for build stage
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies for build)
RUN npm install && npm cache clean --force

# Copy source code
COPY . .

# Build the React app for production
RUN npm run build

# Production stage - Use nginx for serving static files
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built React app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 (nginx default)
EXPOSE 80

# Nginx runs as non-root by default in Alpine
# No CMD needed - nginx image has default entrypoint
