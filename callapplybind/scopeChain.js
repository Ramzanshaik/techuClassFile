// lexical envirnment

var a = 30
function print(){
    var num = 20
    function cal(){
        var res = 30
        console.log(num)
    }
    cal()
    console.log(res)
}
print()

//LE of cal() = LE. of its parent(print()) + local scope
// LE of print() = LE. of its parent(GEC) + local scope
// LE of GEC = LE. of its parent() + local scope
 
has context menu

