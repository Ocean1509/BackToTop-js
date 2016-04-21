/*基本库*/

function $(id){
	return document.getElementById(id);
}
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false)
	}else{
		obj.attachEvent("on"+type,fn)
	}
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr]
	}

}
function removeEvent(obj,type,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type,fn,false)
	}else if(obj.detachEvent){
		obj.detachEvent("on"+type,fn)
	}
}
function getLeft(e){
	var offset=e.offsetLeft;
	if(e.offsetParent!=null)offset+=getLeft(e.offsetParent)
		return offset
}
function stopPro(evt){
	var e=evt||window.event;
	window.event?e.cancelBubble=true:e.stopPropagation();
}
function preDef(evt){
	var e=evt||window.event;
	if(e.preventDefault){
		e.preventDefault()
	}else{
		e.returnValue=false;
	}
}
function getByClass(sClass) { //根据class获取元素
    var oReasult = [];
    var oEle = document.getElementsByTagName("*");
    for (i = 0; i < oEle.length; i++) {
        if (oEle[i].className==sClass ){
            oReasult.push(oEle[i])
        }
    };		
    return oReasult;
}
function getNextElement(node){
    var NextElementNode = node.nextSibling;
    while(NextElementNode.nodeValue != null){
        NextElementNode = NextElementNode.nextSibling
    }
    return NextElementNode;
}
