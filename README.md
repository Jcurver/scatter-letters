# Scatter Letters

### 마우스가 지나갈 때 글자가 흩뿌려집니다.
### No PeerDependency! Good performance!

<a href="https://ibb.co/ZL1N99L"><img src="https://i.ibb.co/tmP3RRm/2023-02-04-4-22-59.png" alt="2023-02-04-4-22-59" border="0" /></a>

### YOUTUBE 시연 영상: https://www.youtube.com/watch?v=eVliGZLmwks&feature=youtu.be

이 프로젝트는 Interactive Developer 김종민 님의 유튜브를 보고 영감을 받아 제작되었습니다.

저만의 interactive motion을 만들어 보았습니다.

## Usage
````javascript
new ScatterLetters(strs[,options])
````
#### example

````javascript
window.onload = () => {
  new ScatterLetters("AIC DB GFJ", {
    sparkLevel: 11,
    comebackSpeed: 1,
    mouseThickness: 15,
    color: "#30e080",
    flyingDotColor: "#e81831",
    blankWidth: 17,
    letterSpacing: 4,
    fontSize: 16,
    top: 310,
    left: 160,
  });
};
````

문자열은 최대 30글자까지 입력할 수 있습니다. (알파벳, 띄어쓰기만 허용, 대문자로 변환됨)

모든 option은 not required 입니다.

| Key            | discription                                     | default    |
| -------------- | ----------------------------------------- | ------- |
| sparkLevel     | 마우스가 지나갈 때 스파크가 튀듯 퍼지는 강도입니다. | 6 |
| comebackSpeed  | 퍼져나간 점이 돌아오는 속도입니다.                                   | 4 |
| mouseThickness | 마우스가 지나갈 때 영향을 주는 두께입니다.                                   | 12 |
| color          | 멈춰있는 점들의 색상입니다.                                   | "#000000" |
| flyingDotColor | 흩어져있는 점의 초기 색상입니다. 돌아오며 기본 색상(color)으로 조금씩 변합니다.                                   | "#00FF00" |
| blankWidth     | 띄어쓰기의 간격입니다.                                   | 10 |
| letterSpacing  | 자간입니다.                                   | 3 |
| fontSize       | 폰트 크기입니다.                                   | 20 |
| top            | 위쪽 마진 값입니다.                                   | 0 |
| left           | 왼쪽 마진 값입니다.                                   | 0 |

