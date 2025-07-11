import { GameState } from '../types/game';
import { formatNumber } from '../utils/formatters';

interface GameStatsProps {
  cookies: number;
  cookiesPerSecond: number;
  clickPower: number;
  totalCookies: number;
  totalClicks: number;
}

// ゲームの統計情報を表示するコンポーネント
export const GameStats = ({ cookies, cookiesPerSecond, clickPower, totalCookies, totalClicks }: GameStatsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🍪 {formatNumber(cookies)} クッキー
        </h2>
        <p className="text-gray-600">
          毎秒 {formatNumber(cookiesPerSecond)} クッキー生産中
        </p>
        <p className="text-gray-600">
          クリック力: {clickPower}
        </p>
        <div className="mt-4 text-sm text-gray-500">
          <p>累計クッキー: {formatNumber(totalCookies)}</p>
          <p>累計クリック: {formatNumber(totalClicks)}</p>
        </div>
      </div>
    </div>
  );
}; 