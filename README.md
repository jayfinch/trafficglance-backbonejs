# TrafficGlance

Due to the strict licensing of Bing Maps, this is only available for personal/educational use.

* Quickly see the information you need without all the clutter
* Low barrier to entry:
	* 100% client-side (entirely HTML/Javascript)
	* Just upload it to your server.
* Responsive layout

## Getting Started

### 1. Get an API key from Microsoft

Head over to https://www.bingmapsportal.com and make an account. It's a quick
process and you should easily get a developer key (a string of text about 60
characters long).

Save this for later.

### 2. Create your first route

Visit http://www.bing.com/maps and look up a set of directions. Feel free to add
multiple destinations if you'd like. Most importantly, make sure you click-and-drag
the route so that it follows the path you wish to take.

When you're happy with your route, click the Share button. Then click "Show full URL."
This is important, as your URLs must begin with http://www.bing.com/maps/?v=2

Save this URL for later.

### 3. Create your config file

Rename `config-example.json` as `config.json`.

Paste in your API key from step 1.

Following the existing examples, modify the set of routes and make it your own. All
you need to do is provide a name and the URL from step 2.


### 4. Upload it

Place the contents of `dist` on your web server. The app should work at the root
of your site or within a subfolder.