FROM node:12

# Set working directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
