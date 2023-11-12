document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.getElementById('s1');
  var hiddenDiv = document.getElementById('heuresS1');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      hiddenDiv.style.display = 'block';
    } else {
      hiddenDiv.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.getElementById('s2');
  var hiddenDiv = document.getElementById('heuresS2');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      hiddenDiv.style.display = 'block';
    } else {
      hiddenDiv.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.getElementById('s3');
  var hiddenDiv = document.getElementById('heuresS3');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      hiddenDiv.style.display = 'block';
    } else {
      hiddenDiv.style.display = 'none';
    }
  });
});

function soustraire30Minutes(duree) {
    var heures = duree.heures;
    var minutes = duree.minutes - 30;

    if (minutes < 0) {
        heures--;
        minutes += 60;
    }

    return { heures: heures, minutes: minutes };
}

function convertirHeureStartS1() {
            var inputTime = document.getElementById('startS1').value;
            var heures = inputTime.split(":")[0];
            var minutes = inputTime.split(":")[1];
            return { heures: heures, minutes: minutes };
        }

function convertirHeureEndS1() {
            var inputTime = document.getElementById('endS1').value;
            var heures = inputTime.split(":")[0];
            var minutes = inputTime.split(":")[1];
            return { heures: heures, minutes: minutes };
        }

function dureeS1() {
    var checkbox = document.getElementById("s1");

    if (checkbox.checked) {
        var startS1 = convertirHeureStartS1();
        var endS1 = convertirHeureEndS1();

        var heuresStartS1 = parseInt(startS1.heures, 10);
        var minutesStartS1 = parseInt(startS1.minutes, 10);

        var heuresEndS1 = parseInt(endS1.heures, 10);
        var minutesEndS1 = parseInt(endS1.minutes, 10);

        var heuresDureeS1 = heuresEndS1 - heuresStartS1;
        var minutesDureeS1 = minutesEndS1 - minutesStartS1;
        
        if (minutesDureeS1 < 0) {
            heuresDureeS1--;
            minutesDureeS1 += 60;
        }

        alert("Ton S1 a duré " + heuresDureeS1 + "h " + minutesDureeS1 + "min");
        return { heures: heuresDureeS1, minutes: minutesDureeS1 };

    } else {
        return { heures: 0, minutes: 0 };
    }
}


function convertirHeureStartS2() {
            var inputTime = document.getElementById('startS2').value;
            var heures = inputTime.split(":")[0];
            var minutes = inputTime.split(":")[1];
            return { heures: heures, minutes: minutes };
        }

function convertirHeureEndS2() {
            var inputTime = document.getElementById('endS2').value;
            var heures = inputTime.split(":")[0];
            var minutes = inputTime.split(":")[1];
            return { heures: heures, minutes: minutes };
        }

function dureeS2() {
    var checkbox = document.getElementById("s2");

    if (checkbox.checked) {
        var startS2 = convertirHeureStartS2();
        var endS2 = convertirHeureEndS2();

        var heuresStartS2 = parseInt(startS2.heures, 10);
        var minutesStartS2 = parseInt(startS2.minutes, 10);

        var heuresEndS2 = parseInt(endS2.heures, 10);
        var minutesEndS2 = parseInt(endS2.minutes, 10);

        var heuresDureeS2 = heuresEndS2 - heuresStartS2;
        var minutesDureeS2 = minutesEndS2 - minutesStartS2;
        
        if (minutesDureeS2 < 0) {
            heuresDureeS2--;
            minutesDureeS2 += 60;
        }

        alert("Ton S2 a duré " + heuresDureeS2 + "h " + minutesDureeS2 + "min");
        return { heures: heuresDureeS2, minutes: minutesDureeS2 };

    } else {
        return { heures: 0, minutes: 0 };
    }
}

function convertirHeureStartS3() {
            var inputTime = document.getElementById('startS3').value;
            var heures = inputTime.split(":")[0];
            var minutes = inputTime.split(":")[1];
            return { heures: heures, minutes: minutes };
        }

function convertirHeureEndS3() {
            var inputTime = document.getElementById('endS3').value;
            var heures = inputTime.split(":")[0];
            var minutes = inputTime.split(":")[1];
            return { heures: heures, minutes: minutes };
        }

function dureeS3() {
    var checkbox = document.getElementById("s3");

    if (checkbox.checked) {
        var startS3 = convertirHeureStartS3();
        var endS3 = convertirHeureEndS3();

        var heuresStartS3 = parseInt(startS3.heures, 10);
        var minutesStartS3 = parseInt(startS3.minutes, 10);

        var heuresEndS3 = parseInt(endS3.heures, 10);
        var minutesEndS3 = parseInt(endS3.minutes, 10);

        var heuresDureeS3 = heuresEndS3 - heuresStartS3;
        var minutesDureeS3 = minutesEndS3 - minutesStartS3;
        
        if (minutesDureeS3 < 0) {
            heuresDureeS3--;
            minutesDureeS3 += 60;
        }

        alert("Ton S3 a duré " + heuresDureeS3 + "h " + minutesDureeS3 + "min");
        return { heures: heuresDureeS3, minutes: minutesDureeS3 };

    } else {
        return { heures: 0, minutes: 0 };
    }
}

function pauseS1S2() {
        var checkboxS1 = document.getElementById("s1");
        var checkboxS2 = document.getElementById("s2");

        if (checkboxS1.checked && checkboxS2.checked) {

            var startS2 = convertirHeureStartS2();
            var endS1 = convertirHeureEndS1();

            var heuresStartS2 = parseInt(startS2.heures, 10);
            var minutesStartS2 = parseInt(startS2.minutes, 10);

            var heuresEndS1 = parseInt(endS1.heures, 10);
            var minutesEndS1 = parseInt(endS1.minutes, 10);

            var heuresPauseS1S2 = heuresStartS2 - heuresEndS1;
            var minutesPauseS1S2 = minutesStartS2 - minutesEndS1;
        
            if (minutesPauseS1S2 < 0) {
                heuresPauseS1S2--;
                minutesPauseS1S2 += 60;
            }

            minutesPauseS1S2 -= 30;

            if (minutesPauseS1S2 < 0) {
                heuresPauseS1S2--;
                minutesPauseS1S2 += 60;
                if (heuresPauseS1S2 < 0) {
                    heuresPauseS1S2 = 0;
                    minutesPauseS1S2 = 0;
                }
            }

            alert("Tu as eu " + heuresPauseS1S2 + "h " + minutesPauseS1S2 + "min de pause entre ton S1 et ton S2.");
            return { heures: heuresPauseS1S2, minutes: minutesPauseS1S2 };

        } else {
            return { heures: 0, minutes: 0 };
        }
}

function pauseS2S3() {
        var checkboxS2 = document.getElementById("s2");
        var checkboxS3 = document.getElementById("s3");

        if (checkboxS2.checked && checkboxS3.checked) {

            var startS3 = convertirHeureStartS3();
            var endS2 = convertirHeureEndS2();

            var heuresStartS3 = parseInt(startS3.heures, 10);
            var minutesStartS3 = parseInt(startS3.minutes, 10);

            var heuresEndS2 = parseInt(endS2.heures, 10);
            var minutesEndS2 = parseInt(endS2.minutes, 10);

            var heuresPauseS2S3 = heuresStartS3 - heuresEndS2;
            var minutesPauseS2S3 = minutesStartS3 - minutesEndS2;
        
            if (minutesPauseS2S3 < 0) {
                heuresPauseS2S3--;
                minutesPauseS2S3 += 60;
            }

            minutesPauseS2S3 -= 30;

            if (minutesPauseS2S3 < 0) {
                heuresPauseS2S3--;
                minutesPauseS2S3 += 60;
                if (heuresPauseS2S3 < 0) {
                    heuresPauseS2S3 = 0;
                    minutesPauseS2S3 = 0;
                }
            }

            alert("Tu as eu " + heuresPauseS2S3 + "h " + minutesPauseS2S3 + "min de pause entre ton S2 et ton S3.");
            return { heures: heuresPauseS2S3, minutes: minutesPauseS2S3 };

        } else {
            return { heures: 0, minutes: 0 };
        }
}

function calculHeures() {
    var dureeS1Resultat = dureeS1();
    var dureeS2Resultat = dureeS2();
    var dureePauseS1S2 = pauseS1S2();
    var dureeS3Resultat = dureeS3();
    var dureePauseS2S3 = pauseS2S3();

    var heuresTotal = dureeS1Resultat.heures + dureeS2Resultat.heures + dureePauseS1S2.heures + dureeS3Resultat.heures + dureePauseS2S3.heures;
    var minutesTotal = dureeS1Resultat.minutes + dureeS2Resultat.minutes + dureePauseS1S2.minutes + dureeS3Resultat.minutes + dureePauseS2S3.minutes;

    heuresTotal += Math.floor(minutesTotal / 60);
    minutesTotal = minutesTotal % 60;

    alert("Total des heures: " + heuresTotal + "h " + minutesTotal + "min");
}

document.addEventListener('DOMContentLoaded', function() {
    var body = document.body;
    var modeIcon = document.getElementById('mode');
    var button = document.getElementById('calculer');

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        updateModeIcon();
        updateButtonStyle();
    }

    function updateModeIcon() {
        var isDarkMode = body.classList.contains('dark-mode');
        var modeIconSrc = isDarkMode ? 'https://cdn.discordapp.com/attachments/1030602548966596700/1173317317086691439/icone-de-soleil-rouge.png?ex=656383e7&is=65510ee7&hm=e807ad17c8559e3198fb82bdd90a2d9d31b773887bf2be0f9980105610f222c6&' : 'https://cdn.discordapp.com/attachments/1030602548966596700/1173317316545622076/symbole-de-la-lune-avec-des-etoiles-rouge.png?ex=656383e7&is=65510ee7&hm=7d12ee46018cb43e570a7f5db5223a04f53cedc8a269cda7890dd242d3573094&';
        modeIcon.src = modeIconSrc;
    }

    function updateButtonStyle() {
        var isDarkMode = body.classList.contains('dark-mode');
        button.classList.toggle('dark-mode-button', isDarkMode);
    }

    modeIcon.addEventListener('click', function() {
        toggleDarkMode();
    });
});