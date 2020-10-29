const draw = () => {
	const canvas = document.getElementById('example');
	const ctx = canvas.getContext('2d');

	//CREAR REACTANGULO
	const drawRect = (_x, _y, _width, _height, _color) => {
		ctx.fillStyle = _color;
		ctx.fillRect(_x, _y, _width, _height);
	};

	//CREAR PATHS
	const drawTriangle = () => {
		ctx.fillStyle = 'salmon';
		ctx.beginPath(); //Empieza el path
		ctx.moveTo(0, 100); //Mueve el lápiz hasta el punto 0, 0
		ctx.lineTo(250, 250); //Crea un vector desde el punto (0, 0) hasta el (250, 250), y mueve el lápiz hasta ese punto
		ctx.lineTo(500, 0); //Crea otro vector desde el punto en donde se encuentra el lápiz y crea un vector hasta el punto (500, 0), moviendo también el lápiz hasta ese punto
    ctx.closePath() //Te dibuja los vectores que fatlan para crear la figura
		ctx.stroke(); //Dibuja todos los vectores que estén definidos en este path
    ctx.fill(); //Colorea todo el contenido interno que haya entre los vectores
	};

  //DRAW ARCS

  //0 radianes = 0 grados
  //2PI radianes = 360 grados
  //PI radianes = 180 grados
  //PI/2 radianes = 90 grados
  //2PI/3 radianes = 270 grados

	const drawCircle = () => {
		ctx.beginPath();
		// ctx.arc(x, y, radius, startAngle, endAngle)
		ctx.arc(150, 170, 80, Math.PI, Math.PI / 2);
		ctx.lineWidth = 10;
		ctx.strokeStyle = 'green'; // !
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(150, 170, 35, 0, Math.PI * 2);
		ctx.fillStyle = 'red'; // !
		// fills the inner circle with red color
		ctx.fill();
		ctx.closePath();
  };
  
  //CREATE TEXT
  const createText = ()=>{
    ctx.font = '70px sans-seriff'
    ctx.textAlign = 'center'
    ctx.fillText('GAME OVER', 250, 250)
  }

	//        x    y  width height color
	drawRect(450, 450, 200, 200, 'coral');
	drawRect(300, 300, 100, 100, 'aqua');

  drawTriangle();
  drawCircle()
  

  document.getElementById('activate-text').addEventListener('click', ()=>{
    createText()
  })
};

draw();
