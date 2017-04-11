const { CSSTransitionGroup } = ReactTransitionGroup;

const Page = ({ children: pageNr, type }) => {
	return (
  	<div className={`page page--${type}`}>
      <div className="page--footer">
      	<a href={`#/page${pageNr}`} className="link">Go to page {pageNr}</a>
       </div>
    </div>
  );
}

function renderPage(pageNr) {
  const type = pageNr % 2 ? 'odd' : 'even';
	ReactDOM.render(
      <CSSTransitionGroup
        component="div"
        transitionName={pageNr % 2 ? 'page' : 'pagereverse'}
        transitionEnterTimeout={250}
        transitionLeaveTimeout={250}
      >
      	<Page key={pageNr} type={type}>{pageNr}</Page>
      </CSSTransitionGroup>
    ,document.getElementById('example')
   );
}

function getNextPageNumber() {
	const hash = window.location.hash;
  let pageNr = 1;
  if (!hash.indexOf('#/page')) {
  	pageNr = Number(hash.substr('#/page'.length)) || 1;
		pageNr = (pageNr === 1) ? 2 : 1
  }  
	return pageNr;	
}

function onHashChange() {
  renderPage(getNextPageNumber());
}

renderPage(getNextPageNumber());
window.addEventListener('hashchange', onHashChange, false);

