const juegos = {
	cerdadx : {
		gameName : 'La Lellenda de la Cerda',
		gameUrl : 'juegos/cerdadx.zip',
		core : 'gb',
	}
};
			
const hash = window.location.hash.substring(1);

if (hash == '') {
	alert("¡¡Pero qué estás hasiendo con el cuerpo humano!!");
	throw new Error('Yes we Jarl');
}

function onReady() {
	window.loadingmodal.close();
	window.startmodal.showModal();
	
}

EJS_player = "#player";
EJS_core = juegos[hash].core;
EJS_language = 'es-ES';
EJS_gameName = juegos[hash].gameName;
EJS_color = "#0064ff";
EJS_startOnLoaded = true;
EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
EJS_gameUrl = juegos[hash].gameUrl;
EJS_onGameStart = onReady;

window.loadingmodal.showModal();
