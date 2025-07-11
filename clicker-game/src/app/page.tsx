import { ClickerGame } from '@/components/ClickerGame';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      {/* ヘッダー部分 */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
          🍪 Cookie Clicker Game
        </h1>
        <p className="text-gray-300 text-lg">
          React + Next.js + TypeScriptで作るモダンなクリッカーゲーム
        </p>
      </header>

      {/* メインのゲームコンポーネント */}
      <ClickerGame />
    </div>
  );
}
