# Frayer Model Template 
Frayermodel 是一个基于 AI 动态生成frayer model template的项目，目的是为了更好的帮助老师和学生用 frayer model 思维模型，学习记忆英语词汇或者某一个特定领域的专业术语和概念。并且收集了，互联网上常见的 frayer model template pdf 格式的模板，提供给用户一键下载。
# Frayer model 
Frayer Model 是一种教育工具，由 Dorothy Frayer 及其同事在1969年开发。它主要用于帮助学生深入理解复杂词汇的含义和结构。Frayer Model 通过一个四宫格图形组织器来实现这一目标，通常包括以下四个部分：

定义（Definition）：提供所关注词汇的清晰定义。
属性/特征（Characteristics/Attributes）：列出该词汇的关键属性或特征。
例子（Examples）：给出该词汇的具体例子。
非例子（Non-examples）：提供不属于该词汇范畴的例子，帮助澄清概念的界限。
Frayer Model 通过视觉和图形化的方式展示信息，有助于加深学生对词汇的理解和记忆。它不仅适用于词汇教学，还可以用于分析和探究特定主题或概念。此外，Frayer Model 可以促进学生的批判性思维，帮助他们通过不同的维度与词汇建立联系，并在教学中用于激活先前知识、监控阅读过程等。
👉 [FrayerModelTemplate](https://www.frayermodeltemplate.com/)

[English](https://github.com/SoraWebui/SoraWebui/blob/main/README.md) | 简体中文 | [日本語](https://github.com/SoraWebui/SoraWebui/blob/main/README.ja-JP.md)

# 项目计划
- ✅ 提供不同风格样式的frayer model template pdf 下载:

- ✅ 收集各种不用风格的frayer model template 列别:

- [ ] Stripe支付：
- [ ] Google 一键登录:
 

  即将推出

- [ ] 基于 AI 的智能生成 frayerModel Template 的功能：
- [ ] 基于AI 生成小学、初中教育阶段的 frayer model 记忆卡片
- [ ] 基于某些特定领域智能生成该领域的专业术语和概念的 frayer model 卡片
- [ ] 分享自己制作的 frayer model 卡片 并支持打印出来
- [ ] 收藏别人的frayer model 卡片 




## 快速开始

### 在 Vercel 上部署
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?https://github.com/zippo-zu/flayermodelui)

### 1. 克隆项目

```bash
git clone git@github.com:zippo-zu/flayermodelui.git
```

### 2. 安装依赖

```bash
cd flayermodelui && yarn
#or
cd flayermodelui && npm install
#or
cd flayermodelui && pnpm install
```

### 3. 复制 .env.example 并将其重命名为 .env.local

```bash
R2_ACCESS_KEY_ID= 
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=
R2_ACCOUNT_ID=
```

### 4. 运行

```bash
yarn dev
#or
npm run dev
#or
pnpm dev
```

### 4. 在浏览器打开 [http://localhost](http://localhost)
![success_deploy.jpg](https://frayermodeltemplate.com/frayerproject.png)


# 重要事项
FrayerModelTemplate 需要依赖 cloudflare 的对象存储服务 R2。