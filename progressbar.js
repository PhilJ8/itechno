window.onload = () => {
	//Ecouteur sur scroll
	window.addEventListener("scroll", () => {
		//calcul hauteur utile du document
		let hauteur = document.documentElement.scrollHeight - window.innerHeight

		// récupération de la position verticale 
		let position = window.scrollY

		//récupération de la largeur de la fenêtre

		let largeur = document.documentElement.clientWidth

		// Calculer la largeur de la barre
		let barre = position / hauteur * largeur

		// modifier le CSS de la barre 
		document.getElementById("progress").style.width = barre+"px"
	})
}