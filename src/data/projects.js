/**
 * プロジェクトデータ管理ファイル
 * ポートフォリオに表示する各成果物の詳細情報を一括管理します。
 * 新しいプロジェクトを追加する場合は、この配列にオブジェクトを追加してください。
 */
export const projects = [
  {
    id: 1,
    title: "Universe　war",
    description: "2Dでのシューティングゲームになっています。コンセプトとしては同じステージを何度も挑み、機体を強化していくボス倒すというものです。制作時期は2年生の後半となっています。",
    languages: ["C"],
    tools: ["DXLib"],
    images: ["assets/project1.png"],
    link: "https://github.com/nashi39/2DGame"
  },
  {
    id: 2,
    title: "Math Card",
    description: "カードゲーム形式で四則演算を勉強で学習アプリとなっています。こちらはグループ制作なので担当した箇所としましては、ゲーム本編のロジック以外のUI部分を担当しました。制作時期は3年生の中盤あたりになっています。",
    languages: ["C++"],
    tools: ["DXLib"],
    images: ["assets/project2.png"],
    link: "https://github.com/nashi39/team-ProductionDX"
  },
  {
    id: 3,
    title: "Sosproject",
    description: "こちらはアニメ涼宮ハルヒの憂鬱の作品詳細をWebサイトで公開しているサービスとなっています。（非公式のため公開などはしておりません）こちらのサイトはAntigravityを使って学習しながらバイブコーディングで制作しました。制作時期は3年制作の後半となっています。",
    languages: ["JavaScript", "HTML", "CSS"],
    tools: ["React", "Vite"],
    images: ["assets/project3.png"],
    link: "https://github.com/nashi39/sosproject-1"
  },
  {
    id: 4,
    title: "Shift Master",
    description: "シフト表を製作するアプリとなっています。構成としては管理者画面はPC、スタッフ画面はスマートフォンで操作することを想定して現在も製作途中となっています。なおこちらもAntigravityを使って学習しながらバイブコーディングで制作しております。",
    languages: ["JavaScript", "HTML", "CSS"],
    tools: ["React", "Vite", "Firebase"],
    images: ["assets/project41.png", "assets/project42.png"],
    link: "https://github.com/nashi39/shift-master"
  }
];
