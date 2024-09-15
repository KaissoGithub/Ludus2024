class Accueil extends Phaser.Scene {
    constructor() {
        super({ key: "accueil" });
      }

    preload() {
        //images de l'écran d'accueil
        this.load.image("logoTexte", "src/img/logoTexte.png");
        this.load.image("fondDegradeGrille", "src/img/fondDegradeGrille.png");
        this.load.image("fondMenuAccueil","src/img/fondMenuAccueil.png");
        this.load.image("btnCommencer","src/img/btnCommencer.png");
        this.load.image("btnCmtJouer","src/img/btnCmtJouer.png");
        this.load.image("btnCredit","src/img/btnCredit.png");
        this.load.image("btnSonOuvert", "src/img/btnSonOuvert.png");
        this.load.image("btnSonferme", "src/img/btnSonferme.png");


        this.load.audio("musiqueAccueil", "src/musique/パリピA.mp3")


    }

    create() {

        this.musique = this.sound.add("musiqueAccueil", {
            loop: true
        });

        this.add.image(0,0, "fondDegradeGrille").setOrigin(0);
        this.add.image(700,170, "logoTexte").setOrigin(0.5, 0);
        this.add.image(700,550, "fondMenuAccueil").setOrigin(0.5, 0);


        let btnCommencer = this.add.image(700,580, "btnCommencer").setOrigin(0.5, 0);
        this.add.image(700,580, "btnCommencer").setOrigin(0.5, 0);

        btnCommencer.setInteractive();
        btnCommencer.on("pointerdown",() => {
            this.scene.start("victoire"); 
        })

        let btnCmtJouer = this.add.image(700,640, "btnCmtJouer").setOrigin(0.5, 0);
        this.add.image(700,640, "btnCmtJouer").setOrigin(0.5, 0);
        btnCmtJouer.setInteractive();
        btnCmtJouer.on("pointerdown", () => {
            this.scene.start("commentJouer")
        })

        let btnCredit = this.add.image(700,685, "btnCredit").setOrigin(0.5, 0);
        this.add.image(700,685, "btnCredit").setOrigin(0.5, 0);
        btnCredit.setInteractive();
        btnCredit.on("pointerdown", () => {
            this.scene.start("credit")
        })

        let btnSonOuvert = this.add.image(1350,750, "btnSonOuvert").setOrigin(0.5, 0.5);
        let btnSonferme = this.add.image(1350,750, "btnSonferme").setOrigin(0.5, 0.5);


        btnSonOuvert.setVisible(false);
        btnSonOuvert.setInteractive();
        btnSonOuvert.on("pointerdown", () => {
            btnSonOuvert.setVisible(false);
            btnSonferme.setVisible(true);
            this.musique.stop();
            
        })

        btnSonferme.setInteractive();
        btnSonferme.on("pointerdown", () => {
            btnSonOuvert.setVisible(true);
            btnSonferme.setVisible(false);
            this.musique.play();


        })



    }

    update() {

    }
}