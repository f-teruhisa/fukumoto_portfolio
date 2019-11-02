import React from 'react';
import ScrollDialog from '../components/ScrollDialog';

const Accounts = () => (
  <div>
    <h3>Application</h3>
    <div id="card_area">
      <ScrollDialog
        title = "Twitter"
        img="quartz.png"
        techs={["Ruby", "Rails", "AWS", "MySQL", "bootstrap", "rspec"]}
        url="https://twitter.com/terry_i_"
        github="QuartZ"
        description={
          <span>
            ランダムランチのグループ分けや思い出を残すアプリケーション<br />
          </span>
        }
      />
      <ScrollDialog
        title="Twitter分析ツール[Any Tweets]"
        img="anytweets.png"
        techs={["Python", "Flask", "bootstrap", "Heroku", "pandas", "Twitter API"]}
        github="any-tweets"
        description={
          <span>
            個人のTwitter分析サービス。<br />
            最新のいいね数などのTwitter APIで取得できるデータを時系列で可視化することができます。<br />
          </span>
        }
      />
      <ScrollDialog
        title="個人ポートフォリオサイト"
        img="portfolio.png"
        techs={["React.js", "Firebase", "Hosting", "Material UI", "JavaScript"]}
        github="fukumoto_portfolio"
        description={
          <span>
            アウトプットが増えてきたため、一箇所にまとめるためにポートフォリオサイトを作りました。<br />
          </span>
        }
      />
      <ScrollDialog
        title="Messenger QuickStart bot"
        img="bot.png"
        techs={["Node.js", "JavaScript",  "Messenger API", "Heroku"]}
        github="messenger_quick_start_bot"
        description={
          <span>
            Facebook Messengerの公式クイックスターbotのサンプルコード。<br />
            Facebook Developer Circleの第2回イベントでライブ・コーディングを行った時にサンプルとして使用しました。<br />
          </span>
        }
      />
      <ScrollDialog
        title="レーティングアプリ[Liibra]"
        img="liibra.png"
        techs={["Ruby", "Rails", "bootstrap", "JavaScript", "MySQL"]}
        github="liibra"
        description={
          <span>
            集合知を利用したレーティングアプリです。<br />
            都道府県やアメリカ大統領などの母数を選び、好きなテーマでレーティングを開始できます。<br />
            ランダムに2つの要素が提示され、どちlらが優れているかを選んでいき、それを繰り返すことで得点を競います、<br />
          </span>
        }
      />
      <ScrollDialog
        title="LINE login(forked)"
        img="line_login.png"
        techs={["JavaScript", "Node.js", "LINE Login", "OpenID connect"]}
        github="line_login"
        description={
          <span>
            LINE loginを活用したセキュアなログインシステムのサンプル実装です<br />
            LINE Developer Communityでの成果物になります。<br />
          </span>
        }
      />
    </div>
  </div>
);

export default Accounts;
