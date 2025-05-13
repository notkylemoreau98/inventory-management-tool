# Use official Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /user/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port and start server
EXPOSE 3000
CMD ["node", "src/index.js"]