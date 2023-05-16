// Array methods 
//1.map()   //syntax array.map(function(currentValue, index, arr), thisValue)
let materials = ['Hydrogen','Helium', 'Lithium','Beryllium' ];
    
  
  //Arrow function - ok
  materials.map((material) => {
    return material.length;
  });
  console.log(materials)