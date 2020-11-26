# Useful links

`http://chatwithme.io/angularjs%20upgrade/web%20components/angular%20elements/angular/angularjs/ngupgrade/2019/04/25/shipping-an-angular-application-as-a-web-component.html`

`https://htmldom.dev/load-a-javascript-file-dynamically/`

`https://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript`

<h1>How to do it?</h1>
<span>This angular app is modified a little to produce "web component".</span><br/>

<span>You can run this app using <code>ng serve</code> and develop as a normal angular app. (Routing, module ... are all available)</span> <br/>

<h1>Build and deploy</h1>
<code>npm run build:angular-elements</code> <br/>
<span>This will build app as production into dist folder and then combine js files into single file as described in <code>build-angular-elements.js</code> file</span><br/>
<span>In the generated <code>ngelement-build</code> folder, you can find a js file and a css file.</span><br/>
<span>Deploy it into any static file cloud service. I have deployed into my firebase storage.</span>

<h1>static index.html</h1>
<span>It's not a part of angular app. It's a native js/html/css static page. It loads js and css from the cloud and inject the web component built above.</span>
