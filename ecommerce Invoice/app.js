  let addBill = () => {

    let stock = document.getElementById("stock").value;
    let file = document.getElementById("img1").files[0];
    let r = new FileReader();
    r.readAsDataURL(file);
    r.onloadend = function () {
    document.getElementById("myimg").src = r.result;
  };
    let quality = document.getElementById("Quality").value;
    let rate = document.getElementById("rate").value;
    let amount = document.getElementById("amt").value;
    let bodycontent = document.getElementById("tblid");
    let emptyStr = `<tr><td>${stock}</td><td><img id="myimg" src="" width="100px" height="100px"/></td><td>${quality}</td><td>${rate}</td><td>${amount}</td></tr>`;
    bodycontent.innerHTML += emptyStr;

    document.getElementById("stock").value = "";
    document.getElementById("img1").value = "";
    document.getElementById("Quality").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("amt").value = "";
  };
  document.getElementById("bill").addEventListener('click', addBill);

