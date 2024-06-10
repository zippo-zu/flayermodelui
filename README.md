# Frayer Model Template
Frayermodel is a project that dynamically generates Frayer model templates based on AI, aimed at better helping teachers and students use the Frayer model thinking model to learn and memorize English vocabulary or professional terminology and concepts in a specific field. It also collects common Frayer model template pdf formats on the Internet, providing one-click downloads for users.

# Frayer Model
The Frayer Model is an educational tool developed by Dorothy Frayer and her colleagues in 1969. It is mainly used to help students deeply understand the meaning and structure of complex vocabulary. The Frayer Model achieves this goal through a four-part graphic organizer, which typically includes the following four parts:

Definition: Provides a clear definition of the vocabulary of interest.
Characteristics/Attributes: Lists the key characteristics or attributes of the vocabulary.
Examples: Gives specific examples of the vocabulary.
Non-examples: Provides examples that do not belong to the category of the vocabulary, helping to clarify the boundaries of the concept.
The Frayer Model presents information visually and graphically, helping students to understand and remember vocabulary. It is not only suitable for vocabulary teaching but can also be used to analyze and explore specific topics or concepts. In addition, the Frayer Model can promote students' critical thinking, helping them to establish connections with vocabulary through different dimensions, and to activate prior knowledge and monitor the reading process in teaching.

👉 [FrayerModelTemplate](https://www.frayermodeltemplate.com/)

[Simplified Chinese](https://github.com/zippo-zu/flayermodelui/blob/main/README.zh-CN.md) | English | [Japanese](https://github.com/zippo-zu/flayermodelui/blob/main/README.ja-JP.md)

# Project Plan
- ✅ Provide downloads of Frayer model templates in different styles:

- ✅ Collect various styles of Frayer model templates:

- [ ] Stripe payment:
- [ ] Google one-click login:

  Coming soon

- [ ] AI-based intelligent generation of Frayer Model Templates:
- [ ] AI-based generation of Frayer model memory cards for primary and secondary education stages
- [ ] Intelligent generation of Frayer model cards for professional terminology and concepts in specific fields
- [ ] Share self-made Frayer model cards and support printing
- [ ] Collect other people's Frayer model cards

## Quick Start

### Deploy on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://github.com/zippo-zu/flayermodelui)

### 1. Clone the project

```bash
git clone git@github.com:zippo-zu/flayermodelui.git
```
### 2. Install dependencies

```bash
cd flayermodelui && yarn
# or
cd flayermodelui && npm install
# or
cd flayermodelui && pnpm install
``` 
### 3. Copy .env.example and rename it to .env.local
```bash
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=
R2_ACCOUNT_ID=
```
### 4. Run
```bash
yarn dev
# or
npm run dev
# or
pnpm dev
```
### 4. Open http://localhost in the browser
![success_deploy.jpg](https://frayermodeltemplate.com/frayerproject.png)

# Important Matters
FrayerModelTemplate relies on Cloudflare's object storage service R2.