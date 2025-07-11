import { UpgradeItem } from '../types/game';
import { formatNumber } from '../utils/formatters';

interface UpgradeShopProps {
  upgrades: UpgradeItem[];
  cookies: number;
  onUpgradePurchase: (upgradeId: string) => void;
  onReset: () => void;
}

// アップグレードショップを表示するコンポーネント
export const UpgradeShop = ({ upgrades, cookies, onUpgradePurchase, onReset }: UpgradeShopProps) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-8 mb-6 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-yellow-400">🏪 アップグレードショップ</h3>
        <button
          onClick={onReset}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          リセット
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {upgrades.map(upgrade => (
          <div key={upgrade.id} className="bg-gray-800 border border-gray-600 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-gray-500 hover:bg-gray-750">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{upgrade.icon}</span>
              <h4 className="font-bold text-gray-100 text-lg">{upgrade.name}</h4>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{upgrade.description}</p>
            <div className="bg-gray-700 rounded-lg p-3 mb-4">
              <p className="text-gray-400 text-xs mb-1">所持数</p>
              <p className="text-blue-400 font-semibold">{upgrade.owned}</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-3 mb-4">
              <p className="text-gray-400 text-xs mb-1">コスト</p>
              <p className="text-yellow-400 font-semibold">{formatNumber(upgrade.cost)} クッキー</p>
            </div>
            <button
              onClick={() => onUpgradePurchase(upgrade.id)}
              disabled={cookies < upgrade.cost}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                cookies >= upgrade.cost
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              購入
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}; 