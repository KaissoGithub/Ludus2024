const config = {
    type: Phaser.AUTO,
    parent: "canvas-wrapper",
    width: 1400,
    height: 800,
    scene: [Accueil, CommentJouer, Jeu, Victoire, Defaite, Credit],
    transparent:true
};
const game = new Phaser.Game(config);