var howManyLi = document.getElementsByTagName("li");
console.log(howManyLi.length);

for(var i = 0; i < howManyLi.length; i++){
    if(howManyLi[i].innerHTML === ""){
        howManyLi[i].innerHTML = "coming soon";
    }
}

var arrayChilds = document.getElementById("list");
console.log(arrayChilds.childNodes.length)

var list = document.getElementById("list");
console.log(list.hasAttribute("id"));
console.log(list.getAttribute("id"));

list.setAttribute("class", "listClass");

var image = document.getElementById("image");
image.setAttribute("src", "https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg")

var attList = image.attributes;

console.log(attList[2].nodeName ,attList[2].nodeValue);


var para = document.createElement("p");
para.setAttribute("class", "para1");
var text = document.createTextNode("Hello !");
para.appendChild(text);

var div1 = document.getElementById("div1");
div1.appendChild(para);


var body = document.getElementById("body");
var div2 = document.createElement("div");
div2.setAttribute("id", "div2");
body.appendChild(div2);

var uol = document.getElementById("list");
body.insertBefore(div2, uol);


div1.remove(image);
























