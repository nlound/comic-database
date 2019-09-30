
function editIssue(ev){
  const selectedCardId = 'CARD' + ev.target.attributes["data-id"].value;
  const selectedCard = document.getElementById(selectedCardId);

  window.location.replace(window.location+"/edit" + 
  "?number=" + selectedCard.getElementsByClassName("numero")[0].innerHTML +
  "&title=" +  selectedCard.getElementsByClassName("title")[0].innerHTML +
  "&grade=" +  selectedCard.getElementsByClassName("graduacion")[0].innerHTML +
  "&uss=" +  selectedCard.getElementsByClassName("precio-uss")[0].innerHTML +
  "&ars=" +  selectedCard.getElementsByClassName("precio-ars")[0].innerHTML +
  "&language=" +  selectedCard.getElementsByClassName("language")[0].innerHTML+
  "&note=" +  selectedCard.getElementsByClassName("note")[0].innerHTML+
  "&id=" + ev.target.attributes["data-id"].value
  );
  
}

