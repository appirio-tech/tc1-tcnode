//getClassName
var getElementsByClassName = function(searchClass,node,tag) {
    if(document.getElementsByClassName){
        return  document.getElementsByClassName(searchClass)
    }else{    
        node = node || document;
        tag = tag || '*';
        var returnElements = []
        var els =  (tag === "*" && node.all)? node.all : node.getElementsByTagName(tag);
        var i = els.length;
        searchClass = searchClass.replace(/\-/g, "\\-");
        var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
        while(--i >= 0){
            if (pattern.test(els[i].className) ) {
                returnElements.push(els[i]);
            }
        }
        return returnElements;
    }
}

function resizeColumnWidth(){

    var topElement = document.getElementById("navigation");
    var offSet = 70;

    if(topElement == null) {
        topElement = getElementsByClassName('topBar')[0];
        offSet = 0;
    }

    getElementsByClassName('mainColumn')[0].style.width = parseInt(topElement.offsetWidth) - 216 - offSet + 'px';
    getElementsByClassName('columnTitle')[0].getElementsByTagName('h3')[0].style.width = '0px';
    getElementsByClassName('columnTitle')[0].getElementsByTagName('h3')[0].style.width = parseInt(getElementsByClassName('columnTitle')[0].offsetWidth) - 277 - offSet + 'px';
    getElementsByClassName('columnContent')[0].style.width = '0px';
    getElementsByClassName('columnContent')[0].style.width = parseInt(getElementsByClassName('mainColumn')[0].offsetWidth) - 277 - offSet + 'px';
}

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}


//set the width of Checkpoints
function setWidth(){
    if(getElementsByClassName('checkpointsInfor').length){
        for(i=0;i<getElementsByClassName('checkpointsInfor')[0].getElementsByTagName('li').length;i++){
            getElementsByClassName('checkpointsInfor')[0].getElementsByTagName('li')[i].style.width = parseInt(parseInt(getElementsByClassName('checkpointsInfor')[0].getElementsByTagName('ul')[0].offsetWidth)/getElementsByClassName('checkpointsInfor')[0].getElementsByTagName('li').length) + 'px';  
        }
    }else{
        if(getElementsByClassName('prizeSection').length){
            addClass(getElementsByClassName('prizeSection')[0],'prizeSectionNoCheckpoints');
        }
    }
    if(getElementsByClassName('checkpointWinnersList').length){
        for(i=0;i<getElementsByClassName('checkpointWinnersList')[0].getElementsByTagName('li').length;i++){
            getElementsByClassName('checkpointWinnersList')[0].getElementsByTagName('li')[i].style.width = parseInt(parseInt(getElementsByClassName('checkpointWinnersList')[0].getElementsByTagName('ul')[0].offsetWidth)/getElementsByClassName('checkpointWinnersList')[0].getElementsByTagName('li').length) + 'px';   
        }
    }
}

//tab show and hide
function tabToggle(){
    for(i=0;i<getElementsByClassName('tab')[0].getElementsByTagName('a').length;i++){
        getElementsByClassName('tab')[0].getElementsByTagName('a')[i].onclick = function(){
            if(!hasClass(this,'disable')){
                for(j=0;j<getElementsByClassName('tab')[0].getElementsByTagName('a').length;j++){
                    removeClass(getElementsByClassName('tab')[0].getElementsByTagName('a')[j],'current');
                    addClass(this,'current');
                }
                var rel = this.getAttribute('rel');
                for(k=0;k<getElementsByClassName('tabContainerInner').length;k++){
                    getElementsByClassName('tabContainerInner')[k].style.display = 'none';
                }
                document.getElementById(rel).style.display = 'block';
                setWidth();
            }
        }
    }
}

//feedback show and hide
function toggleForFeed(){
    for(i=0;i<getElementsByClassName('toggle').length;i++){
        getElementsByClassName('toggle')[i].onclick = function(){
            if(this.innerHTML == 'Show'){
                this.innerHTML = 'Hide';
                this.parentNode.parentNode.getElementsByTagName('div')[1].style.display = 'block';
            }else{
                this.innerHTML = 'Show';
                this.parentNode.parentNode.getElementsByTagName('div')[1].style.display = 'none';   
            }
        }
    }   
}

var tooltipTimeout;

function showTooltip(source, num) {
    getElementsByClassName('tip' + num)[0].style.display = 'block';
    getElementsByClassName('tip' + num)[0].style.top = source.getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop) + 2 + 'px';
    if(hasClass(getElementsByClassName('tip' + num)[0], 'reviewStyleTip')) {
        getElementsByClassName('tip' + num)[0].style.left = source.getBoundingClientRect().left + (document.documentElement.scrollLeft || document.body.scrollLeft) - 210 + 'px';
    } else {
        getElementsByClassName('tip' + num)[0].style.left = source.getBoundingClientRect().left + (document.documentElement.scrollLeft || document.body.scrollLeft) + 32 + 'px';
    }
}

function hideTooltip(num) {
    tooltipTimeout = setTimeout(function(){
        getElementsByClassName('tip' + num)[0].style.display = 'none';  
    }, 200);
}

function enterTooltip(num) {
    clearTimeout(tooltipTimeout);
    getElementsByClassName('tip' + num)[0].style.display = 'block';
}

function ieHack(){
    var browser=navigator.appName 
    var b_version=navigator.appVersion 
    var version=b_version.split(";");
    if(version[1]){
        var trim_Version=version[1].replace(/[ ]/g,""); 
    }
    if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0"){ 
        for(i=0;i<getElementsByClassName('shadow').length;i++){
            getElementsByClassName('shadow')[i].style.marginTop = '-1px';
        }
    } 
}

function setupView() {
        resizeColumnWidth();
        tabToggle();
        toggleForFeed();
        setWidth();
        ieHack();
        // show the specified tab contents from the 'tab' request parameter
        var tabHeaders = getElementsByClassName('tab')[0].getElementsByTagName('a');
        var currentTab = tabHeaders[0];
        for(i = 0; i < tabHeaders.length; i++ ){
            if(hasClass(tabHeaders[i],'current')){
                currentTab = tabHeaders[i];
            }
        }
        addClass(currentTab, 'current');
        var rel = currentTab.getAttribute('rel');
        for(k=0;k<getElementsByClassName('tabContainerInner').length;k++){
            getElementsByClassName('tabContainerInner')[k].style.display = 'none';
        }
        document.getElementById(rel).style.display = 'block';
        setWidth();
}

window.onresize = function(){
    resizeColumnWidth();
    setWidth();
}


//body onload
document.addEventListener("DOMContentLoaded", setupView, false);
document.onreadystatechange = function(){
    if(document.readyState=="complete"){
        setupView();
    }
};
