/**
 * プロジェクトデータ管理ファイル
 * ポートフォリオに表示する各成果物の詳細情報を一括管理します。
 * 新しいプロジェクトを追加する場合は、この配列にオブジェクトを追加してください。
 */
export const projects = [
  {
    id: 1,
    title: "AI Chat Assistant",
    description: "自然言語処理を活用したインテリジェントなチャットアプリケーション。ユーザーの意図を汲み取った高度な対話が可能です。",
    languages: ["JavaScript", "Node.js"],
    frameworks: ["React", "Express"],
    image: "/assets/project1.png",
    link: "https://github.com/example/project1"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "直感的な操作でタスクを管理できるGUIツール。ドラッグ＆ドロップによるステータス変更や期限通知機能を備えています。",
    languages: ["Python", "SQLite"],
    frameworks: ["PyQt6", "SQLAlchemy"],
    image: "/assets/project2.png",
    link: "https://github.com/example/project2"
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description: "個人の資産状況を可視化するダッシュボード。グラフによる推移分析や予算設定など、高度な分析機能を提供します。",
    languages: ["TypeScript", "Rust"],
    frameworks: ["Next.js", "Tauri"],
    image: "/assets/project3.png",
    link: "https://github.com/example/project3"
  },
  {
    id: 4,
    title: "Inventory Tracker",
    description: "在庫管理を自動化するデスクトップアプリ。バーコードスキャン対応や在庫不足時のアラート機能を搭載しています。",
    languages: ["C#", "SQL Server"],
    frameworks: [".NET MAUI", "WPF"],
    image: "/assets/project4.png",
    link: "https://github.com/example/project4"
  }
];
