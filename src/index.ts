import { Point } from "./point.js";
import { getStrs } from "./function";

export default class SckatterLetter {
  protected strs: string;
  protected canvas: any;
  protected ctx: CanvasRenderingContext2D | null;
  protected top: number;
  protected left: number;
  protected pixelRatio: number;
  protected dotSize: number;
  protected pointerX: number;
  protected pointerY: number;
  protected points: any[];
  protected mouseThickness: number;
  protected sparkLevel: number;
  protected comebackSpeed: number;
  protected color: string;
  protected flyingDotColor: string;
  protected blankWidth: number;
  protected letterSpacing: number;
  protected stageWidth: number;
  protected stageHeight: number;

  constructor(
    strs: string,
    {
      top = 10,
      left = 10,
      fontSize = 20,
      mouseThickness,
      sparkLevel = 6,
      comebackSpeed = 4,
      color = "#000000",
      flyingDotColor = "#00FF00",
      blankWidth = 10,
      letterSpacing = 3,
    } = {
      top: 10,
      left: 10,
      fontSize: 20,
      mouseThickness: 12,
      sparkLevel: 6,
      comebackSpeed: 7,
      color: `#000000`,
      flyingDotColor: "#00ff00",
      blankWidth: 10,
      letterSpacing: 3,
    }
  ) {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.dotSize = fontSize / 7;

    this.top = top;
    this.left = left;
    this.pointerX = -5000;
    this.pointerY = -5000;
    this.points = [];
    this.strs = strs;
    this.mouseThickness = mouseThickness ? mouseThickness : fontSize / 1.8;
    this.sparkLevel = sparkLevel;
    this.comebackSpeed = comebackSpeed;
    this.color = color;
    this.flyingDotColor = flyingDotColor;
    this.blankWidth = blankWidth;
    this.letterSpacing = letterSpacing;
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    document.addEventListener("pointermove", this.onMove.bind(this), false);

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    if (!this.ctx) return;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
    let customArr = getStrs(this.strs, this.blankWidth, this.letterSpacing);
    let xLen = customArr[0].length;

    this.points = new Array(20 * xLen).fill(0).map((v, i) => {
      if (customArr[Math.floor(i / xLen)][i % xLen] === 0) {
        return new Point(0, 0, 0);
      }
      return new Point(
        (i % xLen) * this.dotSize,
        Math.floor(i / xLen) * this.dotSize,
        this.dotSize
      );
    });
  }

  animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    if (this.points.length > 0) {
      for (let i = 0; i < this.points.length; i++) {
        this.points[i].draw({
          top: this.top,
          left: this.left,
          ctx: this.ctx,
          pointerX: this.pointerX - this.left,
          pointerY: this.pointerY - this.top,
          mouseThickness: this.mouseThickness,
          sparkLevel: this.sparkLevel,
          comebackSpeed: this.comebackSpeed,
          color: this.color,
          flyingDotColor: this.flyingDotColor,
        });
      }
    }

    window.requestAnimationFrame(this.animate.bind(this));
  }

  onMove(e: { clientX: number; clientY: number }) {
    this.pointerX = e.clientX;
    this.pointerY = e.clientY;
  }
}
