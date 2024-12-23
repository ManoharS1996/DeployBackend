# Use official Node.js image
FROM node:16

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all other source code
COPY . .

# Expose the backend port (5000)
EXPOSE 5000

# Start the Node.js app
CMD ["node", "server.js"]
