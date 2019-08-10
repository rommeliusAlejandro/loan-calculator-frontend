pipeline {
    agent none
    stages {
        stage('Clone frontend code') {
            agent {label 'master'}
            steps {
                git branch: 'develop', url: 'https://github.com/rommeliusAlejandro/loan-calculator-frontend.git'
            }
        }
        stage('Build frontend code') {
            agent{ docker 'trion/ng-cli:8.0.6'}
            steps {
                sh "npm install"
                sh "ng build --prod --base-href=/LoanCalculator/"
            }
        }
        /*stage('Run Unit Test') {
            agent{ docker 'trion/ng-cli:8.2.0'}
            steps{
                sh "ng test"
            }
        }*/
        stage('Archive artifacts') {
            agent{ label 'master'}
            steps {
                archiveArtifacts 'dist/'
                sh "docker build -t loan-calculator-frontend:${env.BUILD_NUMBER} ."
                sh "docker save -o loan-calculator-frontend:${env.BUILD_NUMBER}.tar loan-calculator-frontend:${currentBuild.number}"
                stash name: "stash-artifact", includes: "loan-calculator-frontend:${env.BUILD_NUMBER}.tar"
            }
        }
        stage('Deploy to QA') {
            agent{label 'master'}
            steps {
                sh "docker rm loan-calculator-frontend -f || true"
                sh  "docker run -d -p 8085:8080 --name loan-calculator-frontend loan-calculator-frontend:${env.BUILD_NUMBER}"
            }
        }
        stage('Deploy to Prod') {
            agent{label 'master'}
            steps{
                sh "ansible-playbook playbook.yml"
            }
        }
       
    }
    
}
