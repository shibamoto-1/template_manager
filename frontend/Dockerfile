FROM node:20.16.0

RUN mkdir /frontend
WORKDIR /frontend

COPY package.json package-lock.json ./

RUN npm install

COPY ./ ./

RUN npm run build

CMD ["npm","run","dev"]