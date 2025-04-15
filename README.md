## Template for Next.js apps

This is a template for Next.js apps. It comes with:

- Turbopack
- Tailwind CSS
- PostCSS
- MongoDB
- NextAuth (only Email/Password, NOT Google, Github etc.)
- React Hot Toast

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/brodrigues0ll/myappps-template.git
```

Second, enter the project directory:

```bash
cd myappps-template
```

Install the dependencies:

```bash
npm install
# or
yarn
```

Then, edit the .env.example file and rename it to .env:

PS: Can be more secure to use a .env file with your own credentials.

```bash
cp .env.example .env
```

Now, run the database:

```bash
docker-compose up -d
```

Then, seed the admin user:

```bash
npm run admUser
# or
yarn admUser
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
