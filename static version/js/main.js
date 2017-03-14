var taskNum=0;
var limitNum=0;
var resourceNum=0;

var taskAttriNum=new Array();
var limitAttriNum=new Array();

function taskOtherClick(x,i,j){
  if(x.value=="Other"){
    $("#task"+i+"Attribute"+j).removeClass("hide");
  }
  else{
    $("#task"+i+"Attribute"+j).addClass("hide");
  }
}

function limitOtherClick(x,i,j){
  if(x.value=="Other"){
    $("#limit"+i+"Attribute"+j).removeClass("hide");
  }
  else{
    $("#limit"+i+"Attribute"+j).addClass("hide");
  }
}

function addTask(){
  taskNum++;
  taskAttriNum.push(new Array());
  taskAttriNum[taskNum-1]=2;
  var html='<div id="task'+(taskNum-1)+'Container" class="task">\
    <h4>task'+(taskNum-1)+'  <span onClick="removeTask('+(taskNum-1)+')" class="glyphicon glyphicon-remove" aria-hidden="true"></span></h4>\
    <div id="task'+(taskNum-1)+'" class="item-container">';
  for(var i=0;i<taskAttriNum[taskNum-1];i++){
    html=html+'<form class="form-inline">\
      <div class="item form-group ">\
        <select id="task'+(taskNum-1)+'Key'+i+'" class="form-control" onchange="taskOtherClick(this,'+(taskNum-1)+','+i+')">\
          <option>Select</option>\
          <option>A</option>\
          <option>B</option>\
          <option>C</option>\
          <option>D</option>\
          <option>E</option>\
          <option>Other</option>\
        </select>\
        <input id="task'+(taskNum-1)+'Attribute'+i+'" type="text" class="form-control attribute-input hide" placeholder="Attribute">\
        <input id="task'+(taskNum-1)+'Value'+i+'" type="text" class="form-control" placeholder="Value">\
      </div>\
    </form>';
  }
  html=html+'<button id="addTaskAttribute'+(taskNum-1)+'" onClick="addTaskAttribute('+(taskNum-1)+')" type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Attribute</button>\
    </div>\
    </div>';
  $("#addTask").before(html);
}

function removeTask(i){
  $("#task"+i+"Container").remove();
  for(var j=i+1;j<taskNum;j++){
    $("#task"+j+"Container").attr("id","task"+(j-1)+"Container");
    $("#task"+(j-1)+"Container").children("h4").html('task'+(j-1)+'  <span onClick="removeTask('+(j-1)+')" class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
    $("#task"+j).attr("id","task"+(j-1));

    for(var k=0;k<taskAttriNum[j];k++){
      $("#task"+(j)+"Key"+k).attr("id","task"+(j-1)+"Key"+k);
      $("#task"+(j-1)+"Key"+k).attr("onchange","taskOtherClick(this,"+(j-1)+","+k+")");
      $("#task"+(j)+"Attribute"+k).attr("id","task"+(j-1)+"Attribute"+k);
      $("#task"+(j)+"Value"+k).attr("id","task"+(j-1)+"Value"+k);
    }

    $("#addTaskAttribute"+j).attr("id","addTaskAttribute"+(j-1));
    $("#addTaskAttribute"+(j-1)).attr("onClick","addTaskAttribute("+(j-1)+")");
  }
  taskAttriNum.splice(i,1);
  taskNum--;
}

function addTaskAttribute(id){

  $("#addTaskAttribute"+id).before('<form class="form-inline">\
    <div class="item form-group ">\
      <select id="task'+(id)+'Key'+taskAttriNum[id]+'" class="form-control" onchange="taskOtherClick(this,'+(id)+','+taskAttriNum[id]+')">\
        <option>Select</option>\
        <option>A</option>\
        <option>B</option>\
        <option>C</option>\
        <option>D</option>\
        <option>E</option>\
        <option>Other</option>\
      </select>\
      <input id="task'+(id)+'Attribute'+taskAttriNum[id]+'" type="text" class="form-control attribute-input hide" placeholder="Attribute">\
      <input id="task'+(id)+'Value'+taskAttriNum[id]+'" type="text" class="form-control" placeholder="Value">\
    </div>\
  </form>');
  taskAttriNum[id]++;
}

function addLimit(){
  limitNum++;
  limitAttriNum.push(new Array());
  limitAttriNum[limitNum-1]=2;
  var html='<div id="limit'+(limitNum-1)+'Container" class="limit">\
    <h4>limit'+(limitNum-1)+'  <span onClick="removeLimit('+(limitNum-1)+')" class="glyphicon glyphicon-remove" aria-hidden="true"></span></h4>\
    <div id="limit'+(limitNum-1)+'" class="item-container">';
  for(var i=0;i<limitAttriNum[limitNum-1];i++){
    html=html+'<form class="form-inline">\
      <div class="item form-group ">\
        <select id="limit'+(limitNum-1)+'Key'+i+'" class="form-control" onchange="limitOtherClick(this,'+(limitNum-1)+','+i+')">\
          <option>Select</option>\
          <option>A</option>\
          <option>B</option>\
          <option>C</option>\
          <option>D</option>\
          <option>E</option>\
          <option>Other</option>\
        </select>\
        <input id="limit'+(limitNum-1)+'Attribute'+i+'" type="text" class="form-control attribute-input hide" placeholder="Attribute">\
        <input id="limit'+(limitNum-1)+'Value'+i+'" type="text" class="form-control" placeholder="Value">\
      </div>\
    </form>';
  }
  html=html+'<button id="addLimitAttribute'+(limitNum-1)+'" onClick="addLimitAttribute('+(limitNum-1)+')" type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Attribute</button>\
    </div>\
    </div>';
  $("#addLimit").before(html);
}

function removeLimit(i){
  $("#limit"+i+"Container").remove();
  for(var j=i+1;j<limitNum;j++){
    $("#limit"+j+"Container").attr("id","limit"+(j-1)+"Container");
    $("#limit"+(j-1)+"Container").children("h4").html('limit'+(j-1)+'  <span onClick="removeLimit('+(j-1)+')" class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
    $("#limit"+j).attr("id","limit"+(j-1));

    for(var k=0;k<limitAttriNum[j];k++){
      $("#limit"+(j)+"Key"+k).attr("id","limit"+(j-1)+"Key"+k);
      $("#limit"+(j-1)+"Key"+k).attr("onchange","limitOtherClick(this,"+(j-1)+","+k+")");
      $("#limit"+(j)+"Attribute"+k).attr("id","limit"+(j-1)+"Attribute"+k);
      $("#limit"+(j)+"Value"+k).attr("id","limit"+(j-1)+"Value"+k);
    }

    $("#addLimitAttribute"+j).attr("id","addLimitAttribute"+(j-1));
    $("#addLimitAttribute"+(j-1)).attr("onClick","addLimitAttribute("+(j-1)+")");
  }
  limitAttriNum.splice(i,1);
  limitNum--;
}

function addLimitAttribute(id){

  $("#addLimitAttribute"+id).before('<form class="form-inline">\
    <div class="item form-group ">\
      <select id="limit'+(id)+'Key'+limitAttriNum[id]+'" class="form-control" onchange="limitOtherClick(this,'+(id)+','+limitAttriNum[id]+')">\
        <option>Select</option>\
        <option>A</option>\
        <option>B</option>\
        <option>C</option>\
        <option>D</option>\
        <option>E</option>\
        <option>Other</option>\
      </select>\
      <input id="limit'+(id)+'Attribute'+limitAttriNum[id]+'" type="text" class="form-control attribute-input hide" placeholder="Attribute">\
      <input id="limit'+(id)+'Value'+limitAttriNum[id]+'" type="text" class="form-control" placeholder="Value">\
    </div>\
  </form>');
  limitAttriNum[id]++;
}

function addResource(){
  var html='<div id="resource'+(resourceNum)+'Container" class="resource">\
    <h4>resource'+resourceNum+'  <span onClick="removeResource('+(resourceNum)+')" class="glyphicon glyphicon-remove" aria-hidden="true"></span></h4>\
    <div id="resource'+resourceNum+'" class="item-container">\
      <form class="form-inline">\
        <div class="item form-group ">\
          <input id="resource'+resourceNum+'time" type="text" class="form-control" placeholder="TIME">\
          <input id="resource'+resourceNum+'cpu" type="text" class="form-control" placeholder="CPU">\
          <input id="resource'+resourceNum+'ram" type="text" class="form-control" placeholder="RAM">\
          <input id="resource'+resourceNum+'storage" type="text" class="form-control" placeholder="STORAGE">\
        </div>\
      </form>\
    </div>\
  </div>';
  $("#addResource").before(html);
  resourceNum++;
}

function removeResource(i){
  $("#resource"+i+"Container").remove();
  for(var j=i+1;j<resourceNum;j++){
    $("#resource"+j+"Container").attr("id","resource"+(j-1)+"Container");
    $("#resource"+(j-1)+"Container").children("h4").html('resource'+(j-1)+'  <span onClick="removeResource('+(j-1)+')" class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
    $("#resource"+j).attr("id","resource"+(j-1));

    $("#resource"+(j)+"time").attr("id","resource"+(j-1)+"time");
    $("#resource"+(j)+"cpu").attr("id","resource"+(j-1)+"cpu");
    $("#resource"+(j)+"ram").attr("id","resource"+(j-1)+"ram");
    $("#resource"+(j)+"storage").attr("id","resource"+(j-1)+"storage");
  }
  resourceNum--;
}

function execute(){
  $("#log").html('Status: success<p>Log: show the result got from algorithm');
}

$(document).ready(function(){
/*
  for(var i=0;i<taskNum;i++){
    $("#tasks").after('<div class="task">\
      <h4>task1</h4>\
      <div id="task1" class="item-container">\
        <form class="form-inline">\
          <div class="item form-group ">\
            <select id="task1Key1" class="form-control" onchange="taskOtherClick(this)">\
              <option>Select</option>\
              <option>A</option>\
              <option>B</option>\
              <option>C</option>\
              <option>D</option>\
              <option>E</option>\
              <option>Other</option>\
            </select>\
            <input id="task1Attribute1" type="text" class="form-control attribute-input hide" placeholder="Attribute">\
            <input id="task1Value1" type="text" class="form-control" placeholder="Value">\
          </div>\
        </form>\
        <button id="addAttribute1" onClick="addAttribute(\'addAttribute1\')" type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Attribute</button>\
      </div>\
    </div>');
  }
  */
});
