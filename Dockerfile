FROM node:10.22
ENV NODE_ENV production
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
RUN npm run build
EXPOSE 3002
CMD ["npm", "start"]
