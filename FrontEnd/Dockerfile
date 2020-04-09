
FROM node:alpine

WORKDIR /opt/node_app
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /opt/node_app/node_modules/.bin:$PATH
WORKDIR /opt/node_app/app
COPY . .
EXPOSE 3000
CMD ["npm", "start"]