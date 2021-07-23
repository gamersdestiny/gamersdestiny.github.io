const container = document.querySelector(".container-pro");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slider = document.querySelectorAll(".projects-container");
const aContainer = document.querySelector(".alert-cont");

if(aContainer){
	setTimeout(()=>{
		aContainer.style.display="none";
	}, 4000);
}

var playauto;
var incnumber = 0;
var initial= 0	;
var len = slider.length;


next.addEventListener("click", function forward(e){
	slider.forEach((slides) => {
		slides.style.left = "0%";
	});
	incnumber++;
	if(incnumber>len-1){
		incnumber=0;
	};

	initial = initial-20;
	if (initial<-80){
		initial = 0;
	};

	var intstr = initial.toString();
	var cnstr = intstr.concat("%");
	
	
	slider[incnumber].style.left = cnstr;
	
});

prev.addEventListener("click", (e)=>{
	
	slider.forEach((slides) => {
		slides.style.left = "0%";
	});
	incnumber--;
	if(incnumber<0) {
		incnumber=3;
	};


	initial = initial+20;
	if (initial>-0){
		initial = -60;
	};
	
	

	var intstr = initial.toString();
	var cnstr = intstr.concat("%");
	
	slider[incnumber].style.left = cnstr;

});



var repeater = ()=>{
	playauto = setInterval(function(){
		incnumber++
		if(incnumber>len-2){
			incnumber=0
			slider.forEach((slides)=>{
				slides.style.left = '0%'
			});
		};
		initial = initial-20;
		if (initial<-60){
			initial = 0;
		};
		
		var intstr = initial.toString();
		var cnstr = intstr.concat("%");
		slider[incnumber].style.left = cnstr
	}, 3000);
}

// repeater();

// container.addEventListener("mouseover", ()=>{
// 	clearInterval(playauto)
// })
// container.addEventListener("mouseout", ()=>{
// 	repeater();
// })