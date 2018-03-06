var lis= document.getElementById("banner").getElementsByTagName('a');
var divs = document.getElementById("banner").getElementsByTagName('div');
var bo=document.getElementsByClassName('bo');
console.log(bo)

var arr=0;
// 添加点击事件
 for (var i = 0; i < lis.length; i++) {
 	lis[i].arr=i;
 	lis[i].onclick=function(){
 		lis[arr].className='';
 		divs[arr].className='';
 		bo[arr].style='';
 		this.className='sel';
 		divs[this.arr].className='one1';
 		bo[this.arr].style.display='block';		
 		arr=this.arr;
 	}
 }