var labtopName=document.getElementById('labtopName');
var labtopPrice=document.getElementById('labtopPrice');
var labtopCategory=document.getElementById('labtopCategory');
var labtopFeedBack=document.getElementById('feedBack');
var allLabtops=[];

//عرض الداتا في الاول لو موجوده في الوكل استورج 
if(localStorage.getItem('allLabtops') !=null){
    allLabtops= JSON.parse(localStorage.getItem('allLabtops'))
    displayLaptop()
}


function addNawLaptop(){
    var laptop={
        name:labtopName.value,
        price:labtopPrice.value,
        category:labtopCategory.value,
        feedBack:labtopFeedBack.value
    }

  allLabtops.push(laptop); 
  storege()
  clear()
  displayLaptop()
}

function displayLaptop(){
    var cartona="";
    for(var i=0;i<allLabtops.length;i++){
        cartona+=`<tr>
        <td>${allLabtops[i].name}</td>
        <td>${allLabtops[i].price}</td>
        <td>${allLabtops[i].category}</td>
        <td>${allLabtops[i].feedBack}</td>
        <td>
           
        <button class="btn  btn-outline-warning" onclick="update(${i})">details</button>
          
        </td>
       
        <td>
            <button class="btn btn-danger" onclick="deleteElenemt(${i})">delete</button>
        </td>

    </tr>`
    }
    document.getElementById('tbody').innerHTML=cartona;
}

function clear(){
    labtopName.value=""
    labtopPrice.value=""
    labtopCategory.value=""
    labtopFeedBack.value=""
}

function deleteElenemt(index){
    allLabtops.splice(this,1);
    displayLaptop()
    storege()
}



function storege(){
    localStorage.setItem('allLabtops',JSON.stringify(allLabtops));
}



function searsh(){
    var searshValue=document.getElementById("searsh").value;
    var concat="";
    for(var i=0;i<allLabtops.length;i++){
        if(allLabtops[i].name.toLowerCase().includes(searshValue.toLowerCase())===true)[
            concat+=`<tr>
            <td>${allLabtops[i].name}</td>
            <td>${allLabtops[i].price}</td>
            <td>${allLabtops[i].category}</td>
            <td>${allLabtops[i].feedBack}</td>
            <td>
            <button class="btn btn-outline-info" onclick="update()">details</button>
            </td>
           
            <td>
                <button class="btn btn-danger" onclick="deleteElenemt(${i})">delete</button>
            </td>
    
        </tr>`
        ]
    }
    document.getElementById('tbody').innerHTML=concat;
}


var btnClick=document.querySelector("#searsh");
btnClick.addEventListener('keyup',function(){
    searsh()
})


function update(index){
    // console.log(allLabtops[index])
    labtopName.value=allLabtops[index].name
    labtopPrice.value=allLabtops[index].price
    labtopCategory.value=allLabtops[index].category
    labtopFeedBack.value=allLabtops[index].feedBack
}