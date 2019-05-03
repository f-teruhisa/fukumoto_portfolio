import React from 'react';
import ScrollDialog from '../components/ScrollDialog';

const MachineLearning = () => (
  <div>
    <h3>機械学習</h3>
    <div id="card_area">
      <ScrollDialog
        title="競走馬の能力予測"
        alt="競走馬の能力予測"
        img="derby.png"
        techs={["Python", "pandas", "scikit-learn"]}
        qiita="c177299718d2eca7c1b6"
        description={
          <span>
            サラブレッドは国内で年間約7000頭生産されます。<br />
            しかしながら、その中でどのサラブレッドが高い能力を発揮できるかを見極める事は大変困難であり、いまだに誰も正解は見つけられていません。<br />
            この課題を解決するために、私は競走馬の競走能力を予測するプログラムを作成しました。<br />
            予測アルゴリズムとしてランダムフォレストを利用し、競走馬のクラス分けに利用される収得賞金を目的変数とした回帰分析を行いました。<br />
          </span>
        }
      />
      <ScrollDialog
        title="競走馬の毛色別画像分類"
        alt="競走馬の毛色別画像分類"
        img="keiro.png"
        techs={["Python", "TensorFlow"]}
        qiita="20e9dcac5f2174826581"
        description={
          <span>
            サラブレッドは毛色が茶色の個体が一般的ですが、中には黒っぽい馬、白っぽい馬を存在しています。<br />
            このプログラムでは競走馬の画像とその毛色を教師データとして学習させることで、競走馬を毛色別に分類する機能を実現しました。<br />
            画像ごとに特徴がはっきりとしているためか、テストデータでの予測で90%弱の精度を出すことができました。<br />
            予測アルゴリズムはディープラーニング(畳み込みニューラルネットワーク)を利用しています。<br />
          </span>
        }
      />
      <ScrollDialog
        title="プロ野球の成績予測"
        alt="プロ野球の成績予測"
        img="baseball.png"
        techs={["Python", "pandas", "scikit-learn"]}
        qiita="2b8624f17ebd18b522a8"
        description={
          <span>
            プロ野球ファンの語りぐさとしてよく挙がるのは、若手選手の話題だと思います。<br />
            特に今年は早実の清宮幸太郎選手が野手最多タイ7球団競合で指名され、大きな注目を浴びました。<br />
            このプログラムでは、その清宮選手の1年目の成績から、3年後どれくらいの活躍が期待できるのかを予測するプログラムを作成しました。<br />
            予測アルゴリズムとしてランダムフォレストを利用し、安打数や本塁打数といった基本的なSTATSを目的変数とした回帰分析を行いました。<br />
          </span>
        }
      />
      <ScrollDialog
        title="夏うた王決定戦"
        alt="夏うた王決定戦"
        img="summer.png"
        techs={["Python", "Mecab"]}
        qiita="f61a100e42496dc986a6"
        description={
          <span>
            夏ってなんかいいですよね。夏になると、どことなく元気が湧いてくるし、それでいて儚さがあったりして、非常にセンチメンタルな気分になれます。<br />
            そんな夏を代表する日本の2大アーティストといえば、やっぱり「TUBE」と「サザンオールスターズ」。<br />
            このプログラムは、夏うたの日本代表はどっちなのかを決めようという真剣な想いで作成されました。<br />
            アーティストの歌詞を形態素解析することで、夏にまつわる単語の頻出度を測定し、厳正なる審査基準の元、夏うた王を決定しました。<br />
          </span>
        }
      />
    </div>
  </div>
);

export default MachineLearning;
