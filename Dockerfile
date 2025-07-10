# Dockerfile
FROM node:18

# Set the working directory
WORKDIR /PET

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g dotenv-cli http-server

# Copy the rest of the application code
COPY . .
COPY start.sh .

# Expose port 8081 
EXPOSE 8081

# Run tests
ENTRYPOINT ["./start.sh"]