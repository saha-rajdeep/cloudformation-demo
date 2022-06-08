pipeline {
    agent any
    stages {
        stage('Submit Stack') {
            steps {
            sh "aws cloudformation create-stack --stack-name tcs-auto-yaml-stack --template-body file://s3cft.yml --region 'us-east-1'"
              }
             }
            }
            }
