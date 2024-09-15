class Jeu extends Phaser.Scene {
    constructor() {
        super({ key: "jeu" }); 
      }
      preload() {
        this.load.image("fondDegradeGrille", "src/img/fondDegradeGrille.png");
        this.load.image("boiteTexte", "src/img/boiteTexte.png");
        this.load.image("btnQuitter", "src/img/btnQuitter.png");


    }

    create() {
        const text = this.add.text(10, 10, "Page de jeu").setDepth(1);

        this.add.image(0,0, "fondDegradeGrille").setOrigin(0);

        this.add.image(168,180, "boiteTexte").setOrigin(0);

        let btnQuitter = this.add.image(700,580, "btnQuitter").setOrigin(0.5, 0);

        btnQuitter.setInteractive();
        btnQuitter.on("pointerdown",() => {
            this.scene.start("accueil"); 
        })





    }

    update() {

    }
}