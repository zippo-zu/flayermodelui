# Frayer model モデルテンプレート
Frayermodelは、AIを基に動的にfrayerモデルテンプレートを生成するプロジェクトで、先生と学生がfrayerモデルの思考モデルを使って英語の語彙や特定の分野の専門用語や概念をよりよく学び記憶するのに役立つことを目的としています。また、インターネット上で一般的に使用されているfrayerモデルテンプレートのpdf形式を収集し、ユーザーがワンクリックでダウンロードできるようにしています。

# Frayerモデル
Frayerモデルは、1969年にDorothy Frayerとその同僚によって開発された教育ツールです。主に学生が複雑な語彙の意味と構造を深く理解するのに役立ちます。Frayerモデルは四分割の図形組織子を通じてこの目標を達成し、通常は以下の4つの部分を含んでいます：

定義（Definition）：注目する語彙の明確な定義を提供します。
特性/属性（Characteristics/Attributes）：その語彙の重要な特性や属性を挙げます。
例（Examples）：その語彙の具体例を挙げます。
非例（Non-examples）：その語彙の範囲に属さない例を提供し、概念の境界を明確にします。
Frayerモデルは視覚的かつグラフィカルな方法で情報を提示し、学生が語彙を理解し記憶するのを助けます。語彙教育だけでなく、特定のテーマや概念を分析し、探究することにも使えます。さらに、Frayerモデルは学生の批判的思考を促進し、異なる次元で語彙とつながり、教育で先の知識を活性化したり、読み取りプロセスを監視するのに役立ちます。
👉 [Frayerモデルテンプレート](https://www.frayermodeltemplate.com/)

[English](https://github.com/SoraWebui/SoraWebui/blob/main/README.md) | 日本語简体中文 | [简体中文](https://github.com/SoraWebui/SoraWebui/blob/main/README.zh-CN.md)

# プロジェクト計画
- ✅ さまざまなスタイルのfrayerモデルテンプレートpdfをダウンロードできるようにする：

- ✅ さまざまなスタイルのfrayerモデルテンプレートを収集する：

- [ ] Stripe支払い：
- [ ] Googleワンクリックログイン：

  間もなく発表

- [ ] AIを基にfrayerモデルテンプレートをスマートに生成する機能：
- [ ] AIを基に小・中学教育段階のfrayerモデル記憶カードを生成する
- [ ] 特定の分野に特化してその分野の専門用語や概念のfrayerモデルカードをスマートに生成する
- [ ] 作成したfrayerモデルカードを共有し、印刷をサポートする
- [ ] 他の人のfrayerモデルカードをコレクション

## クイックスタート

### Vercelでデプロイ
[![Deploy with Vercel](https://vercel.com/button)](https://github.com/zippo-zu/flayermodelui)

### 1. プロジェクトをクローン

```bash
git clone git@github.com:zippo-zu/flayermodelui.git
```
### 2. 依存関係をインストール
```bash
cd flayermodelui && yarn
# or
cd flayermodelui && npm install
# or
cd flayermodelui && pnpm install
```
### 3. .env.exampleをコピーして.env.localにリネーム
```bash
R2_ACCESS_KEY_ID= 
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=
R2_ACCOUNT_ID=
```
### 4. 実行
```bash
yarn dev
# or
npm run dev
# or
pnpm dev
```
### 4. ブラウザで http://localhost を開く
![success_deploy.jpg](https://frayermodeltemplate.com/frayerproject.png)

# 重要な事項
FrayerModelTemplateはCloudflareのオブジェクトストレージサービスR2に依存しています。
