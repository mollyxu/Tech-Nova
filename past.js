function dropdownToggle(btn)
{
    //btn.toggle("active");
    let toggleSymbol = btn.nextElementSibling;
    let panel = toggleSymbol.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
        btn.style.borderRadius="10px";
        toggleSymbol.innerHTML = "▼";
      } else {
        panel.style.display = "block";
        btn.style.borderBottomRightRadius="0px";
        btn.style.borderBottomLeftRadius="0px";
        toggleSymbol.innerHTML = "▲";
      }
}