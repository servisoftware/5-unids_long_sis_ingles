function showValues (inches){

		inch =  parseFloat(inches);
		// Convert values


		/*
           <option value='lg'>legua</option>
           <option value='mi'>milla</option>
           <option value='fur'>furlong</option>
           <option value='ch'>cadena</option>
           <option value='rd'>rod</option>
           <option value='yd'>yarda</option>
           <option value='ft'>pie</option>
           <option value='in'>pulgada</option>
           <option value='ml'>Mil</option>
		*/


			  //        mi / fur/ ch/ rd /yd / ft / in
		var lg  = inch / 3 / 8 / 10 / 4 / 5.5 / 3 / 12;

		var mi  = inch / 8 / 10 / 4 / 5.5 / 3 / 12;
		var fur = inch / 10 / 4 / 5.5 / 3 / 12;
		var ch  = inch / 4 / 5.5 / 3 / 12; 
		var rd  = inch / 5.5 / 3 / 12;
		var yd  = inch / 3 / 12;
		var ft  = inch / 12;
		var inn = inch ;
		var ml  = inch * 1000;	

		// Show values
		$("#lg").val(lg);
		$("#mi").val(mi);
		$("#fur").val(fur);
		$("#ch").val(ch);
		$("#rd").val(rd);
		$("#yd").val(yd);
		$("#ft").val(ft);
		$("#in").val(inn);
		$("#ml").val(ml);

}


$(function(){
	$("#calcular").click(function(){
		//calculo de multiplos y submultiplos
		var valor   = parseFloat($("#valor").val());
		var unidad = $("#unidad").val();
		var inches = 0;

		if (unidad == "lg"){
					//	     mi *fur* ch * rd * yd * ft * in
			inches =  valor * 3 * 8 * 10 * 4 * 5.5 * 3 * 12;
		}
		if (unidad == "mi"){
					//	fur * ch * rd * yd * ft * in
			inches =  valor * 8 * 10 * 4 * 5.5 * 3 * 12;
		}
		if (unidad == "fur"){
					//	 ch * rd * yd * ft * in
			inches =  valor * 10 * 4 * 5.5 * 3 * 12;
		}
		if (unidad == "ch"){
					//	   rd * yd * ft * in
			inches =  valor  * 4 * 5.5 * 3 * 12;
		}
		if (unidad == "rd"){
					//	   yd * ft * in
			inches =  valor  * 5.5 * 3 * 12;
		}
		if (unidad == "yd"){
					//	   ft * in
			inches =  valor  *  3 * 12;
		}
		if (unidad == "ft"){
					//	   in			
			inches =  valor  * 12 ;
		}
		if (unidad == "in"){
			inches =  valor ;
		}
		if (unidad == "ml"){
			inches =  valor / 1000;
		}

		showValues (inches);

	})
});
