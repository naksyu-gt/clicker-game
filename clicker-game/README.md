# 🍪 Cookie Clicker Game

React + Next.js + TypeScriptで作るクリッカーゲームです。ゲームを作りながら、モダンなWeb開発技術を学習できます。

## 🎮 ゲームの遊び方

1. **クッキーをクリック**：メインのクッキーボタンをクリックしてクッキーを獲得
2. **アップグレードを購入**：獲得したクッキーを使って自動生産施設を購入
3. **効率化**：より高価なアップグレードを購入して、クッキー生産を効率化
4. **統計確認**：累計クッキー数やクリック数を確認
5. **セーブ機能**：ブラウザを閉じても進行状況が保存される

## 🚀 技術スタック

- **React 19** - ユーザーインターフェース構築
- **Next.js 15** - フルスタックReactフレームワーク
- **TypeScript** - 型安全なJavaScript
- **Tailwind CSS** - ユーティリティファーストCSSフレームワーク

## 📚 学習ポイント

### React の基本概念

#### 1. コンポーネント (Components)
```tsx
// 関数コンポーネントの定義
export const ClickerGame: React.FC = () => {
  return <div>ゲームの内容</div>;
};
```

#### 2. フック (Hooks)
- **useState**: コンポーネント内で状態を管理
- **useEffect**: 副作用（API呼び出し、タイマーなど）を管理

```tsx
// 状態管理の例
const [cookies, setCookies] = useState(0);

// 副作用の例（1秒ごとにクッキーを生産）
useEffect(() => {
  const interval = setInterval(() => {
    setCookies(prev => prev + cookiesPerSecond);
  }, 1000);
  
  return () => clearInterval(interval); // クリーンアップ
}, [cookiesPerSecond]);
```

#### 3. イベントハンドリング
```tsx
const handleClick = (event: React.MouseEvent) => {
  // クリック時の処理
  setCookies(prev => prev + clickPower);
};
```

### TypeScript の基本概念

#### 1. 型定義 (Type Definitions)
```tsx
// インターフェースでオブジェクトの型を定義
interface GameState {
  cookies: number;
  cookiesPerSecond: number;
  clickPower: number;
}

// 配列の型定義
const upgrades: UpgradeItem[] = [...];
```

#### 2. ジェネリクス (Generics)
```tsx
// useStateで型を指定
const [gameState, setGameState] = useState<GameState>({
  cookies: 0,
  cookiesPerSecond: 0,
  clickPower: 1
});
```

### Next.js の基本概念

#### 1. App Router
- `src/app/page.tsx` がルートパス（`/`）のページ
- ファイルベースのルーティング

#### 2. コンポーネントのインポート
```tsx
// @/はsrcディレクトリのエイリアス
import { ClickerGame } from '@/components/ClickerGame';
```

### 実装されている機能

#### 1. 状態管理
- ゲームの進行状況（クッキー数、生産量など）
- アップグレードの購入状況
- 統計情報（累計クッキー数、クリック数）

#### 2. ローカルストレージ
- ブラウザを閉じても進行状況を保存
- `localStorage` APIを使用

#### 3. アニメーション
- クリック時の浮遊アニメーション
- CSSトランジションとキーフレームアニメーション

#### 4. レスポンシブデザイン
- Tailwind CSSを使用したモバイル対応デザイン
- グリッドレイアウトでアップグレードカードを配置

## 🛠️ 開発環境のセットアップ

1. **依存関係のインストール**
```bash
npm install
```

2. **開発サーバーの起動**
```bash
npm run dev
```

3. **ブラウザでアクセス**
```
http://localhost:3000
```

## 📁 プロジェクト構造

```
src/
├── app/
│   ├── page.tsx          # メインページ
│   ├── layout.tsx        # レイアウト
│   └── globals.css       # グローバルスタイル
└── components/
    └── ClickerGame.tsx   # ゲームのメインコンポーネント
```

## 🎯 学習の次のステップ

1. **新しいアップグレードの追加**
   - 新しいアップグレードアイテムを`upgrades`配列に追加
   - アイコン、コスト、効果を設定

2. **アチーブメントシステム**
   - 特定の条件を満たした時のアチーブメント機能
   - 通知システムの実装

3. **オフライン機能**
   - Service Workerを使用したオフライン対応
   - バックグラウンドでのクッキー生産

4. **マルチプレイヤー機能**
   - サーバーサイドでのデータ保存
   - ランキングシステム

## 🔧 カスタマイズのヒント

### 新しいアップグレードを追加する場合
```tsx
{
  id: 'newUpgrade',
  name: '新しいアップグレード',
  description: '説明文',
  cost: 1000,
  cookiesPerSecond: 10,
  clickPower: 0,
  owned: 0,
  icon: '🎯'
}
```

### アニメーションをカスタマイズする場合
```css
@keyframes customAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
```

## 📖 参考資料

- [React公式ドキュメント](https://react.dev/)
- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/)
- [Tailwind CSS公式ドキュメント](https://tailwindcss.com/docs)

## 🤝 コントリビューション

このプロジェクトは学習目的で作成されています。改善提案やバグ報告は歓迎します！

---

**Happy Coding! 🍪✨**
