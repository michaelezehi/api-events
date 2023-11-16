# Node image as the base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port
EXPOSE 8080

# Command to run the app
CMD [ "npm", "start" ]
