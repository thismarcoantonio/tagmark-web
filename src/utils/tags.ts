export function generateRandomTagColor() {
  const tones = [400, 500, 600, 800];
  const colors = ['red', 'green', 'yellow', 'blue', 'emerald', 'cyan', 'indigo', 'pink', 'fuchsia'];

  const randomTone = tones[Math.floor(Math.random() * tones.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return `${randomColor}-${randomTone}`;
}
