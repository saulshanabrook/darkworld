# DARKWORLD

## Local Development

```bash
npm install
./node_modules/.bin/webpack  --watch
```

```bash
cd docs
docker run --rm -v $(pwd):/srv/jekyll -p 4000:4000 jekyll/jekyll 
open http://localhost:4000
```


Only change HTML/styles in `./app/`  this generates `./docs` using webpack.



To change icons, generate a new fontello package at fontello.com containing all the icons used in the website. Update the name of the link in config.yml to match the name of the icon. If the icon is named "icon-youtube" then in config.yml the line in the links section should look like this:
```
youtube: https://www.youtube.com/
```
The old fontello files can then be switched out for the new ones. 
