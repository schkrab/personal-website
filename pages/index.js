import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Igor Schkrab</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
			</Head>
		
			  
			<div className="row h-100">
				<div className="col-sm-4 my-auto">
				</div>
				<div className="col-sm-4 my-auto">
					<div className="row">
						<div className="col-sm-12 align-center">
							<strong><h1>Igor Schkrab Alves</h1></strong>
						</div>
					</div>
					<br/>
					
					<div className="row">
						<div className="col-sm-12 my-auto">
							<p>
								<Link href="/now"><a>now</a></Link>&nbsp;|&nbsp;
								<Link href="/about_me"><a>about</a></Link>&nbsp;|&nbsp;
								<a href="https://medium.com/@igorsalves87" target="_blank">medium</a>&nbsp;|&nbsp;
								<a href="https://github.com/schkrab" target="_blank">github</a>&nbsp;|&nbsp;
								<a href="https://www.linkedin.com/in/igorsalves87/" target="_blank">linkedin</a>&nbsp;|&nbsp;
								<Link href="/files/Igor Schkrab Alves - Resume.pdf"><a target="_blank">resume</a></Link>&nbsp;|&nbsp;
								<Link href="/contact"><a>contact</a></Link>
							</p>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-sm-12 align-center">
							<p>That's me! <strong>I hope you like it. ;)</strong></p>
						</div>
					</div>
					
										
				</div>
				<div className="col-sm-4 my-auto">
				</div>
			  </div>
 
  
			
			<style jsx global>{`
				

html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div {
        height: 100%;
      }

body {
	
    background: url(images/background.jpg) no-repeat ;
	
  }
  

			  `}</style>
		</div>
  )
}
