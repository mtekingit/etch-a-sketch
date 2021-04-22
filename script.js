		
			
		let gridPixel = 16; 
		let gridArea = document.querySelector('#container');
		let gridRow;
		let pixel;
		
		
		
		
	  // the function that takes user input as parameter and creates the grid accordingly
		function createGrid (x) {				
			
			for (let j=0; j<x; j++) {
		
				gridRow = document.createElement('div');
				gridRow.classList.add('gridRow');
				gridArea.appendChild(gridRow);	
					
				for (let i=0; i<x; i++) {

					pixel = document.createElement('div');
					pixel.classList.add('pixel');
					gridRow.appendChild(pixel);
				
				}
			}							
		}
		
		
		
	  // clears the grid, asks for a number and creates new grid with the start function
		function promptFunc () {
		
			gridArea.textContent = '';
			gridPixel = prompt('Enter a Number Between 2 and 100');			
					
			let x = true;
			
			while (x==true) {
					
				if (gridPixel>1 && gridPixel<101) {
					x = false;
					start();	
					return;
				} else {					
					gridPixel = prompt('Please Try Again, A NUMBER BETWEEN 2 AND 100!!');				
				}
			}		
		}
		
		
		// painting the pixels in ten steps	
		function paint () {
			
			let oneStep = 25.6;
			let colorTone;			
			let red;
			let green;
			let blue; 
			
			colorTone = this.getAttribute('data-tone'); 
			
			if (!colorTone) {			
				this.setAttribute('data-tone', '230');				
				colorTone = 230;			
			} else if (colorTone<oneStep) {			
				colorTone = 0;				
				this.setAttribute('data-tone', `${colorTone}`);			
			} else {			
				colorTone = colorTone-oneStep;				
				this.setAttribute('data-tone', `${colorTone}`);			
			}
			
			red = colorTone;
			green = colorTone;
			blue = colorTone;
			
			this.style.backgroundColor = `rgb(${red},${green},${blue})`;			
		}
		
		
		
		
		/*
		// painting the pixels random colors
		function paint () {
		
			let red = Math.floor(Math.random()*256);
			let green = Math.floor(Math.random()*256);
			let blue = Math.floor(Math.random()*256); 
					
			this.style.backgroundColor = `rgb(${red},${green},${blue})`;
		
		} */
		
		
		
		
		
		/*
		// painting the pixels black		
		function paint () {
			
			this.style.backgroundColor = 'black';
			
		} */
		
	

	
		// gets every single pixel and adds eventlistener to each of them
		function start () {
		
			createGrid(gridPixel);
		
			let pixelNodeList = document.querySelectorAll('.pixel');
		
		
			for (let i=0; i<pixelNodeList.length; i++) {
		
				pixelNodeList[i].addEventListener('mouseover', paint);
		
			}	
		}
		
		
		
		start ();
		
				