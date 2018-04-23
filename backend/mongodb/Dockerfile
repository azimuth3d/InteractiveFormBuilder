
FROM alpine:latest

RUN apk add --no-cache mongodb

VOLUME ["/data/db"]
WORKDIR /data

CMD ["mongod"]

EXPOSE 27017
EXPOSE 28017