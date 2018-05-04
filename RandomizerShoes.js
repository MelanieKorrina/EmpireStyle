function display_random_image7()   
{  
     var theImages = [{  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Shoes/blackshoe.jpg",  
		style: "position:absolute; top:7800px; right:10px; width:200px; height:200px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Shoes/blueshoe.jpg",  
		style: "position:absolute; top:780px; right:10px; width:200px; height:200px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Shoes/bootshoe.jpg",  
        style: "position:absolute; top:780px; right:10px; width:200px; height:200px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Shoes/converseshoe.jpg",  
        style: "position:absolute; top:780px; right:10px; width:200px; height:200px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Shoes/goldshoe.jpg",  
        style: "position:absolute; top:780px; right:10px; width:200px; height:200px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Shoes/greenshoe.jpg",  
        style: "position:absolute; top:780px; right:10px; width:200px; height:200px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Shoes/pinkshoe.jpg",  
        style: "position:absolute; top:780px; right:10px; width:200px; height:200px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Shoes/printshoe.jpg",  
        style: "position:absolute; top:780px; right:10px; width:200px; height:200px; border:none;"
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

  