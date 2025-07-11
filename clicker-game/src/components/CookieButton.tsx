import { useState, useEffect, useRef } from 'react';
import { FloatingCookie } from '../types/game';

interface CookieButtonProps {
  clickPower: number;
  onCookieClick: (event: React.MouseEvent) => void;
}

// メインのクッキーボタンと浮遊アニメーションを管理するコンポーネント
export const CookieButton = ({ clickPower, onCookieClick }: CookieButtonProps) => {
  const [floatingCookies, setFloatingCookies] = useState<FloatingCookie[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // 2秒経過した浮遊アニメーションを削除
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingCookies(prev => 
        prev.filter(cookie => cookie.id > Date.now() - 2000)
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // クッキーをクリックした時の処理
  const handleClick = (event: React.MouseEvent) => {
    if (containerRef.current) {
      // コンテナ要素を基準とした相対座標を計算
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      // 新しい浮遊アニメーションを追加
      setFloatingCookies(prev => [...prev, {
        id: Date.now(),
        x,
        y,
        value: clickPower
      }]);
    }

    onCookieClick(event);
  };

  return (
    <div ref={containerRef} className="text-center mb-8 relative">
      <button
        onClick={handleClick}
        className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 rounded-full p-8 shadow-lg transform hover:scale-105 active:scale-95 relative"
      >
        <span className="text-6xl">🍪</span>
      </button>
      
      {/* 浮遊するクッキーアニメーション */}
      {floatingCookies.map(cookie => (
        <div
          key={cookie.id}
          className="absolute pointer-events-none text-green-500 font-bold animate-bounce"
          style={{
            left: cookie.x,
            top: cookie.y,
            animation: 'floatUp 2s ease-out forwards'
          }}
        >
          +{cookie.value}
        </div>
      ))}
      
      <p className="mt-4 text-gray-600">クリックしてクッキーを獲得！</p>

      {/* 浮遊アニメーション用のCSS */}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-50px);
          }
        }
      `}</style>
    </div>
  );
}; 