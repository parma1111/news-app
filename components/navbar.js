let navbar = () => {
    return `
    <div id="navbar">
    <h2><a href="index.html">News App</a></h2> 
    <input type="text" id="search_input" placeholder="Search News">
   </div>
  

   <div id="sidebar">
     <h1>Countries</h1>
    <a href="" id="in">India</a><br><br>
    <a href="" id="ch">China</a><br><br>
    <a href="" id="us">Usa</a><br><br>
    <a href="" id="uk">United Kingdom</a><br><br>
    <a href="" id="nz">Newzeland</a>
   </div>
    `;
}

export { navbar };