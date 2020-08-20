ádasdasdaswindow.addEventListener("resize",function(){
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
        document.getElementById("sidebarAction").style.width ="43px";
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
    $("#user-tool").click(function(){
        $("#user-ck").toggle();
    });
    $("#account-se").click(function(){
        $("#ouibounce-account").show();
        $("#user-ck").hide();
    });

    $("#done").click(function(){
        $("#ouibounce-account").hide(300);
    });

    $("#sidebarAction").click(function(){
        $("#create-new-list").show();
        $("#CreateList").val("");
    });

    $("#Cance").click(function(){
        $("#create-new-list").hide(300); 
    });
    
    var pick_id_left ;
    $("#ListCr").on("click",".list",function(){
        $(this).toggleClass("activeTb");
        $(this).siblings().removeClass("activeTb");
            $("#ListCrt .list").removeClass("activeTb");
        pick_id_left = $(this).find(".id_list_left").text();
        pick_id_left =+ pick_id_left;
        console.log(pick_id_left);
        showtaskbyid();
    })

    $("#ListCrt .list").click(function(){
        $(this).toggleClass("activeTb");
        $(this).siblings().removeClass("activeTb");
            $("#ListCr .list").removeClass("activeTb");
    })

    $(document).click(function(e){
        e.stopPropagation();
        var dropdow = $("#dropdow")
        if (dropdow.has(e.target).length === 0) {
            $('#user-ck').hide();
        }
    });

    $(".underlay").click(function(e){
        e.stopPropagation();
        var account_setting = $("account-setting")
        if(account_setting.has(e.target).length === 0){
            $("#ouibounce-account").hide();
    }
    })

    $(".underlay").click(function(e){
        e.stopPropagation();
        var create_new_list = $("content")
        if(create_new_list.has(e.target).length === 0){
            $("#create-new-list").hide();
    }
    })
    var contextmenu_left_delete;
    $(".list-scroll").on("contextmenu",".list",function(e){
                
        e.preventDefault();
        $("#context-list").show();
        $("#context-list").offset({left:e.pageX, top:e.pageY});
        $(document).click(function(){
                $("#context-list").hide();
        })    

        contextmenu_left_delete = this;
        remove_id_list_left = $(this).children(".id_list_left")
    })

    $("#btSaveList").click(function(){
        if($("#CreateList").val().length>0){
           
            var a = $(this).val();
            // console.log(a);
            var new_id_list_left = id_list_left.length + 1;
            var new_list_left = {idL: maxnumberlistid + 1 , name: a};
            list_left.push(new_list_left);
            id_list_left.push(new_id_list_left);
            maxnumberlistid = Math.max.apply( Number , id_list_left );
            // console.log(list_left);
            var li_create_list = document.createElement("li");
                    li_create_list.className = "list";
                    var a = document.createElement("a");
                    li_create_list.append(a);
                    a.insertAdjacentHTML('beforeend', '<span  style="fill: #288ae9;" class="list-icon"><svg class="list rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Web-svgs" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="list"> <path d="M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z" id="K"> </path> </g> </g> </svg></span>')
                    var span = document.createElement("span");
                    span.className = "title"
                    span.innerText = $("#CreateList").val();
                    var spanid = document.createElement("span")
                    spanid.className = "id_list_left";
                    spanid.innerText = new_list_left.idL;
                    a.append(spanid)    
                    a.append(span)
                    // console.log(new_list_left.idL);
                    $("#ListCr").append(li_create_list);
                    $("#create-new-list").hide(200);
                    // li_create_list.contextmenu()
                // console.log(li_create_list);
            }   
                else if($("#CreateList").val().trim().length  == 0)
                {   
                    alert("Bạn chưa nhập List Name");
                }
               
    })
    //------- 
    
    function array_ListCrt(){
        var array_list_left=[];
        var array_list_left_ListCrt = document.querySelector("#ListCrt").children;
        // var name = document.querySelector("#ListCrt .title").innerHTML
     
        for( var i = 0;i < array_list_left_ListCrt.length;i ++ ){
            // var name = document.querySelector("#ListCrt .title").innerHTML
            var name = array_list_left_ListCrt[i].querySelector(".title").innerHTML
            var id =i;
                console.log(name);
            var item = {
                "id" : id,
                "name" : name,

            }
            array_list_left.push(item)
        }
        return array_list_left;
    }
    array_ListCrt();
    //----
    var maxnumberlistid = 0
    var list_left = [];
    var id_list_left = [];
    
    $("#CreateList").keyup(function (e) { 
        if(e.keyCode === 13 ){
            if($("#CreateList").val().trim().length > 0 ) {
                var a = $(this).val();
                // console.log(a);
                var new_id_list_left = id_list_left.length + 1;
                var new_list_left = {idL: maxnumberlistid + 1 , name: a};
                console.log(list_left.idL);
                list_left.push(new_list_left);
                id_list_left.push(new_id_list_left);
                maxnumberlistid = Math.max.apply( Number , id_list_left );
                // pick_id_left = new_list_left.idL;
              
                var li_create_list = document.createElement("li");
                        li_create_list.className = "list";
                        var a = document.createElement("a");
                        li_create_list.append(a);
                        a.insertAdjacentHTML('beforeend', '<span  style="fill: #288ae9;" class="list-icon"><svg class="list rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Web-svgs" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="list"> <path d="M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z" id="K"> </path> </g> </g> </svg></span>')
                        var span = document.createElement("span");
                        span.className = "title"
                        span.innerText = $("#CreateList").val();
                        a.append(span)
                        var spanid = document.createElement("span")
                        spanid.className = "id_list_left";
                        spanid.innerText = new_list_left.idL;
                        a.append(spanid)  
                        $("#ListCr").append(li_create_list);
                        $("#create-new-list").hide(200);
                        // li_create_list.contextmenu()
                    // console.log(li_create_list);
                  
                    }
                    else if($("#CreateList").val()  == 0)
                    {   
                        alert("Bạn chưa nhập List Name");
                      
                    }    
        }
    });    
    function showlistbyid(){

    }
    var remove_list_left;                                                           
    $("#delete3").click(function(){
        contextmenu_left_delete.remove();
        // console.log(list_left);
        remove_id_list_left.remove();
    })
    $(".list-scroll").on("click",".list",function(){
        $("#title-center").html($(this).find(".title").text())
        // console.log($(this));
    })

//---------center
    $(".taskList ").on("click",".taskItem",function(){
        $(this).toggleClass("taskIt-active");
        $(this).siblings().removeClass("taskIt-active");
    })
     var maxnumber_list_id_center= 0
    var list_center = [];
    var id_list_center = [];
   $("#inputTask").keydown(function(e){
        if (e.keyCode == 13){
            if($("#inputTask").val().length >0){
                var b = $(this).val();
                var new_id_list_center = id_list_center.length + 1;
                var new_list_center = {id_center: maxnumber_list_id_center + 1 , name: b, idList: pick_id_left};
                list_center.push(new_list_center);
                id_list_center.push(new_id_list_center);
                maxnumber_list_id_center = Math.max.apply( Number , id_list_center );
                list_id = list_center;
                list_id = list_id.filter((list_left) => {
                    return list_left.idL === pick_id_left;
                })
                console.log(list_left.idL);
                // console.log(list_left.idL);
                showtaskbyid();
                    // var  addd = document.createElement("div")
                    // addd.setAttribute("draggable","true")
                    // addd.classList = "taskItem";
                    // var btn = document.createElement("button");
                    // btn.classList = "box"
                    // addd.append(btn)
                    // btn.insertAdjacentHTML("beforeend",'<svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>')
                    // var divItem = document.createElement("div");
                    //   divItem.classList = "item-wrapper";
                    //   addd.appendChild(divItem);   
                    //   var span = document.createElement("span");
                    //   span.innerHTML = $('#inputTask').val();           
                    //   divItem.append(span);
                    //   var spanid = document.createElement("span")
                    //     spanid.className = "id_list_center";
                    //     spanid.innerText = new_list_center.id_center;
                    //     divItem.append(spanid)  
                    //     var spanidcenter = document.createElement("span")
                    //     spanidcenter.className = "id_list_center_1";
                    //     spanidcenter.innerText = new_list_center.idList;
                    //     // console.log(new_list_center.idList);
                    //     divItem.append(spanidcenter) 
                    //     var span_date_center = document.createElement("span");
                    //     span_date_center.className = "date_input";
                    //     divItem.append(span_date_center) 
                    //   var btnstar = document.createElement('button');
                    //   btnstar.classList = "star"
                    //   addd.append(btnstar);
                    //   const d = $("#D");
                    //   var addTaskstar = $(".addtask-starred")[0];
                    //   if ($("#D").css("opacity") != '1') {
                    //        btnstar.insertAdjacentHTML("beforeend",'<svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>');
                    //       btnstar.insertAdjacentHTML("beforeend",'<svg style="display:none" width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>');
                    //   } else {
                    //     $("#D").css("opacity",'0');
                    //       btnstar.insertAdjacentHTML("beforeend",'<svg style="display:none" width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>');
                    //       btnstar.insertAdjacentHTML("beforeend",'<svg  width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>');
                    //   }
                    //   $(addd).appendTo("#todo");

                      $("#inputTask").val("");
            }
            else{
                alert('Bạn chưa nhập  Name to-do');
            }
            
        }
    })

    
    function showtaskbyid(){
        tasksid = list_center;
        tasksid = tasksid.filter((task) => {
            return task.idList === pick_id_left;
        })
        $("#todo").html('');
        console.log(tasksid);
        tasksid.forEach((item) => {
            var element = ` <div class="taskItem " draggable="true" >
            <button class="box">
            <svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>
            </button>
            <div class="item-wrapper">
                <span >` + item.name + `</span>
                <span class= "id_list_center" >`+ item.id_center +`</span>
                <span class= "id_list_center_1" >`+ item.idList +`</span>
                <span class="date_input"> </span>
            </div>
            <button class="star">
                <svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>
                <svg style="display:none" width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>
            </button>
        </div>`;
      
            // $(".taskList ").append(element);
            $(element).appendTo("#todo")
        })
    }   

    function showtaskbyid(){
        tasksid = list_center;
        tasksid = tasksid.filter((task) => {
            return task.idList === pick_id_left;
        })
        $("#todo").html('');
        console.log(tasksid);
        tasksid.forEach((item) => {
            var element = ` <div class="taskItem " draggable="true" >
            <button class="box">
            <svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>
            </button>
            <div class="item-wrapper">
                <span >` + item.name + `</span>
                <span class= "id_list_center" >`+ item.id_center +`</span>
                <span class= "id_list_center_1" >`+ item.idList +`</span>
                <span class="date_input"> </span>
            </div>
            <button class="star">
                <svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>
                <svg style="display:none" width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>
            </button>
        </div>`;
      
            // $(".taskList ").append(element);
            $(element).appendTo("#todo")
        })
    }   

    // function showtaskbyid(){
    //     var b = $("#inputTask").val();
    //     console.log($("#inputTask").val());
    //     var new_id_list_center = id_list_center.length + 1;
    //     var new_list_center = {id_center: maxnumber_list_id_center + 1 , name: b, idList: pick_id_left};
    //     list_center.push(new_list_center);
    //     id_list_center.push(new_id_list_center);
    //     maxnumber_list_id_center = Math.max.apply( Number , id_list_center );
    //     list_id = list_center;
    //     list_id = list_id.filter((task) => {
    //         return task.idList === pick_id_left;
    //     })
    //     $(".taskList").html("");
    //     console.log(list_left.idL);
    //     console.log($(".list").children().eq(0).children().eq(1));
    //     list_id.forEach(element => {
    //         var  addd = document.createElement("div")
    //         addd.setAttribute("draggable","true")
    //         addd.classList = "taskItem";
    //         var btn = document.createElement("button");
    //         btn.classList = "box"
    //         addd.append(btn)
    //         btn.insertAdjacentHTML("beforeend",'<svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>')
    //         var divItem = document.createElement("div");
    //           divItem.classList = "item-wrapper";
    //           addd.appendChild(divItem);   
    //           var span = document.createElement("span");
    //           span.innerHTML = $('#inputTask').val();           
    //           divItem.append(span);
    //           var spanid = document.createElement("span")
    //             spanid.className = "id_list_center";
    //             spanid.innerText = new_list_center.id_center;
    //             divItem.append(spanid)  
    //             var spanidcenter = document.createElement("span")
    //             spanidcenter.className = "id_list_center_1";
    //             spanidcenter.innerText = new_list_center.idList;
    //             // console.log(new_list_center.idList);
    //             divItem.append(spanidcenter) 
    //             var span_date_center = document.createElement("span");
    //             span_date_center.className = "date_input";
    //             divItem.append(span_date_center) 
    //           var btnstar = document.createElement('button');
    //           btnstar.classList = "star"
    //           addd.append(btnstar);
    //           const d = $("#D");
    //           var addTaskstar = $(".addtask-starred")[0];
    //           if ($("#D").css("opacity") != '1') {
    //                btnstar.insertAdjacentHTML("beforeend",'<svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>');
    //               btnstar.insertAdjacentHTML("beforeend",'<svg style="display:none" width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>');
    //           } else {
    //             $("#D").css("opacity",'0');
    //               btnstar.insertAdjacentHTML("beforeend",'<svg style="display:none" width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>');
    //               btnstar.insertAdjacentHTML("beforeend",'<svg  width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>');
    //           }
    //           $(addd).appendTo("#todo");
    //     });
        
    // }


    $(".addtask-starred").click(function(){
        const d = $("#D");
        var addTaskstar = $(".addtask-starred")[0];

        if ( $("#D").css("opacity")  != '1') {
            $("#D").css("opacity",'1');
            $(".addtask-starred").css("opacity",'unset');
        } else {
            $("#D").css("opacity",'0');
            $(".addtask-starred").css("opacity",'0.7');
        }
    })
       
        $("#task-scroll").on("click",".star",function(){
            
            if($(this).children('.task-star').css("display") == "block"){
                // console.log(this);
                $(this).children('.task-star').css("display","none")
                $(this).children('.star-dd').css("display","block")
                if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text()){
                    $(".title-head").children().eq(2).find('.star-dd').css("display","block");
                    $(".title-head").children().eq(2).find('.task-star').css("display","none");
                    // console.log($(".star").children('.task-star'));
                }
            }
            else{
                $(this).children('.task-star').css("display","block")
                $(this).children('.star-dd').css("display","none")
                if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text()){
                    $(".title-head").children().eq(2).find('.star-dd').css("display","none");
                    $(".title-head").children().eq(2).find('.task-star').css("display","block");
                }
            }
        })
        
        $(".taskList").on("contextmenu",".taskItem",function(e){
            e.preventDefault();
            $("#context-menu-huu").show();
            $("#context-menu-huu").offset({left:e.pageX, top:e.pageY});
            $(document).click(function(){
                    $("#context-menu-huu").hide();
            })    
    
            contextmenu_left_center = $(this);
            remove_id_list_center = $(this).children(".id_list_center");
            
            // console.log($(this).children().eq(1).children().eq(1).text());
            // text_id_list_center.remove()
        })
        var contextmenu_list_completed;
        $(".task-deleee").on("contextmenu",".taskItem-dele",function(e){
            e.preventDefault();
            $("#context-menu-huu").show();
            $("#context-menu-huu").offset({left:e.pageX, top:e.pageY});
            $(document).click(function(){
                    $("#context-menu-huu").hide();
            })    
            contextmenu_list_completed = $(this)
            console.log(contextmenu_list_completed);
        })
        $("#deletodo").click(function(){
            $("#alert-confirm-delete-list-center").show();
        })
        $(".underlay").click(function(e){
            e.stopPropagation();
            var alert_deletetaskItem = $("alert-deletetaskItem")
            if(alert_deletetaskItem.has(e.target).length === 0){
                $("#alert-confirm-delete-list-center").hide();
        }
        })
        $("#cancel1").click(function(e){
            $("#alert-confirm-delete-list-center").hide(200);
        })
        $("#delete-to-do").click(function(e){
            contextmenu_left_center.remove();
            if(contextmenu_list_completed != undefined){
                contextmenu_list_completed.remove();
            }

            $("#alert-confirm-delete-list-center").hide(200);
            if(contextmenu_left_center.children().eq(1).children().eq(0).text() == $(".display-view").val()){
                $("#main-right").css("width","0px");
            }   
            
            let text_id_list_center = contextmenu_left_center.children().eq(1).children().eq(1).text();
            text_id_list_center =+ text_id_list_center;
            list_center = list_center.filter((list_center) => {
                return list_center.id_center !== text_id_list_center;
            })
        })

        $(".delete-right").click(function(){
            
            if($(".display-view").val() == this_center.children().eq(1).children().eq(0).text()){
                console.log(this_center);
                this_center.remove();
                $(".display-view").val("");
                $(".title-head").find("#detail-checkbox").children().eq(0).css("display","block");
                $(".title-head").find("#detail-checkbox").children().eq(1).css("display","none");
                $(".title-head").find("#starhead").children().eq(0).css("display","block");
                $(".title-head").find("#starhead").children().eq(1).css("display","none");
                console.log($(".title-head").find("#detail-checkbox").children().eq(0));
            }
        });
        $(".taskList").on("click",".box",function(){
            $(this).parent().remove();
             $(".taskItem-dele").children().eq(1).children().eq(0).html($(this).parent().children().eq(1).children().eq(0).html()) ;
             $(".taskItem-dele").children().eq(1).children().eq(1).html("Wellcome to Turtle")
                 var status = $(this).parent().find('.star-dd').css("display")
                var newElm = $(".task-deleee").children().eq(0).clone();
            //  console.error($(this).parent().find('.star-dd').css("display"));
            
             newElm.children().eq(2).find('.star-dd').css("display",status);
             if(status === 'none') {
                 newElm.children().eq(2).find('.task-star').css("display","block");
             } else {
                newElm.children().eq(2).find('.task-star').css("display","none");  
             }
             newElm.appendTo(".task-deleee");
             if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text() ){
                    $(".title-head").find(".task-check").css("display","none");
                    $(".title-head").find(".checkdele").css("display","block");
                }
            // console.error($(".title-head").find(".task-check"));
            let text_id_list_center = $(this).parent().children().eq(1).children().eq(1).text();
            text_id_list_center =+ text_id_list_center;
            list_center = list_center.filter((list_center) => {
                return list_center.id_center !== text_id_list_center;
            })
            
        });
           
        $(".task-deleee").on("click",".box1",function(){
          
            $(this).parent().remove();
            var b = $(this).val();
                var new_id_list_center = id_list_center.length + 1;
                var new_list_center = {idL1: maxnumber_list_id_center + 1 , name: b,idList:pick_id_left};
                list_center.push(new_list_center);
                id_list_center.push(new_id_list_center);
                maxnumber_list_id_center = Math.max.apply( Number , id_list_center );
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
              span.innerHTML = $(this).parent().children().eq(1).children().eq(0).text();
              divItem.append(span);
              var spanid = document.createElement("span")
              spanid.className = "id_list_center";
              spanid.innerText = new_list_center.idL1;
              divItem.append(spanid)  
              var spanidcenter = document.createElement("span")
              spanidcenter.className = "id_list_center_1";
              spanidcenter.innerText = new_list_center.idList;
              divItem.append(spanidcenter) 
              var span_date_center = document.createElement("span");
              span_date_center.className = "date_input";
              divItem.append(span_date_center) 
              var btnstar = document.createElement('button');
              btnstar.className = "star"
              addd.append(btnstar);
              var startrang = '<svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>'
              startrang.className = "task-star";
              var stardo = '<svg style="display:none" width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>'
              stardo.className = "star-dd";
              btnstar.insertAdjacentHTML("beforeend",startrang);
                 btnstar.insertAdjacentHTML("beforeend",stardo);
                 let status = $(this).parent().find('.star-dd').css("display")
              $(addd).children().eq(2).find('.star-dd').css("display",status)
              if(status === 'none') {
                $(addd).children().eq(2).find('.task-star').css("display","block");
              } else {
                $(addd).children().eq(2).find('.task-star').css("display","none");  
              }
              if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text() ){
                    $(".title-head").find(".task-check").css("display","block");
                    $(".title-head").find(".checkdele").css("display","none");
              }
              $(addd).appendTo("#todo");
            //   $("#todo").insertBefore(addd,$("#todo").children().eq(0));
            //   $(".title-head").children().eq(2).html($(this).parent().children().eq(2).html())
        })
        $(".close").click(function(){
            console.log("123");
            $("#main-right").css("width","0px")
        })
        var this_center;
        $(".taskList ").on("dblclick",".taskItem",function(){
            this_center = $(this)
            $("#main-right").css("width","367px")
            $(".title-head").children().eq(1).val($(this).children().eq(1).children().eq(0).html());
            let status = $(this).parent().find('.star-dd').css("display")
          
              $(".title-head").children().eq(2).html($(this).children().eq(2).html())

            // console.log($(this).children().eq(2).html())
              $(".title-head .task-check").css("display","block");
              $(".title-head .checkdele").css("display","none");
        })
       
        $(".task-deleee").on("dblclick",".taskItem-dele",function(){
            this_center= $(this)
            $("#main-right").css("width","367px")
            $(".title-head").children().eq(1).val($(this).children().eq(1).children().eq(0).html());
            $(".title-head").children().eq(2).html($(this).children().eq(2).html())
              $(".title-head .task-check").css("display","none");
              $(".title-head .checkdele").css("display","block");
        })

        $("#mark-star-red").click(function(){
            contextmenu_left_center.children().eq(2).children().eq(0).css("display","none")
            contextmenu_left_center.children().eq(2).children().eq(1).css("display","block")
            // contextmenu_list_completed.children().eq(2).children().eq(0).css("display","none")
            // contextmenu_list_completed.children().eq(2).children().eq(1).css("display","block")
        })
        $("#mark-star-while").click(function(){
            contextmenu_left_center.children().eq(2).children().eq(1).css("display","none")
            contextmenu_left_center.children().eq(2).children().eq(0).css("display","block")
            // contextmenu_list_completed.children().eq(2).children().eq(1).css("display","none")
            // contextmenu_list_completed.children().eq(2).children().eq(0).css("display","block")
        })
        
        $("#masrk-as-completed").click(function(){
            contextmenu_left_center.remove();
            $(".taskItem-dele").children().eq(1).children().eq(0).html(contextmenu_left_center.children().eq(1).children().eq(0).html()) ;
            $(".taskItem-dele").children().eq(1).children().eq(1).html("Wellcome to Turtle")
                var status = contextmenu_left_center.find('.star-dd').css("display")
               var newElm = $(".task-deleee").children().eq(0).clone();
            newElm.children().eq(2).find('.star-dd').css("display",status);
            if(status === 'none') {
                newElm.children().eq(2).find('.task-star').css("display","block");
            } else {
               newElm.children().eq(2).find('.task-star').css("display","none");  
            }
            newElm.appendTo(".task-deleee");
            if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text() ){
                   $(".title-head").find(".task-check").css("display","none");
                   $(".title-head").find(".checkdele").css("display","block");
               }
           console.error($(".title-head").find(".task-check"));
           let text_id_list_center = contextmenu_left_center.children().eq(1).children().eq(1).text();
           text_id_list_center =+ text_id_list_center;
           list_center = list_center.filter((list_center) => {
               return list_center.id_center !== text_id_list_center;
           })
           console.log(contextmenu_left_center.children().eq(1).children().eq(0).text());
        })
       
        $("#remove-due-date").click(function(){
            contextmenu_left_center.children().eq(1).children().eq(3).html("");
        })

        $(".showcom").click(function(){
            if($(".task-deleee").css("display") =="block"){
                $(".task-deleee").hide(500);
            }
            else{
                $(".task-deleee").show(500);
            }
        })

//--------right        
        $("#starhead").click(function(){
            if($(this).children().eq(0).css("display") == "block" ){
                $(this).children().eq(0).css("display","none")
                $(this).children().eq(1).css("display","block")
                this_center.children().eq(2).find('.task-star').css("display","none");  
                this_center.children().eq(2).find('.star-dd').css("display","block");
                
            }
            else{
                $(this).children().eq(1).css("display","none")
                $(this).children().eq(0).css("display","block")
                this_center.children().eq(2).find('.task-star').css("display","block");  
                this_center.children().eq(2).find('.star-dd').css("display","none");
              
            }
            // console.log(this_center);
        })
        $(".display-view").keydown(function(e){
            if(e.keyCode == 13){
                if($(".display-view").val().trim().length > 0){
                    this_center.children().eq(1).children().eq(0).html($(".display-view").val());
                }
            }
        });

    
        $("#searchIp").keyup(function(){
            // console.log("123");
            var value = $(this).val().toUpperCase();
            $(".taskItem").filter(function() {
                 $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)
            });
            // console.log($(".taskItem").children().eq(1).children().eq(0));
        })

        $("#txtcomment").keydown(function(e){
            if(e.keyCode == 13){
                if($("#txtcomment").val().trim().length >0){
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
                    // divcomment.addEventListener("click",removecomment)
                    $("#txtcomment").val("");
                }
            }
        })
        var clone_elm;
        var addd_elm;
        $("#detail-checkbox").click(function(){
            
            if($(this).children().eq(0).css("display") == "block"){
                $(this).children().eq(0).css("display","none");
                $(this).children().eq(1).css("display","block");
                // addd_elm.remove();
                // if(this_center.children())
                this_center.remove();
                if($(".display-view").val() == this_center.children().eq(1).children().eq(0).html()){
                    // console.log("123");
                        
                        // addd_elm.remove();
                        $(".taskItem-dele").children().eq(1).children().eq(0).html($(".display-view").val()) ;
                    $(".taskItem-dele").children().eq(1).children().eq(1).html("Wellcome to Turtle")
                        var status = $(this).parent().find('.star-dd').css("display")
                        var newElm = $(".task-deleee").children().eq(0).clone();
                    //  console.error($(this).parent().find('.star-dd').css("display"));
                    
                    newElm.children().eq(2).find('.star-dd').css("display",status);
                    if(status === 'none') {
                        newElm.children().eq(2).find('.task-star').css("display","block");
                    } else {
                        newElm.children().eq(2).find('.task-star').css("display","none");  
                    }
                    newElm.appendTo(".task-deleee");
                    if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text() ){
                            $(".title-head").find(".task-check").css("display","none");
                            $(".title-head").find(".checkdele").css("display","block");
                        }
                    // console.error($(".title-head").find(".task-check"));
                    let text_id_list_center = $(this).parent().children().eq(1).children().eq(1).text();
                    text_id_list_center =+ text_id_list_center;
                    list_center = list_center.filter((list_center) => {
                        return list_center.id_center !== text_id_list_center;
                    })
                    clone_elm = newElm;
                    if(addd_elm !== undefined){
                        addd_elm.remove();
                    } 
                }  
                
            }
            else{
                $(this).children().eq(1).css("display","none");
                $(this).children().eq(0).css("display","block");
                clone_elm.remove();
                    if($(".display-view").val() == this_center.children().eq(1).children().eq(0).html()){
                        
                                // console.log(this_center);
                                var b = $(".display-view").val();
                                var new_id_list_center = id_list_center.length + 1;
                                var new_list_center = {idL1: maxnumber_list_id_center + 1 , name: b,idList:pick_id_left};
                                list_center.push(new_list_center);
                                id_list_center.push(new_id_list_center);
                                maxnumber_list_id_center = Math.max.apply( Number , id_list_center );
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
                              span.innerHTML =  $(".display-view").val();
                              divItem.append(span);
                              var spanid = document.createElement("span")
                              spanid.className = "id_list_center";
                              spanid.innerText = new_list_center.idL1;
                              divItem.append(spanid)  
                              var spanidcenter = document.createElement("span")
                              spanidcenter.className = "id_list_center_1";
                              spanidcenter.innerText = new_list_center.idList;
                              divItem.append(spanidcenter) 
                              var span_date_center = document.createElement("span");
                              span_date_center.className = "date_input";
                              divItem.append(span_date_center) 
                              var btnstar = document.createElement('button');
                              btnstar.className = "star"
                              addd.append(btnstar);
                              var startrang = '<svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>'
                              startrang.className = "task-star";
                              var stardo = '<svg style="display:none" width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>'
                              stardo.className = "star-dd";
                              btnstar.insertAdjacentHTML("beforeend",startrang);
                                 btnstar.insertAdjacentHTML("beforeend",stardo);
                                 let status = $(this).parent().find('.star-dd').css("display")
                              $(addd).children().eq(2).find('.star-dd').css("display",status)
                              if(status === 'none') {
                                $(addd).children().eq(2).find('.task-star').css("display","block");
                              } else {
                                $(addd).children().eq(2).find('.task-star').css("display","none");  
                              }
                              if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text() ){
                                    $(".title-head").find(".task-check").css("display","block");
                                    $(".title-head").find(".checkdele").css("display","none");
                              }
                              addd_elm = addd;
                              $(addd).appendTo("#todo");   
                     }
            }
         
        })
        
        $(".note").on("click",".section-delete",function(){
            $(this).parent().remove();
        })

        var setduedate;
        function handler(e){
            this_center.find(".item-wrapper").children().eq(3).html(e.target.value);

            setduedate = e.target.value;
            
          }
       
        function duedate(){
            console.log(setduedate);
        }
        duedate(); 