// ゲームの状態を表す型定義
export interface GameState {
  cookies: number;           // 現在のクッキー数
  cookiesPerSecond: number;  // 1秒あたりのクッキー生産量
  clickPower: number;        // クリック1回あたりのクッキー獲得量
  totalCookies: number;      // 累計クッキー数
  totalClicks: number;       // 累計クリック数
}

// アップグレードアイテムの型定義
export interface UpgradeItem {
  id: string;                // アップグレードのID
  name: string;              // アップグレードの名前
  description: string;       // アップグレードの説明
  cost: number;              // 購入に必要なクッキー数
  cookiesPerSecond: number;  // このアップグレードが生産するクッキー数/秒
  clickPower: number;        // このアップグレードが増加させるクリック力
  owned: number;             // 所持数
  icon: string;              // アイコン絵文字
}

// 浮遊するクッキーアニメーションの型定義
export interface FloatingCookie {
  id: number;    // アニメーションのID
  x: number;     // 画面上のX座標
  y: number;     // 画面上のY座標
  value: number; // 表示する数値
} 