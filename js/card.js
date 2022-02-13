var selectProduct = document.getElementById("selector");
document.getElementById("arroz").style.display = "none";
document.getElementById("frijoles").style.display = "none";
document.getElementById("lentejas").style.display = "none";
document.getElementById("panela").style.display = "none";
document.getElementById("azucar").style.display = "none";

selectProduct.addEventListener('change', ShowSelected);

function ShowSelected() {
	var x=0;
	x=eval(document.getElementById('selector').value);

	if (x==1){
                document.getElementById("arroz").style.display = "block";
                document.getElementById("frijoles").style.display = "none";
                document.getElementById("lentejas").style.display = "none";
                document.getElementById("panela").style.display = "none";
                document.getElementById("azucar").style.display = "none";
	}
	else if (x==2){
                document.getElementById("frijoles").style.display = "block";
                
                document.getElementById("arroz").style.display = "none";
                document.getElementById("lentejas").style.display = "none";
                document.getElementById("panela").style.display = "none";
                document.getElementById("azucar").style.display = "none";
	}
	else if (x==3){
                document.getElementById("lentejas").style.display = "block";
                
                document.getElementById("arroz").style.display = "none";
                document.getElementById("frijoles").style.display = "none";
                document.getElementById("panela").style.display = "none";
                document.getElementById("azucar").style.display = "none";
	}

        else if (x==4){
                document.getElementById("panela").style.display = "block";
                
                document.getElementById("arroz").style.display = "none";
                document.getElementById("frijoles").style.display = "none";
                document.getElementById("lentejas").style.display = "none";
                document.getElementById("azucar").style.display = "none";
	}

        else if (x==5){
                document.getElementById("azucar").style.display = "block";
                        
                document.getElementById("arroz").style.display = "none";
                document.getElementById("frijoles").style.display = "none";
                document.getElementById("lentejas").style.display = "none";
                document.getElementById("panela").style.display = "none";
	}
}