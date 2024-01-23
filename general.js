// Sayfa yüklendiğinde çalışacak fonksiyon
window.onload = function() {
    // Cookie kontrolü
    if (!localStorage.getItem("popupShown")) {
        // Local Storage'da "popupShown" değeri yoksa pop-up'ı göster
        showPopup();
        // Pop-up'ı gösterdikten sonra Local Storage'a "popupShown" değerini ekleyin
        localStorage.setItem("popupShown", "yes");
    }
};

// Pop-up gösterme fonksiyonu
function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup(){
    document.getElementById('popup').style.display = 'none';
}



var screensaverTimeout;

// Kullanıcının etkileşimini dinle
document.addEventListener("mousemove", resetScreensaver);
document.addEventListener("keypress", resetScreensaver);

function resetScreensaver() {
    // Etkileşim olduğunda screen saver'ı gizle
    document.getElementById("screensaver").style.display = "none";

    // Timeout'u sıfırla ve tekrar başlat
    clearTimeout(screensaverTimeout);
    screensaverTimeout = setTimeout(showScreensaver, 10000); // 10 saniye sonra ekran koruyucuyu göster
}

function showScreensaver() {
    // Kullanıcının etkileşim olmazsa screen saver'ı göster
    document.getElementById("screensaver").style.display = "block";
}