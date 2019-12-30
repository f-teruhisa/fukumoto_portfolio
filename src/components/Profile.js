import React from 'react';

const Profile = () => (
  <div id="profile">
    <h2>Profile</h2>
    <div className="bio">
      <h3>Name</h3>
      <p>福本 晃之 [Teruhisa Fukumoto]</p>
      <h3>Living</h3>
        <p>Tokyo, Japan</p>
      <h3>Job</h3>
        <p>Web Developer</p>
      <h3>Career</h3>
        <p>
          2015年 4月~：株式会社富士通マーケティング<br />
          2018年 4月~：株式会社Zeals<br />
          2019年10月~：メドピア株式会社
        </p>
      <h3>Detail</h3>
        <p>
          1992年兵庫県出身。<br />
          2015年より、富士通グループのSIerでITシステムの法人セールスに従事。<br />
          2018年4月に、株式会社ZealsへRubyとPythonのサーバサイドエンジニアとしてジョイン。<br />
          2018年8月に同社のプロダクトマネージャー(PM)に、2019年3月よりVPoEに就任。<br />
          プロダクトの最終責任やエンジニア組織全体のマネジメント責任を負う。<br />
          2019年10月より、メドピア株式会社にサーバサイドエンジニアとして入社。
        </p>
    </div>
  </div>
);

export default Profile;
