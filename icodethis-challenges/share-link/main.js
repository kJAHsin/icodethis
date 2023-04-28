const copyLink = document.getElementById("copyLink");
const copyText = document.getElementById("copyText");

copyLink.addEventListener("click", () => {
	navigator.clipboard.writeText(copyText.innerText);
	alert(`${copyText.innerText} copied to clipboard`);
});
