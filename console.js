function countNamedSpans() {
  const namedSpans = document.querySelectorAll('span[itemprop="name"]');
  const namedSpansCount = namedSpans.length;
  alert(`Sayfadaki entry sayısı: ${namedSpansCount}`);
}

let isPageEndReached = false;

function checkIfPageEndReached() {
  if (isPageEndReached) {
    return;
  }
  
  const loadMoreButton = document.querySelector('.load-more-entries');
  if (loadMoreButton && !loadMoreButton.classList.contains('hidden')) {
    loadMoreButton.click();
  } else {
    isPageEndReached = true;
    countNamedSpans();
  }
}

setInterval(checkIfPageEndReached, 250);
