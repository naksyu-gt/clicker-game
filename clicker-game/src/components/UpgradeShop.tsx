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
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">🏪 アップグレードショップ</h3>
        <button
          onClick={onReset}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-200"
        >
          リセット
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {upgrades.map(upgrade => (
          <div key={upgrade.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{upgrade.icon}</span>
              <h4 className="font-semibold text-gray-800">{upgrade.name}</h4>
            </div>
            <p className="text-sm text-gray-600 mb-2">{upgrade.description}</p>
            <p className="text-sm text-gray-500 mb-2">
              所持数: {upgrade.owned} | コスト: {formatNumber(upgrade.cost)} クッキー
            </p>
            <button
              onClick={() => onUpgradePurchase(upgrade.id)}
              disabled={cookies < upgrade.cost}
              className={`w-full py-2 px-4 rounded ${
                cookies >= upgrade.cost
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } transition-colors duration-200`}
            >
              購入
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}; 