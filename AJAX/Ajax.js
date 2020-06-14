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
    xhr.open('GET',"https://jsonplaceholder.typicode.com/todos/1",true);
    //get 1st para he sarfraz.txt file name he true matlb async
    //get mtlb url denge or data ka batayenge k isme kya he.
    //post mtlb url denge or data b denge or data k mutabiq response 
    //dena

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
    xhr.send();
}
// buttonClickHandler();