export const generateIcon = (size: number) => `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes glitch {
      0% {
        transform: translate(0);
        fill: #40E0D0;
      }
      20% {
        transform: translate(-2px, 2px);
        fill: #FF00FF;
      }
      40% {
        transform: translate(2px, -2px);
        fill: #FFFF00;
      }
      60% {
        transform: translate(-2px, -2px);
        fill: #40E0D0;
      }
      80% {
        transform: translate(2px, 2px);
        fill: #FF00FF;
      }
      100% {
        transform: translate(0);
        fill: #40E0D0;
      }
    }
    .animated-path {
      animation: glitch 2s infinite;
    }
    .bg {
      fill: #1E1E1E;
    }
  </style>
  <rect class="bg" width="${size}" height="${size}" />
  <path 
    class="animated-path"
    d="M${size/4} ${size/4}
       L${size*3/4} ${size/4}
       L${size*3/4} ${size*3/4}
       L${size/4} ${size*3/4}Z"
  />
</svg>
`

export const icons = {
  favicon: generateIcon(32),
  icon192: generateIcon(192),
  icon512: generateIcon(512),
} 