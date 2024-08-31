FROM eclipse-temurin:17-jdk-focal
EXPOSE 9090
ADD target/docker-jenkin-springboot-0.0.1-SNAPSHOT.jar docker-jenkin-springboot-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/docker-jenkin-springboot-0.0.1-SNAPSHOT.jar"]