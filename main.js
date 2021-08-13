var arrayname=["Dadaa","Mamaa","Me","Little Brother"];
var arrayimg=["dadaa.jpg","mamaa.jpg","big brother.jpg","little brother.jpg"];
var i=0;
function next()
{
    i++;
    if(i>3)
    {i=0;}
    document.getElementById("name").innerHTML=arrayname[i];
    document.getElementById("image").src=arrayimg[i];
}