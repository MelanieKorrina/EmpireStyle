function display_random_image1()   
{  
     var theImages = [{  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Pants/gray.jpg",  
		style: "position:absolute; top:700px; right:1150px; width:200px; height:300px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Pants/jeans.jpg",  
		style: "position:absolute; top:700px; right:1150px; width:200px; height:300px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Pants/leggings.jpg",  
		style: "position:absolute; top:700px; right:1150px; width:200px; height:300px; border:none;"
	}, {
		src: "file:///C:Users/atlgwc22/Documents/Empire/Pants/red.jpg",  
		style: "position:absolute; top:700px; right:1150px; width:200px; height:300px; border:none;"
    }];  

    var preBuffer = [];  
    for (var i = 0, j = theImages.length; i < j; i++) {  
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;  
		preBuffer[i].style = theImages[i].style;
    }  
     
// create random image number  
  function getRandomInt(min,max)   
    {  
      //  return Math.floor(Math.random() * (max - min + 1)) + min;  
      
imn = Math.floor(Math.random() * (max - min + 1)) + min;  
    return preBuffer[imn];  
    }    
  
// 0 is first image,   preBuffer.length - 1) is  last image  
    
var newImage = getRandomInt(0, preBuffer.length - 1);  
// display the image    
document.body.appendChild(newImage); 
}  

  