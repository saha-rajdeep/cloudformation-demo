pipeline {
    agent any
    stages {
        stage('Submit Stack') {
            steps {
            sh "aws cloudformation create-stack --stack-name infosys-auto-yaml-stack --template-body file://simplests3cft.json --region 'ap-south-1'"
              }
             }
            }
            }
