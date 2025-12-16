export function generateRandomTagColor() {
  const colors = [
    ['bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-800'],
    ['bg-green-400', 'bg-green-500', 'bg-green-600', 'bg-green-800'],
    ['bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-800'],
    ['bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-800'],
    ['bg-emerald-400', 'bg-emerald-500', 'bg-emerald-600', 'bg-emerald-800'],
    ['bg-cyan-400', 'bg-cyan-500', 'bg-cyan-600', 'bg-cyan-800'],
    ['bg-indigo-400', 'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-800'],
    ['bg-pink-400', 'bg-pink-500', 'bg-pink-600', 'bg-pink-800'],
    ['bg-fuchsia-400', 'bg-fuchsia-500', 'bg-fuchsia-600', 'bg-fuchsia-800'],
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomTone = randomColor[Math.floor(Math.random() * randomColor.length)];

  return randomTone;
}
