import sns = require('@aws-cdk/aws-sns');
import subs = require('@aws-cdk/aws-sns-subscriptions');
import sqs = require('@aws-cdk/aws-sqs');
import s3 =  require('@aws-cdk/aws-s3');
import ec2 = require('@aws-cdk/aws-ec2')
import cdk = require('@aws-cdk/core');


export class WorkshopTypescriptStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'WorkshopTypescriptQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'WorkshopTypescriptTopic');
    
    topic.addSubscription(new subs.SqsSubscription(queue));
    
    const bucket = new s3.Bucket(this, 'cdkbucket', {versioned:true})
    
    const another_bucket = new s3.Bucket(this, 'anothercdkbucket', {versioned:false})
    
    const ami= new ec2.LookupMachineImage({name:'ubuntu/images/hvm-ssd/ubuntu-xenial-16.04-amd64-server-20170307',
                    owners:['099720109477']
    })
    const defaultvpc = ec2.Vpc.fromLookup(this,'vpc',{isDefault: true})
    
    const ec2instance = new ec2.Instance(this, 'cdkec2instance', {instanceType:new ec2.InstanceType('t2.micro'),
                        machineImage:ami,vpc:defaultvpc
    })
    

    
    
  }
}
