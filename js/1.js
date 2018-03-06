var lis= document.getElementById("left").getElementsByTagName('li');
var arr=0;
// 添加点击事件
 for (var i = 0; i < lis.length; i++) {
 	lis[i].arr=i;
 	lis[i].onclick=function(){
 		lis[arr].className='';
 		this.className='sel'
 		arr=this.arr;
 	}
 }