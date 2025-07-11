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
        className="bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 rounded-full p-12 shadow-2xl transform hover:scale-110 active:scale-95 relative border-4 border-yellow-300 hover:border-yellow-200"
      >
        <span className="text-8xl drop-shadow-lg">🍪</span>
      </button>
      
      {/* 浮遊するクッキーアニメーション */}
      {floatingCookies.map(cookie => (
        <div
          key={cookie.id}
          className="absolute pointer-events-none text-yellow-300 font-bold text-xl drop-shadow-lg"
          style={{
            left: cookie.x,
            top: cookie.y,
            animation: 'floatUp 2s ease-out forwards'
          }}
        >
          +{cookie.value}
        </div>
      ))}
      
      <p className="mt-6 text-gray-300 text-lg font-medium">クリックしてクッキーを獲得！</p>

      {/* 浮遊アニメーション用のCSS */}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-25px) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translateY(-50px) scale(0.8);
          }
        }
      `}</style>
    </div>
  );
}; 