# Zephyr Archaeotech Emporium Online Store - Base Infrastructure

This is the source repository for the Pulumi code to manage the base infrastructure that supports the online store of the Zephyr Archaeotech Emporium. It's used in [Pulumi's Zephyr series of blog posts](https://www.pulumi.com/blog/tag/zephyr/) to discuss best practices when using Pulumi to manage infrastructure and applications.

## Deploying with Pulumi

### Prerequisites

To deploy this infrastructure with Pulumi, you need to:

* have the Pulumi CLI installed, and ensure you are signed into a backend;
* have NodeJS installed; and
* have the AWS CLI installed and configured for your AWS account.

### Instructions

Follow these steps to deploy the base infrastructure that will support Zephyr's online store:

1. Clone this repository to your local system (if you haven't already).
2. Run `npm install` to install all necessary dependencies.
3. Run `pulumi stack init <name>` to create a new stack.
4. Set your desired AWS region with `pulumi config set aws:region <region-name>`.
5. Run `pulumi up`.

**NOTE:** You'll see `Pulumi.test.yaml` and `Pulumi.prod.yaml` stack files in this repository. These are here for illustrative purposes (to tie back to the Pulumi blog series) and will not impact your ability to use the steps above _unless_ you use a stack name of "test" or "prod" for your stack.

This Pulumi project deploys a VPC using [Crosswalk for AWS](https://www.pulumi.com/docs/guides/crosswalk/aws/). You can see the VPC IDs and public/private subnet IDs using `pulumi stack output`.
