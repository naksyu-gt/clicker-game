import { useState, useEffect } from 'react';
import { GameState, UpgradeItem } from '../types/game';

// 初期アップグレードデータ
const initialUpgrades: UpgradeItem[] = [
  {
    id: 'cursor',
    name: 'カーソル',
    description: '自動的にクッキーを生産します',
    cost: 15,
    cookiesPerSecond: 0.1,
    clickPower: 0,
    owned: 0,
    icon: '👆'
  },
  {
    id: 'grandma',
    name: 'おばあちゃん',
    description: 'おばあちゃんがクッキーを焼いてくれます',
    cost: 100,
    cookiesPerSecond: 1,
    clickPower: 0,
    owned: 0,
    icon: '👵'
  },
  {
    id: 'farm',
    name: '農場',
    description: 'クッキーの木を育てます',
    cost: 1100,
    cookiesPerSecond: 8,
    clickPower: 0,
    owned: 0,
    icon: '🌾'
  },
  {
    id: 'mine',
    name: '鉱山',
    description: 'クッキーの鉱石を採掘します',
    cost: 12000,
    cookiesPerSecond: 47,
    clickPower: 0,
    owned: 0,
    icon: '⛏️'
  },
  {
    id: 'factory',
    name: '工場',
    description: 'クッキーを大量生産します',
    cost: 130000,
    cookiesPerSecond: 260,
    clickPower: 0,
    owned: 0,
    icon: '🏭'
  }
];

// ゲーム状態を管理するカスタムフック
export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    cookies: 0,
    cookiesPerSecond: 0,
    clickPower: 1,
    totalCookies: 0,
    totalClicks: 0
  });

  const [upgrades, setUpgrades] = useState<UpgradeItem[]>(initialUpgrades);

  // ローカルストレージからゲームデータを読み込み
  useEffect(() => {
    try {
      const savedGameState = localStorage.getItem('cookieClickerGameState');
      const savedUpgrades = localStorage.getItem('cookieClickerUpgrades');
      
      if (savedGameState) {
        setGameState(JSON.parse(savedGameState));
      }
      
      if (savedUpgrades) {
        setUpgrades(JSON.parse(savedUpgrades));
      }
    } catch (error) {
      console.error('セーブデータの読み込みに失敗しました:', error);
    }
  }, []);

  // ゲームデータをローカルストレージに保存
  useEffect(() => {
    try {
      localStorage.setItem('cookieClickerGameState', JSON.stringify(gameState));
      localStorage.setItem('cookieClickerUpgrades', JSON.stringify(upgrades));
    } catch (error) {
      console.error('セーブデータの保存に失敗しました:', error);
    }
  }, [gameState, upgrades]);

  // 自動クッキー生産（1秒間隔）
  useEffect(() => {
    const interval = setInterval(() => {
      setGameState(prevState => ({
        ...prevState,
        cookies: prevState.cookies + prevState.cookiesPerSecond,
        totalCookies: prevState.totalCookies + prevState.cookiesPerSecond
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState.cookiesPerSecond]);

  // クッキーをクリックした時の処理
  const handleCookieClick = () => {
    setGameState(prevState => ({
      ...prevState,
      cookies: prevState.cookies + prevState.clickPower,
      totalCookies: prevState.totalCookies + prevState.clickPower,
      totalClicks: prevState.totalClicks + 1
    }));
  };

  // アップグレードを購入する処理
  const handleUpgradePurchase = (upgradeId: string) => {
    const upgrade = upgrades.find(u => u.id === upgradeId);
    
    if (!upgrade || gameState.cookies < upgrade.cost) return;

    // アップグレードの所持数を増加し、コストを15%上昇
    setUpgrades(prevUpgrades => 
      prevUpgrades.map(u => 
        u.id === upgradeId 
          ? { 
              ...u,
              owned: u.owned + 1,
              cost: Math.floor(u.cost * 1.15)
            }
          : u
      )
    );

    // ゲーム状態を更新
    setGameState(prevState => ({
      ...prevState,
      cookies: prevState.cookies - upgrade.cost,
      cookiesPerSecond: prevState.cookiesPerSecond + upgrade.cookiesPerSecond,
      clickPower: prevState.clickPower + upgrade.clickPower
    }));
  };

  // ゲームをリセットする処理
  const handleReset = () => {
    if (window.confirm('本当にゲームをリセットしますか？すべての進行状況が失われます。')) {
      setGameState({
        cookies: 0,
        cookiesPerSecond: 0,
        clickPower: 1,
        totalCookies: 0,
        totalClicks: 0
      });
      
      setUpgrades(initialUpgrades.map(u => ({ 
        ...u,
        owned: 0,
        cost: u.cost
      })));
      
      localStorage.removeItem('cookieClickerGameState');
      localStorage.removeItem('cookieClickerUpgrades');
    }
  };

  return {
    gameState,
    upgrades,
    handleCookieClick,
    handleUpgradePurchase,
    handleReset
  };
}; 