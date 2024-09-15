class Credit extends Phaser.Scene {
    constructor() {
        super({ key: "credit" });
      }
      preload() {
        this.load.image("fondDegradeGrille", "src/img/fondDegradeGrille.png");
        this.load.image("boiteTexte", "src/img/boiteTexte.png");
        this.load.image("btnRetour", "src/img/btnRetour.png");

    }

    create() {
        const text = this.add.text(10, 10, "Crédits").setDepth(1);

        this.add.image(0,0, "fondDegradeGrille").setOrigin(0);

        this.add.image(168,180, "boiteTexte").setOrigin(0);

        let btnRetour = this.add.image(700,580, "btnRetour").setOrigin(0.5, 0);

        btnRetour.setInteractive();
        btnRetour.on("pointerdown",() => {
            this.scene.start("accueil"); 
        })



    }

    update() {

    }
}