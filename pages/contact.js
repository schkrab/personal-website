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
								<Link href="/files/Igor Schkrab Alves - Resume.pdf"><a target="_blank">resume</a></Link>&nbsp;|&nbsp;
								<Link href="/contact"><a>contact</a></Link>
							</p>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-sm-12 align-center">
							<h3>Contact me at igorsalves87@gmail.com</h3>
							<br/>
							<hr/>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-8 align-center">
							<p>
								Meeting new people is always great. So if you would like to grab a cup of coffee somewhere (or during this pandemic times a videoconference) shoot me an e-mail.
								I don't have Instagram or Facebook as I feel they don't provide me any value and I'm happy with the amount of privacy I have since I left those social medias, but I still really enjoy meeting new people, talking, playing boardgames and having a great time during a conversation.
							</p> 
							
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
