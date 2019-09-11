import React from 'react';

function NotFound() {
  return (
    <div class="main relative full-screen bg-img bg-cover overlay bg-color heavy" data-background="images/banner/bg-04.jpg"  data-stellar-background-ratio="0.5">
	
	    <div class="page-default typo-dark">
	
		<div className="container">
		
			<div className="row">
				<div className="col-md-offset-2 col-md-8">
					<ul className="template-box box-404 parent-has-overlay">
						
						<li className="logo-wrap">
							<a href="index.html" className="logo">
								<img width="211" height="40" alt="Universh Education HTML5 Website Template" class="img-responsive" src="images/default/logo.png" />
								<p className="slogan">404 - Page not found</p>
							</a>
						</li>
						
						<li className="template-content text-center">
							<h1>Oops,</h1>
							<p>We Can't find the page you're looking for. But Don't Worry. Here are a couple of helpful links</p>
							<a href="index.html" className="btn">Back to home</a>
							<a href="page-sitemap.html" className="btn">View Sitemap</a>
						</li>
					</ul>
				</div>
			</div>
		</div>	
	</div>
</div>
  );
}

export default NotFound;