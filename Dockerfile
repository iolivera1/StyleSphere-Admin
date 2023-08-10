FROM node:18 as builder
WORKDIR /opt/builder
COPY . .
RUN npm install
RUN npm run build
FROM node:18
WORKDIR /opt/app
COPY --from=builder /opt/builder/ .
RUN npm install --omit=dev
CMD [ "npm", "start" ]