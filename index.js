document.addEventListener('DOMContentLoaded',function(){
	/*k.mount('#app',k('div',{
			id: "yeah",
			on:{
				click: function(){
					alert('yeah');
				}
			}
		})
	);*/
	document.querySelector('#app').appendChild(
		k('#asd.asd.bvb.dfg',[
			k('div',[
				k('div',[
					k('div',{
						id:"yeah"
					}),
					k('div',{
						class:"yeah"
					}),
					k('div',{
						style:{
							"background-color":"black",
							"position":"absolute",
							"right":"0px"
						}
					}),
					k('div',{
						id: "no"
					},[
						k('div',{
							on:{
								click: function(){
									alert("cree mi libreria");
								}
							},
							style:{
								"text-align": "justify",
								"font-size": "3em"
							}
						},"hello World")
					])
				])
			])
		])
	);
});