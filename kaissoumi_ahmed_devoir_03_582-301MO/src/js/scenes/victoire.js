class Victoire extends Phaser.Scene {
    constructor() {
        super({ key: "victoire" });
      }
      preload() {
        this.load.image("fondDegradeGrille", "src/img/fondDegradeGrille.png");
        this.load.image("boiteTexte", "src/img/boiteTexte.png");
        this.load.image("btnMenuPrincipal", "src/img/btnMenuPrincipal.png");

    }

    create() {
        const text = this.add.text(10, 10, "Page de crédit").setDepth(1);

        this.add.image(0,0, "fondDegradeGrille").setOrigin(0);

        this.add.image(168,180, "boiteTexte").setOrigin(0);

        let btnMenuPrincipal = this.add.image(750,580, "btnMenuPrincipal").setOrigin(0.5, 0);

        btnMenuPrincipal.setInteractive();
        btnMenuPrincipal.on("pointerdown",() => {
            this.scene.start("accueil"); 
        })




    }
    update() {

    }
}