pipeline {
    agent any
    stages {
        stage('Submit Stack') {
            steps {
            sh "aws cloudformation create-stack --stack-name infosys-auto-hyd-stack --template-body file://ec2_parameter_example.json --region 'ap-southeast-1'"
              }
             }
            }
            }
