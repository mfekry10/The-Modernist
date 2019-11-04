//Calculate slider height

	// var winH = $(window).height();

	// var barH  = $('.bar').innerHeight();

	// var containerH =$('.container').innerHeight();

	// $('#carouselExampleControls, #carouselExampleControls .carousel-item').height(winH - (barH + containerH));


// component of srevices 

Vue.component('product',{

 props:['message','title','parg'],

 template:`<div class="box"><div><span>{{message}}</span></div><h3>{{title}}</h3><p>{{parg}}</p></div>`
 

});


new Vue({

el:".services",

data:{

 message:"120*120",
 title:" SERVICE TITLE",
 parg:"Vestassapede et donec ut est libe ros sus et eget sed eget quisq ueta habitur augue",
}

});


// component of Latest work

Vue.component('latest_work',{

  props:['content','footer'],
  
  template:`<div class="latest_box text-center"><div><span>{{content}}</span></div><div class="latest_box_footer">{{footer}}</div></div>`
 
});


new Vue({

el:".latest_work",

data:{

 content:"290x190px",
 footer:"LOREM IPSUM DOLOR",
}

});

