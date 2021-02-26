for (var index=0; i<10; i++){
  //code block
  //create 10 divs inside the container div with class name = "box"
  var boxEl = document.createElement("div");
  boxEl.className="box";
  //add id to each box that looks like box_id_0, box_id_1, ...
  //boxEl.id="box_id_ "+(index+1);
  boxEl.id="box_id_ "+(index+=1);
  document.getElementById('container').appendChild(boxEl);
  console.log(index);

}
for (var i= 0; i<10, i++){
  $('container').append("<div class='box'></div>")
}

// var counter =0
//while(counter<10){
//code block
  //console.log(counter);
  //counter++;
  //counter= counter+1;
  //counter+=1;

}
