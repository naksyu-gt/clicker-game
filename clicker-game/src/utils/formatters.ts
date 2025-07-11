// 数値を読みやすい形式にフォーマットする関数
// 例: 1000 → "1.0K", 1000000 → "1.0M"
export const formatNumber = (num: number): string => {
  if (num >= 1e12) return `${(num / 1e12).toFixed(1)}T`;
  if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return Math.floor(num).toString();
}; 