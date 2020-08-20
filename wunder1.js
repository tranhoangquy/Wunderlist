window.addEventListener("resize",function(){
    if(window.innerWidth >1000 ){
        // console.log("123");
        document.getElementById("slide").style.width = "280px";
        document.getElementById("searchIp").style.display = "";
        document.getElementsByClassName("search-icon")[0].style.display ="";
        document.getElementById("ustool").style.display ="";
        document.getElementById("title").style.display ="";
        for(var i = 0; i < document.getElementsByClassName("title").length; i++){
            document.getElementsByClassName("title")[i].style.display = "";
        }
        document.getElementsByClassName("sidebarAction-label")[0].style.display = "";
    }
    
    if(window.innerWidth <1000 ){
        // console.log("123");
        document.getElementById("slide").style.width = "43px";
        document.getElementById("searchIp").style.display = "none";
        document.getElementsByClassName("search-icon")[0].style.display ="none";
        document.getElementById("ustool").style.display ="none";
        document.getElementById("title").style.display ="none";
        for(var i = 0; i < document.getElementsByClassName("title").length; i++){
            document.getElementsByClassName("title")[i].style.display = "none";
        }
        document.getElementsByClassName("sidebarAction-label")[0].style.display = "none";
    }
});


//-----------------------------------------Ẩn main-left--------------------------

    document.querySelector("#slide #ltToogle").addEventListener("click",displayleft)
function displayleft(){

        if(window.innerWidth >1000 ){
            document.getElementById("slide").classList.toggle("slide");
            document.getElementById("slide").classList.remove("silde1")
        }
        else{
            document.getElementById("slide").classList.toggle("slide1");
            document.getElementById("slide").classList.remove("silde")
        }
}

  
// -------------------------------ẩn main-right--------------------------------------
// window.addEventListener('load',function(){
    var close = document.querySelector("#main-right .close");
    close.addEventListener("click",function(){
    //    document.getElementById("main-right").style.display="none";
       document.getElementById("main-right").style.width = "0px";
       
    });
// });


  //-------------------------------show contextmenu center---------------------------
var context= document.querySelector("#todo");
context.addEventListener("contextmenu", function(event){
   
    let x = event.clientX;
    let y = event.clientY; 
    let height = window.innerHeight;
    let chieucao = height -y;
    x = x + 'px';
    let y1= chieucao-420;
    if((chieucao-355)>0)
    {
    y = y + 'px';
    }
    else{
        y= y + y1 ;
        y= y  +'px';
        // console.log(y)
    }
    
    document.querySelector("#context-menu-huu").style.display = "block";
    document.querySelector("#context-menu-huu").setAttribute("style", "display:block; top:"+y+"; left:"+x+"");
    event.preventDefault();
    
   
});

document.body.addEventListener('click',function(e){
    

   var user = document.getElementById('context-menu-huu');
    // var usert = document.getElementsByClassName('taskList')[0];
    if (!user.contains(e.target)) {
        user.style.display = 'none';  
    }
});


//--------------------------------------------hiện user-ck-------------------------------------
document.getElementById('dropdow').addEventListener('click',function(){

    var userck = document.getElementById('user-ck');
    if (userck.style.display == 'block') {
        userck.style.display = 'none';
    } else {
        userck.style.display = 'block';
    }
});
document.body.addEventListener('click',e =>{
    let user = document.getElementById('user-ck');
    let usertool = document.getElementById('user-tool');
    if (!user.contains(e.target) && (!usertool.contains(e.target))) {
        user.style.display = 'none';
    }
    
})

//------------------------------------- hien contectmenu left---------------------------------
var contextlist= document.querySelector(".list-scroll");
contextlist.addEventListener("contextmenu", function(event){
    let x = event.clientX;
    let y = event.clientY; 
    let height = window.innerHeight;
    let chieucao = height -y;
    x = x + 'px';
    let y1= chieucao-420;
    if((chieucao-355)>0)
    {
    y = y + 'px';
    }
    else{
        y= y + y1;
        y= y +'px';
        // console.log(y)
    }
    
    document.querySelector("#context-list").style.display = "block";
    document.querySelector("#context-list").setAttribute("style", "display:block; top:"+y+"; left:"+x+"");
    event.preventDefault();
    
});
document.body.addEventListener('click',function(e){
    

   var user = document.getElementById('context-list');
    // var usert = document.getElementsByClassName('taskList')[0];
    if (!user.contains(e.target)) {
        user.style.display = 'none';  
    }
});
//--------------------------------- hien account setting--------------------------------------
document.getElementById('account-se').addEventListener('click',function(){
    document.getElementById('ouibounce-account').style.display = 'block';
    document.getElementById('ouibounce-account').style.transition =  '0,5' +'s';
   
});
document.getElementById('done').addEventListener('click',function(){
    document.getElementById('ouibounce-account').style.display = 'none';
});


//------------------------------------------- hien create-list---------------------------------
document.getElementById('sidebarAction').addEventListener('click',function(){
    document.getElementById('create-new-list').style.display="block";
});
document.getElementById('Cance').addEventListener('click',function(){

    document.getElementById('create-new-list').style.display="none";
    document.getElementById('content').value="";
})


//----------------------------keydow an account-setting and create-list------------------------------

document.body.addEventListener('keydown',function(e){
    if(e.keyCode ==27){
        if(!document.getElementById('create-new-list').style.display == 'block'){
            document.getElementById('create-new-list').style.display ='none';
        }
        else if(document.getElementById('ouibounce-account').style.display == 'block'){
            document.getElementById('ouibounce-account').style.display ='none';
        }
        else{
            document.getElementById('create-new-list').style.display="none";
        }
        if(document.getElementById("alert-confirm-delete-list-center").style.display == "block"){
            document.getElementById("alert-confirm-delete-list-center").style.display = "none";
        }
    }
});


//-------------------------------------- click outside hiden account --------------------------------

document.getElementsByClassName('underlay')[0].addEventListener('click', e => {
   
    var acc = document.getElementById('account-setting');
    var account = document.getElementById('ouibounce-account');
    if(e.target.id !== 'acc'){
        account.style.display = 'none';
        
    }

});

// click outside hiden create-new-list
document.querySelector('#create-new-list .underlay').addEventListener('click',e =>{
    var cre = document.getElementById('content');
    var create = document.getElementById('create-new-list');
    if(e.target.id !== 'cre'){
        create.style.display = 'none';
    }
    
});


//---------------------------------------delete list-scroll--------------------------------
var c= document.getElementsByClassName("list");
function deletelist(){
    
        c=this;
        document.getElementById('delete3').addEventListener('click',function(){
            c.remove();
            document.getElementById('context-list').style.display = "none";
        })
        
}

for (var i = 0; i<c.length; i++ ){
            c[i].addEventListener("contextmenu",deletelist)
      }


//--------------------------------------- chuyen mau list left--------------------------
function contextmenulist(){
   var active = document.querySelector(".activeTb");
   if (active != null){
       active.classList.remove("activeTb");
   }
   active = this;
   active.classList.add("activeTb")
}
for(var i = 0; i < c.length; i++){
    c[i].addEventListener('click',contextmenulist);
}



//-----------------------------hiện text list left lên Inbox(title)--------------------------
var title = document.getElementById('title-center')
for(var i = 0; i < c.length ; i++){
   
   c[i].addEventListener('click',valuetitlelist);
 
}
function valuetitlelist() {
    var title = document.getElementById('title-center')

    title.innerHTML=this.getElementsByTagName("span")[1].innerHTML;
   }




//---------------------------------add list left--------------------------

document.getElementById('CreateList').addEventListener("keydown",function(e){
    let txt = document.getElementById('CreateList').value;
    if (e.keyCode == 13){
        if(txt.trim().length >0){
            addlistLf();
        }
        else{
            alert('Bạn chưa nhập List Name');
        }
        
    }
})

function addlistLf(){
    var valuetxt = document.querySelector(".NameList input");
    var txt = document.getElementById('CreateList').value; 

    
    if(document.getElementById('CreateList').value.trim().length >0){
        var li = document.createElement("li");
        li.className = "list";
        var a = document.createElement("a");
        li.append(a);
        a.insertAdjacentHTML('beforeend', '<span  style="fill: #288ae9;" class="list-icon"><svg class="list rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Web-svgs" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="list"> <path d="M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z" id="K"> </path> </g> </g> </svg></span>')
        var span = document.createElement("span");
        span.className = "title"
        
        span.innerText = txt;
        a.appendChild(span)
        var ListCr = document.getElementById("ListCr");
        ListCr.appendChild(li);

        document.getElementById("create-new-list").style.display = "none";

        li.addEventListener("click",contextmenulist)
       li.addEventListener('click',valuetitlelist);
        li.addEventListener("contextmenu",deletelist)
        li.addEventListener("dblclick",dblclickcenter)
       
        
    }
    else if(document.getElementById('CreateList').value.length == 0)
    {
        alert("Bạn chưa nhập List Name");
        // document.getElementById('CreateList').focus();
    }
    
    document.getElementById('CreateList').value="";
}

document.getElementById('btSaveList').addEventListener("click",addlistLf);


// -------------------------chuyển màu tasklist---------------------
var task = document.getElementsByClassName("taskItem");
function colortasklist(){
    var taskIt = document.querySelector(".taskIt-active");
        if(taskIt != null){
            taskIt.classList.remove("taskIt-active")
        }
        taskIt = this
        taskIt.classList.add("taskIt-active");
        // console.log(this);
        
}

var lavel = null;
for(var i = 0; i < task.length; i++){
    // console.log(task[i]);
    task[i].addEventListener('click',colortasklist)
    task[i].addEventListener('dblclick',dblclickcenter)
 
    // task[i].addEventListener("dragstart",dragstart1);
    // task[i].addEventListener("drop",drop);
    // task[i].addEventListener("dragover",dragover);
    // task[i].addEventListener("dragend",dragEnd)
    // task[i].addEventListener("dragenter",dragEnter)
}

//--------------------------keo tha list center------------------------


// function dragstart1(e1){
//     e1.target.style.opacity = .3;
//     // e.target.style.
   

//     // var task_lavel = document.getElementsByClassName("taskItem")[0];
//      lavel = this;
//      e1.dataTransfer.setData("text/html",this.innerHTML)
// }
// function dragover(e1){
//     event.preventDefault();
// }

// function dragEnd(e1) {
//     // e1.target.style.boder = 1px so
//     this.style.opacity = '1';
//     this.style.background = "#ffff";

// };
// function dragEnter(e1){
    
// }
// function drop(e1){
//     if(lavel != this){
//         lavel.innerHTML = this.innerHTML;
//         this.innerHTML = event.dataTransfer.getData("text/html")
//     }
//    return false;
// }


//---------------------click star input center------------------------
document.getElementsByClassName("addtask-starred")[0].addEventListener("click",clickstarcenter)
function clickstarcenter(){
    const d = document.getElementById("D");
    var addTaskstar = document.getElementsByClassName("addtask-starred")[0];

    if (d.style.opacity != '1') {
        d.style.opacity = '1';
        addTaskstar.style.opacity = 'unset';
    } else {
        d.style.opacity = '0';
        addTaskstar.style.opacity = '0.7';
    }
}


// ----------------------------------dblclick center------------------------
var starhead = document.getElementById('starhead');
var titlehead = document.getElementsByClassName('title-head')
var varcenter;
function dblclickcenter(){

        document.getElementById('main-right').style.width = "367px";
    
    
        var txtcenter = document.querySelector(".item-wrapper span");
        
        let starhead = document.getElementById('starhead');

       let txtright = document.querySelector(".display-view ");

       var titlehead = document.getElementsByClassName('title-head')

       var box1 = document.getElementsByClassName('box1')
       var checkboxright = document.getElementById('detail-checkbox')
        
            // console.log(document.getElementsByClassName("taskItem-dele")[0].children[1].children[0])
            // console.log(this.children[2].children[0]);
       txtright.value = this.children[1].children[0].innerHTML;
        // console.log(document.querySelector(".title-head .star"));
        
    //    document.getElementById("detail-checkbox").innerHTML= this.children[0].innerHTML
    document.getElementById("detail-checkbox").children[0].style.display = "block"
    document.getElementById("detail-checkbox").children[1].style.display = "none";
    if(this.children[2].children[1].style.display == "block"){
        starright.children[0].style.display = "none";
        starright.children[1].style.display = "block";
    }
    else {
        starright.children[1].style.display = "none";
        starright.children[0].style.display = "block";
    }
       
       varcenter = this;
       
    //    checkboxright.innerHTML = document.querySelector(".box1 svg").innerHTML;

    //    txtright.innerHTML = document.querySelector(".taskItem-dele .item-wrapper span").innerHTML;
       

}





// -------------------------------------xóa list center-----------------------
document.getElementById('deletodo').addEventListener('click',function(){
    
    document.getElementById("alert-confirm-delete-list-center").style.display = "block";
    document.getElementById("context-menu-huu").style.display = "none";
})
function deletelistcenter(){
    task = this;
    document.getElementById('delete-to-do').addEventListener('click',function(){
        task.remove();
        document.getElementById("context-menu-huu").style.display = "none";
        document.getElementById("alert-confirm-delete-list-center").style.display = "none";
        document.getElementById("main-right").style.width = "0px";
    })
}
document.getElementById("cancel1").addEventListener("click",function(){
    document.getElementById("alert-confirm-delete-list-center").style.display = "none";
})
for(var i = 0; i < task.length; i++){
    task[i].addEventListener("contextmenu",deletelistcenter)
}



//-------------------------------- thêm list center-------------------------------------
document.getElementById('inputTask').addEventListener('keydown',function(e){
    if(e.keyCode == 13){
        
        addtasklist();
        document.getElementById("inputTask").value = "";    
    }

});

function addtasklist(){
    if(document.getElementById('inputTask').value.trim().length >0){
      var  addd = document.createElement("div")
      addd.setAttribute("draggable","true")
      addd.classList = "taskItem";
      var btn = document.createElement("button");
      btn.classList = "box"
      addd.append(btn)
      btn.insertAdjacentHTML("beforeend",'<svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>')
       
      var divItem = document.createElement("div");
        divItem.classList = "item-wrapper";
        addd.appendChild(divItem);   

        var span = document.createElement("span");
        span.innerHTML = document.getElementById('inputTask').value;
        divItem.append(span);

        var btnstar = document.createElement('button');
        addd.append(btnstar);
       


        const d = document.getElementById("D");
        var addTaskstar = document.getElementsByClassName("addtask-starred")[0];
    
        if (d.style.opacity != '1') {
            
             btnstar.insertAdjacentHTML("beforeend",'<svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>');
            btnstar.insertAdjacentHTML("beforeend",'<svg style="display:none" width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>');
        } else {
            d.style.opacity = '0';
            btnstar.insertAdjacentHTML("beforeend",'<svg style="display:none" width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>');
            btnstar.insertAdjacentHTML("beforeend",'<svg  width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>');
        }

        document.getElementById("todo").insertBefore(addd,document.getElementById("todo").childNodes[0]);
        addd.addEventListener("click",colortasklist)
        btnstar.addEventListener('click',clickstar)
        addd.addEventListener("contextmenu",deletelistcenter)
        btn.addEventListener("click",delecheck)
        btn.addEventListener("click",deletask)
        addd.addEventListener("dblclick",dblclickcenter)
        // addd.addEventListener("dragstart",dragstart1);
        // addd.addEventListener("drop",drop);
        // addd.addEventListener("dragover",dragover);
        // addd.addEventListener("dragend",dragEnd)
        
       
    }
       
    
    else{
        alert('Ban chua nhap list to-do')
    }
}


// ------------------đổi màu star centrt-------------------------------------------

function clickstar(){
    // if(this.parentElement.children[1].children[0].innerHTML== document.querySelector(".display-view ").innerHTML){
    //     document.querySelector('#starhead').innerHTML = this.innerHTML;
             
    // }
    if(this.children[1].style.display == "block"){
        
        // console.log(this);
        this.children[1].style.display ="none"
        this.children[0].style.display = "block";
        
        if(document.querySelector(".display-view").value == this.parentElement.children[1].children[0].innerHTML){
            starright.children[1].style.display = "none";
            starright.children[0].style.display = "block";
            this.children[1].style.display ="none"
            this.children[0].style.display = "block";
         }
        // console.log(document.getElementsByClassName("display-view"));
    }
        else{
          
            this.children[0].style.display = "none";
            this.children[1].style.display ="block"
        
            if(document.querySelector(".display-view").value == this.parentElement.children[1].children[0].innerHTML){
                starright.children[0].style.display = "none";
                starright.children[1].style.display = "block";
                this.children[0].style.display = "none";
                 this.children[1].style.display ="block"
            }
            
         }
        //  if(this.parentElement.children[2].children[0])
        // console.log(this.parentElement.children[1].children[0]);
    //     // let taskIt1 = document.querySelector(".taskItem")
    // if(this.parentElement.children[1].children[0].innerHTML== document.querySelector(".display-view ").innerHTML){
    //     document.querySelector('#starhead').innerHTML = this.innerHTML;
             
    // }
}


 var star = document.getElementsByClassName('star');
 for (var i = 0; i < star.length; i++){
     star[i].addEventListener('click',clickstar)
    
 }
 var starright = document.getElementById("starhead");
document.getElementById("starhead").addEventListener("click",function(){
    starright =this;
   if(this.children[1].style.display == "none"){
       this.children[0].style.display = "none";
       this.children[1].style.display ="block";
    //   console.log(varcenter1.children[1]);
    // varcenter1.children[2].children[1].style.display = "block";
    // varcenter1.children[2].children[0].style.display = "none";

        varcenter.children[2].children[1].style.display = "block";
       varcenter.children[2].children[0].style.display = "none";
     
    
   }
   else{
    this.children[1].style.display = "none";
    this.children[0].style.display ="block";
    // varcenter1.children[2].children[0].style.display = "block";
    // varcenter1.children[2].children[1].style.display = "none";
    varcenter.children[2].children[0].style.display = "block";
    varcenter.children[2].children[1].style.display = "none";
    
   }

    // console.log(this.children[1]);
    // console.log(varcenter)
    
    
});

 //-----------------------chuyển list center xuống delete list-------------------------------


 var checklistbox = document.getElementsByClassName("box");
 for(var i =0; i< checklistbox.length; i++ ){
     checklistbox[i].addEventListener("click",delecheck)
     checklistbox[i].addEventListener("click",deletask)
 }

 function delecheck(){
     task =this.parentElement;
    //  console.log(task);
     task.remove();
     
      
}



// --------hiện phần tử xóa task list xuống dưới---------------------------


  function deletask(){
   
    let childval =  document.getElementsByClassName("task-deleee")[0];

   

    var textdele = document.getElementsByClassName("item-wrapper").value;
    var ttt= this.parentElement

    var deletask = document.getElementsByClassName("taskItem-dele")[0];
    var clone_showcom = deletask.cloneNode(true);
    // console.log(clone);
    childval.append(clone_showcom);
    clone_showcom.children[1].children[0].innerHTML = ttt.children[1].children[0].innerHTML;
    if(this.parentElement.children[2].children[1].style.display == "block"){
        clone_showcom.children[2].children[1].style.display = "block"
        clone_showcom.children[2].children[0].style.display = "none"
    }
    else if(this.parentElement.children[2].children[0].style.display = "block"){
        clone_showcom.children[2].children[0].style.display = "block"
        clone_showcom.children[2].children[1].style.display = "none"
    }
    
        if(document.querySelector(".display-view").value == this.parentElement.children[1].children[0].innerHTML){
            document.querySelector("#detail-checkbox .task-check").style.display = "none";
            document.querySelector("#detail-checkbox .checkdele").style.display = "block";
        }
    
    clone_showcom.children[2].addEventListener("click",clickstar);
        clone_showcom.children[0].addEventListener("click",clickbox1)
        clone_showcom.children[0].addEventListener("click",addshowcom)
        clone_showcom.addEventListener("dblclick",dblclickshowcom);

   
}
//---------------------dblclick show complette-------------------------
for (var i = 0; i < document.getElementsByClassName('taskItem-dele').length; i++){
    document.getElementsByClassName('taskItem-dele')[i].addEventListener("dblclick",dblclickshowcom);
  
}

// var varcenter1
function dblclickshowcom() {
   
        document.getElementById('main-right').style.width = "367px";
    
    varcenter=this;
    let taskItem_dele = document.getElementsByClassName("taskItem-dele")[0]
    let txtright = document.querySelector(".display-view");
    var starhead = document.getElementById('starhead');
    taskItem_dele = this
    // console.log(this.children[1].children[0]);
    document.getElementById("detail-checkbox").children[1].style.display = "block"
    document.getElementById("detail-checkbox").children[0].style.display = "none";
    txtright.value = this.children[1].children[0].innerHTML;
    if(this.children[2].children[1].style.display == "block"){
        starright.children[0].style.display = "none";
        starright.children[1].style.display = "block";
    }
    else {
        starright.children[1].style.display = "none";
        starright.children[0].style.display = "block";
    }
    
    // console.log(varcenter1.children[2]); 
    
    
}

//----------------------click box1 show completed add list center--------------------
var ckbox1 = document.getElementsByClassName("box1");
for(var i = 0; i < ckbox1.length; i++){
    ckbox1[i].addEventListener("click", clickbox1)
    ckbox1[i].addEventListener("click", addshowcom)
}


var dlttask ;
function clickbox1(){
    dlttask = this.parentElement;
    // console.log(dlttask.children[1].children[0]);
    dlttask.remove();   
}

function addshowcom(){
  
    var  addd = document.createElement("div")
      addd.classList = "taskItem";
      var btn = document.createElement("button");
      btn.classList = "box"
      addd.append(btn)
      btn.insertAdjacentHTML("beforeend",'<svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>')
       
      var divItem = document.createElement("div");
        divItem.classList = "item-wrapper";
        addd.appendChild(divItem);   

        var span = document.createElement("span");
        span.innerHTML = dlttask.children[1].children[0].innerHTML;
        divItem.append(span);

        var btnstar = document.createElement('button');
        addd.append(btnstar);
       
        var startrang = '<svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>'
        startrang.className = "task-star";
        var stardo = '<svg style="display:none" width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>'
        stardo.className = "star-dd";
        // btnstar.insertAdjacentHTML("beforeend",stardo);
        btnstar.insertAdjacentHTML("beforeend",startrang);
        btnstar.insertAdjacentHTML("beforeend",stardo);
        document.getElementById("todo").insertBefore(addd,document.getElementById("todo").childNodes[0]);
        addd.addEventListener("click",colortasklist)
        btnstar.addEventListener('click',clickstar)
        addd.addEventListener("contextmenu",deletelistcenter)
        btn.addEventListener("click",delecheck)
        btn.addEventListener("click",deletask)
        addd.addEventListener("dblclick",dblclickcenter)
        if(document.querySelector(".display-view").value == this.parentElement.children[1].children[0].innerHTML){
            document.querySelector("#detail-checkbox .task-check").style.display = "block";
            document.querySelector("#detail-checkbox .checkdele").style.display = "none";
        }
    
}

//-----------------------------------add comment right----------------------------
 
document.getElementById("txtcomment").addEventListener("keydown",function(e){
    let txt = document.getElementById("txtcomment").value;
    if (e.keyCode == 13){
        if(txt.trim().length >0){
            addcomment();
            document.getElementById("txtcomment").value="";
        }
        else{
            alert('Bạn chưa nhập List Name');
        }
        
    }
})

function addcomment(){
    if(document.getElementById("txtcomment").value.trim().length >0){
            let divcomment = document.createElement("div");
            divcomment.classList = "content-inner ";
       
            let img =  document.createElement("img");
            img.setAttribute("src","D:\\TEST\\image\\ava.PNG");
            divcomment.append(img)
            let divtxtcomment = document.createElement("div");
            divtxtcomment.classList = "content-people-meta";
            divcomment.appendChild(divtxtcomment)
            let spanname = document.createElement("span")
            spanname.classList = "content-people-name-label";
            spanname.innerText = "Trần Hoàng Quy:";
            divtxtcomment.append(spanname);
            let spancomment = document.createElement("span")
            spancomment.classList = "valuenote";
            spancomment.innerHTML = document.getElementById("txtcomment").value;
            divtxtcomment.append(spancomment);
            let divdelete = document.createElement("div");
            divdelete.classList = "section-delete";
            divcomment.appendChild(divdelete);
            
            divdelete.insertAdjacentHTML("beforeend",'<svg class="delete" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="delete"> <path d="M10.72,9.9975 L13.86,6.8575 C14.04,6.6575 14.04,6.3375 13.86,6.1375 C13.66,5.9575 13.34,5.9575 13.14,6.1375 L10,9.2775 L6.86,6.1375 C6.66,5.9575 6.34,5.9575 6.14,6.1375 C5.96,6.3375 5.96,6.6575 6.14,6.8575 L9.28,9.9975 L6.14,13.1375 C5.96,13.3375 5.96,13.6575 6.14,13.8575 C6.24,13.9575 6.38,13.9975 6.5,13.9975 C6.62,13.9975 6.76,13.9575 6.86,13.8575 L10,10.7175 L13.14,13.8575 C13.24,13.9575 13.38,13.9975 13.5,13.9975 C13.62,13.9975 13.76,13.9575 13.86,13.8575 C14.04,13.6575 14.04,13.3375 13.86,13.1375 L10.72,9.9975 Z" id="4"></path> </g> </g> </svg><br>')
            // document.getElementById("note").insertBefore(divcomment,document.getElementById("note").childNodes[0])
            document.getElementById("note").append(divcomment);
            divcomment.addEventListener("click",removecomment)
        }

   
}

//----------------------------remove comment-----------------------
for(var i = 0; i < document.getElementsByClassName("section-delete").length; i++){
    document.getElementsByClassName("section-delete")[i].addEventListener("click",removecomment)
}
function removecomment(){
    var removecmt = document.getElementsByClassName("content-inner ")
    removecmt = this;
    this.remove();
}


//------------------------search-center-------------------------------
document.getElementById('searchIp').addEventListener("keyup",function(){
    let input_search = document.getElementById('searchIp');
    let fillter = input_search.value.toUpperCase();
    let task_Item = document.getElementsByClassName("taskItem");
    for(var i = 0; i < task_Item.length; i++){
        var text_task = task_Item[i].children[1].children[0].innerHTML;
        // console.log(text_task);
        if(text_task.toUpperCase().indexOf(fillter)>-1){
            task_Item[i].style.display = "";
        }
        else{
            task_Item[i].style.display = "none";
        }   
    }
})
// document.getElementById('searchIp').addEventListener(){
//     let input_search = document.getElementById('searchIp');
//     let fillter = input_search.value.toUpperCase();
//     let task_Item = document.getElementsByClassName("taskItem");
//     for(var i = 0; i < task_Item.length; i++){
//         var text_task = task_Item[i].children[1].children[0].innerHTML;
//         // console.log(text_task);
//         if(text_task.toUpperCase().indexOf(fillter)>-1){
//             task_Item[i].style.display = "";
//         }
//         else{
//             task_Item[i].style.display = "none";
//         }   
//     }
// }


//-----------------------------contextmenu show sompleted-------------------
var contextmenu_showcom= document.querySelector(".task-deleee");
contextmenu_showcom.addEventListener("contextmenu", function(event){
//    alert("!23")
    let x = event.clientX;
    let y = event.clientY; 
    let height = window.innerHeight;
    let chieucao = height -y;
    x = x + 'px';
    let y1= chieucao-420;
    if((chieucao-355)>0)
    {
    y = y + 'px';
    }
    else{
        y= y + y1;
        y= y +'px';
        // console.log(y);
        
    }
    
    document.querySelector("#context-menu-huu").style.display = "block";
    document.querySelector("#context-menu-huu").setAttribute("style", "display:block; top:"+y+"; left:"+x+"");
    event.preventDefault();
   
});
//--------------------------------------click checkbox right----------------------
var click_checkbox_right;
document.getElementById("detail-checkbox").addEventListener("click",function(){
    click_checkbox_right=this;
        if(this.children[0].style.display == "block"){
            this.children[0].style.display = "none";
            this.children[1].style.display = "block ";
            if(varcenter.children[1].children[0].innerHTML == this.parentElement.children[1].value){
                let menu2 = document.getElementsByClassName('taskList');
                varcenter.remove();
                
                for(var i = 0; i < menu2.length ; i++){
                    menu2[i].firstChild.remove();
            
                }
                // for(var i = 0; i < menu2.length ; i++){
                //     menu2[i].firstChild.remove();
            
                // }
                clickcheckbox_showcom();

            }
            
        }
        else{
            this.children[1].style.display = "none";
            this.children[0].style.display = "block ";
            // document.querySelector(".taskItem-dele").remove();
            add_showcomplete_right();
            let menu1 = document.getElementsByClassName('task-deleee');
           
            for(var i = 0; i < menu1.length ; i++){
                menu1[i].lastChild.remove();
            }
           
           
        }

    
    // console.log(document.getElementById("detail-checkbox"));
    
    //    if(varcenter.children[1].children[0].innerHTML == this.parentElement.children[1].innerHTML){
           
           
    //        if(document.querySelector("#detail-checkbox .task-check") !=null){
            
    //         varcenter.remove();
    //         clickcheckbox_showcom();
    //         this.parentElement.children[0].innerHTML = document.querySelector(".taskItem-dele .box1").innerHTML;
    //        }
    //        else {

    //         console.log(document.querySelector(".taskItem-dele .item-wrapper span"));
           
    //                 document.querySelector(".taskItem-dele").remove();
    //                 add_showcomplete_right();
    //                 console.log(dlttask);
    //                 this.parentElement.children[0].innerHTML = document.querySelector(".taskItem  .box").innerHTML;
                
    //         }
    //    }

    
})

function clickcheckbox_showcom(){
    let childval =  document.getElementsByClassName("task-deleee")[0];

    // console.log(varcenter.children[2].children[0]);

    var textdele = document.getElementsByClassName("item-wrapper").value;
    var ttt= this.parentElement
    var deletask = document.getElementsByClassName("taskItem-dele")[0];
    // console.log(deletask);   
    var clone_showcom = deletask.cloneNode(true);
    childval.append(clone_showcom);
    clone_showcom.children[1].children[0].innerHTML = click_checkbox_right.parentElement.children[1].value;

    if(varcenter.children[2].children[1].style.display == "block"){
        clone_showcom.children[2].children[1].style.display = "block"
        clone_showcom.children[2].children[0].style.display = "none"
    }
    else if(varcenter.children[2].children[0].style.display = "block"){
        clone_showcom.children[2].children[0].style.display = "block"
        clone_showcom.children[2].children[1].style.display = "none"
    }
    clone_showcom.children[2].addEventListener("click",clickstar);
    // console.log(this.parentElement.children[2].children[1]);
    
        clone_showcom.children[0].addEventListener("click",clickbox1)
        clone_showcom.children[0].addEventListener("click",addshowcom)
        clone_showcom.addEventListener("dblclick",dblclickshowcom);

   
}
// var addd;
function add_showcomplete_right(){
    
    var  addd = document.createElement("div")
      addd.classList = "taskItem";
      var btn = document.createElement("button");
      btn.classList = "box"
      addd.append(btn)
      btn.insertAdjacentHTML("beforeend",'<svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>')
       
      var divItem = document.createElement("div");
        divItem.classList = "item-wrapper";
        addd.appendChild(divItem);   

        var span = document.createElement("span");
        span.innerHTML = click_checkbox_right.parentElement.children[1].value;
        divItem.append(span);

        var btnstar = document.createElement('button');
        addd.append(btnstar);
       
        var startrang = '<svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>'
        startrang.className = "task-star";
        var stardo = '<svg style="display:none" width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>'
        stardo.className = "star-dd";
        // btnstar.insertAdjacentHTML("beforeend",stardo);
        btnstar.insertAdjacentHTML("beforeend",startrang);
        btnstar.insertAdjacentHTML("beforeend",stardo);
        document.getElementById("todo").insertBefore(addd,document.getElementById("todo").childNodes[0]);
        addd.addEventListener("click",colortasklist)
        btnstar.addEventListener('click',clickstar)
        addd.addEventListener("contextmenu",deletelistcenter)
        btn.addEventListener("click",delecheck)
        btn.addEventListener("click",deletask)
        addd.addEventListener("dblclick",dblclickcenter)
}


//----------------------Rename center-----------------------
var title_head_right;
document.getElementsByClassName("display-view")[0].addEventListener("keydown",function(e){
    title_head_right = this;
    if(e.keyCode == 13 ){
        if(document.getElementsByClassName("display-view")[0].value.trim().length >0 ){
            console.log(varcenter);
            varcenter.children[1].children[0].innerHTML = document.getElementsByClassName("display-view")[0].value;
            
        }
        else{
            alert("Bạn chưa nhập tên mới")
            
        }
    }
    

});
