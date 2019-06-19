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
		    		$(".builder-area").append("<div class='col-md-12 form-element'><label> <i class='fas fa-edit edit-icon' id='click-text' data-toggle='modal' data-target='#textModal'><b>Name </b></i></label> <input type='text' placeholder='text here'> </div")
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
		    		$(".builder-area").append("<div class='col-md-12 form-element'><label> <i class='fas fa-edit edit-icon' id='click-pass' data-toggle='modal' data-target='#textModal'><b>Password </b></i></label> <input type='password' placeholder='password here' > </div")
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
		    		$(".builder-area").append("<div class='col-md-12 form-element'><label> <i class='fas fa-edit edit-icon' id='click-email' data-toggle='modal' data-target='#textModal'><b>Email</b></i></label> <input type='email' placeholder='email here' > </div")
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
		    		$(".builder-area").append("<div class='col-md-12 form-element'><label> <i class='fas fa-edit edit-icon' id='click-radio' data-toggle='modal' data-target='#textModal'> <b>Number</b></i></label>  <span><input type='number' name='number-btn'></span> </div")
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
		    		$(".builder-area").append("<div class='col-md-12'><label> <i class='fas fa-edit edit-icon' id='click-radio' data-toggle='modal' data-target='#textModal'> <b>Choose one</b></i></label>  <span><input type='radio' name='radio-btn' value='option1'>Option 1</span>  <span><input type='radio' name='radio-btn' value='option2'>Option 2</span> </div")
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
		    		$(".builder-area").append("<div class='col-md-12'><label> <i class='fas fa-edit edit-icon' id='click-check' data-toggle='modal' data-target='#textModal'><b>Select here</b></i> </label> <input type='checkbox' name='check1'>Option 1 <span><input type='checkbox' name='check2'>Option 2</span> </div")
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
		    		$(".builder-area").append("<div class='col-md-12 form-element'><label><i class='fas fa-edit edit-icon' id='click-submit' data-toggle='modal' data-target='#textModal'> <b>Submit </b></i> </label> <input type='submit' value='Submit Here '> </div")
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
		  			$(".builder-area").append("<div class='col-md-12 form-element'><label> <i class='fas fa-edit edit-icon' id='click-reset' data-toggle='modal' data-target='#textModal'> <b>Reset all</b></i> </label> <input type='reset' value='Reset Here'> </div")
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
		    		$(".builder-area").append("<div class='col-md-12 form-element'><label><i class='fas fa-edit edit-icon' id='click-textarea' data-toggle='modal' data-target='#textModal'><b>Textarea</b></i>  </label><br> <textarea rows='5' cols='20'></textarea> </div")	
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
		    		$(".builder-area").append("<div class='col-md-12 form-element'><label><i class='fas fa-edit edit-icon' id='click-drop' data-toggle='modal' data-target='#textModal'><b>Select here</b></i></label> <select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select> </div")
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
		    		$(".builder-area").append("<div class='col-md-12 form-element'><label><i class='fas fa-edit edit-icon' id='click-date' data-toggle='modal' data-target='#textModal'><b>Date </b></i> </label> <input type='date'> </div")
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
		    		$(".builder-area").append("<div class='col-md-12 form-element'><label><i class='fas fa-edit edit-icon' id='click-file' data-toggle='modal' data-target='#textModal'><b>Upload Document </b></i> </label> <input type='file'> </div")
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
		    		$(".builder-area").append("<div class='col-md-12 form-element'><label><i class='fas fa-edit edit-icon' id='click-time' data-toggle='modal' data-target='#textModal'><b>Time </b></i> </label> <input type='time'> </div")	
		    	}
		    });


		    $("#form-id").droppable();
			$("#form-id").disableSelection();
			$("#form-id").sortable();


		});


// Change properties using Button 

$(function(){
		$("#small").on("click", function(){
			$(".form-element").removeClass("col-md-12").removeClass("col-md-8").addClass("col-md-6");
			$(".form-element").css({"width":"50%"});
		});
});

$(function(){
		$("#medium").on("click", function(){
			$(".form-element").removeClass("col-md-12").removeClass("col-md-6").addClass("col-md-8");
			$(".form-element").css({"width":"75%"});
		});
});

$(function(){
		$("#large").on("click", function(){
			$(".form-element").removeClass("col-md-6").removeClass("col-md-8").addClass("col-md-12");
			$(".form-element").css({"width":"100%"});
		});
});