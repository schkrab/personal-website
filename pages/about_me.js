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
							<h3>About me</h3>
							<br/>
							<hr/>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-8 align-center">
							<h5>My Mission Statements:</h5>
								<p>
									<strong>Professionaly</strong> I want to be as productive as possible. Learn and understand concepts to do my daily activities in the best way possible. Being always honest in providing feedback for improvement so I can have a great environment in a friendly team with a great culture where teamworkers respect and help each other in order to achieve the company's goals.
								</p> 
								<p>
									<strong>Personally</strong> I want to live a happy life with my lovely wife, daugther, dog, family and friends. Being as close to the nature as possible. During the summer enjoy family time camping, finding new lakes, hiking, going for stand up paddle. During the winter I want to learn new skills that I've always wanted to like drawing cartoons, photography, playing guitar...
								</p>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-12 align-center">
							<h5>Philosophies I try to live by:</h5>
							<p>
								Motivation is what get you started. Habit is what keeps you going.
								<br/>
								There is no multitasking. Pursue one main goal at a time and give all you got to achieve it.
								<br/>
								Journal so you know what you did yesterday and what you gotta do tomorrow.
								<br/>
								Learn and read everything you can.
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
