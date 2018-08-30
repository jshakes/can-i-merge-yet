const currentUser = document.querySelector('.user-profile-link strong').textContent;
const myPrEls = document.querySelectorAll(`[title="Open pull requests created by ${currentUser}"]`);

for (let i = 0; i < myPrEls.length; i++) {
	const el = myPrEls[i];
	const parentLi = el.closest('li.js-issue-row');
	parentLi.classList.add('cim__pr');
	const reviewEl = parentLi.querySelector('[aria-label~="review"]');

	if (!reviewEl) {
		parentLi.classList.add('cim__pr--pending');		
		continue;
	}

	const reviewStatusText = reviewEl.textContent.trim();

	if (reviewStatusText === 'Approved') {
		parentLi.classList.add('cim__pr--approved');
	}
	else if (reviewStatusText === 'Changes requested') {
		parentLi.classList.add('cim__pr--denied');	
	}
}
