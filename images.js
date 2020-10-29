const draw = ()=>{
	const canvas = document.getElementById('example');
  const ctx = canvas.getContext('2d');
  
//IMAGES

  let airplaneX = 250
  let airplaneY = 250
  let direction = 'right'
  let imageSrc = './planeDer.png'

  const drawImage = (_x, _y, _direction, _src)=>{

    

  
    const plane = new Image()  //Paso 1: Crear una instancia de la clase Image

    plane.src = _src  //Paso 2: Asignar una fuente a mi imagen

    // plane.addEventListener('load', ()=>{
    //   ctx.drawImage(plane, _x, _y, 50, 50)
    // }) //Paso 3: Asignar un event listener (load) a mi imagen, y cuando cargue, dibujar la imagen

    plane.onload = ()=>{
      ctx.drawImage(plane, _x, _y, 50, 50)
    }

    ctx.clearRect(0, 0, 500, 500);


    if(_direction === 'right'){
      airplaneX++
      if(airplaneX > 500){
        airplaneX = -50
      }
    } else if(_direction === 'left'){
      airplaneX--
      if(airplaneX < -50){
        airplaneX = 500
      }
    } else if(_direction === 'top'){
      airplaneY--
      if(airplaneY < -50){
        airplaneY = 500
      }
    } else if(_direction === 'down'){
      airplaneY++
      if(airplaneY > 500){
        airplaneY = -50
      }
    }
  }

  document.getElementById('top').addEventListener('click', ()=>{
    direction = 'top'
    imageSrc = './planeTop.png'
  })

  document.getElementById('right').addEventListener('click', ()=>{
    direction = 'right'
    imageSrc = './planeDer.png'
  })

  document.getElementById('down').addEventListener('click', (event)=>{
    direction = 'down'
    imageSrc = './planeDown.png'
    console.log(event.target)
  })

  document.getElementById('left').addEventListener('click', ()=>{
    direction = 'left'
    imageSrc = './planeIz.png'
  })

  document.addEventListener('keydown', (event)=>{
    if(event.key === 'ArrowUp'){
      direction = 'top'
      imageSrc = './planeTop.png'
    } else if(event.key === 'ArrowRight'){
      direction = 'right'
      imageSrc = './planeDer.png'
    } else if(event.key === 'ArrowDown'){
      direction = 'down'
      imageSrc = './planeDown.png'
    } else if(event.key === 'ArrowLeft'){
      direction = 'left'
      imageSrc = './planeIz.png'
    } 
  })


  setInterval(()=>{
    drawImage(airplaneX, airplaneY, direction, imageSrc)
  }, 20)
}

draw()