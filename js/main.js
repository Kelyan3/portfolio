document.addEventListener("DOMContentLoaded", () => {
	const menuButtons = document.querySelectorAll(".menu-btn[data-target]");
	const tabContents = document.querySelectorAll(".tab-content");
	const windowTitle = document.getElementById("window-title");
	const closeButton = document.getElementById("close-btn");

	function switchTab(targetId, buttonElement)
	{
		menuButtons.forEach(button => button.classList.remove("active"));
		buttonElement.classList.add("active");

		if (windowTitle)
			windowTitle.textContent = buttonElement.textContent.toUpperCase();

		tabContents.forEach(content => {
			if (content.id === targetId)
				content.classList.add("active");
			else
				content.classList.remove("active");
		});
	}

	menuButtons.forEach(button => {
		button.addEventListener("click", () => {
			const target = button.getAttribute("data-target");
			if (target)
				switchTab(target, button);
		});
	});

	if (closeButton)
	{
		closeButton.addEventListener("click", () => {
			const firstTab = menuButtons[0];
			const target = firstTab.getAttribute("data-target");
			if (target)
				switchTab(target, firstTab);
		});
	}

	const quitLink = document.getElementById("quit-link");
	const quitModal = document.getElementById("quit-modal");
	const buttonQuitYes = document.getElementById("btn-quit-yes");
	const buttonQuitNo = document.getElementById("btn-quit-no");

	if (quitLink && quitModal && buttonQuitYes && buttonQuitNo)
	{
		quitLink.addEventListener("click", (event) => {
			event.preventDefault();
			quitModal.classList.remove("hidden");
		});

		buttonQuitNo.addEventListener("click", () => {
			quitModal.classList.add("hidden");
		});

		buttonQuitYes.addEventListener("click", () => {
			window.location.href = quitLink.getAttribute("href");
		});
	}
});