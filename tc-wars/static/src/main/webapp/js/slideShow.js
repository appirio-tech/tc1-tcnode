function getNextImage() {
    imageNum = imageNum+1;
    if (imageNum>=data.length) imageNum=0;
    return data[imageNum][0];
}

function getPrevImage() {
    imageNum = imageNum-1;
    if (imageNum<0) imageNum=data.length-1;
    return data[imageNum][0];
}

function prevImage() {
    var new_image = getPrevImage();
    document.images['slideImg'].src = new_image;
    document.getElementById('currImage').innerHTML=imageNum+1;
    document.getElementById('caption').innerHTML=data[imageNum][1];
}

function nextImage() {
    var new_image = getNextImage();
    document.images['slideImg'].src = new_image;
    document.getElementById('currImage').innerHTML=imageNum+1;
    document.getElementById('caption').innerHTML=data[imageNum][1];
}

function changeImage(imageIndex) {
    if (imageIndex<0) imageNum=data.length-1;
    else if (imageIndex>=data.length) imageNum=0;
    else imageNum = imageIndex;
    document.images['slideImg'].src = data[imageNum][0];
    document.getElementById('currImage').innerHTML=imageNum+1;
    document.getElementById('caption').innerHTML=data[imageNum][1];
}