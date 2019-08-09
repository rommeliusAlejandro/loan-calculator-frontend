FROM tomcat:9.0.22-jdk13-openjdk-oracle

WORKDIR /usr/local/tomcat/

COPY /dist/ webapps
EXPOSE 8080
CMD ["catalina.sh", "run"]