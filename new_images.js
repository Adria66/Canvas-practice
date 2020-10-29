const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');



//CREACION DE AVIONES
const planeTop = new Image();
planeTop.src = './planeTop.png';

const planeRight = new Image();
planeRight.src = './planeDer.png';

const planeDown = new Image();
planeDown.src = './planeDown.png';

const planeLeft = new Image();
planeLeft.src = './planeIz.png';


//VARIABLES
let planeX = 250;  //posicion X
let planeY = 250
let counter = 0;
let direction = 'right'
let selectedPlane = planeRight

//FUNCIONES
const drawPlane = () => {
	ctx.drawImage(selectedPlane, planeX, planeY, 50, 50);
};

const clearCanvas = () => {
	ctx.clearRect(0, 0, 500, 500);
};

const updateContent = (_direction) => {

  if(_direction === 'top'){
    planeY -= 10;
  
    if(planeY < -50){
      planeY = 550
    }
  } else if(_direction === 'right'){
    planeX += 10;
  
    if(planeX > 550){
      planeX = -50
    }
  } else if(_direction === 'down'){
    planeY += 10;
  
    if(planeY > 550){
      planeY = -50
    }
  } else if(_direction === 'left'){
    planeX -= 10;
  
    if(planeX < -50){
      planeX = 550
    }
  }
};

const updateCanvas = () => {//Se divide en 4 partes

	updateContent(direction); // Actualizar contenido

	clearCanvas(); // Limpiar canvas

	drawPlane(); // Dibujar

	requestAnimationFrame(updateCanvas); // Reiniciar
};


//FUNCIONALIDAD PARA VER SI TODAS LAS IMAGENES ESTAN CARGADAS
planeTop.onload = () => {
	counter++;
	checkIfAllImagesAreLoaded();
};

planeRight.onload = () => {
	counter++;
	checkIfAllImagesAreLoaded();
};

planeDown.onload = () => {
	counter++;
	checkIfAllImagesAreLoaded();
};

planeLeft.onload = () => {
	counter++;
	checkIfAllImagesAreLoaded();
};

//EVENT LISTENERS A LOS BOTONES
document.getElementById('top').addEventListener('click', ()=>{
  direction = 'top'
  selectedPlane = planeTop
})

document.getElementById('right').addEventListener('click', ()=>{
  direction = 'right'
  selectedPlane = planeRight
})

document.getElementById('down').addEventListener('click', ()=>{
  direction = 'down'
  selectedPlane = planeDown
})

document.getElementById('left').addEventListener('click', ()=>{
  direction = 'left'
  selectedPlane = planeLeft
})

//EVENT LISTENERS A LAS FLECHAS
document.addEventListener('keydown', (event)=>{
  if(event.key === 'ArrowUp'){
    direction = 'top'
    selectedPlane = planeTop
  } else if(event.key === 'ArrowRight'){
    direction = 'right'
    selectedPlane = planeRight
  } else if(event.key === 'ArrowDown'){
    direction = 'down'
    selectedPlane = planeDown
  } else if(event.key === 'ArrowLeft'){
    direction = 'left'
    selectedPlane = planeLeft
  }
})




//ACTUALIZAR EL CANVAS CUANDO TODAS LAS IMAGENES ESTEN GUARDADAS
const checkIfAllImagesAreLoaded = () => {
	if (counter === 4) {
		updateCanvas();
	}
};
