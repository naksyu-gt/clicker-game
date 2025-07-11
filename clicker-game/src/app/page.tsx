// Next.jsのApp Routerでは、page.tsxがそのディレクトリのメインページになります
// このファイルは自動的にルートパス（/）でアクセス可能になります
import { ClickerGame } from '@/components/ClickerGame';

// Reactコンポーネントの定義
// export defaultは、このファイルがインポートされた時にデフォルトで提供されるコンポーネントを指定します
export default function Home() {
  return (
    // JSX（JavaScript XML）を使用してHTMLライクな構文でReactコンポーネントを記述
    // classNameはCSSクラスを指定するための属性（HTMLのclassと同じ）
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* ヘッダー部分 */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          🍪 Cookie Clicker Game
        </h1>
        <p className="text-gray-600">
          React + Next.js + TypeScriptで作るクリッカーゲーム
        </p>
      </header>

      {/* メインのゲームコンポーネント */}
      {/* コンポーネントは大文字で始める必要があります */}
      <ClickerGame />
    </div>
  );
}
