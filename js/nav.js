// scroll nav bar
var LastscrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener("scroll",function()
{
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if(scrollTop > LastscrollTop)
    {
        navbar.style.top="-80px";
    }   
    else
    {
        navbar.style.top="0px";
    }
    LastscrollTop = scrollTop;
})

// light-dark mode
var checkbox = document.querySelector('Input[name=theme]');
checkbox.addEventListener('change',function(){
    if (this.checked)
    {
        trans()
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme', 'dark');
    } 
    else 
    {
        trans()
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme', 'light');
    }
})
let trans = () => 
{
    document.documentElement.classList.add('transition');
    window.setTimeout(() => 
    {
        document.documentElement.classList.remove('transition');
    }, 1000);
}
// remember mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        checkbox.checked = true;
    }
}
