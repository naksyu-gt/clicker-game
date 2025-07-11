"use client";

import { GameStats } from './GameStats';
import { CookieButton } from './CookieButton';
import { UpgradeShop } from './UpgradeShop';
import { useGameState } from '../hooks/useGameState';

// メインのクッキークリッカーゲームコンポーネント
export const ClickerGame = () => {
  const { gameState, upgrades, handleCookieClick, handleUpgradePurchase, handleReset } = useGameState();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="max-w-6xl mx-auto">
        <GameStats
          cookies={gameState.cookies}
          cookiesPerSecond={gameState.cookiesPerSecond}
          clickPower={gameState.clickPower}
          totalCookies={gameState.totalCookies}
          totalClicks={gameState.totalClicks}
        />

        <CookieButton
          clickPower={gameState.clickPower}
          onCookieClick={handleCookieClick}
        />

        <UpgradeShop
          upgrades={upgrades}
          cookies={gameState.cookies}
          onUpgradePurchase={handleUpgradePurchase}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}; 