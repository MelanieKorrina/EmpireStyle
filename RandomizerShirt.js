function display_random_image()   
{  
     var theImages = [{  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Shirts/blackblouse.jpg",  
		style: "position:absolute; top:300px; right:1140px; width:200px; height:270px; border:none;"
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Shirts/coloredblouse.jpg",  
		style: "position:absolute; top:300px; right:1140px; width:200px; height:270px; border:none;"		
    }, {  
        src: "file:///C:Users/atlgwc22/Documents/Empire/Shirts/greenblouse.jpg",  
		style: "position:absolute; top:300px; right:1140px; width:200px; height:270px; border:none;"
	}, {
		src: "file:///C:Users/atlgwc22/Documents/Empire/Shirts/blueblouse.jpg",  
		style: "position:absolute; top:300px; right:1140px; width:200px; height:270px; border:none;"
	}, {
		src: "file:///C:Users/atlgwc22/Documents/Empire/Shirts/darkblueblouse.jpg",  
		style: "position:absolute; top:300px; right:1140px; width:200px; height:270px; border:none;"
	}, {
		src: "file:///C:Users/atlgwc22/Documents/Empire/Shirts/grayblouse.jpg",  
		style: "position:absolute; top:300px; right:1140px; width:200px; height:270px; border:none;"
	}, {
		src: "file:///C:Users/atlgwc22/Documents/Empire/Shirts/pinkblouse.jpg",  
		style: "position:absolute; top:300px; right:1140px; width:200px; height:270px; border:none;"
	}, {
		src: "file:///C:Users/atlgwc22/Documents/Empire/Shirts/purpleblouse.jpg",  
		style: "position:absolute; top:300px; right:1140px; width:200px; height:270px; border:none;"
	}, {
		src: "file:///C:Users/atlgwc22/Documents/Empire/Shirts/redblouse.jpeg",  
		style: "position:absolute; top:300px; right:1140px; width:200px; height:270px; border:none;"
	}, {
		src: "file:///C:Users/atlgwc22/Documents/Empire/Shirts/yellowblouse.jpeg",  
		style: "position:absolute; top:300px; right:1140px; width:200px; height:270px; border:none;"
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
