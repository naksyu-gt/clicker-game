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
    <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-8 mb-8 backdrop-blur-sm">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
          🍪 {formatNumber(cookies)} クッキー
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
            <p className="text-gray-300 text-sm mb-1">生産速度</p>
            <p className="text-green-400 font-semibold text-lg">
              {formatNumber(cookiesPerSecond)}/秒
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
            <p className="text-gray-300 text-sm mb-1">クリック力</p>
            <p className="text-blue-400 font-semibold text-lg">
              +{clickPower}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
            <p className="text-gray-300 text-sm mb-1">累計クリック</p>
            <p className="text-purple-400 font-semibold text-lg">
              {formatNumber(totalClicks)}
            </p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
          <p className="text-gray-300 text-sm mb-2">累計クッキー</p>
          <p className="text-yellow-300 font-bold text-xl">
            {formatNumber(totalCookies)}
          </p>
        </div>
      </div>
    </div>
  );
}; 