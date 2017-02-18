# engineering-activism/www-dev #

This is the source code for the Engineering Acivism website.

If you want to change the website, do it in this repository not the actual
github pages repository. This allows us to have version control and collaboration
on the development of the site separate from it's deployment. Feel free to change anything in www.

*N.B. This is a public repository even though only www gets deployed to our "website"*

## Deploy new version ##
When you are satisfied with the next version of the site, commit it in this repo
and then run 
```
./deploy
```
which will copy www into the deployment repo and push it to github pages.

This is designed to fail if you don't have a clean repo.

## Add materials ##
There is a little javascript which creates the list of materials based on what is in the `materials`
directory. Specifically it pulls the list from `materials/materials.json.` So if you want to add
a presentation or something like that, put the file somewhere (like `materials`) and then
add an entry to the list in `materials/materials.json`.

Allowed fields:

    - title (descriptive title)
    - link (url to download)
    - thumbnail (url to 80x80 thumbnail)
    - notes (text description of material)

## Work on Javascript / React ##
There is fairly minimal javascript but it is present. (Would be easy to replace if need be)

The source JS files are in `src` while the deployable file is in `www/js`
That means if you want to change the javascript, don't change the files in
`www/js` instead change the files in `src` and then use webpack to generate
the files in `www/js`. To do that follow these instructions.

To work on the javascript install node and npm, maybe like
```
brew install node
```

Then install the dev dependencies
```
cd path_to_this_repo
npm install
```

Then to start an local dev server which watches the src js files and webpacks them
```
npm run dev
```

To generate a deployable JS file before `./deploy`
```
npm run build
```

If you aren't changing the files in `src` then you don't need to worry about this
stuff and can just carry on ignoring it.

## External Domain ##

Github pages supports this if we get our own domain. We just need to set the CNAME file
to point to the github pages ips and register the domain on github.

