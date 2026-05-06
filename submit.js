{
  "version": 2,
  "buildCommand": "echo 'No build needed'",
  "outputDirectory": "public",
  "functions": {
    "api/submit.js": {
      "runtime": "nodejs20.x"
    }
  },
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
