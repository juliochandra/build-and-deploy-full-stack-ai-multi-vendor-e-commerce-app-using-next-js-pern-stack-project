# 1. Use Node.js 24 (slim version) as the base operating system
FROM node:24-slim

# 2. Install OpenSSL (required by Prisma to communicate with your database)
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# 3. Create and set the folder inside the container where our code will live
WORKDIR /app

# 4. Copy package files first to cache dependencies (makes future builds faster)
COPY package.json package-lock.json ./

# 5. Install all project dependencies
RUN npm ci

# 6. Copy the rest of the project files (including the .env file if present)
COPY . .

# 7. Generate the Prisma Client so we can make database queries
RUN npx prisma generate

# 8. Build the Next.js app for production
# (This reads your .env file and bakes the NEXT_PUBLIC_ variables into the code)
RUN npm run build

# 9. Expose port 3000 so we can access the web application
EXPOSE 3000

# 10. Start the Next.js production server
CMD ["npm", "run", "start"]
