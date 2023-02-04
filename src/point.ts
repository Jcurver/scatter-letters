import { getRGB } from "./function.js";

interface PointUpdate {
  pointerX: number;
  pointerY: number;
  mouseThickness: number;
  sparkLevel: number;
  comebackSpeed: number;
}

interface PointDraw {
  top: number;
  left: number;
  ctx: CanvasRenderingContext2D | null;
  pointerX: number;
  pointerY: number;
  mouseThickness: number;
  sparkLevel: number;
  comebackSpeed: number;
  color: string;
  flyingDotColor: string;
}

export class Point {
  x: number;
  y: number;
  size: number;
  fixX: number;
  fixY: number;
  isMove: boolean;
  farRatio: number;

  constructor(x: number, y: number, size: number) {
    this.fixX = x;
    this.fixY = y;
    this.x = x;
    this.y = y;
    this.size = size;
    this.isMove = false;
    this.farRatio = 0;
  }

  update({
    pointerX,
    pointerY,
    mouseThickness,
    sparkLevel,
    comebackSpeed,
  }: PointUpdate) {
    const px = this.x - pointerX;
    const py = this.y - pointerY;
    const fixPX = this.fixX - this.x;
    const fixPY = this.fixY - this.y;
    const farRatio =
      Math.sqrt(fixPX * fixPX + fixPY * fixPY) / mouseThickness / 1 > 1
        ? 1
        : Math.sqrt(fixPX * fixPX + fixPY * fixPY) / mouseThickness / 1;

    const theta = Math.atan2(py, px);
    const dx = mouseThickness * Math.cos(theta) - px;
    const dy = mouseThickness * Math.sin(theta) - py;

    const backTick = 1 + comebackSpeed * 0.01;

    if (Math.sqrt(px * px + py * py) < mouseThickness + 1) {
      this.x += dx * sparkLevel;
      this.y += dy * sparkLevel;
    } else {
      this.x = (this.x - this.fixX) / backTick + this.fixX;
      this.y = (this.y - this.fixY) / backTick + this.fixY;
    }

    if (farRatio < 0.1) {
      this.isMove = false;
    } else {
      this.isMove = true;
    }

    this.farRatio = farRatio;
  }

  draw({
    top,
    left,
    ctx,
    pointerX,
    pointerY,
    mouseThickness,
    sparkLevel,
    comebackSpeed,
    color,
    flyingDotColor,
  }: PointDraw) {
    if (this.size === 0 || !ctx) return;

    ctx.beginPath();

    const rgb = getRGB(color);

    const dotrgb = getRGB(flyingDotColor);

    const dotRatioRGB = dotrgb.map(
      (v, i) => (v - rgb[i]) * this.farRatio + rgb[i]
    );

    if (this.isMove) {
      ctx.fillStyle = `rgb(${dotRatioRGB[0]},${dotRatioRGB[1]},${dotRatioRGB[2]})`;
    } else {
      ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    }

    this.update({
      pointerX,
      pointerY,
      mouseThickness,
      sparkLevel,
      comebackSpeed,
    });

    ctx.fillRect(left + this.x, top + this.y, this.size, this.size);
  }
}
