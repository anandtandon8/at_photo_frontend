FROM node:20-alpine

# Create and change to the app directory.
WORKDIR /
RUN chown node:node ./
USER node

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Copy package.json and package-lock.json to the working directory.
COPY package*.json ./

# Install production dependencies.
RUN npm ci --omit=dev

# Copy the built application from the .next directory.
COPY .next ./.next
COPY next.config.js ./

# Expose the port the app runs on.
EXPOSE 3000

# Start the application.
CMD ["npm", "start"]