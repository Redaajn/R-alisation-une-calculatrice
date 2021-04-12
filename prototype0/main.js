class Rectangle {
    constructor(hauteur, largeur) {
      this.hauteur = hauteur;
      this.largeur = largeur;
    }
  
    get area() {
      return this.calcArea();
    }
  
    calcArea() {
      return this.largeur * this.hauteur;
    }
  }
  
  const carré = new Rectangle(10, 10);
function resultat() {
    document.getElementById("om").innerHTML= carré.area;
}