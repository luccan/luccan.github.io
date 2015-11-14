/* list all relevance */
var listrel = [];
for (var i = 0; i < data.length; i++) {
	for (var rel in data[i].relevance) {
		if (listrel.indexOf(rel) < 0){
			listrel.push(rel);
		}
	}
}
for (var i = 0; i < relevance_relations.length; i++) {
	if (listrel.indexOf(relevance_relations[i].parent) < 0){
		listrel.push(relevance_relations[i].parent);
	}
}
listrel = listrel.sort();

/* generate weight matrix (one way) */
var relMatrix = {};
for (var i = 0; i < listrel.length; i++) {
	relMatrix[listrel[i]] = {};
	for (var j = 0; j < listrel.length; j++) {
		if (i==j){
			relMatrix[listrel[i]][listrel[j]] = 10;
		} else {
			relMatrix[listrel[i]][listrel[j]] = 0;
		}
	}
	relMatrix[listrel[i]]["done"] = 0;
}
console.log(listrel);

function rec_relevance(property, score){
	if (relMatrix[property]["done"]==1){
		console.log("Locked property.");
		return;
	} else if (relMatrix[property]["done"]==2){
		return;
	}
	relMatrix[property]["done"] = 1;
	for (var i = 0; i < relevance_relations.length; i++) {
		if (relevance_relations[i].parent==property){
			//console.log("parent = " + property);
			for (var child_property in relevance_relations[i].child) {
				//console.log("child = " + child_property);
				if (!(relMatrix[child_property] === undefined)){ //ignore unused child branch
					rec_relevance(child_property, 10);
				}
				var relation_score = 0.1 * score * relevance_relations[i].child[child_property];
				for (var childmatrix_property in relMatrix[child_property]) { //iterate through child property's set of matrix
					var relation_childscore = 0.1 * relation_score * relMatrix[child_property][childmatrix_property];
					if (relation_childscore > relMatrix[property][childmatrix_property]) {
						relMatrix[property][childmatrix_property] = relation_childscore;
					}
				}
				/*if (relation_score > relMatrix[property][child_property]) {
					relMatrix[property][child_property] = relation_score;
				}*/
			}
			break;
		}
	}
	relMatrix[property]["done"] = 2;
	//console.log(property + " done");
}

for (var i = 0; i < relevance_relations.length; i++) { //iterate through all relevance relations
	rec_relevance(relevance_relations[i].parent, 10);
}

console.log(relMatrix);

/*
** Data Visualization Region
*/
function relevance_score(property, data){
	var score = 0.0;
	for (var rel in data.relevance) {
		score += 0.01 * relMatrix[property][rel] * data.relevance[rel] * data.priority;
	}
	return score;
}
function max_relevance(property, data){
	var score = 0.0;
	for (var rel in data.relevance) {
		score = Math.max(score, relMatrix[property][rel] * data.relevance[rel]);
	}
	return score;
}

/* accepts any number of arguments, append "-" in front for descending order */
function dynamic_sort(){
	var sortOrders = [];
	var properties = [];
	for( var i = 0; i < arguments.length; i++ ) {
		if(arguments[i][0] === "-") {
			sortOrders.push(-1);
			properties.push(arguments[i].substr(1));
		} else {
			sortOrders.push(1);
			properties.push(arguments[i]);
		}
	}
    
    return function (a,b) {
		var i = 0;
		var result = 0;
		while (result==0 && i<properties.length){
			var result = (a[properties[i]] < b[properties[i]]) ? -1 : (a[properties[i]] > b[properties[i]]) ? 1 : 0;
			result = result * sortOrders[i];
			i++;
		}
        return result;
    }
}

function sort_data(list){
	/* indexing data with relevance score */
	data_score = [];
	for (var i = 0; i < data.length; i++){
		data_score.push({ data: i, name: data[i].title, on: data[i].end, score: 0.0, relevance: 0.0 });
	}
	/* for every weighted properties */
	for (var i = 0; i < list.length; i++){
		if (relMatrix[list[i].property] !== undefined){ //if weighted property is valid
			for (var j = 0; j < data.length; j++){
				var score = 0.1 * list[i].weight * relevance_score(list[i].property, data[j]);
				data_score[j].score += score;
				data_score[j].relevance = Math.max(data_score[j].relevance, max_relevance(list[i].property, data[j]));
			}
		}
	}
	
	data_score.sort(dynamic_sort("-score", "-on"));
	console.log(data_score);
	for (var i = 0; i < data.length; i++){
		data_score[i].id = i;
	}
	return data_score;
}

/* read Query Parameters */
var params = {};

if (location.search) {
	var parts = location.search.substring(1).split('&');

	for (var i = 0; i < parts.length; i++) {
		var nv = parts[i].split('=');
		if (!nv[0]) continue;
		params[nv[0]] = nv[1] || true;
	}
}
if (typeof params.property === "undefined" || typeof params.weight === "undefined"){
	//default
	params.property = "";
	params.weight = "";
}
var list = [];
params.property = params.property.split(",");
params.weight = params.weight.split(",");
for (var i=0;i<Math.min(params.property.length, params.weight.length);i++){
	list.push({ property: params.property[i], weight: params.weight[i] });
}
console.log(list);
var timeline_data = sort_data(list);
console.log(timeline_data);

function generate_dropdown_row(name, id){
	var options_listrel = '<option value="">Choose a property</option>';
	for (var i=0;i<listrel.length;i++){
		options_listrel += '<option value="'+listrel[i]+'">'+listrel[i]+'</option>'
	}
	var options_weight = '';
	for (var i=1;i<=10;i++){
		options_weight += '<option value="'+i+'">'+i+'</option>'
	}
	var result = '\
	<div class="row lowvpadding" id="'+name+id+'-row">\
		<div class="col-xs-8">\
			<select class="form-control" id="'+name+id+'-property">\
				<OPTIONS_LISTREL>\
			</select>\
		</div>\
		<div class="col-xs-4">\
			<select class="form-control" id="'+name+id+'-weight">\
				<OPTIONS_WEIGHT>\
			</select>\
		</div>\
	</div>\
	'
	result = result.replace('<OPTIONS_LISTREL>',options_listrel);
	result = result.replace('<OPTIONS_WEIGHT>',options_weight);
	return result;
}
function add_sort_row(){
	if (sort_properties < 5){
		$('#sort-dropdown-content').append(generate_dropdown_row('sort', sort_properties+1));
		sort_properties+=1;
		$('#sort'+sort_properties+'-weight').val(10); //set default value
	} else {
		alert('Unable to add more Properties!');
	}
}
function delete_sort_row(){
	if (sort_properties > 1){
		$('#sort'+sort_properties+'-row').remove();
		sort_properties-=1;
	} else {
		alert('You should select at least one Property!');
	}
}

var sort_properties = 0; //list.length
for (var i=0;i<list.length;i++){ //repopulate sort filter according to parameters
	add_sort_row();
	$('#sort'+(i+1)+'-property').val(list[i].property);
	$('#sort'+(i+1)+'-weight').val(list[i].weight);
}
if ($('#sort1-weight').val() == null){
	$('#sort1-weight').val(10);
}

$('#sort-add-btn').click(function(e){
	add_sort_row();
});
$('#sort-delete-btn').click(function(e){
	delete_sort_row();
});
$('#sort-submit-btn').click(function(e){
	var property = '';
	var weight = '';
	for (var i=1;i<=sort_properties;i++){
		var _property = $('#sort'+i+'-property').val();
		var _weight = $('#sort'+i+'-weight').val();
		if (_property != '' && _weight != ''){
			if (property!=''){
				property += ',';
				weight += ',';
			}
			property += _property;
			weight += _weight;
		}
	}
	var url = './index.html';
	if (property!=''){
		url += '?property=' + property + '&weight=' + weight;
	}
	window.location.href = url;
});

/*
** Region Template
*/
var aMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function display_model_str(data, is_active){
	var str = '<div class="item<IS_ACTIVE>">\
					<img src="<IMG_URL>" alt="<TITLE>">\
					<div class="carousel-caption">\
						<div class="carousel-caption-content">\
							<p><COMPANY></p>\
							<h1><TITLE></h1>\
							<p><POSITION> <START>-<END></p>\
							<b><DESC></b>\
							<div class="panel">\
								<DET>\
								<br/>\
								<p style="line-height: 1em;">Focus areas:</p>\
								<RELEVANCE>\
							</div>\
						</div>\
					</div>\
				</div>';
	if (is_active){
		str = str.replace('<IS_ACTIVE>',' active');
	} else {
		str = str.replace('<IS_ACTIVE>','');
	}
	str = str.replace('<COMPANY>',data.company);
	str = str.replace('<IMG_URL>',data.imgurl);
	str = str.replace('<TITLE>',data.title);
	str = str.replace('<TITLE>',data.title);
	str = str.replace('<POSITION>',data.position);
	str = str.replace('<START>',aMonths[data.start.getMonth()] + ' ' + data.start.getFullYear());
	str = str.replace('<END>',aMonths[data.end.getMonth()] + ' ' + data.end.getFullYear());
	str = str.replace('<DESC>',data.desc);
	str = str.replace('<DET>',data.details);
	var relevance_str = ''
	for (var rel in data.relevance){
		relevance_str += '<li>'+rel+'</li>';
	}
	str = str.replace('<RELEVANCE>',relevance_str);
	//console.log(str);
	return str;
}

var carousel_content_str = ''
var carousel_indicator_str = ''
for (var i = 0; i < data_score.length; i++) {
	var score_upper = Math.min(data_score[i].score, 100).toFixed(0);
	var raw_relevance = data_score[i].relevance.toFixed(0);
	var active = '';
	carousel_content_str += display_model_str(data[data_score[i].data], i==0);
	if (i==0){
		active = ' class="active" ';
	}
	carousel_indicator_str += '<a href="javascript:" data-toggle="tooltip"'+active+' title="Relevance: '+score_upper+'% \nScope: '+raw_relevance+'%"><li data-target="#timelineCarousel" data-slide-to="'+i+'" '+'style="background-color: rgba(255,255,255,'+score_upper/100.0+');"></li></a>'
	//console.log(data_score[i].id);
}
document.getElementById('timelineCarouselInner').innerHTML = carousel_content_str;
document.getElementById('timelineCarouselIndicator').innerHTML = carousel_indicator_str;

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
	//$('[data-toggle="tooltip"]').tooltip('show');
	$('[data-toggle="tooltip"]').mouseleave(function() { $(this).tooltip('hide'); });
});
//console.log(carousel_content_str);