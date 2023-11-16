# Node image as the base image
FROM node:18 as build

# Set working directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Build the app
RUN npm run build

# Nginx image to serve the app
FROM nginx:stable-alpine

# Copy built assets from build-stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Set environment variable for the production API base URL
ENV REACT_APP_API_URL="http://api:8080/api"

# Expose port
EXPOSE 80

# Command to run the app
CMD ["nginx", "-g", "daemon off;"]

