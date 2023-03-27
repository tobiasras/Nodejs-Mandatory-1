# Serverside- vs clientside rendering
When creating a web app, there are two main approaches to sending webpages to the user: server-side and client-side rendering.


## Serverside
1. Better SEO
2. Faster load times

### Better seo:
When google is indexing the pages on the www, it uses a webcrawler, that goes throug a webpage and finds links to other pages. when using a clientside rendering, the webcrawler does not have acess to some links because the page has not been loaded. this is not a problem on server side rendering beacuse the content is all accesable from the start.

#### Faster load times:
With serverside rendering you can create all html document from at the start of the backend's runtime. this will improve page load because the pages are already loaded when the page request is send.

## Clientside
Clientside rendering is when the content of the page is being renderd in the browser. This is usally done with javascript. The benefits of clientside rendering is that it is easier to create more dynamic pages, beacuse you load html while the user is using the page benefits of client side rendering:

1. Easier to create better user experience
2. Faster page transitions
3. More dynamic content

## What to choose?
Both clientside and serverside rendering are good choices for creating web applications. it all deponds on the usecase. If you want dynamic content and fast page transitions clientside rendering is the best choice. But if u want good SEO performace and fast load times serverside rendering is the best option. 

