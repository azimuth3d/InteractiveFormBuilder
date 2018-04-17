FROM mhart/alpine-node:8.11
MAINTAINER Khomkrit Uparakham <azimuth3d@gmail.com>
RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app
COPY . /usr/local/app
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
RUN apk del build-dependencies

CMD [ "npm", "run", "start:production:docker" ]
EXPOSE 8080 

