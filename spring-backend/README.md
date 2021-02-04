To build the docker image that is used by ../docker-compose.yml

1. gradle build
2. docker build --build-arg JAR_FILE=build/libs/\*.jar -t springio/gs-spring-boot-docker .

