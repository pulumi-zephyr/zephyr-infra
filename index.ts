import * as pulumi from "@pulumi/pulumi";
import * as awsx from "@pulumi/awsx";

// Grab some values from the Pulumi configuration (or use default values)
const config = new pulumi.Config();
const vpcNetworkCidr = config.get("vpcNetworkCidr") || "10.0.0.0/16";

// Create a new VPC
const eksVpc = new awsx.ec2.Vpc("eks-vpc", {
    enableDnsHostnames: true,
    cidrBlock: vpcNetworkCidr,
});

// Export some values for use elsewhere
export const vpcId = eksVpc.vpcId;
export const privSubnetIds = eksVpc.privateSubnetIds;
export const pubSubnetIds = eksVpc.publicSubnetIds;
