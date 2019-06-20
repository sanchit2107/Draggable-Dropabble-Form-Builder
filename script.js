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
		    		// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10px;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12 text-element form-element'><label> <i class='fas fa-edit edit-icon' id='click-text' data-toggle='modal' data-target='#textModal'><b>Name </b></i></label> <input type='text' placeholder='text here' id='text-id'> </div>")
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
		    		// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10px;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12 pass-element form-element'><label> <i class='fas fa-edit edit-icon' id='click-pass' data-toggle='modal' data-target='#textModal'><b>Password </b></i></label> <input type='password' placeholder='password here' id='pass-id' > </div>")
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
		    		// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10px;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12 email-element form-element'><label> <i class='fas fa-edit edit-icon' id='click-email' data-toggle='modal' data-target='#textModal'><b>Email</b></i></label> <input type='email' placeholder='email here' id='email-id' > </div>")
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
		    		// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10px;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12 num-element form-element'><label> <i class='fas fa-edit edit-icon' id='click-radio' data-toggle='modal' data-target='#textModal'> <b>Number</b></i></label>  <span><input type='number' name='number-btn' id='num-id'></span> </div>")
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
		    		// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10px;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12'><label> <i class='fas fa-edit edit-icon' id='click-radio' data-toggle='modal' data-target='#textModal'> <b>Choose one</b></i></label>  <span><input type='radio' name='radio-btn' value='option1' id='radio-id'>Option 1</span>  <span><input type='radio' name='radio-btn' value='option2'>Option 2</span> </div>")
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
		    		// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10px;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12'><label> <i class='fas fa-edit edit-icon' id='click-check' data-toggle='modal' data-target='#textModal'><b>Select here</b></i> </label> <input type='checkbox' name='check1' id='check-id'>Option 1 <span><input type='checkbox' name='check2'>Option 2</span> </div>")
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
		    		// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10px;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12 submit-element form-element'><label><i class='fas fa-edit edit-icon' id='click-submit' data-toggle='modal' data-target='#textModal'> <b>Submit </b></i> </label> <input type='submit' value='Submit Here ' id='submit-id'> </div>")
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
		  			// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10px;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12 reset-element form-element'><label> <i class='fas fa-edit edit-icon' id='click-reset' data-toggle='modal' data-target='#textModal'> <b>Reset all</b></i> </label> <input type='reset' value='Reset Here' id='reset-id'> </div>")
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
		    		// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10px;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12 textarea-element form-element'><label><i class='fas fa-edit edit-icon' id='click-textarea' data-toggle='modal' data-target='#textModal'><b>Textarea</b></i>  </label><br> <textarea rows='5' cols='20' id='textarea-id'></textarea> </div>")	
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
		    		// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10px;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12 drop-element form-element'><label><i class='fas fa-edit edit-icon' id='click-drop' data-toggle='modal' data-target='#textModal'><b>Select here</b></i></label> <select id='drop-id'><option>Option 1</option><option>Option 2</option><option>Option 3</option></select> </div>")
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
		    		// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10x;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12 date-element form-element'><label><i class='fas fa-edit edit-icon' id='click-date' data-toggle='modal' data-target='#textModal'><b>Date </b></i> </label> <input type='date'id='date-id'> </div>")
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
		    		// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10px;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12 file-element form-element'><label><i class='fas fa-edit edit-icon' id='click-file' data-toggle='modal' data-target='#textModal'><b>Upload Document </b></i> </label> <input type='file' id='file-id'> </div>")
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
		    		// $(".properties-area").html("<label><span style='font-weight: 700; padding-top: 10px;'>Field Size</span></label><button type='button' class='btn btn-light' id='small'>Small</button><button type='button' class='btn btn-light' id='medium'>Medium</button><button type='button' class='btn btn-light' id='large'>Large</button>")
		    		$(".builder-area").append("<div class='col-md-12 time-element form-element'><label><i class='fas fa-edit edit-icon' id='click-time' data-toggle='modal' data-target='#textModal'><b>Time </b></i> </label> <input type='time' id='time-id'> </div>")	
		    	}
		    });


		    $("#form-id").droppable();
			$("#form-id").disableSelection();
			$("#form-id").sortable();


		});


// Show and Hide to change the field size
// Input type
$(document).on('mouseenter', '#text-id', function() {
	$("#text-id").on("focus", function(){
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
	});
});
$(document).on('mouseenter', '#pass-id', function() {
	$("#pass-id").on("focus", function(){
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
	});
});
$(document).on('mouseenter', '#email-id', function() {
	$("#email-id").on("focus", function(){
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
	});
});
$(document).on('mouseenter', '#num-id', function() {
	$("#num-id").on("focus", function(){
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
	});
});
$(document).on('mouseenter', '#radio-id', function() {
	$("#radio-id").on("focus", function(){
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
});
$(document).on('mouseenter', '#check-id', function() {
	$("#check-id").on("focus", function(){
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
});
$(document).on('mouseenter', '#submit-id', function() {
	$("#submit-id").on("focus", function(){
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
});
$(document).on('mouseenter', '#reset-id', function() {
	$("#reset-id").on("focus", function(){
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
});
$(document).on('mouseenter', '#textarea-id', function() {
	$("#textarea-id").on("focus", function(){
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
	});
});
$(document).on('mouseenter', '#drop-id', function() {
	$("#drop-id").on("focus", function(){
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
});
$(document).on('mouseenter', '#date-id', function() {
	$("#date-id").on("focus", function(){
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
});
$(document).on('mouseenter', '#file-id', function() {
	$("#file-id").on("focus", function(){
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
});
$(document).on('mouseenter', '#time-id', function() {
	$("#time-id").on("focus", function(){
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
});


// Change properties using Button 

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
