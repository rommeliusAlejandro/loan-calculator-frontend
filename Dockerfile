FROM tomcat:9.0.22-jdk13-openjdk-oracle

WORKDIR /usr/local/tomcat/

RUN mkdir /webapps/LoanCalculator
COPY /dist/loan-calculator-fe/ webapps/LoanCalculator
EXPOSE 8080
CMD ["catalina.sh", "run"]