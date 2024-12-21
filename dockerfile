# Step 1: Build the NodeJS app
FROM node:16

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5000

CMD ["npm", "start"]
