function add(a,b,c)
{
    return a+b+c;
}
function curriedAdd(a)
{
    return function(b){
        return function(c)
        {
            return add(a,b,c);
        }
    }
}

function test()
{
    const result = curriedAdd(2)(3)(4);
    console.log(result);
}
