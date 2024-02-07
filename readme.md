VoteSystem
	Overview
	VoteSystem is a real-time voting service built with JavaScript, TypeScript, Node.js, Docker, Prisma, Redis, HTML, and CSS. It allows users to cast votes and updates votes in real-time.

Installation
	Prerequisites
	Node.js (v17 or higher)
	Docker
	Redis
	Steps
	Clone the repository:

bash
	Copy code
	git clone https://github.com/denisoliveiraa/VoteSystems.git
	cd VoteSystem
	Install dependencies:

bash
	Copy code
	npm install
	Set up Docker containers:

bash
	Copy code
	docker-compose up -d
	Run database migrations:

bash
	Copy code
	npx prisma migrate dev
	Start the server:

bash
	Copy code
	npm run start
	Access the application:

Open your browser and go to http://localhost:3333

Usage
	Visit the application in your browser.
	Cast votes in real-time.
	Explore the dynamic updating of votes.
	Contributing
	Feel free to contribute by opening an issue or submitting a pull request.
