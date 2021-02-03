var element = document.getElementByID('random');
  var files = ['aero10.exe','aero81.exe','animatoranimation.exe','avast.exe','chuzzle.exe','collabvmdlcli.exe','compossor.exe','desktopgoose.exe','edge7.exe','edge81.exe','flashprojector.exe','license.avastlic','linuxcursors.zip','melting.exe','newlogonui.zip','paint.7z','processrapist.exe','sevenmizer.exe','shoppingcarthero.exe','unetbootin.exe','vista.exe','windoors.swf','winrg.exe','wubi.exe'];
  var index = Math.floor(Math.random() * files.length);
  element =  element.setAttribute("href",files[index]);