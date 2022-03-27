FROM node:alpine as builder
WORKDIR /app
COPY . ./
RUN npm ci
RUN npm run build:storybook

FROM nginx:alpine
COPY --from=builder /app/storybook-static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]