function generateQRCode() {
  const text = document.getElementById('inputText').value;

  if (text.trim() === "") {
    alert("Por favor, digite um texto ou URL para gerar o QR Code.");
    return;
  }

  // Limpar o container do QR Code antes de gerar um novo
  const qrCodeContainer = document.getElementById('qrCodeContainer');
  qrCodeContainer.innerHTML = "";

  // Gerar o QR Code
  const qrcode = new QRCode(qrCodeContainer, {
    text: text,
    width: 128,
    height: 128,
  });
}
