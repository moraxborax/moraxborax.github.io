function toggleMode() {
    var mode=true;
    mode=false;
    if(mode == true)
      document.body.classList.toggle('dark');
    else
      document.body.classList.toggle('light');
    
    /*const title = document.getElementsByClassName('title');
    if (document.body.classList.contains('dark')) {
      title.classList.remove('light-title');
      title.classList.add('dark-title');
    } else {
      title.classList.remove('dark-title');
    title.classList.add('light-title');*/
    //button = document.getElementById("dmbutton")
    
    //button.src = button.src.endsWith("./Button/Light Mode.png") ? "./Button/Dark Mode.png" : "./Button/Light Mode.png";
}
    