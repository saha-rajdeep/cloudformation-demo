#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { WorkshopTypescriptStack } from '../lib/workshop-typescript-stack';
//Enter your AWS Account Number and preferred region here
const envUSA = { account: '123456789', region: 'us-east-1' };

const app = new cdk.App();
new WorkshopTypescriptStack(app, 'WorkshopTypescriptStack',{env: envUSA});