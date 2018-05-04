function display_random_image5()   
{  
     var theImages = [{  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Dresses/blackdress.jpg",  
        style: "position:absolute; top:280px; right:390px; width:200px; height:300px; border:none;"	
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Dresses/salmondress.jpg",  
        style: "position:absolute; top:280px; right:390px; width:200px; height:300px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Dresses/bluedress.jpg",  
        style: "position:absolute; top:280px; right:390px; width:200px; height:300px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Dresses/fancydress.jpg",  
        style: "position:absolute; top:280px; right:390px; width:200px; height:300px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Dresses/darkbluedress.jpg",  
        style: "position:absolute; top:280px; right:390px; width:200px; height:300px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Dresses/purpledress.jpg",  
        style: "position:absolute; top:280px; right:390px; width:200px; height:300px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Dresses/yellowdress.jpg",  
        style: "position:absolute; top:280px; right:390px; width:200px; height:300px; border:none;" 
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