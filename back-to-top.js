
var tops=function(){
	var BrowerH,BrowerW,ScrollT,ScrollL;
	var flag=true;

	var getClient=function(){
		BrowerH=document.documentElement.clientHeight;
		BrowerW=document.documentElement.clientWidth;
		ScrollT=document.documentElement.scrollTop||document.body.scrollTop;
		ScrollL=document.documentElement.scrollLeft||document.body.scrollLeft;
	};
	var setPo=function(obj,clH,clW){
		obj.style.top=BrowerH+ScrollT-clH+"px";
		obj.style.left=BrowerW+ScrollL-clW+"px";
	}
	var addEvents=function(obj){
		var timer;
		addEvent(obj,"click",function(){
			console.log("11")
			clearInterval(timer)
			timer=setInterval(function(){
				getClient();
				var speed=Math.ceil(ScrollT/30);
					document.documentElement.scrollTop=document.body.scrollTop=ScrollT-speed;
				flag=true;
				if(ScrollT==0){
					clearInterval(timer)
				}
			},50)
		})
		addEvent(window,"scroll",function(){
			if(!flag){
				clearInterval(timer);
			}
			flag=false;
		})
	}
	return {
		init:function(id){
			var obj=$(id);
			var clientH=obj.clientHeight;
			var clientW=obj.clientWidth;
			getClient();
			setPo(obj,clientH,clientW);
			addEvents(obj)
		}
	}
}()
tops.init("J_top");
window.onscroll=function(){
	tops.init("J_top");
}
window.onresize=function(){
	tops.init("J_top");
}
