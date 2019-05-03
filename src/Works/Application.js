import React from 'react';
import ScrollDialog from '../components/ScrollDialog';

const Application = () => (
  <div>
    <h3>アプリケーション</h3>
    <div id="card_area">
      <ScrollDialog
        title="日本酒レビューサイト S[H]AKE"
        img="shake.png"
        techs={["Ruby on Rails", "AWS", "MySQL"]}
        url="https://s-h-ake.info/"
        qiita="0888bf7ccc93171e6fde"
        description={
          <span>
            日本酒の感想を気軽に投稿できるサイトを作りました。<br />
          </span>
        }
      />
      <ScrollDialog
        title="ベイスターズ試合速報"
        img="bay.png"
        techs={["Python", "Alexa", "AWS"]}
        qiita="f5a61ecabb5c365b4ee5"
        description={
          <span>
            横浜DeNAベイスターズの試合速報を教えてくれるAlexaスキルです。Amazon Echoシリーズで利用できます。<br />
            最近は結果を残しているベイスターズですが、以前はセリーグの借金を一手に背負う負けっぷりであり、結果を見るたびに萎えるという状態でした。<br />
            そのため試合に負けているときは、しらばっくれて結果を教えてくれないようにすることで、安心して結果が確認できるようになりました（？）<br />
          </span>
        }
      />
      <ScrollDialog
        title="不審者情報Bot"
        img="hushin.jpg"
        techs={["Python", "AWS", "LINE Messaging API"]}
        qiita="3bec8c1c3c645805a237"
        description={
          <span>
            警視庁が発表している不審者情報を、LINEで通知してくれるBotを作成しました。<br />
            不審者の発生時刻、場所、内容のテキスト情報にプラスして、住所からマップ画像を生成して通知できるようにしました。<br />
          </span>
        }
      />
      <ScrollDialog
        title="Todo管理アプリ"
        img="todo.png"
        techs={["Ruby on Rails", "Heroku"]}
        qiita="33fda835e34857d4a3e8"
        description={
          <span>
            Todo管理を簡単に実現するウェブアプリケーションを開発しました。<br />
            世の中のTodo管理アプリは機能が充実しすぎていて、逆にわかりづらくなっているので、なるべく紙にメモする感覚で使える簡単なUI/UXを心がけました。<br />
          </span>
        }
      />
      <ScrollDialog
        title="スプラトゥーン2 ブキ診断"
        img="splatoon.png"
        techs={["Vue.js", "JavaScript"]}
        qiita="b294629f8f6edab4e657"
        description={
          <span>
            Nintendo Switchの代表作である「スプラトゥーン2」に関する診断アプリケーションです。<br />
            ゲームでは何十種類もあるブキの中から一つを装備してたたかうのですが、初心者は自分に向いているブキを見つけるのが難しい状態です。<br />
            そこで一問一答形式で質問に答えていくことで、自分に適したブキをサジェストしてくれるアプリケーションを構築しました。<br />
            Vue.jsで作成しているので、ページ遷移なくサクサクと利用することができます。<br />
          </span>
        }
      />
      <ScrollDialog
        title="Rapid Tap（反射神経ゲーム）"
        img="rapid_tap.png"
        techs={["Java", "Android SDK", "Android Studio"]}
        qiita="fdb5a782563cce3710db"
        description={
          <span>
            ランダムに配置された1から32までのボタンを素早くタップし、タイムを競うRapid TapというAndroidアプリを作成しました。<br />
            完了タイムによって評価が変わり、最高はSSランクです。<br />
            シンプルですが意外とハマる…そんなゲーム性になっています。<br />
          </span>
        }
      />
      <ScrollDialog
        title="ポートフォリオサイト"
        img="portfolio.png"
        techs={["React.js", "Material-UI", "Firebase Hosting"]}
        qiita="5ae17fa9590ef3f404e6"
        description={
          <span>
            現在ご覧いただいているこちらのウェブサイトになります。<br />
            Reactを利用して記述しており、モーダルウインドウの部分はMaterial-UIのコンポーネントを利用しています。レスポンシブ対応しているので、スマホからも閲覧できます。<br />
            ホスティングにはFirebase Hostingを利用し、独自ドメインを紐づけております。<br />
          </span>
        }
      />
    </div>
  </div>
);

export default Application;
