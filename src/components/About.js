import React from 'react';

const About = () => (
  <div id="about">
    <h2>About me</h2>
    <div className="bio">
      <p>
        Name: Sinhalite<br />
        Age: 26<br />
      </p>
      <p>
        名前の由来は2016年オークス馬の<a href="https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%B3%E3%83%8F%E3%83%A9%E3%82%A4%E3%83%88" target="_blank" rel="noreferrer noopener">シンハライト</a>です。<br />
        趣味はそのまんまで競馬です。大学2年生の時に見始め、競馬歴は6年半になります。<br />
        コンシューマーゲームも大好きで、シューター系のゲームが特に好きです。<br />
        ちょっと前だとCall of Dutyにハマり、最近はスプラトゥーンをプレイしています。<br />
      </p>
      <p>
        WEB系の技術については、中学生の頃にHTML/CSS/Javascript/Perlなどの技術を習得しました。<br />
        その後しばらく開発などは行っておらず、就職して久々にWEB系の技術に触れたのですが、技術の進歩が著しく、完全に浦島太郎状態となっておりました。<br />
        仕事では直接開発に携わることができないため、プライベートの時間に最新技術のキャッチアップやプログラミングをしています。
      </p>
    </div>
  </div>
);

export default About;