function toStar(obj,json,fnEnd){
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
					var bStop = true;
					for(attr in json){
						var cuur = parseFloat(getComputedStyle(obj,false)[attr]);
						if(attr == 'opacity'){
							cuur = Math.round(cuur * 100);
						}
						var speed = (json[attr] - cuur)/10;
						speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
						if(json[attr] != cuur){
							bStop = false;
							if(attr == 'opacity'){
								obj.style[attr] = (cuur + speed)/100;
							}else{
								obj.style[attr] = cuur + speed + "px";
							}
						}

					}
					if(bStop){
						clearInterval(obj.timer);
						if(fnEnd){
							fnEnd();
						}
					}
			},30);
		}