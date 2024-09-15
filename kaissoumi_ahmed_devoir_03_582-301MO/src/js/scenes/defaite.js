class Defaite extends Phaser.Scene {
    constructor() {
        super({ key: "defaite" });
      }
      preload() {
        this.load.image("fondDegradeGrille", "src/img/fondDegradeGrille.png");
        this.load.image("boiteTexte", "src/img/boiteTexte.png");
        this.load.image("btnRecommencer", "src/img/btnRecommencer.png");
        this.load.image("btnMenuPrincipal", "src/img/btnMenuPrincipal.png");
        

    }

    create() {
        const text = this.add.text(10, 10, "Défaite").setDepth(1);

        this.add.image(0,0, "fondDegradeGrille").setOrigin(0);

        this.add.image(168,180, "boiteTexte").setOrigin(0);

        let btnRecommencer = this.add.image(500,580, "btnRecommencer").setOrigin(0.5, 0);

        btnRecommencer.setInteractive();
        btnRecommencer.on("pointerdown",() => {
            this.scene.start("jeu"); 
        })

        let btnMenuPrincipal = this.add.image(900,580, "btnMenuPrincipal").setOrigin(0.5, 0);

        btnMenuPrincipal.setInteractive();
        btnMenuPrincipal.on("pointerdown",() => {
            this.scene.start("accueil"); 
        })


    }

    update() {

    }
}