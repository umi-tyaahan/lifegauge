import 'phaser';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  parent: 'game',
  scene: {
    preload: preload,
    create: create,
  },
};

function preload() {

  this.load.image('sky', 'assets/space3.png');
  this.load.image('akane', 'assets/akane_base7_s.png');

  this.load.image('bad', 'assets/bad.png')

  this.load.image('lifeContainer', 'assets/lifeContainer.png');
  this.load.image('lifeBar', 'assets/lifeBar.png');
}

function create() {
  this.add.image(400, 300, 'sky');
  this.add.image(400, 300, 'akane');

  let lifeContainer = this.add.image(32, 23, 'lifeContainer').setOrigin(0, 0);
  let lifeBar = this.add.image(
    lifeContainer.x + 7,
    lifeContainer.y + 4,
    'lifeBar',
  ).setOrigin(0, 0);

  let lifeBarMask = this.add.image(lifeBar.x, lifeBar.y, "lifeBar").setOrigin(0, 0).setVisible(false);
  lifeBar.mask = new Phaser.Display.Masks.BitmapMask(this, lifeBarMask);


  let badButton = this.add.image(650, 300, 'bad').setScale(1.5, 1.5).setInteractive();

  badButton.on('pointerdown', () => {
    lifeBarMask.x -= 10;

    this.tweens.add({
      targets: badButton,
      duration: 100,
      y: '+=4',
      yoyo: true,
    });
  });
}

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

//HTMLがロードされた後にインスタンスを生成する
window.addEventListener('load', () => {
  const game = new Game(config);
});
