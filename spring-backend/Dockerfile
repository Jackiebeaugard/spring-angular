# Based on https://spring.io/guides/gs/spring-boot-docker/
FROM lpicanco/java11-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]

