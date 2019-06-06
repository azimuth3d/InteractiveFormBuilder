FROM mhart/alpine-node:8.12
LABEL Khomkrit Uparakham <azimuth3d@gmail.com>
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app
ADD package.json package-lock.json ./
RUN apk add  --virtual build-dependencies --no-cache make \
  gcc \
  g++ \
  python2 \
  bash \
  lcms2-dev \
  libpng-dev

RUN npm install && \
  npm install pngquant-bin optipng-bin && \
  npm install node-gyp -g && \
  npm rebuild node-sass --force

# RUN apk del build-dependencies

ADD . /usr/local/app
CMD [ "npm", "run", "start:production:docker" ]
EXPOSE 8080
EXPOSE 3000


