const juegos = {
	cerdadx : {
		gameName : 'La Lellenda de la Cerda',
		gameUrl : 'juegos/La Lellenda de la Cerda DX (2.0).zip',
		core : 'gb',
	},	
	plashback : {
		gameName : 'Plashback',
		gameUrl : 'juegos/Plashback.zip',
		core : 'snes',
	},
	stressf2 : {
		gameName : 'Super Stress Faijter II',
		gameUrl : 'juegos/Super Stress Faijter II.zip',
		core : 'snes',
	},
	kombatemortas : {
		gameName : 'Kombate Morta',
		gameUrl : 'juegos/Kombate Morta.zip',
		core : 'segaMD',
	},
	chforce2 : {
		gameName : 'Charnego Force II',
		gameUrl : 'juegos/Charnego Force II.zip',
		core : 'segaMD',
	},
	tecmoatleti : {
		gameName : 'Tecmo Atleti',
		gameUrl : 'juegos/Tecmo Atleti.zip',
		core : 'segaMD',
	},
	tecmoatleti2 : {
		gameName : 'Tecmo Atleti 2.0',
		gameUrl : 'juegos/Tecmo Atleti 2.0.zip',
		core : 'segaMD',
	},
};
			
const juego = (new URLSearchParams(window.location.search)).get('juego');

if (juego == '') {
	alert("¡¡Pero qué estás hasiendo con el cuerpo humano!!");
	throw new Error('Yes we Jarl');
}

function onReady() {
	window.loadingmodal.close();
	window.startmodal.showModal();
	
}

EJS_player = "#player";
EJS_core = juegos[juego].core;
EJS_language = 'es-ES';
EJS_gameName = juegos[juego].gameName;
EJS_color = "#0064ff";
EJS_startOnLoaded = true;
EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
EJS_gameUrl = juegos[juego].gameUrl;
EJS_onGameStart = onReady;

window.loadingmodal.showModal();
