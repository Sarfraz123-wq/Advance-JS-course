console.log("Sarfraz Rasheed Kehar");
let btn1 = document.getElementById('btn1');
btn1.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log("You have clicked the fetch btn");
    //instantiate an xhr object.
    const xhr = new XMLHttpRequest();
    //inst zaroori he krna.
    //open the object.
    // xhr.open('GET',"yes.txt",true);
   // xhr.open('GET',"https://jsonplaceholder.typicode.com/todos/1",true);
    
   //For post request.
   
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    // xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded');
    //JSON me krdete hain.
    xhr.getResponseHeader('Content-type','application/json');
    //passwords wagera post req se lagate hain seccurity k lye.
    //post req se data buhat bada b le sakte hain

    //what to do on progress.
    xhr.onprogress = function(){
        console.log('On progress');
    }

    xhr.onreadystatechange = function(){
        console.log("ready state is "+xhr.readyState);
    }
    //4 means DONE.

    //what to do when response is ready.
    xhr.onload = function(){
        if(this.status === 200)
        {

        
        console.log(this.responseText);
    }
    else
    {
        console.log("some error occurs");
    }
}
    //fetch pe click krne k bad kuch b nhi hwa.
    // q k request ko send b krna hota he.
    // params = "name=test&salary=123&age=23"; isko JSON me kar dete hain.
    params = `{"name":"test","salary":"123","age":"23"}`;
    
    xhr.send(params);
}
// buttonClickHandler();