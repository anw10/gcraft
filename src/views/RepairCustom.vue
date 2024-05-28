<template>
  <v-main class="d-flex align-center justify-center">
    <v-container>
      <v-col>
        <v-card class="mx-auto"
          ><v-img height="400" src="/src/assets/repair1.jpg" cover> </v-img
          ><v-card-title>基本調整</v-card-title><v-card-subtitle>¥5,000〜</v-card-subtitle
          ><v-card-text
            >ロッド調整、弦高調整、オクターブ調整、全体クリーニング、テンション調整ナット調整+¥2,000</v-card-text
          ></v-card
        >
      </v-col>
      <v-col>
        <v-card
          ><v-card-title>すり合わせ</v-card-title><v-card-subtitle>¥10,000</v-card-subtitle
          ><v-card-text>ステンレスフレットの場合+4000</v-card-text></v-card
        >
      </v-col>
      <v-col>
        <v-card
          ><v-card-title>リフレット</v-card-title><v-card-subtitle>¥35,000〜</v-card-subtitle
          ><v-card-text
            ><v-list
              ><v-list-item>※フレット代が別途かかります (¥1,000〜¥5000程度)</v-list-item
              ><v-list-item>※指板修正を行う場合+¥6,000</v-list-item
              ><v-list-item>※セルあり、タング処理が必要な場合+¥10,000</v-list-item
              ><v-list-item>※メイプル指板で塗装が必要な場合+¥15,000</v-list-item
              ><v-list-item>※ステンレスフレットの場合+¥7,000</v-list-item
              ><v-list-item>※ステンレスフレットの場合+¥7,000</v-list-item></v-list
            ></v-card-text
          ></v-card
        >
      </v-col>
      <v-col>
        <v-card
          ><v-card-title>ナット製作</v-card-title><v-card-subtitle>¥10,000</v-card-subtitle
          ><v-card-text>材質によってチャージがかかる場合があります</v-card-text></v-card
        >
      </v-col>
      <v-col>
        <v-card
          ><v-card-title>ペグ交換</v-card-title
          ><v-card-text>木部加工が必要ないもの ¥3,000〜</v-card-text
          ><v-card-text>木部加工の必要なもの ¥5,000〜</v-card-text></v-card
        >
      </v-col>
      <v-col>
        <v-card
          ><v-card-title>リフィニッシュ</v-card-title><v-card-text>ボディ ¥50,000〜</v-card-text
          ><v-card-text>ネック ¥20,000〜</v-card-text><v-card-text>塗装剥がし ¥20,000</v-card-text
          ><v-card-text>木地調整 ¥10,000</v-card-text
          ><v-card-text>タッチアップ 色合わせのみ ¥5,000〜</v-card-text
          ><v-card-text>色合わせ、トップコート込み ¥15,000〜</v-card-text
          ><v-card-text
            >ラッカー、ウレタン、その他塗料での対応可能ですのでお申し付けください</v-card-text
          ><v-card-text>カラーサンプルの実物の郵送も行っています</v-card-text></v-card
        >
      </v-col>
      <v-col>
        <v-card
          ><v-card-title>木部加工</v-card-title
          ><v-card-text
            >ピックアップの増設 、ネックポケットの微調整、バッテリーBOXなど ¥10,000〜</v-card-text
          ><v-card-text>グリップシェイプ変更 ¥10,000(塗装+¥10,000)</v-card-text></v-card
        >
      </v-col>
      <v-col>
        <v-card
          ><v-card-title>配線</v-card-title
          ><v-card-text>仕様によって値段が変動するので、お問い合わせください</v-card-text></v-card
        >
      </v-col>
      <v-col>
        <v-card
          ><v-card-title>ブリッジ交換(基本調整込み)</v-card-title
          ><v-card-text>加工の必要ないもの ¥6,000</v-card-text>
          <v-card-text>ネジ穴の修正が必要 ¥8,000</v-card-text>
          <v-card-text>アンカー等の打ち直し ¥12,000</v-card-text>
          <v-card-text>要ザグリ ¥17,000</v-card-text>
          <v-card-text>FloydRoseへの加工 ¥2,0000</v-card-text>
          <v-card-text>裏通し加工 ¥7,000</v-card-text></v-card
        >
      </v-col>
      <v-col>
        <v-card
          ><v-card-title>ピックガード</v-card-title><v-card-text>穴なし ¥6,000</v-card-text>
          <v-card-text>穴あり ¥8,000</v-card-text>
          <v-card-text>特殊規格orオリジナル規格 ¥15,000</v-card-text>
          <v-card-text>(材料費が別途かかります。)</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          ><v-card-title>ネック折れ</v-card-title><v-card-subtitle>¥50,000〜</v-card-subtitle
          ><v-card-text>材質によってチャージがかかる場合があります</v-card-text></v-card
        >
      </v-col>
      <v-col>
        <v-card
          ><v-card-title>relic</v-card-title><v-card-text>ヤニ焼け、照明焼け+ ¥8,000</v-card-text>
          <v-card-text>指板レリック+ ¥15,000</v-card-text>
          <v-card-text>ネック裏+ ¥10,000〜</v-card-text>
          <v-card-text>ボディ+ ¥20,000〜</v-card-text>
          <v-card-text>ウェザーチェック ¥35,000</v-card-text>
          <v-card-text>金属パーツエイジング +¥15,000</v-card-text>
          <v-card-text>PGエイジング、+¥5,000</v-card-text></v-card
        >
      </v-col>
      <v-col>
        <v-card
          ><v-card-title>組み込み</v-card-title
          ><v-card-text>ヤニ焼け、照明焼け+ ¥8,000</v-card-text>
          <v-card-text>ネック組み込み(ナット調整、すり合わせ、ペグ取り付け) ¥25,000〜</v-card-text>
          <v-card-text>ボディ組み込み(ブリッジ位置合わせ、pg取り付け、配線) ¥25,000〜</v-card-text>
          <v-card-text
            >※上記以外のリペアも承っておりますので、お困りの際はお気軽にお問い合わせください。</v-card-text
          >
          <v-card-text>※料金は税抜表記になります。</v-card-text></v-card
        >
      </v-col>
    </v-container>
  </v-main>
</template>

<style></style>
