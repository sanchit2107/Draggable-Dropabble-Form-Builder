// Script for text editing
$(document).on('mouseenter', '.edit-icon', function() {
				$(".edit-icon").on("click", function(){
					var oldVal = $(this).text();
					document.getElementById('builder-text').value = oldVal;
					big_parent = $(this);

					if(big_parent.attr("id") == "click-text"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}

					else if(big_parent.attr("id") == "click-pass"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}

					else if(big_parent.attr("id") == "click-email"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}

					else if(big_parent.attr("id") == "click-num"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}

					else if(big_parent.attr("id") == "click-radio"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}

					else if(big_parent.attr("id") == "click-check"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}

					else if(big_parent.attr("id") == "click-submit"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}

					else if(big_parent.attr("id") == "click-reset"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}

					else if(big_parent.attr("id") == "click-textarea"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}

					else if(big_parent.attr("id") == "click-drop"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}

					else if(big_parent.attr("id") == "click-date"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}

					else if(big_parent.attr("id") == "click-file"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}

					else if(big_parent.attr("id") == "click-time"){
						$("#builder-text-save").on("click", function(){
							big_parent.html($("#builder-text").val());
						});
					}
				});
		});


// Draggable and droppable

$(function() {

		    $("#text-drag").draggable({
		    	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,  
		    	zIndex: 50,
		    	stop: function(event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
		
		    		$(".builder-area").append("<div class='form-group col-md-12 text-element form-element' id='text-div-id'><label> <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-text' data-toggle='modal' data-target='#textModal'> <b>Name </b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='text-star'><i class='fas fa-star-of-life' ></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' ><i class='fas fa-star-of-life' id='text-star'></i></span> </label>  <span title='Edit Field properties'><a href='javascript:void(0)'><i class='fas fa-user-edit edit-function'  id='text-id'></i></a></span> <input class='form-control' type='text' placeholder='text here' id='text-input' required> </div>")
		    	}
		    });

		    $("#pass-drag").draggable({
		    	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,
		    	zIndex: 50,
		    	stop: function(event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
		
		    		$(".builder-area").append("<div class='form-group col-md-12 pass-element form-element'><label>  <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-pass' data-toggle='modal' data-target='#textModal'><b>Password </b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='pass-star'><i class='fas fa-star-of-life'></i></span> </label> <span title='Edit Field properties'><i class='fas fa-user-edit edit-function'  id='pass-id'></i></span> <input class='form-control' type='password' placeholder='password here' id='pass-input'> </div>")
		    	}
		    });

		    $("#email-drag").draggable({
		    	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,
		    	zIndex: 100,
		    	stop: function(event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
		
		    		$(".builder-area").append("<div class='form-group col-md-12 email-element form-element'><label>  <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-email' data-toggle='modal' data-target='#textModal'><b>Email</b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='email-star' ><i class='fas fa-star-of-life'></i></span> </label> <span title='Edit Field properties'><i class='fas fa-user-edit edit-function'  id='email-id'></i></span><input class='form-control' type='email' placeholder='email here' id='email-input'> </div>")
		    	}
		    });

		    $("#num-drag").draggable({
		    	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,
		    	zIndex: 100,
		    	stop: function(event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
		
		    		$(".builder-area").append("<div class='form-group col-md-12 num-element form-element'><label>  <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-radio' data-toggle='modal' data-target='#textModal'> <b>Number</b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='num-star' ><i class='fas fa-star-of-life'></i></span> </label> <span title='Edit Field properties'><i class='fas fa-user-edit edit-function' id='num-id'></i></span> <span><input class='form-control' type='number' placeholder='Enter Number' name='number-btn' id='num-input'></span> </div>")
		    	}
		    });

		    $("#radio-drag").draggable({
		    	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,
		    	zIndex: 100,
		    	stop: function (event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
		
		    		$(".builder-area").append("<div class='col-md-12' id='radio-input'><label>  <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-radio' data-toggle='modal' data-target='#textModal'> <b>Choose one</b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='radio-star'><i class='fas fa-star-of-life'></i></span> </label> <span title='Edit Field properties'><i class='fas fa-user-edit edit-function' id='radio-id'></i></span> </div>")
		    	}
		    });

		    $("#check-drag").draggable({
		     	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,
		    	zIndex: 100,
		    	stop: function (event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
		
		    		$(".builder-area").append("<div class='col-md-12' id='check-input'><label>  <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-check' data-toggle='modal' data-target='#textModal'><b>Select here</b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='check-star'><i class='fas fa-star-of-life'></i></span> </label> <span title='Edit Field properties'><i class='fas fa-user-edit edit-function' id='check-id'></i></span>  </div>")
		    	}
		    });

		    $("#submit-drag").draggable({
		     	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,
		    	zIndex: 100,
		    	stop: function(event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
		
		    		$(".builder-area").append("<div class='form-group col-md-12 submit-element form-element'><label> <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-submit' data-toggle='modal' data-target='#textModal'> <b>Submit </b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='submit-star'><i class='fas fa-star-of-life'></i></span> </label> <span title='Edit Field properties'><i class='fas fa-user-edit edit-function' id='submit-id'></i></span> <button type='button' class='btn btn-success' id='submit-input'>Submit</button> </div>")
		    	}
		    });

		    $("#reset-drag").draggable({
		     	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,
		    	zIndex: 100,
		    	stop: function (event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
	
		    		$(".builder-area").append("<div class='form-group col-md-12 reset-element form-element'><label>  <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-reset' data-toggle='modal' data-target='#textModal'> <b>Reset all</b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='reset-star'><i class='fas fa-star-of-life'></i></span> </label> <span title='Edit Field properties'><i class='fas fa-user-edit edit-function' id='reset-id'></i></span> <button type='button' class='btn btn-danger' id='reset-input'>Reset</button> </div>")
		    	}
		    });

		    $("#add-drag").draggable({
		     	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,
		    	zIndex: 100,
		    	stop: function(event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
		
		    		$(".builder-area").append("<div class='form-group col-md-12 textarea-element form-element'><label> <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-textarea' data-toggle='modal' data-target='#textModal'><b>Textarea</b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='textarea-star'><i class='fas fa-star-of-life'></i></span> </label> <span title='Edit Field properties'><i class='fas fa-user-edit edit-function' id='textarea-id'></i></span> <textarea class='form-control' rows='5' cols='20' placeholder='Enter text paragraph' id='textarea-input'></textarea> </div>")	
		    	}
		    });

		    $("#drop-drag").draggable({
		     	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,
		    	zIndex: 100,
		    	stop: function(event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
		
		    		$(".builder-area").append("<div class='form-group col-md-12 drop-element form-element'><label> <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-drop' data-toggle='modal' data-target='#textModal'><b>Select here</b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='drop-star'><i class='fas fa-star-of-life'></i></span> </label> <span title='Edit Field properties'><i class='fas fa-user-edit edit-function' id='drop-id'></i></span> <select class='form-control'  id='drop-input' name='select-drop'> </select> </div>")
		    	}
		    });

		    $("#date-drag").draggable({
		     	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,
		    	zIndex: 100,
		    	stop: function(event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
				    		$(".builder-area").append("<div class='form-group col-md-12 date-element form-element'><label> <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-date' data-toggle='modal' data-target='#textModal'><b>Date </b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='date-star'><i class='fas fa-star-of-life'></i></span> </label> <span title='Edit Field properties'><i class='fas fa-user-edit edit-function' id='date-id'></i></span> <input class='form-control' type='date' placeholder='date here' id='date-input'> </div>")
		    	}
		    });

		    $("#file-drag").draggable({
		     	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,
		    	zIndex: 100,
		    	stop: function(event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
		
		    		$(".builder-area").append("<div class='form-group col-md-12 file-element form-element'><label>  <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-file' data-toggle='modal' data-target='#textModal'><b>Upload Document </b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='file-star'><i class='fas fa-star-of-life'></i></span> </label> <span title='Edit Field properties'><i class='fas fa-user-edit edit-function' id='file-id'></i></span> <input class='form-control' type='file' id='file-input' > </div>")
		    	}
		    });

		    $("#time-drag").draggable({
		    	connectToSortable: "#form-id",
		    	helper: "clone",
		    	cursor: "move",
		    	revert: true,
		    	zIndex: 100,
		    	stop: function(event, ui){
		    		$("#form-id").sortable();
		    		$(ui.helper).replaceWith("")
		
		    		$(".builder-area").append("<div class='form-group col-md-12 time-element form-element'><label> <span title='Edit Label'><i class='fas fa-edit edit-icon' id='click-time' data-toggle='modal' data-target='#textModal'><b>Time </b></i></span> <span style='color: red; font-size: 8px; display:none;' class='star' id='time-star'><i class='fas fa-star-of-life'></i></span> </label> <span title='Edit Field properties'><i class='fas fa-user-edit edit-function' id='time-id'></i></span> <input class='form-control' type='time' id='time-input'> </div>")	
		    	}
		    });


		    $("#form-id").droppable();
			$("#form-id").disableSelection();
			$("#form-id").sortable();


		});

// Show and Hide to change the field size
// Input type
$(document).on('mouseenter', '#text-id', function() {
	$("#text-id").on("click", function(){
		$(".text-size").show();
		$(".pass-size").hide();
		$(".email-size").hide();
		$(".num-size").hide();
		$(".radio-size").hide();
		$(".check-size").hide();
		$(".submit-size").hide();
		$(".reset-size").hide();
		$(".textarea-size").hide();
		$(".drop-size").hide();
		$(".date-size").hide();
		$(".file-size").hide();
		$(".time-size").hide();

		var oldVal = $("#text-input").attr('placeholder');			 	// Change Placeholder
		document.getElementById('text-place-change').value = oldVal;
		big_parent = $("#text-input");
			$("#place-text-save").on("click", function(){
				big_parent.attr('placeholder',$("#text-place-change").val());
				});
	});

	$("#valid-text-change").on("click",function(){		 //Mandatory one
		$("#text-input").attr("required", true);
		$("#text-star").toggle();
	});
});




$(document).on('mouseenter', '#pass-id', function() {
	$("#pass-id").on("click", function(){
		$(".text-size").hide();
		$(".pass-size").show();
		$(".email-size").hide();
		$(".num-size").hide();
		$(".radio-size").hide();
		$(".check-size").hide();
		$(".submit-size").hide();
		$(".reset-size").hide();
		$(".textarea-size").hide();
		$(".drop-size").hide();
		$(".date-size").hide();
		$(".file-size").hide();
		$(".time-size").hide();

		var oldVal = $("#pass-input").attr('placeholder');			 	// Change Placeholder
		document.getElementById('pass-place-change').value = oldVal;
		big_parent = $("#pass-input");
			$("#place-pass-save").on("click", function(){
				big_parent.attr('placeholder',$("#pass-place-change").val());
				});
	});

	$("#valid-pass-change").on("click",function(){		 //Mandatory one
		$("#pass-input").attr("required", true);
		$("#pass-star").toggle();
});
});


$(document).on('mouseenter', '#email-id', function() {
	$("#email-id").on("click", function(){
		$(".email-size").show();
		$(".text-size").hide();
		$(".pass-size").hide();
		$(".num-size").hide();
		$(".radio-size").hide();
		$(".check-size").hide();
		$(".submit-size").hide();
		$(".reset-size").hide();
		$(".textarea-size").hide();
		$(".drop-size").hide();
		$(".date-size").hide();
		$(".file-size").hide();
		$(".time-size").hide();

		var oldVal = $("#email-input").attr('placeholder');			 	// Change Placeholder
		document.getElementById('email-place-change').value = oldVal;
		big_parent = $("#email-input");
			$("#place-email-save").on("click", function(){
				big_parent.attr('placeholder',$("#email-place-change").val());
				});
	});
	$("#valid-email-change").on("click",function(){		 //Mandatory one
		$("#email-input").attr("required", true);
		$("#email-star").toggle();
});
});


$(document).on('mouseenter', '#num-id', function() {
	$("#num-id").on("click", function(){
		$(".num-size").show();
		$(".text-size").hide();
		$(".pass-size").hide();
		$(".email-size").hide();
		$(".radio-size").hide();
		$(".check-size").hide();
		$(".submit-size").hide();
		$(".reset-size").hide();
		$(".textarea-size").hide();
		$(".drop-size").hide();
		$(".date-size").hide();
		$(".file-size").hide();
		$(".time-size").hide();

		var oldVal = $("#num-input").attr('placeholder');			 	// Change Placeholder

		document.getElementById('num-place-change').value = oldVal;
		big_parent = $("#num-input");
			$("#place-num-save").on("click", function(){
				big_parent.attr('placeholder',$("#num-place-change").val());
				});
	});
	$("#valid-num-change").on("click",function(){		 //Mandatory one
		$("#num-input").attr("required", true);
		$("#num-star").toggle();
});
});


// Adding and Removing Radio Choices
$(document).ready(function(){
	$(function addRadio(){
		$("#addradiochoices").click(function() {
	    $("#tableradio").append("<tr><td><input type='text' class='form-control' placeholder='Choice' name='optionradio[]' style='width: 120px;'></td><td ><input type='text' class='form-control' placeholder='Value' name='valueradio[]' style='width: 120px;'></td><td><a href='javascript:void(0)' class='btn btn-xs btn-danger' id='deleteradio' style='padding: 2px;'><i class='fa fa-times' style='padding: 2px;'></i></a></td></tr>");
		});
		$("body").on("click", "#deleteradio", function(e) {
		    $(this).parent().parent().remove();
		});   
	}); 	
});
 

$(document).on('mouseenter', '#radio-id', function() {
	$("#radio-id").on("click", function(){
		$(".radio-size").show();
		$(".text-size").hide();
		$(".pass-size").hide();
		$(".email-size").hide();
		$(".num-size").hide();
		$(".check-size").hide();
		$(".submit-size").hide();
		$(".reset-size").hide();
		$(".textarea-size").hide();
		$(".drop-size").hide();
		$(".date-size").hide();
		$(".file-size").hide();
		$(".time-size").hide();

	});
	$("#valid-radio-change").on("click",function(){		 //Mandatory one
		$("#radio-input").attr("required", true);
		$("#radio-star").toggle();
	});

	$("#place-radio-save").on("click", function(){
        var optionradio= new Array();
        $("input[name^='optionradio']").each(function() {
            optionradio.push($(this).val());
        });
        var valueradio = new Array();
        $("input[name^='valueradio']").each(function() {
            valueradio.push($(this).val());
        });
        for(var q=0; q<optionradio.length;q++){

            $("#radio-input").append("<input type='radio' value='"+valueradio[q]+"'> "+optionradio[q]);
        }
	});
});


// Adding and Removing Checkbox Choices
$(document).ready(function(){
	$(function addCheck(){
		$("#addcheckchoices").click(function() {
	    $("#tablecheck").append("<tr><td><input type='text' class='form-control' placeholder='Choice' name='optioncheck[]' style='width: 120px;'></td><td ><input type='text' class='form-control' placeholder='Value' name='valuecheck[]' style='width: 120px;'></td><td><a href='javascript:void(0)' class='btn btn-xs btn-danger' id='deletecheck' style='padding: 2px;' ><i class='fa fa-times' style='padding: 2px;'></i></a></td></tr>");
		});
		$("body").on("click", "#deletecheck", function(e) {
		    $(this).parent().parent().remove();
		});   
	});
});
  

$(document).on('mouseenter', '#check-id', function() {
	$("#check-id").on("click", function(){
		$(".check-size").show();
		$(".text-size").hide();
		$(".pass-size").hide();
		$(".email-size").hide();
		$(".num-size").hide();
		$(".radio-size").hide();
		$(".submit-size").hide();
		$(".reset-size").hide();
		$(".textarea-size").hide();
		$(".drop-size").hide();
		$(".date-size").hide();
		$(".file-size").hide();
		$(".time-size").hide();


	});
	$("#valid-check-change").on("click",function(){		 //Mandatory one
		$("#check-input").attr("required", true);
		$("#check-star").toggle();
	});

	$("#place-check-save").on("click", function(){
		var labelcheck = $("#labelcheck").val();
        var namecheck = $("#namecheck").val();
        var optioncheck = new Array();
        $("input[name^='optioncheck']").each(function() {
            optioncheck.push($(this).val());
        });
        var valuecheck = new Array();
        $("input[name^='valuecheck']").each(function() {
            valuecheck.push($(this).val());
        });
        for(var q=0; q<optioncheck.length;q++){
            $("#check-input").append("<input type='checkbox' value='"+valuecheck[q]+"'> "+optioncheck[q]);
        }
	});	
});


$(document).on('mouseenter', '#submit-id', function() {
	$("#submit-id").on("click", function(){
		$(".submit-size").show();
		$(".text-size").hide();
		$(".pass-size").hide();
		$(".email-size").hide();
		$(".num-size").hide();
		$(".radio-size").hide();
		$(".check-size").hide();
		$(".reset-size").hide();
		$(".textarea-size").hide();
		$(".drop-size").hide();
		$(".date-size").hide();
		$(".file-size").hide();
		$(".time-size").hide();

	});
	$("#valid-submit-change").on("click",function(){		 //Mandatory one
		$("#submit-input").attr("required", true);
		$("#submit-star").toggle();
});
});


$(document).on('mouseenter', '#reset-id', function() {
	$("#reset-id").on("click", function(){
		$(".reset-size").show();
		$(".text-size").hide();
		$(".pass-size").hide();
		$(".email-size").hide();
		$(".num-size").hide();
		$(".radio-size").hide();
		$(".check-size").hide();
		$(".submit-size").hide();
		$(".textarea-size").hide();
		$(".drop-size").hide();
		$(".date-size").hide();
		$(".file-size").hide();
		$(".time-size").hide();

	});
	$("#valid-reset-change").on("click",function(){		 //Mandatory one
		$("#reset-input").attr("required", true);
		$("#reset-star").toggle();
});
});


$(document).on('mouseenter', '#textarea-id', function() {
	$("#textarea-id").on("click", function(){
		$(".textarea-size").show();
		$(".text-size").hide();
		$(".pass-size").hide();
		$(".email-size").hide();
		$(".num-size").hide();
		$(".radio-size").hide();
		$(".check-size").hide();
		$(".submit-size").hide();
		$(".reset-size").hide();
		$(".drop-size").hide();
		$(".date-size").hide();
		$(".file-size").hide();
		$(".time-size").hide();

		var oldVal = $("#textarea-input").attr('placeholder');
		document.getElementById('textarea-place-change').value = oldVal;
		big_parent = $("#textarea-input");
			$("#place-textarea-save").on("click", function(){
				big_parent.attr('placeholder',$("#textarea-place-change").val());
				});
	});
	$("#valid-textarea-change").on("click",function(){		 //Mandatory one
		$("#textarea-input").attr("required", true);
		$("#textarea-star").toggle();
});
});


// Adding and Removing Select Option
$(document).ready(function(){
	$("#addselectoption").click(function() {
    $("#tableselect").append("<tr><td><input type='text' class='form-control' placeholder='Option' name='optionselect[]' style='width: 120px;'></td><td ><input type='text' class='form-control' placeholder='Value' name='valueselect[]' style='width: 120px;'></td><td><a href='javascript:void(0)' class='btn btn-xs btn-danger' id='deleteselect' style='padding: 2px;'><i class='fa fa-times' style='padding: 2px;'></i></a></td></tr>");
});
$("body").on("click", "#deleteselect", function(e) {
    $(this).parent().parent().remove();
});   
});

	


$(document).on('mouseenter', '#drop-id', function() {
	$("#drop-id").on("click", function(){
		$(".drop-size").show();
		$(".text-size").hide();
		$(".pass-size").hide();
		$(".email-size").hide();
		$(".num-size").hide();
		$(".radio-size").hide();
		$(".check-size").hide();
		$(".submit-size").hide();
		$(".reset-size").hide();
		$(".textarea-size").hide();
		$(".date-size").hide();
		$(".file-size").hide();
		$(".time-size").hide();

	});
	$("#valid-drop-change").on("click",function(){		 //Mandatory one
		$("#drop-input").attr("required", true);
		$("#drop-star").toggle();
});
	$("#place-drop-save").on("click", function(){
        var optionselect = new Array();
        $("input[name^='optionselect']").each(function() {
            optionselect.push($(this).val());
        });
        var valueselect = new Array();
        $("input[name^='valueselect']").each(function() {
            valueselect.push($(this).val());
        });
        var st = ""; 
        for(var r=0; r<optionselect.length;r++){
            st +="<option value='"+valueselect[r]+"'>"+optionselect[r]+"</option>";
        }
		st += "<br>";
		
			$("#drop-input").html('');
			$("#drop-input").append(st);
	});	
});


$(document).on('mouseenter', '#date-id', function() {
	$("#date-id").on("click", function(){
		$(".date-size").show();
		$(".text-size").hide();
		$(".pass-size").hide();
		$(".email-size").hide();
		$(".num-size").hide();
		$(".radio-size").hide();
		$(".check-size").hide();
		$(".submit-size").hide();
		$(".reset-size").hide();
		$(".textarea-size").hide();
		$(".drop-size").hide();
		$(".file-size").hide();
		$(".time-size").hide();

		
	});
	$("#valid-date-change").on("click",function(){		 //Mandatory one
		$("#date-input").attr("required", true);
		$("#date-star").toggle();
});
});


$(document).on('mouseenter', '#file-id', function() {
	$("#file-id").on("click", function(){
		$(".file-size").show();
		$(".text-size").hide();
		$(".pass-size").hide();
		$(".email-size").hide();
		$(".num-size").hide();
		$(".radio-size").hide();
		$(".check-size").hide();
		$(".submit-size").hide();
		$(".reset-size").hide();
		$(".textarea-size").hide();
		$(".drop-size").hide();
		$(".date-size").hide();
		$(".time-size").hide();

	});
	$("#valid-file-change").on("click",function(){		 //Mandatory one
		$("#file-input").attr("required", true);
		$("#file-star").toggle();
});
});
$(document).on('mouseenter', '#time-id', function() {
	$("#time-id").on("click", function(){
		$(".time-size").show();
		$(".text-size").hide();
		$(".pass-size").hide();
		$(".email-size").hide();
		$(".num-size").hide();
		$(".radio-size").hide();
		$(".check-size").hide();
		$(".submit-size").hide();
		$(".reset-size").hide();
		$(".textarea-size").hide();
		$(".drop-size").hide();
		$(".date-size").hide();
		$(".file-size").hide();


	});
	$("#valid-time-change").on("click",function(){		 //Mandatory one
		$("#time-input").attr("required", true);
		$("#time-star").toggle();
});
});






// Change properties using Button- SMALL / MEDIUM / LARGE 

$(function(){
		$("#text-small").on("click", function(){
			$(".text-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".text-element").css({"width":"50%"});
		});
});
$(function(){
		$("#text-medium").on("click", function(){
			$(".text-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".text-element").css({"width":"75%"});
		});
});
$(function(){
		$("#text-large").on("click", function(){
			$(".text-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".text-element").css({"width":"100%"});
		});
});

$(function(){
		$("#pass-small").on("click", function(){
			$(".pass-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".pass-element").css({"width":"50%"});
		});
});
$(function(){
		$("#pass-medium").on("click", function(){
			$(".pass-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".pass-element").css({"width":"75%"});
		});
});
$(function(){
		$("#pass-large").on("click", function(){
			$(".pass-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".pass-element").css({"width":"100%"});
		});
});

$(function(){
		$("#email-small").on("click", function(){
			$(".email-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".email-element").css({"width":"50%"});
		});
});
$(function(){
		$("#email-medium").on("click", function(){
			$(".email-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".email-element").css({"width":"75%"});
		});
});
$(function(){
		$("#email-large").on("click", function(){
			$(".email-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".email-element").css({"width":"100%"});
		});
});

$(function(){
		$("#num-small").on("click", function(){
			$(".num-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".num-element").css({"width":"50%"});
		});
});
$(function(){
		$("#num-medium").on("click", function(){
			$(".num-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".num-element").css({"width":"75%"});
		});
});
$(function(){
		$("#num-large").on("click", function(){
			$(".num-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".num-element").css({"width":"100%"});
		});
});


$(function(){
		$("#radio-small").on("click", function(){
			$(".radio-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".radio-element").css({"width":"50%"});
		});
});
$(function(){
		$("#radio-medium").on("click", function(){
			$(".radio-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".radio-element").css({"width":"75%"});
		});
});
$(function(){
		$("#radio-large").on("click", function(){
			$(".radio-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".radio-element").css({"width":"100%"});
		});
});

$(function(){
		$("#check-small").on("click", function(){
			$(".check-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".check-element").css({"width":"50%"});
		});
});
$(function(){
		$("#check-medium").on("click", function(){
			$(".check-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".check-element").css({"width":"75%"});
		});
});
$(function(){
		$("#check-large").on("click", function(){
			$(".check-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".check-element").css({"width":"100%"});
		});
});

$(function(){
		$("#submit-small").on("click", function(){
			$(".submit-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".submit-element").css({"width":"50%"});
		});
});
$(function(){
		$("#submit-medium").on("click", function(){
			$(".submit-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".submit-element").css({"width":"75%"});
		});
});
$(function(){
		$("#submit-large").on("click", function(){
			$(".submit-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".submit-element").css({"width":"100%"});
		});
});

$(function(){
		$("#reset-small").on("click", function(){
			$(".reset-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".reset-element").css({"width":"50%"});
		});
});
$(function(){
		$("#reset-medium").on("click", function(){
			$(".reset-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".reset-element").css({"width":"75%"});
		});
});
$(function(){
		$("#reset-large").on("click", function(){
			$(".reset-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".reset-element").css({"width":"100%"});
		});
});

$(function(){
		$("#textarea-small").on("click", function(){
			$(".textarea-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".textarea-element").css({"width":"50%"});
		});
});
$(function(){
		$("#textarea-medium").on("click", function(){
			$(".textarea-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".textarea-element").css({"width":"75%"});
		});
});
$(function(){
		$("#textarea-large").on("click", function(){
			$(".textarea-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".textarea-element").css({"width":"100%"});
		});
});


$(function(){
		$("#drop-small").on("click", function(){
			$(".drop-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".drop-element").css({"width":"50%"});
		});
});
$(function(){
		$("#drop-medium").on("click", function(){
			$(".drop-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".drop-element").css({"width":"75%"});
		});
});
$(function(){
		$("#drop-large").on("click", function(){
			$(".drop-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".drop-element").css({"width":"100%"});
		});
});


$(function(){
		$("#date-small").on("click", function(){
			$(".date-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".date-element").css({"width":"50%"});
		});
});
$(function(){
		$("#date-medium").on("click", function(){
			$(".date-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".date-element").css({"width":"75%"});
		});
});
$(function(){
		$("#date-large").on("click", function(){
			$(".date-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".date-element").css({"width":"100%"});
		});
});

$(function(){
		$("#file-small").on("click", function(){
			$(".file-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".file-element").css({"width":"50%"});
		});
});
$(function(){
		$("#file-medium").on("click", function(){
			$(".file-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".file-element").css({"width":"75%"});
		});
});
$(function(){
		$("#file-large").on("click", function(){
			$(".file-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".file-element").css({"width":"100%"});
		});
});

$(function(){
		$("#time-small").on("click", function(){
			$(".time-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".time-element").css({"width":"50%"});
		});
});
$(function(){
		$("#time-medium").on("click", function(){
			$(".time-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".time-element").css({"width":"75%"});
		});
});
$(function(){
		$("#time-large").on("click", function(){
			$(".time-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".time-element").css({"width":"100%"});
		});
});
