# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port your app will run on (3000 is the default for Next.js)
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "start"]
