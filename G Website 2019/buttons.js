
HomeUpImage = new Image();			HomeUpImage.src = "Home button.bmp";
HomeDownImage = new Image();		HomeDownImage.src = "Home button depressed.bmp"
HomeRolloverImage = new Image();	HomeRolloverImage.src = "Home button rollover.bmp";

PortUpImage = new Image();			PortUpImage.src = "Portfolio button.bmp";
PortDownImage = new Image();		PortDownImage.src = "Portfolio button depressed.bmp"
PortRolloverImage = new Image();	PortRolloverImage.src = "Portfolio button rollover.bmp";

CVUpImage = new Image();		CVUpImage.src = "CV button.bmp";
CVDownImage = new Image();		CVDownImage.src = "CV button depressed.bmp"
CVRolloverImage = new Image();	CVRolloverImage.src = "CV button rollover.bmp";


function HomeChangeImage()
{
  document.images["homeJSButton"].src = HomeUpImage.src;
  return true;
}
function HomeChangeImageBack() 
{
   document.images["homeJSButton"].src = HomeRolloverImage.src;
   return true;
}
function HomeHandleMDown()
{
	document.images["homeJSButton"].src = HomeDownImage.src;
	return true;
}
function HomeHandleMUp()
{
	HomeChangeImage();
	return true;
}

function PortChangeImage()
{
  document.images["portJSButton"].src = PortUpImage.src;
  return true;
}
function PortChangeImageBack() 
{
   document.images["portJSButton"].src = PortRolloverImage.src;
   return true;
}
function PortHandleMDown()
{
	document.images["portJSButton"].src = PortDownImage.src;
	return true;
}
function PortHandleMUp()
{
	PortChangeImage();
	return true;
}

function CVChangeImage()
{
  document.images["cvJSButton"].src = CVUpImage.src;
  return true;
}
function CVChangeImageBack() 
{
   document.images["cvJSButton"].src = CVRolloverImage.src;
   return true;
}
function CVHandleMDown()
{
	document.images["cvJSButton"].src = CVDownImage.src;
	return true;
}
function CVHandleMUp()
{
	CVChangeImage();
	return true;
}

