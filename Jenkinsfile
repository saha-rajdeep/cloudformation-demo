pipeline {
    agent any
    stages {
        stage('Submit Stack') {
            steps {
            sh "aws cloudformation create-stack --stack-name infosys-auto-hyd-stack --template-body file://s3cft.yml --region 'us-east-1'"
              }
             }
            }
            }
