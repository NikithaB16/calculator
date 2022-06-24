function display(val)
{
    document.getElementById("demo").value += val;
    return val;
}
function solve()
{

    let x = document.getElementById('demo').value;
    let y = eval(x);
    document.getElementById('demo').value = y;
    return y;
}
function clearScr()
{
    document.getElementById("demo").value =" ";
}
function rem()
{
    let n = document.getElementById("demo").value;
    n = n.slice(0,n.length-1);
    document.getElementById("demo").value = n;
}