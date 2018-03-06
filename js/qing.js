var divs=document.getElementById('xuanka').getElementsByTagName('a');
var box=document.getElementById('banner').getElementsByClassName('nei');
var arr=0;
    for (var i = 0; i < divs.length; i++) {
    	 divs[i].arr=i
	     divs[i].onclick=function(){
         divs[arr].className='';
         box[arr].style='';
         this.className='xuanka_1';
         box[this.arr].style.display='block';
         arr=this.arr;
	     }
    }