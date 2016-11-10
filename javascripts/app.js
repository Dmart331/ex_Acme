
var types;
var products;


$("#input").change(function(){
	console.log('click')
	if($('#input').val() === "Explosives"){
		$('#wrap').html(' ');
		demoPop(types , products);
	}
	else if ($('#input').val() === "Fireworks"){
		$('#wrap').html(' ');
		firePop(types, products
			)
	}
	});



function getCategorites() {
	return new Promise( (resolve, reject) => {
	$.ajax({
		url: " data/catagories.json"
	}).done(function(data){
		resolve(data);
	}).fail((err) => {
		reject(err);
	});

	});
};

function getTypes() {
	return new Promise (( resolve, reject)=>{
		$.ajax({
		url: " data/types.json"
	}).done((data) => {
		console.log(data)
		resolve(data);
	}).fail((err) => {
		reject(err);
	});

	});
}

function getProducts() {
	return new Promise (( resolve, reject)=>{
		$.ajax({
		url: " data/products.json"
	}).done((data) => {
		resolve(data);
	}).fail((err) => {
		reject(err);
	});

	});
}

function logData(data){
	console.log(data)
}

getCategorites()
.then ( (catData)=>{
	console.log(catData)
	return getTypes();
	
	})

.then((typeData)=>{
	types = typeData.types;
	return getProducts();
})
.then ((productData)=>{
	products = productData.products;
	console.log(productData)
})



	

function demoPop(data , prod){
	$(data).each((index,value)=>{
		if(value.categoryId ===1){

		};
	})
	


	
$(prod).each((index, value)=>{
	for (var prop in value){
		var typeId = value[prop].typeId;
		let card = `<div class="col-md-3"><h3>${value[prop].name}</h3>
                    <h4>${value[prop].description}</h4></div>`;
                if (typeId >= 2) {
                    $("#wrap").append(card);
                }
      
    }

    })
}
    





function firePop(data, prod){
$(data).each((index,value)=>{
		if(value.categoryId ===0){

		};
	})
	


	
$(prod).each((index, value)=>{
	for (var prop in value){
		var typeId = value[prop].typeId;
		let card = `<div class="col-md-3"><h3>${value[prop].name}</h3>
                    <h4>${value[prop].description}</h4></div>`;
                if (typeId <= 1) {
                    $("#wrap").append(card);
                }
      
    }

    })
}





