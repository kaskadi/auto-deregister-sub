![](https://img.shields.io/github/package-json/v/kaskadi/auto-deregister-sub)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/auto-deregister-sub?color=blue)

**GitHub Actions workflows status**

[![](https://img.shields.io/github/workflow/status/kaskadi/auto-deregister-sub/deploy?label=deployed&logo=Amazon%20AWS)](https://github.com/kaskadi/auto-deregister-sub/actions?query=workflow%3Adeploy)
[![](https://img.shields.io/github/workflow/status/kaskadi/auto-deregister-sub/build?label=build&logo=mocha)](https://github.com/kaskadi/auto-deregister-sub/actions?query=workflow%3Abuild)
[![](https://img.shields.io/github/workflow/status/kaskadi/auto-deregister-sub/syntax-check?label=syntax-check&logo=serverless)](https://github.com/kaskadi/auto-deregister-sub/actions?query=workflow%3Asyntax-check)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/auto-deregister-sub?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/auto-deregister-sub)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/auto-deregister-sub?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/auto-deregister-sub)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/auto-deregister-sub?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/auto-deregister-sub)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/auto-deregister-sub?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/auto-deregister-sub/?mode=list&logo=LGTM)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# Resources documentation

The following lambda functions are defined in this repository:
- [deregister-sub](#deregister-sub)

The following layers are defined in this repository:
- [deregister-sub-layer](#deregister-sub-layer)

## deregister-sub <a name="deregister-sub"></a>

|      Name      | Sources                        | Timeout |             Handler            | Layers                                                          |
| :------------: | :----------------------------- | :-----: | :----------------------------: | :-------------------------------------------------------------- |
| deregister-sub | <ul><li>Event Bridge</li></ul> | default | [handler](./deregister-sub.js) | <ul><li>[deregister-sub-layer](#deregister-sub-layer)</li></ul> |

See [configuration file](./serverless.yml) for more details.

## deregister-sub-layer <a name="deregister-sub-layer"></a>

### Description

Layer for deregister-sub

### Dependencies

- `aws-es-client`, version: `^1.0.2` ([see on NPM](https://www.npmjs.com/package/aws-es-client))

See [configuration file](./serverless.yml) for more details.

# Stack tags

You can use any tags (and their respective values) visible below to find ressources related to this stack on AWS. See [here](https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) for more details.

| Tag          | Value          |
| :----------- | :------------- |
| app          | kaskadi        |
| service      | deregister-sub |
| logical-unit | push           |
| type         | eventBridge    |
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->