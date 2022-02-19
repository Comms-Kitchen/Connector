// Make QR Code

var qrDisplay = document.getElementById("qrsection");
qrDisplay.style.display = "none";

var qrcode = new QRCode(document.getElementById("qrcode"), {
  width: 200,
  height: 200
});

function makeCode() {
  var qrInput = window.userWalletAddress;

  if (!qrInput) {

    qrDisplay.style.display = "none";

    return;
  }
  // display the QR code DIV, then create a QR code with qrInput
  qrDisplay.style.display = "block";
  qrcode.makeCode(qrInput);
};