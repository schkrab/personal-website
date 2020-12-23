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
		
			  
			<div className="row">
				<div className="col-sm my-auto">
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
								<Link href="/files/Igor Schkrab Alves - Resume.pdf" target="_blank"><a>resume</a></Link>&nbsp;|&nbsp;
								<Link href="/contact"><a>contact</a></Link>
							</p>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-sm-12 align-center">
							<h3>What am I up to right now?</h3>
							<br/>
							<hr/>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-6 align-center">
							<h5>Currently I am:</h5>
							<ul>
								<li>Learning how to dad as I just turned a dad in October 13, 2020</li>
								<li>Studying to take the Professional Scrum Master exam</li>
								<li>Losing weight through great food and exercise</li>
								<li>Creating the habit of journaling every single day</li>
								<li>Working on a startup in the Health industry</li>
							</ul>
						</div>
						<div className="col-sm-6 align-center">
							<h5>What I am listening to:</h5>
							
							Music:
							<ul>
								<li>LP</li>
								<li>Milky Chance</li>
								<li>Looking for indie folk kind of songs</li>
							</ul>
							
							Audible:
							<ul>
								<li>The one thing</li>
								<li>Brain rules for baby</li>
								<li>The rise and fall of the Third Reich</li>
								<li>The book thief</li>
							</ul>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-6 align-center">
							<h5>What I'm reading:</h5>
							<ul>
								<li>Scrum Guide (Over and over)</li>
							</ul>
						</div>
						
						<div className="col-sm-6 align-center">
							<h5>What is my one goal for 2021:</h5>
							<ul>
								<li>Get to 76kg</li>
								<li>Gain muscle</li>
							</ul>
						</div>
					</div>										
				</div>
			  </div>
 
  
			
			<style jsx global>{`
				

html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div {
       
      }

body {
	
    background: url(images/background.jpg) no-repeat ;
	
  }
  

			  `}</style>
		</div>
  )
}
