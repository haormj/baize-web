## baize-web
白泽是中国古代神话中地位崇高的神兽，祥瑞之象征，是令人逢凶化吉的吉祥之兽。白泽亦能说人话，通万物之情，晓天下万物状貌。《白泽图》曰：羊有一角当顶上，龙也，杀之震死。《三才图会》中白泽是狮子身姿，头有一角，山羊胡子。

### 概述

baize项目主要是人工智能相关，会将一些主流模型集成，并提供前端web上传图片进行验证。目前分为两个模块，[baize-api](https://github.com/haormj/baize-api)和[baize-web](https://github.com/haormj/baize-web)，目前都已开源

1. baize-api主要负责提供后端接口，集成训练好模型
    - 模型通过pytorch训练，目前训练代码未开源，后续整理好也会开源
    - 训练完成通过torchscript转化为libtorch可调用模型
    - [ccutil](https://github.com/haormj/ccutil)会对调用进行封装，并通过[swig](http://www.swig.org/)提供golang接口
    - [go-micro](https://github.com/micro/go-micro)暴露微服务
    - [micro](https://github.com/micro/micro)做http网关
2. baize-web主要负责展现前端页面，提供用户上传界面
    - 整体基于[react](https://reactjs.org/)
    - [ant design pro](https://pro.ant.design/)作为脚手架
    - [ant design](https://ant.design/)有丰富的react库

### 使用
1. 开发
   ```shell
   npm start
   ```
2. 打包
   ```shell
   npm run build
   ```

