//function for the payment solution group
function togglePay() 
{
  var payDiv = document.getElementById("toggleDiv");
  var inoDiv = document.getElementById("toggleIno");
  var payButton = document.getElementById("pay");
  var inoButton = document.getElementById("ino");

  /*when the button is clicked, unhide the payment product cards,
    hide the innovative cards, and changes the text of the button
  */
  if (payDiv.style.display === "none") 
  {
    payDiv.style.display = "block";
    inoDiv.style.display = "none";
    payButton.textContent = "View Less";
    inoButton.textContent = "View More";
  } 
  else 
  {
    payDiv.style.display = "none";
    payButton.textContent = "View More";
  }
  
  //unfocus the button
  payButton.blur();
}

  //function for the innovative services group
  function toggleIno() 
  {
    var inoDiv = document.getElementById("toggleIno");
    var payDiv = document.getElementById("toggleDiv");
    var inoButton = document.getElementById("ino");
    var payButton = document.getElementById("pay");

    /*when the button is clicked, unhide the innovative product cards,
      hide the payment cards, and changes the text of the button
    */
    if (inoDiv.style.display === "none") 
    {
      inoDiv.style.display = "block";
      payDiv.style.display = "none";
      inoButton.textContent = "View Less";
      payButton.textContent = "View More";
    } 
    else 
    {
      inoDiv.style.display = "none";
      inoButton.textContent = "View More";
    }

    //unfocus the button
    inoButton.blur();
  }