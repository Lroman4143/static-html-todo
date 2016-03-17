document.addEventListener('DOMContentLoaded',function(event){
    var button = document.getElementById('button');
    var input = document.getElementById("input");
    var container = document.getElementById('ul');
    
    button.addEventListener('click',function(event){
        var li = document.createElement('li');
       
        li.textContent = input.value;
       container.appendChild(li);
       container.insertBefore(li, container.firstChild);
    });
    
    document.body.appendChild(container);
});
