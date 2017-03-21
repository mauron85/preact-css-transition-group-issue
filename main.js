const React = preactCompat;
const ReactDOM = preactCompat;
const ReactCSSTransitionGroup = PreactCSSTransitionGroup;

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
      <ReactCSSTransitionGroup
        component="div"
        transitionName={pageNr % 2 ? 'page' : 'pagereverse'}
        transitionEnterTimeout={250}
        transitionLeaveTimeout={250}
      >
      	<Page key={pageNr} type={type}>{pageNr}</Page>
      </ReactCSSTransitionGroup>
    ,document.getElementById('example')
   );
}

function onHashChange() {
  const hash = window.location.hash;
  console.log('hash has changed', hash);
  let pageNr = 1;
  if (!hash.indexOf('#/page')) {
  	pageNr = Number(hash.substr('#/page'.length)) || 1;
		pageNr = (pageNr === 1) ? 2 : 1
  }  
  renderPage(pageNr);
}

renderPage(1);
window.addEventListener('hashchange', onHashChange, false);

